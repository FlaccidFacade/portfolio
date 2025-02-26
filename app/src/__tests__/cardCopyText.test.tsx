import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import CardCopyText from '../components/CardCopyText';

describe('CardCopyText Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Mock the clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  test('renders the input with the provided text and is disabled', () => {
    const sampleText = 'npm install some-package';
    const { getByDisplayValue } = render(<CardCopyText text={sampleText} />);
    const input = getByDisplayValue(sampleText) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.disabled).toBe(true);
  });

  test('copies text and toggles messages', async () => {
    const sampleText = 'npm install some-package';
    const { container } = render(<CardCopyText text={sampleText} />);
    const button = container.querySelector('button') as HTMLButtonElement;
    const defaultMessage = container.querySelector(
      '#default-message'
    ) as HTMLElement;
    const successMessage = container.querySelector(
      '#success-message'
    ) as HTMLElement;
    const input = container.querySelector(
      '#npm-install-copy-text'
    ) as HTMLInputElement;

    // Verify initial state of messages
    expect(defaultMessage.classList.contains('hidden')).toBe(false);
    expect(successMessage.classList.contains('hidden')).toBe(true);

    // Click the button to trigger the copy action
    await act(async () => {
      fireEvent.click(button);
    });

    // Verify clipboard.writeText is called with the correct value
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(input.value);

    // After copying, defaultMessage should be hidden and successMessage visible
    expect(defaultMessage.classList.contains('hidden')).toBe(true);
    expect(successMessage.classList.contains('hidden')).toBe(false);

    // Fast-forward time by 2000ms to trigger the setTimeout callback
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // After timeout, the messages should toggle back: default visible, success hidden
    expect(defaultMessage.classList.contains('hidden')).toBe(false);
    expect(successMessage.classList.contains('hidden')).toBe(true);
  });
});

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Confetti from '../components/Confetti';
import confetti from 'canvas-confetti';

// Mock the canvas-confetti module
jest.mock('canvas-confetti');

describe('Confetti Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  test('renders children correctly', () => {
    const { getByText } = render(
      <Confetti>
        <div>Test Child</div>
      </Confetti>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  test('fires confetti on mouse enter when ready', () => {
    const { container, queryByText, getByText } = render(
      <Confetti>
        <div>Test Child</div>
      </Confetti>
    );
    const outerDiv = container.firstChild as HTMLElement;

    // Define getBoundingClientRect so that confetti has dimensions to work with
    Object.defineProperty(outerDiv, 'getBoundingClientRect', {
      value: () => ({
        left: 100,
        top: 100,
        width: 200,
        height: 200,
        right: 300,
        bottom: 300,
      }),
    });

    // Trigger the mouse enter event to fire confetti
    act(() => {
      fireEvent.mouseEnter(outerDiv);
    });

    // Verify that confetti is called once
    expect(confetti).toHaveBeenCalledTimes(1);

    // During the cooldown, the "Ready" message should not be visible
    expect(queryByText('🎉Ready to Fire🎉')).toBeNull();

    // Fast-forward timer by 10 seconds to complete the cooldown
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    // Now the ready message should appear again
    expect(getByText('🎉Ready to Fire🎉')).toBeInTheDocument();
  });

  test('does not fire confetti if not ready (during cooldown)', () => {
    const { container } = render(
      <Confetti>
        <div>Test Child</div>
      </Confetti>
    );
    const outerDiv = container.firstChild as HTMLElement;

    Object.defineProperty(outerDiv, 'getBoundingClientRect', {
      value: () => ({
        left: 100,
        top: 100,
        width: 200,
        height: 200,
        right: 300,
        bottom: 300,
      }),
    });

    // First mouse enter fires confetti and starts the cooldown
    act(() => {
      fireEvent.mouseEnter(outerDiv);
    });
    expect(confetti).toHaveBeenCalledTimes(1);

    // Trigger another mouse enter during the cooldown period
    act(() => {
      fireEvent.mouseEnter(outerDiv);
    });
    // The confetti function should not be called again while in cooldown
    expect(confetti).toHaveBeenCalledTimes(1);
  });
});

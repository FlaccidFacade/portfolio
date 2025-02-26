import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders navigation links, images, and tooltip hidden initially', () => {
    const { getByText, getByTestId, getByRole } = render(<Header />);

    // Verify the navigation texts are present
    expect(getByText(/Zachary Turner/i)).toBeInTheDocument();
    expect(getByText(/LinkedIn/i)).toBeInTheDocument();
    // Use an exact match to avoid multiple matches
    expect(getByText(/^GitHub$/)).toBeInTheDocument();
    expect(getByText(/Source/i)).toBeInTheDocument();
    expect(getByText(/Album/i)).toBeInTheDocument();
    expect(getByText(/About Me/i)).toBeInTheDocument();

    // Verify that the images (using their test IDs) are rendered
    expect(getByTestId('imageLinkedInLogo')).toBeInTheDocument();
    expect(getByTestId('imageGithubLogo')).toBeInTheDocument();

    // The tooltip element should be present, but hidden initially
    const tooltip = getByRole('tooltip');
    expect(tooltip).toHaveClass('invisible');
    expect(tooltip).toHaveClass('opacity-0');
  });

  test('toggles tooltip visibility on mouse enter and leave', () => {
    const { container, getByRole } = render(<Header />);

    const tooltip = getByRole('tooltip');
    const trigger = container.querySelector(
      "[data-tooltip-target='tooltip-default']"
    );
    expect(trigger).toBeInTheDocument();

    // Simulate mouse enter: tooltip should become visible
    fireEvent.mouseEnter(trigger!);
    expect(tooltip).not.toHaveClass('invisible');
    expect(tooltip).not.toHaveClass('opacity-0');

    // Simulate mouse leave: tooltip should revert to hidden
    fireEvent.mouseLeave(trigger!);
    expect(tooltip).toHaveClass('invisible');
    expect(tooltip).toHaveClass('opacity-0');
  });
});

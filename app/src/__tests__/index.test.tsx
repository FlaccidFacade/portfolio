import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Index from '../pages';

describe('Index Component', () => {
  it('renders nothing', () => {
    render(<Index />);
    const div = screen.getByPlaceholderText('This should never show');
    expect(div).toBeInTheDocument();
  });
});

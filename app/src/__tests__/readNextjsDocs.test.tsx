import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ReadNextjsDocs from '../components/ReadNextjsDocs';

describe('ReadNextjsDocs Component', () => {
  beforeEach(() => {
    render(<ReadNextjsDocs />);
  });

  it('renders the div with the correct id and class', () => {
    const divElement = screen.getByTestId('divReadNextjsDocs');
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(
      'flex flex-col gap-2 row-start-2 items-center items-start'
    );
  });

  it('renders the label with the correct id and text', () => {
    const labelElement = screen.getByTestId('labelReadNextjsDocs');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('Created with:');
  });

  it('renders the Image component with the correct attributes', () => {
    const imageElement = screen.getByAltText('Next.js');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/next.svg');
    expect(imageElement).toHaveAttribute('alt', 'Next.js');
    expect(imageElement).toHaveAttribute('width', '180');
    expect(imageElement).toHaveAttribute('height', '38');
  });
});

import { render, screen } from '@testing-library/react';
import AboutMe from '../pages/aboutMe';

describe('AboutMe Component', () => {
  it('renders the component correctly', () => {
    render(<AboutMe />);

    expect(
      screen.getByText('Development Engineer III @ Genesco Inc.')
    ).toBeInTheDocument();
    expect(screen.getByText('Hobbies')).toBeInTheDocument();
    expect(screen.getByText('Clone This Project')).toBeInTheDocument();
    expect(screen.getByText('Continuous Learning')).toBeInTheDocument();
    expect(screen.getByText('Syntax Soup')).toBeInTheDocument();
  });
});

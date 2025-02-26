import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/layout';
import { ReactNode } from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
// Import the font configurations to access the expected CSS variable values.
import { geistSans, geistMono } from '../components/layout';

// Mock next/head to render its children properly
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

const MockComponent = ({ children }: { children?: ReactNode }) => (
  <GeistProvider>
    <CssBaseline />
    <Layout>{children}</Layout>
  </GeistProvider>
);

describe('Layout', () => {
  it('renders the document title in Head', async () => {
    render(<MockComponent />);
    await waitFor(() => {
      expect(document.title).toBe('FlaccidFacade');
    });
  });

  it('renders meta description correctly', async () => {
    render(<MockComponent />);
    await waitFor(() => {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );

      expect(metaDescription).toHaveAttribute(
        'content',
        'A Next.js app with custom document and layout'
      );
    });
  });

  it('renders the layout structure with required styles', () => {
    render(<MockComponent />);
    const layout = screen.getByTestId('layoutStructure');
    expect(layout).toBeInTheDocument();
    // Check that the layout's className includes the custom font variables.
    expect(layout.className).toContain(geistSans.variable);
    expect(layout.className).toContain(geistMono.variable);
    // Also verify other expected classes.
    expect(layout).toHaveClass('antialiased');
  });

  it('renders the Header component', () => {
    render(<MockComponent />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders children content inside main', () => {
    render(
      <MockComponent>
        <div data-testid="child">Test Content</div>
      </MockComponent>
    );
    const main = screen.getByTestId('layoutMain');
    expect(main).toContainElement(screen.getByTestId('child'));
  });

  it('renders layout correctly with no children', () => {
    render(<MockComponent />);
    expect(screen.getByTestId('layoutMain')).toBeEmptyDOMElement();
  });
});

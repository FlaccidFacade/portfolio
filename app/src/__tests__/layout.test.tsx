import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/layout';
import { ReactNode } from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

const MockComponent = ({ children }: { children: ReactNode }) => (
  <GeistProvider>
    <CssBaseline />
    <Layout>{children}</Layout>
  </GeistProvider>
);

describe('Layout', () => {
  it('renders the navigation links', () => {
    render(
      <MockComponent>
        <div />
      </MockComponent>
    );

    expect(screen.getByText('FlaccidFacade')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <MockComponent>
        <div>Test Content</div>
      </MockComponent>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});

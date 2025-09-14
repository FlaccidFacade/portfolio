import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ExternalLink from '../components/ExternalLink';
import { AnchorProvider } from '../components/AnchorContext';

// Mock console.error to throw an error
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((message) => {
    throw new Error(message);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('ExternalLink Component', () => {
  it('renders the link with text content', () => {
    const link = 'https://example.com';
    const text = 'Visit Example';
    const id = 'google-link';
    render(
      <ExternalLink id={id} link={link}>
        {text}
      </ExternalLink>
    );

    const anchorElement = screen.getByText(text);
    expect(anchorElement).toBeInTheDocument();
    const linkElement = screen.getByTestId('google-link');

    expect(linkElement).toHaveAttribute('href', link);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the link with an HTML node as content', () => {
    const link = 'https://google.com';
    const htmlNode = <strong data-testid="strong-node">Visit Google</strong>;
    const id = 'google-link';

    render(
      <ExternalLink id={id} link={link}>
        {htmlNode}
      </ExternalLink>
    );

    const childElementText = screen.getByText('Visit Google');
    expect(childElementText).toBeInTheDocument();
    const childElement = screen.getByTestId('strong-node');
    expect(childElement).toBeInTheDocument();
    const linkElement = screen.getByTestId('google-link');

    expect(linkElement).toHaveAttribute('href', link);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the link with another React component as content', () => {
    const link = 'https://github.com';
    const reactNode = <span style={{ color: 'blue' }}>Visit GitHub</span>;
    const id = 'github-link';
    render(
      <ExternalLink id={id} link={link}>
        {reactNode}
      </ExternalLink>
    );

    const anchorElement = screen.getByText('Visit GitHub');
    expect(anchorElement).toBeInTheDocument();

    const linkElement = screen.getByTestId('github-link');
    expect(linkElement).toHaveAttribute('href', link);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the link with various HTML elements as children', () => {
    const link = 'https://example.com';
    const elements = [
      <div key="div">Div Element</div>,
      <p key="p">Paragraph Element</p>,
      <span key="span">Span Element</span>,
      <strong key="strong">Strong Element</strong>,
      <em key="em">Emphasized Element</em>,
      <ul key="ul">
        <li>List Item</li>
      </ul>,
      <ol key="ol">
        <li>Ordered List Item</li>
      </ol>,
      <img
        key="img"
        src="https://via.placeholder.com/150"
        alt="Placeholder Image"
      />,
      <button key="button">Button Element</button>,
      <input key="input" type="text" value="Input Element" readOnly />,
      <a key="a" href="https://another-link.com">
        Nested Link
      </a>,
      <a key="aNoHref">Nested a</a>,
      <label key="label">Label Element</label>,
    ];

    elements.forEach((element, index) => {
      render(
        <ExternalLink id={`test-link-${index}`} link={link}>
          {element}
        </ExternalLink>
      );
      const anchorElement = screen.getByTestId(`test-link-${index}`);
      expect(anchorElement).toBeInTheDocument();
      if (element.type === 'a') {
        expect(anchorElement.tagName).toBe('SPAN');
      } else {
        expect(anchorElement).toHaveAttribute('href', link);
        expect(anchorElement).toHaveAttribute('target', '_blank');
        expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  it('opens the link in a new tab when span is clicked', () => {
    const link = 'https://example.com';
    const nestedLink = <a href="https://another-link.com">Nested Link</a>;

    window.open = jest.fn();

    render(
      <ExternalLink id="test-link-nested" link={link}>
        {nestedLink}
      </ExternalLink>
    );

    const spanElement = screen.getByTestId('test-link-nested');
    fireEvent.click(spanElement);

    expect(window.open).toHaveBeenCalledWith(
      link,
      '_blank',
      'noopener,noreferrer'
    );
  });
  it('wraps children in a span if they contain an anchor element', () => {
    const link = 'https://example.com';
    const nestedLink = <a href="https://another-link.com">Nested Link</a>;

    render(
      <ExternalLink id="test-link-nested" link={link}>
        {nestedLink}
      </ExternalLink>
    );

    const spanElement = screen.getByTestId('test-link-nested');
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.tagName).toBe('SPAN');

    const nestedAnchorElement = screen.getByText('Nested Link');
    expect(nestedAnchorElement).toBeInTheDocument();
    expect(nestedAnchorElement).toHaveAttribute(
      'href',
      'https://another-link.com'
    );
  });

  it('fails when wrapped inside an anchor tag', () => {
    expect(() => {
      render(
        <AnchorProvider>
          <ExternalLink id="test-link-nested" link="https://example.com">
            Nested Link
          </ExternalLink>
        </AnchorProvider>
      );
    }).toThrow('ExternalLink cannot be used inside an anchor tag');
  });
});

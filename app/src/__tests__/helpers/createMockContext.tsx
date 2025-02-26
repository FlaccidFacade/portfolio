export const createMockContext = () => ({
  renderPage: jest.fn().mockImplementation(() => ({
    html: '<div>App Rendered</div>',
    head: (
      <head>
        <title>App Title</title>
      </head>
    ),
  })),
  asPath: '/',
  res: {
    writeHead: jest.fn(),
    end: jest.fn(),
  },
  defaultGetInitialProps: jest.fn(), // Ensure this is added
});

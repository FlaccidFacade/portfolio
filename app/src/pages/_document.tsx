import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* Insert meta tags, link tags, or other elements here */}</Head>
        <body>
          <Main /> {/* Where Next.js will inject the app */}
          <NextScript /> {/* Script tags needed by Next.js */}
        </body>
      </Html>
    );
  }
}

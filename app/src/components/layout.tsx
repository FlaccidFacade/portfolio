import { ReactNode } from 'react';

import React from 'react';
import Head from 'next/head';

import localFont from 'next/font/local';
import Header from './Header';

export const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
export const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
export default function RootLayout({
  children,
}: Readonly<{
  readonly children: ReactNode;
}>) {
  return (
    <>
      {/* You can modify <Head> here to add meta tags or other page-specific settings */}
      <Head>
        <title>FlaccidFacade</title>
        <meta
          data-testid="metaDescription"
          name="description"
          content="A Next.js app with custom document and layout"
        />
        {/* <meta data-testid="metaViewPort" name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>
      {/* Layout Structure */}
      <div
        data-testid="layoutStructure"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main data-testid="layoutMain">
          {/* This is where the page-specific content will go */}
          {children}
        </main>
      </div>
    </>
  );
}

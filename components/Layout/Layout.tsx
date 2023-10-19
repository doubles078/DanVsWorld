import React from 'react';
import Head from 'next/head';

import Link from 'next/link';
import { Navbar } from '../';
import { Intro } from './sections';
import classNames from 'classnames';

type LayoutProps = {
  children: React.ReactChild | React.ReactChild[];
  home?: boolean;
  className?: string;
};

const name = 'Dan Donohue';
const siteTitle = 'DanVsWorld - An all purpose blog';

export const Layout = ({
  children,
  home,
  className,
}: LayoutProps) => {
  const layoutClassnames = classNames({
    Layout: true,
    Home: home,
  });

  return (
    <div className={`${layoutClassnames} ${className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dan Donohue's personal blog - software dev, Brazilian Jiu-Jitsu, cooking, and book reviews."
        />
        <meta name="og:title" content={`${siteTitle}`} />
      </Head>
      <header>
        <Navbar />
        {home && <Intro />}
      </header>
      <main>{children}</main>

      <footer>
        {!home && (
          <div>
            <Link href="/">← Back to home</Link>
          </div>
        )}
        <p>A personal blog 📕</p>
      </footer>
    </div>
  );
};

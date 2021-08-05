import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../lib/googleanalytics';

// Global styles
import '../styles/Global.scss';

// Component styles
import '../components/DarkToggle/DarkToggle.scss';
import '../components/Layout/Layout.scss';
import '../components/Layout/sections/Intro.scss';
import '../components/Logo/Logo.scss';
import '../components/Navbar/Navbar.scss';
import '../components/AuthorCard/AuthorCard.scss';
import '../components/PostList/PostList.scss';

// Page styles
import '../pages/posts/Post.scss';

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views. Found this code here:
    // https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;

import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from '../src/next-seo.config';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../src/styles/globals.css';
import { useAnalytics } from '../src/lib/analytics';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

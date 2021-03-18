import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@lib/analytics';
import SEO from '@lib/next-seo.config';
import '@styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  useAnalytics();
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

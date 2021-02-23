import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useAnalytics } from '../lib/analytics';

export default function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();
  return <Component {...pageProps} />;
}

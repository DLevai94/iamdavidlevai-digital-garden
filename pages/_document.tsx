import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffec96" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
          <meta content="XBwOKMLFsRFoI_MSv2qYTvhABYeCCtxpJnyxydpRoOM" name="google-site-verification" />
        </Head>
        <body className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

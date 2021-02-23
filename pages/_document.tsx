import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
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

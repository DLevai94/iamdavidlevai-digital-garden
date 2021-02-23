import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Footer from './footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'David Levai - Building apps & businesses',
    description: `Developer & Content creator`,
    image: 'https://davidlevai.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://davidlevai.com${router.asPath}`} />
        <link rel="canonical" href={`https://davidlevai.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="David Levai" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamdavidlevai" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="flex flex-col flex-wrap items-center px-8 py-6 mx-auto max-w-7xl md:flex-row">
        <Link href="/">
          <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">
              Dávid<span className="text-gray-500">Lévai</span>
            </span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
          <Link href="/content">
            <a className="mr-5 hover:text-indigo-900" id="">
              Content
            </a>
          </Link>
          <Link href="/uses">
            <a className="mr-5 hover:text-indigo-900" id="">
              Uses
            </a>
          </Link>
          <Link href="/">
            <a className="mr-5 hover:text-indigo-900" id="">
              About
            </a>
          </Link>
        </nav>
        <button
          className="inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-100 md:mt-0 transition duration-300"
          id=""
        >
          Work Together
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            id=""
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <main id="skip" className="max-w-6xl mx-auto flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
}

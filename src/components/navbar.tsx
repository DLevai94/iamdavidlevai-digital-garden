import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FunctionComponent = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  return (
    <header className="sticky top-0 bg-white dark:bg-darkBgLight bg-opacity-30 bg-clip-padding backdrop-blur z-50">
      <div className="flex flex-col flex-wrap items-center px-8 py-3 mx-auto max-w-7xl md:flex-row">
        <Link href="/">
          <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
            <span className="text-xl font-black leading-none text-gray-900 dark:text-gray-50 select-none logo">
              Dávid<span className="text-gray-500 dark:text-white"> Lévai</span>
            </span>
          </a>
        </Link>

        <nav className="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
          <Link href="/blog">
            <a className={`tracking-wider mr-5 hover:opacity-70 ${router.pathname === 'content' && 'text-yellow-400'}`}>
              Content
            </a>
          </Link>
          <Link href="/uses">
            <a className={`tracking-wider mr-5 hover:opacity-70 ${router.pathname === 'uses' && 'text-yellow-400'}`}>
              Uses
            </a>
          </Link>
          <Link href="/about">
            <a className={`tracking-wider mr-5 hover:opacity-70 ${router.pathname === 'about' && 'text-yellow-400'}`}>
              About
            </a>
          </Link>
          <Link href="/saas-toolkit">
            <a
              className={`tracking-wider mr-5 hover:opacity-70 ${
                router.pathname === 'saas-toolkit' && 'text-yellow-400'
              }`}
            >
              SaaS Toolkit
            </a>
          </Link>
          <button type="button" onClick={switchTheme} className="w-6 h-6 mr-2">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </nav>
        <button
          type="button"
          className="tracking-wider inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-100 border-0 rounded focus:outline-none hover:bg-gray-100 md:mt-0 transition duration-300"
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

// import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useTheme } from 'next-themes';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Navbar = () => {
  const router = useRouter();
  // const [isMounted, setIsMounted] = useState(false);
  // const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // const switchTheme = () => {
  //   if (isMounted) {
  //     setTheme(theme === 'light' ? 'dark' : 'light');
  //   }
  // };
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-500 bg-opacity-60 bg-clip-padding backdrop-blur">
      <div className="flex flex-col flex-wrap items-center px-8 py-3 mx-auto max-w-7xl md:flex-row">
        <Link href="/">
          <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
            <span className="text-xl font-black leading-none text-gray-900 dark:text-gray-50 select-none logo">
              Dávid<span className="text-gray-500 dark:text-white"> Lévai</span>
            </span>
          </a>
        </Link>
        {/* <button onClick={switchTheme}>Change theme</button> */}
        <nav className="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
          <Link href="/content">
            <a className={`mr-5 hover:text-indigo-900 ${router.pathname === 'content' && 'text-yellow-400'}`}>
              Content
            </a>
          </Link>
          <Link href="/uses">
            <a className={`mr-5 hover:text-indigo-900 ${router.pathname === 'uses' && 'text-yellow-400'}`}>Uses</a>
          </Link>
          <Link href="/">
            <a className={`mr-5 hover:text-indigo-900 ${router.pathname === 'about' && 'text-yellow-400'}`}>About</a>
          </Link>
        </nav>
        <button className="inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-100 border-0 rounded focus:outline-none hover:bg-gray-100 md:mt-0 transition duration-300">
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
    </header>
  );
};

export default Navbar;

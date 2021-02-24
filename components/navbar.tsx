import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className="sticky top-0 bg-white bg-opacity-60 bg-clip-padding backdrop-blur">
      <div className="flex flex-col flex-wrap items-center px-8 py-3 mx-auto max-w-7xl md:flex-row">
        <Link href="/">
          <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">
              Dávid<span className="text-gray-500"> Lévai</span>
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
    </header>
  );
};

export default Navbar;

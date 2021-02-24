import Link from 'next/link';
import Image from 'next/image';
import Footer from '../src/components/footer';
import Navbar from '../src/components/navbar';

export default function Home() {
  return (
    <>
      <section>
        <Navbar />

        <div className="max-w-3xl mx-8 mt-4 lg:mx-auto md:mt-16">
          <div className="flex flex-col md:flex-row justify-start items-center mb-8">
            <Image
              src="/davidlevai-icon.png"
              alt="An image about David Levai"
              className="border-2 border-gray-200 rounded-full w-24 h-24 shadow-md"
              width={56}
              height={56}
              layout="fixed"
              quality={60}
              priority
              loading="eager"
            />
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ml-4">
              Dávid's Digital Garden
            </h1>
          </div>
          <h2 className="inline-block px-2 mb-4 text-base font-semibold leading-normal tracking-wide text-gray-800 bg-yellow-100 sm:text-lg">
            Work in progress, so please come back after March 1, 2021 to get the full experience.
          </h2>
          <p className="mb-8 text-base font-light leading-relaxed text-gray-700 sm:text-lg">
            This is my personal site where I post articles, videos, and notes about things that I am interested in.
            Generally speaking building business, building apps, freelancing, productivity, working out, and some other
            millenial things.
          </p>
        </div>

        <div className="max-w-7xl mx-8 mt-16 overflow-hidden lg:mx-auto p-4">
          <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
            <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl group hover:shadow-lg hover:bg-gray-100 transition duration-300">
              <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5" />
                  </svg>
                </div>
                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                  <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                    Projects
                  </h6>
                  <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                    In 2021, I started building in public. Check these out to learn how to create production-ready
                    software.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-3 font-sans text-gray-700 border-0 bg-gray-50 rounded-3xl group hover:shadow-lg hover:bg-gray-100 transition duration-300">
              <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <rect x="3" y="4" width="18" height="8" rx="3" />
                    <rect x="3" y="12" width="18" height="8" rx="3" />
                    <path d="M7 8v.01M7 16v.01" />
                  </svg>
                </div>
                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                  <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                    Content
                  </h6>
                  <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                    Videos and written notes about freelancing, and building production-ready apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-3 font-sans text-gray-700 border-0 bg-gray-50 rounded-3xl group hover:shadow-lg hover:bg-gray-100 transition duration-300">
              <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#fff"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                  <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                    Mentoring
                  </h6>
                  <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                    I help software developers how to become freelancers, and how to grow themselves in business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

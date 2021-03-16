import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Footer = () => {
  return (
    <>
      <section className="py-24">
        <div className="max-w-3xl px-10 mx-auto xl:px-5">
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="w-full mx-auto text-4xl font-extrabold leading-none text-left sm:text-5xl md:text-7xl">
              Weekly Newsletter
            </h2>
            <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 dark:text-gray-200 md:text-2xl">
              I started authoring a newsletter where I post about business journey, and curate content about modern
              software development. No spam, sending out weekly.
            </p>
            <form
              action="http://newsletter.davidlevai.com/add_subscriber"
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank"
            >
              <div className="flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
                <input
                  type="email"
                  className="revue-form-field flex-1 w-full px-5 py-5 text-2xl bg-gray-200 border border-gray-300 rounded-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
                  placeholder="Email Address"
                  name="member[email]"
                  id="member_email"
                />
                <input
                  type="submit"
                  className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-gray-900 bg-yellow-400 rounded-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 focus:outline-none"
                  value="I want in!"
                  name="member[subscribe]"
                  id="member_submit"
                />
              </div>
              <div className="revue-form-footer text-gray-400 mt-4">
                By subscribing, you agree with Revue’s{' '}
                <a target="_blank" rel="noreferrer noopener" href="https://www.getrevue.co/terms">
                  Terms
                </a>{' '}
                and{' '}
                <a target="_blank" rel="noreferrer noopener" href="https://www.getrevue.co/privacy">
                  Privacy Policy
                </a>
                .
              </div>
            </form>
            <p className="text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-200">Trusted by</span> over 100 subscribers.
            </p>
          </div>
        </div>
      </section>
      <footer className="">
        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
          <a href="#_" className="text-xl font-black leading-none select-none logo">
            Dávid <span className="text-gray-500">Lévai</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            &copy; 2021 Dávid Lévai
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="https://dvdlv.me/yt" rel="noreferrer noopener" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
                <path d="M9.75 15.02L15.5 11.75 9.75 8.48 9.75 15.02z"></path>
              </svg>
            </a>

            <a
              href="https://instagram.com/iamdavidlevai"
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <path d="M17.5 6.5L17.51 6.5"></path>
              </svg>
            </a>

            <a
              href="https://twitter.com/iamdavidlevai"
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/iamdavidlevai"
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                <path d="M2 9H6V21H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://github.com/DLevai94"
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://twitch.tv/iamdavidlevai"
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitch</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

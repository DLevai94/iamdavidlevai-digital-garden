const Button: React.FunctionComponent = ({ children }) => (
  <a
    href="#_"
    className="flex items-center justify-center px-8 py-3 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent shadow hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-green-NaN md:py-4 md:text-lg md:px-10 rounded-none"
  >
    {children}
  </a>
);

export default Button;

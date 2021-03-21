import Link from 'next/link';

type Props = {
  text: string;
  href: string;
};

const Button: React.FunctionComponent<Props> = ({ text, href }) => (
  <Link href={href}>
    <a
      href="#_"
      className="flex items-center justify-center px-8 py-3 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent shadow hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-green-NaN md:py-4 md:text-lg md:px-10 rounded-none">
      {text}
    </a>
  </Link>
);

export default Button;

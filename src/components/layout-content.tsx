import Footer from '@components/footer';
import Navbar from '@components/navbar';

const LayoutContent: React.FunctionComponent = ({ children }) => (
  <>
    <Navbar />
    <main className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">{children}</div>
    </main>
    <Footer />
  </>
);

export default LayoutContent;

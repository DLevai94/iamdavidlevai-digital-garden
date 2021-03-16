/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

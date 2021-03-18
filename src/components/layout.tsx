import Footer from '@components/footer';
import Navbar from '@components/navbar';

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

import Footer from '@components/footer';
import Navbar from '@components/navbar';

const BlogLayout: React.FunctionComponent = ({ children }) => (
  <>
    <Navbar />
    <div className="max-w-3xl px-10 mx-auto xl:px-5">{children}</div>
    <Footer />
  </>
);

export default BlogLayout;

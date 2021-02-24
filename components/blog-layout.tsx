import Footer from './footer';
import Navbar from './navbar';

const BlogLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl px-10 mx-auto xl:px-5">{children}</div>
      <Footer />
    </>
  );
};

export default BlogLayout;

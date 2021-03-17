import Link from 'next/link';
import Button from '@components/button';
import Layout from '@components/layout';

const MissingPage: React.FunctionComponent = () => (
  <Layout>
    <div className="space-y-8">
      This page doesn’t exist.
      <div>
        <Link href="/" passHref>
          <a>
            <Button>Return home</Button>
          </a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default MissingPage;

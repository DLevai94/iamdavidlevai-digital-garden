import type { NextPage } from 'next';
import Button from '@components/button';
import Layout from '@components/layout';

const MissingPage: NextPage = () => (
  <Layout>
    <div className="space-y-8">
      This page doesn’t exist.
      <div>
        <Button href="/" text="Return home" />
      </div>
    </div>
  </Layout>
);

export default MissingPage;

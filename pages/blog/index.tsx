import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from '../../src/components/layout';
import { POSTS_PATH, postFilePaths } from '../../src/lib/mdxUtils';
import ContentHeading from '../../src/components/content-heading';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Index({ posts }) {
  return (
    <Layout>
      <ContentHeading />
      <section className="py-24">
        <ul>
          {posts.map((post) => (
            <li key={post.filePath}>
              <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href="/blog/[slug]">
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

type Props = {
  props: {
    posts: {
      content: string;
      data: any;
      filePath: string;
    }[];
  };
};

export const getStaticProps: GetStaticProps = async (): Promise<Props> => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath
    };
  });

  return { props: { posts } };
};

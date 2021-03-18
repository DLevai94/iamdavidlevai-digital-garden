import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from '@components/layout';
import { POSTS_PATH, postFilePaths } from '@lib/mdxUtils';
import ContentHeading from '@components/content-heading';
import { FrontMatterProps } from '@typeDefs/post';

type ComponentProps = {
  posts: {
    content: string;
    data: FrontMatterProps;
    filePath: string;
  }[];
};

const Index: React.FunctionComponent<ComponentProps> = ({ posts }) => (
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

type Props = {
  props: {
    posts: {
      content: string;
      data: unknown;
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

export default Index;

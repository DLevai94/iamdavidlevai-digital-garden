import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Hero from '@components/hero';
import Layout from '@components/layout';
import { POSTS_PATH, postFilePaths } from '@lib/mdxUtils';
import { FrontMatterProps } from '@typeDefs/post';

type ComponentProps = {
  posts: {
    content: string;
    data: FrontMatterProps;
    filePath: string;
  }[];
};

const Home: React.FunctionComponent<ComponentProps> = ({ posts }) => (
  <Layout>
    <Hero />
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-6xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Recent Content
          </h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.filePath}>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                <time dateTime={post.data.date}>{dayjs(post.data.date).format('MMM DD, YYYY')}</time>
              </p>
              <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href="/blog/[slug]">
                <a className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.data.title}</p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-200">{post.data.description}</p>
                </a>
              </Link>
              <div className="mt-3">
                <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href="/blog/[slug]">
                  <a className="text-base font-semibold text-green-600 hover:text-yellow-400 flex flex-row items-center">
                    Read full post{' '}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

type Props = {
  props: {
    posts: {
      content: string;
      data: FrontMatterProps;
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
      data: data as FrontMatterProps,
      filePath
    };
  });

  return { props: { posts } };
};

export default Home;

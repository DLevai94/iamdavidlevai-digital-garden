import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../src/components/blog-layout';
import { POSTS_PATH, postFilePaths } from '../../src/lib/mdxUtils';
import Search from '../../src/components/search';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Index({ posts }) {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-3xl px-10 mx-auto xl:px-5">
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl">
              Content
            </h2>
            <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-2xl">
              Articles, videos, and notes about things that I am interested in. Generally speaking building business,
              building apps, freelancing, productivity, working out, and some other millenial things.
            </p>
            <Search />
          </div>
        </div>
      </section>

      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link as={`/content/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/content/[slug]`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getStaticProps() {
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
}

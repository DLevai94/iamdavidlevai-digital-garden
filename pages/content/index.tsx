import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
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
              <Link as={`/content/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/content/[slug]`}>
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
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

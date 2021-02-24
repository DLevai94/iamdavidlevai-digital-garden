import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import matter from 'gray-matter';
import RHP from '@mapbox/rehype-prism';
import codetitle from 'remark-code-titles';
import { useRouter } from 'next/router';

import Layout from '../../components/blog-layout';
import Components from '../../components/mdx-components';
import { POSTS_PATH, postFilePaths } from '../../lib/mdxUtils';

const components: MdxRemote.Components = { Components };

interface Props {
  mdxSource: MdxRemote.Source;
  frontMatter: any;
}

export default function Content({ mdxSource, frontMatter }: Props) {
  const router = useRouter();
  const content = hydrate(mdxSource, { components });
  return (
    <Layout>
      <article className="prose lg:prose-xl mb-8">
        <h1>{frontMatter.title}</h1>
        {content}
        <p>
          Let me know your thoughts on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?url=https://davidlevai.com${router?.asPath}&via=iamdavidlevai&text=${frontMatter.description}`}
          >
            Twitter
          </a>
          .
        </p>
      </article>
      <Image width={200} height={40} src="/signature.svg" />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [codetitle],
      rehypePlugins: [RHP]
    },
    scope: data
  });
  return { props: { mdxSource, frontMatter: data } };
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

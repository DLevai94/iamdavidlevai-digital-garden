import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
// eslint-disable-next-line import/no-unresolved
import { MdxRemote } from 'next-mdx-remote/types';
import matter from 'gray-matter';
import RHP from '@mapbox/rehype-prism';
import codetitle from 'remark-code-titles';
import { useRouter } from 'next/router';
import { NextSeo, BlogJsonLd } from 'next-seo';

import Layout from '@components/blog-layout';
import Components from '@components/mdx-components';
import { POSTS_PATH, postFilePaths } from '@lib/mdxUtils';
import { FrontMatterProps } from '@typeDefs/post';

const components: MdxRemote.Components = { Components };

type PageProps = {
  mdxSource: MdxRemote.Source;
  frontMatter: FrontMatterProps;
};

type Props = {
  props: PageProps;
};

const Content: NextPage<PageProps> = ({ mdxSource, frontMatter }) => {
  const router = useRouter();
  const content = hydrate(mdxSource, { components });
  return (
    <Layout>
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <article className="font-blog prose dark:text-white lg:prose-xl mb-8">
        <h1 className="dark:text-white">{frontMatter.title}</h1>
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
      <BlogJsonLd
        authorName="David Levai"
        title={frontMatter.title}
        description={frontMatter.description}
        url={`https://davidlevai.com${router?.asPath}`}
        datePublished="12-17-2020"
        dateModified="12-17-2020"
        images={['']}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }): Promise<Props> => {
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
  return { props: { mdxSource, frontMatter: data as FrontMatterProps } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths.map((postPath) => postPath.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export default Content;

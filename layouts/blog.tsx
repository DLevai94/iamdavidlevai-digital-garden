import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '../components/container';

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://davidlevai.com/content/${slug}`)}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – David Levai`}
      description={frontMatter.summary}
      image={`https://davidlevai.com${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="David Levai"
              height={24}
              width={24}
              src="https://pbs.twimg.com/profile_images/1356594503919009797/BcAcAhQT_400x400.png"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'David / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a href={discussUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
            {'Discuss on Twitter'}
          </a>
        </div>
      </article>
    </Container>
  );
}

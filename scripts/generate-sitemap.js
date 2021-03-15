/* eslint-disable no-undef */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const pages = await globby([
    'pages/**/*{.js,.tsx,.ts,.mdx}',
    'data/**/*{.js,.tsx,.ts,.mdx}',
    '!pages/_*{.js,.tsx,.ts}',
    '!pages/api'
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('data', '/blog')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.tsx', '')
                  .replace('.ts', '');
                const unnecessary = ['/index', '/blog/index', '/blog/[slug]'];
                const route = unnecessary.includes(path) ? (path === '/blog/index' ? '/blog' : '') : path;

                return `
                        <url>
                            <loc>${`https://davidlevai.com${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();

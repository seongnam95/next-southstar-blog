import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { MdxComponents } from '@/components/Mdx';
import { Post } from '@/types/post';

const ContentMDX = ({ post }: { post: Post }) => {
  const rehypeOptions: RehypePrettyCodeOptions = {
    theme: {
      dark: 'slack-dark',
      light: 'slack-ochin',
    },
  };
  return (
    <article className="post">
      <MDXRemote
        source={post.content}
        components={MdxComponents}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              rehypeSlug,
              rehypeCodeTitles,
              [
                rehypeExternalLinks,
                {
                  properties: {
                    class: 'external-link',
                  },
                  target: '_blank',
                  rel: ['noopener noreferrer'],
                },
              ],
              [rehypePrettyCode as any, rehypeOptions],
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['anchor'],
                  },
                },
              ],
            ],
          },
        }}
      />
    </article>
  );
};

export default ContentMDX;

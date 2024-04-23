import { ComputedFields, FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

const postFields: FieldDefs = {
  title: { type: 'string', description: 'The title of the post', required: true },
  description: { type: 'string', required: true },
  date: { type: 'date', required: true },
  series: { type: 'string', required: false },
  tags: {
    type: 'list',
    required: true,
    of: { type: 'string' },
    default: [],
  },
};

const computedFields: ComputedFields<'Post'> = {
  slug: {
    type: 'string',
    resolve: (post) => post._raw.flattenedPath,
  },
  readingTime: {
    type: 'string',
    resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: postFields,
  computedFields: computedFields,
}));

const rehypeOptions: RehypePrettyCodeOptions = {
  theme: 'slack-dark',
  keepBackground: true,
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
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
});

import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import Mdx from '@/components/Mdx';
import { Heading } from '@/components/ui/Heading';

export const generatedStaticParams = async () => {
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generatedMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
};

export default function Post({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find((post) => post.slug === params.slug.join('/'));
  if (!post) notFound();

  return (
    <div>
      <div className="mb-20 ">
        <time dateTime={post.date} className="mb-1 text-xs text-muted-foreground">
          {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
        </time>
        <Heading level="1">{post.title}</Heading>
      </div>

      <Mdx code={post.body.code} />
    </div>
  );
}

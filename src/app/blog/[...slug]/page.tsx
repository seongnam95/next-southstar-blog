import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import Mdx from '@/components/Mdx';
import { Flex } from '@/components/ui/Flex';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { dateFormatter } from '@/utils/date';

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find((post) => post.slug === params.slug.join('/'));
  if (!post) notFound();

  return (
    <div>
      <div className="mb-20">
        <Heading level="1" className="mb-2">
          {post.title}
        </Heading>

        <Text as="p" muted className="mb-4">
          {post.description}
        </Text>

        <Text size="sm" muted>
          <time dateTime={post.date}>{dateFormatter(post.date, 'YYYY-MM-DD')}</time>· {post.readingTime}min
        </Text>
      </div>

      <Mdx code={post.body.code} />
    </div>
  );
}

import { notFound } from 'next/navigation';

import ContentMDX from '@/components/ContentMDX';
import { Flex } from '@/components/ui/Flex';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { dateFormatter } from '@/utils/date';
import { getPostDetail } from '@/utils/post';

type Props = {
  params: { category: string; slug: string };
};

const PostPage = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  if (!post) notFound();

  return (
    <div>
      <div className="mb-20 border-b border-b-border-accent pb-2">
        <Heading level="2" className="mb-1">
          {post.title}
        </Heading>

        <Text as="p" className="mb-4">
          {post.description}
        </Text>

        <Text size="sm" muted>
          {/* <time dateTime={post.date}>{dateFormatter(post.date, 'YYYY-MM-DD')}</time>· {post.readingTime} min */}
        </Text>
      </div>

      <ContentMDX post={post} />
    </div>
  );
};

export default PostPage;

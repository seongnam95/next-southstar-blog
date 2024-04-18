import React from 'react';

import { Post } from 'contentlayer/generated';
import Link from 'next/link';

import { Badge } from '@/ui/Badge';
import { Flex } from '@/ui/Flex';
import { Heading } from '@/ui/Heading';
import { Text } from '@/ui/Text';
import { dateFormatter } from '@/utils/date';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="overflow-y-auto">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </ul>
  );
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="w-full overflow-hidden rounded-sm p-2 [&:not(:last-child)]:mb-6">
      {/* Date */}
      <Flex gap="1">
        <Text size="sm" muted className="mb-1" as="p">
          {dateFormatter(post.date)}
          {post.series && ` · ${post.series}`}
        </Text>
      </Flex>

      <Link href={`/post/${post.slug}`}>
        <Flex direction="column">
          {/* Title */}
          <Heading level="2" as="h2" className="mb-1.5">
            {post.title}
          </Heading>

          {/* Content */}
          <Text muted as="p">
            {post.description}
          </Text>
        </Flex>
      </Link>

      {/* Tags */}
      <Flex gap="1" wrap="wrap" className="mt-3">
        {post.tags.map((tag) => (
          <Badge variant="surface">{tag}</Badge>
        ))}
      </Flex>
    </li>
  );
};

export default PostList;

import React from 'react';

import Link from 'next/link';

import { Badge } from '@/components/ui/Badge';
import { Flex } from '@/components/ui/Flex';
import { Heading } from '@/components/ui/Heading';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Text } from '@/components/ui/Text';
import { Post } from '@/types/post';
import { dateFormatter } from '@/utils/date';
import { getAllPostCount, getCategoryDetailList, getSortedPostList } from '@/utils/post';

interface PostListProps {
  category?: string;
}

const PostList = async ({ category }: PostListProps) => {
  const postList = await getSortedPostList(category);
  const categories = await getCategoryDetailList();
  console.log(categories);
  const allPostCount = await getAllPostCount();

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem value={category.publicName}>{category.publicName}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <ul className="overflow-y-auto">
        {postList.map((post) => (
          <PostCard post={post} />
        ))}
      </ul>
    </div>
  );
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="w-full overflow-hidden rounded-sm p-2 [&:not(:last-child)]:mb-6">
      {/* Date */}
      <Flex gap="1">
        <Text size="sm" muted className="mb-1" as="p">
          {dateFormatter(post.date)}
        </Text>
      </Flex>

      <Link className="group" href={`/blog/${post.slug}`}>
        <Flex direction="column">
          {/* Title */}
          <Heading
            level="2"
            as="h1"
            className="mb-1.5 transition-colors duration-150 group-hover:text-primary"
          >
            {post.title}
          </Heading>
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

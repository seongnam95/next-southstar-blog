import React from 'react';

import { Blog } from 'contentlayer/generated';

import { Flex } from '@/components/Flex';
import { getAllPosts } from '@/lib/post';

interface PostListProps {}

const PostList = async ({}: PostListProps) => {
  const posts = await getAllPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <PostListItem key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

const PostListItem = ({ post }: { post: Blog }) => {
  return (
    <li>
      <a>
        <Flex direction="column">
          <Text>{post.title}</Text>
        </Flex>
      </a>
    </li>
  );
};

export default PostList;

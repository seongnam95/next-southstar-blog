import React from 'react';

import CategoryList from '@/components/CategoryList';
import PostList from '@/components/PostList';
import { getAllPostCount, getCategoryDetailList, getSortedPostList } from '@/utils/post';

interface PostTabContentProps {
  category?: string;
}

const PostTabContent = async ({ category }: PostTabContentProps) => {
  const postList = await getSortedPostList(category);
  const categories = await getCategoryDetailList();
  const allPostCount = await getAllPostCount();

  return (
    <div>
      <PostList />
    </div>
  );
};

export default PostTabContent;

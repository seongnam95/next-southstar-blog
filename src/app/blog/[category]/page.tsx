import React from 'react';

import PostList from '@/components/PostList';

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  return (
    <div>
      <PostList category={params.category} />
    </div>
  );
};

export default CategoryPage;

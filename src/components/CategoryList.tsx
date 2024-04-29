import React from 'react';

import { CategoryDetail } from '@/types/post';

interface CategoryListProps {
  categories: CategoryDetail[];
  allPostCount: number;
  currentCategory?: string;
}

const CategoryList = ({ categories, allPostCount, currentCategory }: CategoryListProps) => {
  return (
    <>
      <section></section>
    </>
  );
};

export default CategoryList;

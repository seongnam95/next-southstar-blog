import { type Post, allPosts } from 'contentlayer/generated';

import { dateCompare } from '@/utils/date';

export function getAllPosts(): Post[] {
  return allPosts.sort((a, b) => dateCompare(b.date, a.date));
}

export function getPostData(fileName: string): Post {
  const post = allPosts.find((post) => post.slug === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  return post;
}

export const getPrevPost = (index: number): Post | null => {
  return getAllPosts()[index + 1] ?? null;
};
export const getNextPost = (index: number): Post | null => {
  return getAllPosts()[index - 1] ?? null;
};

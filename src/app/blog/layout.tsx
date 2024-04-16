import React from 'react';

interface BlogLayoutProps {
  children?: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div>
      {children}
      {/* 시리즈 목록 */}
      <div></div>
      {/* 이전, 다음 게시글 */}
      <div></div>
      {/* 댓글 */}
      <div></div>
    </div>
  );
};

export default BlogLayout;

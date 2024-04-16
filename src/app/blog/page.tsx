import { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import PostList from '@/components/PostList';
import { getAllPosts } from '@/lib/post';

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      <PostList />
    </section>
  );
};

type Props = {
  post: Blog;
  series?: Blog[];
};

const Content = ({ post }: Props) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <div>
      <MDXComponent />
    </div>
  );
};

export default BlogPage;

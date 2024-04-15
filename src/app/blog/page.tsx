import { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { getAllPosts } from '@/lib/post';

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      {posts.map((post, idx) => (
        <Content key={idx} post={post}></Content>
      ))}
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

import PostList from '@/components/PostList';
import { getAllPosts } from '@/utils/post';

const PostPage = () => {
  const posts = getAllPosts();

  return (
    <section>
      <PostList posts={posts} />
    </section>
  );
};

export default PostPage;

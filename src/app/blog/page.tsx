import { FiSearch } from 'react-icons/fi';

import PostList from '@/components/PostList';
import { Flex } from '@/components/ui/Flex';
import { Input } from '@/components/ui/Input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { getAllPosts } from '@/utils/post';

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <Tabs defaultValue="post">
      <Flex justify="between" align="center" className="mb-12">
        <TabsList>
          <TabsTrigger value="post">글</TabsTrigger>
          <TabsTrigger value="series">시리즈</TabsTrigger>
          <TabsTrigger value="tag">태그</TabsTrigger>
        </TabsList>
        <Input variant="filled" icon={<FiSearch />} />
      </Flex>

      <TabsContent value="post">
        <PostList posts={posts} />
      </TabsContent>
      <TabsContent value="series">시리즈</TabsContent>
      <TabsContent value="tag">태그</TabsContent>
    </Tabs>
  );
};

export default BlogPage;

import { FiSearch } from 'react-icons/fi';

import PostList from '@/components/PostList';
import PostTabContent from '@/components/PostTabContent';
import { Flex } from '@/components/ui/Flex';
import { Input } from '@/components/ui/Input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

const Blog = async () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export default Blog;

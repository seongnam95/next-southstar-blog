import { DarkModeToggle } from '@/components/DarkModeToggle';
import { Flex } from '@/components/Flex';
import NavigationBar from '@/layouts/NavigationBar';

const Header = () => {
  return (
    <header className="flex h-15 items-center justify-between px-5">
      <div>SouthStar.Log</div>
      <Flex align="center" gap="2">
        <NavigationBar />
        <DarkModeToggle />
      </Flex>
    </header>
  );
};

export default Header;

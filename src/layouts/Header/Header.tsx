import { DarkModeToggle } from '@/components/DarkModeToggle';
import Logo from '@/components/Logo';
import NavigationBar from '@/layouts/NavigationBar';
import { Flex } from '@/ui/Flex';

const Header = () => {
  return (
    <header className="absolute left-0 top-0 flex h-15 w-full items-center justify-between px-5">
      <Logo />
      <Flex align="center" gap="2">
        <NavigationBar />
        <DarkModeToggle />
      </Flex>
    </header>
  );
};

export default Header;

import { DarkmodeToggle } from '@/components/DarkmodeToggle';
import Logo from '@/components/Logo';
import { Flex } from '@/components/ui/Flex';
import NavigationBar from '@/layouts/NavigationBar';

const Header = () => {
  return (
    <header className="absolute left-0 top-0 flex h-16 w-full items-center justify-between px-5">
      <Logo />
      <Flex align="center" gap="2">
        <NavigationBar />
        <DarkmodeToggle />
      </Flex>
    </header>
  );
};

export default Header;

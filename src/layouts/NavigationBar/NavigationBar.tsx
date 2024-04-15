import Link from 'next/link';

const NavigationBar = () => {
  const menuItems = [
    {
      key: 'home',
      title: 'Home',
      path: '/',
    },
    {
      key: 'blog',
      title: 'Blog',
      path: '/blog',
    },
    {
      key: 'about',
      title: 'About',
      path: '/about',
    },
  ];

  return (
    <nav className="">
      {menuItems.map((item) => (
        <NavigationBarItem key={item.key} title={item.title} path={item.path} />
      ))}
    </nav>
  );
};

interface NavigationBarItemProps {
  title: string;
  path: string;
}

const NavigationBarItem = ({ title, path }: NavigationBarItemProps) => {
  return (
    <Link className="px-3 py-2 transition-colors duration-100 hover:text-primary" href={path}>
      {title}
    </Link>
  );
};

export default NavigationBar;

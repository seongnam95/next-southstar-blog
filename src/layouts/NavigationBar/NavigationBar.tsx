'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';

const NavigationBar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      key: 'post',
      title: 'Post',
      path: '/post',
    },
    {
      key: 'about',
      title: 'About',
      path: '/about',
    },
  ];

  return (
    <nav>
      {menuItems.map((item) => (
        <NavigationBarItem
          key={item.key}
          active={pathname.startsWith(item.path)}
          title={item.title}
          path={item.path}
        />
      ))}
    </nav>
  );
};

interface NavigationBarItemProps {
  title: string;
  path: string;
  active?: boolean;
}

const NavigationBarItem = ({ title, path, active }: NavigationBarItemProps) => {
  return (
    <Link
      className={cn(
        `
        rounded-full px-3 py-1 text-sm transition-colors duration-100 hover:text-primary
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background
        `,
        active && 'bg-primary-surface text-primary',
      )}
      href={path}
    >
      {title}
    </Link>
  );
};

export default NavigationBar;

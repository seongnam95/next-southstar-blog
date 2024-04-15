'use client';

import * as React from 'react';

import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import { useTheme } from 'next-themes';

import { IconButton } from '@/components/IconButton';

export const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButton variant="ghost" size="lg" onClick={toggleTheme}>
      <IoSunnyOutline className="hidden dark:block" />
      <IoMoonOutline className="ml-2pxr dark:hidden" />
    </IconButton>
  );
};

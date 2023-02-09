'use client';

import { Menu, Transition } from '@headlessui/react';
import ThemeIcon from './ThemeIcon';
import { Fragment, useState, useEffect } from 'react';
import { CaretRightIcon } from 'app/icons/caret-right';
import { useToggleTheme } from 'app/hooks/useToggleTheme';
import cn from 'clsx';

type MenuItemProps = {
  close: Function;
};

export default function Example() {
  const [mounted, setMounted] = useState(false);
  const { theme, themes, setTheme } = useToggleTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="flex h-10 w-[125px] items-center justify-between rounded-md border border-gray-200 pl-2 pr-1 capitalize transition-colors ease-linear hover:border-gray-500 hover:shadow-sm dark:border-gray-700 hover:dark:border-gray-600"
        onClick={() => setShowThemeMenu(!showThemeMenu)}
      >
        <ThemeIcon width={20} height={20} theme={theme} />
        {theme}
        <CaretRightIcon
          className={cn('h-6 w-6 text-current transition-transform duration-300', {
            ['rotate-90']: showThemeMenu
          })}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md border bg-white shadow-lg dark:border-gray-900 dark:bg-black dark:shadow-gray-900">
          {themes.map((themeName: string) => (
            <Menu.Item key={themeName}>
              {({ close }: MenuItemProps) => (
                <button
                  className=" text-primary flex w-full cursor-pointer items-center px-6 py-3 font-medium capitalize leading-6 transition duration-150 ease-in-out hover:bg-gray-50 hover:dark:bg-gray-800"
                  onClick={() => {
                    setTheme(themeName);
                    setShowThemeMenu(false);
                    close();
                  }}
                >
                  {themeName}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

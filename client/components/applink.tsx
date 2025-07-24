'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  children?: ReactNode;
};

export const AppLink = ({
  href,
  exact = false,
  className = '',
  activeClassName = 'text-blue-600 font-bold',
  children,
}: Props) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx('transition-colors', className, {
        [activeClassName]: isActive,
      })}>
      {children}
    </Link>
  );
};

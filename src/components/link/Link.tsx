import { type RouteObject } from '@src/types/routes';
import { default as NextLink } from 'next/link';
import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  route: RouteObject;
}

export const Link: FC<Props> = ({ children, route, className }) => {
  if (route.external) {
    return (
      <a href={route.href} rel="noopener noreferrer" target="_blank" className={className}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={route.href} className={className}>
      {children}
    </NextLink>
  );
};

import { cn } from '@utils/utils';
import Link from 'next/link';
import { type FC } from 'react';

import { CONTENT } from './utils';

interface Props {
  currentPath: string;
  className?: string;
}

export const Navigation: FC<Props> = ({ currentPath, className }) => {
  return (
    <nav className={cn('bg-emerald-900', className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-4 font-mono md:flex-row md:py-2">
        <div>
          <p className="text-3xl text-slate-50">jamesl.dev</p>
        </div>
        <div>
          <ul className="flex gap-4">
            {CONTENT.map((item) => (
              <li key={item.path} className="block text-lg">
                <Link
                  href={item.path}
                  className={cn(
                    'text-slate-50 underline-offset-8 hover:text-slate-50 hover:underline',
                    currentPath === item.path && 'underline'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

import { Link } from '@components/link';
import { ROUTES } from '@constants/routes';
import { cn } from '@utils/utils';
import { type FC } from 'react';

const VERSION = process.env.version;
const YEAR = new Date().getFullYear();

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={cn('w-full py-4 font-sans text-sm', className)}>
      <p className="text-center">
        &copy; James Lee {YEAR} | <Link route={ROUTES.projectHomepage}>v{VERSION}</Link>
      </p>
      <p className="text-center text-sm text-slate-500">
        All opinions on this website are my own and do not reflect the views of my employer or any of my clients.
      </p>
    </footer>
  );
};

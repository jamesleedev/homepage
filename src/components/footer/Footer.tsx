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
    </footer>
  );
};

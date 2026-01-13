import { ROUTES } from '@constants/routes';

export interface NavItem {
  path: string;
  name: string;
}

export const CONTENT: NavItem[] = [
  {
    path: ROUTES.home.href,
    name: 'Home',
  },
  {
    path: ROUTES.cv.href,
    name: 'CV',
  },
];

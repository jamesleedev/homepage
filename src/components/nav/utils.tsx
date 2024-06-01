export interface NavItem {
  path: string;
  name: string;
}

export const CONTENT: NavItem[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/cv",
    name: "CV",
  },
];

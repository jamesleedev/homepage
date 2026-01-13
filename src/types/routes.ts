export interface RouteObject {
  href: string;
  external?: boolean;
}

export type Routes = Record<string, RouteObject>;

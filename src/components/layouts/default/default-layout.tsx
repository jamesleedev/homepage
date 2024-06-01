import { Navigation } from "@components/nav";
import { cn } from "@utils/utils";
import { NextSeo } from "next-seo";
import { type FC, type ReactNode } from "react";

interface Props {
  seoTitle: string;
  seoDescription: string;
  currentPath: string;
  className?: string;
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({
  seoTitle,
  seoDescription,
  currentPath,
  className,
  children,
}) => {
  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Navigation currentPath={currentPath} />
      <div className="bg-slate-100">
        <main className={cn("container font-sans", className)}>{children}</main>
      </div>
    </>
  );
};

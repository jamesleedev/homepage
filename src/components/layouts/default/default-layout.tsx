import { Navigation } from '@components/nav';
import { cn } from '@utils/utils';
import { NextSeo } from 'next-seo';
import { type FC, type ReactNode } from 'react';

interface Props {
  seoTitle: string;
  seoDescription: string;
  currentPath: string;
  className?: string;
  navClassName?: string;
  noIndex?: boolean;
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({
  seoTitle,
  seoDescription,
  currentPath,
  noIndex,
  className,
  navClassName,
  children,
}) => {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        noindex={noIndex}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `https://www.jamesl.dev${currentPath}`,
        }}
      />
      <Navigation currentPath={currentPath} className={navClassName} />
      <div className="bg-slate-100">
        <main className={cn('container font-sans print:m-0 print:p-0', className)}>{children}</main>
      </div>
    </>
  );
};

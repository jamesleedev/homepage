import { Footer } from '@components/footer';
import { Navigation } from '@components/nav';
import { cn } from '@utils/utils';
import { generateNextSeo } from 'next-seo/pages';
import { type FC, type ReactNode } from 'react';
import Head from 'next/head';

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
      <Head>
        {generateNextSeo({
          title: seoTitle,
          description: seoDescription,
          noindex: noIndex,
          openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `https://www.jamesl.dev${currentPath}`,
          },
        })}
      </Head>
      <Navigation currentPath={currentPath} className={navClassName} />
      <div className="bg-slate-100">
        <main className={cn('container font-sans print:m-0 print:p-0', className)}>{children}</main>
      </div>
      <Footer className="bg-slate-100" />
    </>
  );
};

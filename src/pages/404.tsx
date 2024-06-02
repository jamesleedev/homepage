import { DefaultLayout } from '@components/layouts/default';

export default function Home() {
  return (
    <DefaultLayout seoTitle="404 Page Not Found" seoDescription="Page not found." currentPath="/404" noIndex>
      <section className="py-8">
        <h1>404 Page Not Found</h1>
      </section>
    </DefaultLayout>
  );
}

import { DefaultLayout } from '@components/layouts/default';

export default function Home() {
  return (
    <DefaultLayout
      seoTitle="500 Server Error"
      seoDescription="Server error occured, please try again later."
      currentPath="/500"
      noIndex
    >
      <section className="py-8">
        <h1>500 Server Error</h1>
      </section>
    </DefaultLayout>
  );
}

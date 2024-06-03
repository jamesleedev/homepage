import { Sidebar } from '@components/cv';
import { JobPosition } from '@components/cv/job-position';
import { DefaultLayout } from '@components/layouts/default';
import { type JobPositionProps } from '@src/types/cv';

const positions: JobPositionProps[] = [
  {
    company: 'Hashleap',
    companyDesc: 'Early stage startup for simple B2B crypto payments',
    position: 'Frontend Engineer',
    duration: 'May 2024 (contract)',
    technology: 'Next.js + TypeScript',
    children: (
      <ul className="list-outside list-disc space-y-2 pl-4 text-slate-900">
        <li>Building dashboard and settings pages using Radix UI, Tailwind, ApexCharts, and react-hook-form</li>
        <li>
          Working closely with the company founder to integrate existing APIs, then architecting and mocking missing API
          features such as image upload and date range filtering.
        </li>
      </ul>
    ),
  },
  {
    company: 'Glassnode',
    companyDesc: 'BTC and ETH analytics, indicators, and charts',
    position: 'Software Engineer I',
    duration: 'Aug 2021 - Dec 2023',
    technology: 'Next.js + TypeScript',
    children: (
      <ul className="list-outside list-disc space-y-2 pl-4 text-slate-900">
        <li>
          Collaborated closely with marketing, content, and design teams to optimise conversions and SEO, and personally
          lead the development of new landing pages.
        </li>
        <li>
          Conducted investigations into performance and tracking issues, and resolved multiple downtime incidents.
        </li>
        <li>
          Produced developer onboarding guides, tutorials and technical documentation on external dependencies, as well
          as incident post-mortems.
        </li>
        <li>
          Participated heavily in our CMS selection process, rebranding, adoption of Usercentrics CMP, tracking and
          analytics with Segment and Amplitude, and code improvement initiatives e.g. Tailwind adoption.
        </li>
        <li>Sole maintainer of GhostCMS theme and WordPress blog before transition to Prismic CMS.</li>
      </ul>
    ),
  },
  {
    company: 'Freelance',
    position: 'Frontend Engineer',
    duration: 'Aug 2020 - Aug 2021',
    technology: 'PHP/Browser DOM JS',
    children: (
      <>
        <p className="text-sm">Working with clients to create and maintain:</p>
        <ul className="list-outside list-disc pl-4 text-slate-900">
          <li>product pages on top of WooCommerce</li>
          <li>custom email templates for email marketing & CRM</li>
          <li>Zapier webhook and SendGrid integrations</li>
        </ul>
      </>
    ),
  },
];

export default function Cv() {
  return (
    <DefaultLayout
      seoTitle="CV"
      seoDescription="James Lee Full CV"
      currentPath="/cv"
      navClassName="print:hidden"
      noIndex
    >
      <div className="flex h-full min-h-[100vh] items-center justify-center bg-slate-100 py-24 font-mono print:h-[1123px] print:w-[794px] print:p-0 print:contain-size">
        <div className="grid h-[1123px] w-[794px] grid-cols-[240px_1fr] bg-slate-300 print:h-[1123px] print:w-[794px]">
          <Sidebar />
          <div className="w-full px-3 py-4">
            {positions.map((p: JobPositionProps) => (
              <JobPosition
                key={p.company}
                company={p.company}
                companyDesc={p.companyDesc}
                position={p.position}
                technology={p.technology}
                duration={p.duration}
              >
                {p.children}
              </JobPosition>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

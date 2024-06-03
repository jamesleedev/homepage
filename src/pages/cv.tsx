import { Sidebar } from '@components/cv';
import { JobPosition } from '@components/cv/job-position';
import { Navigation } from '@components/nav';
import { type JobPositionProps } from '@src/types/cv';
import { NextSeo } from 'next-seo';

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
    <>
      <NextSeo
        title="CV"
        description="James Lee Full CV"
        noindex
        openGraph={{
          title: 'CV',
          description: 'James Lee Full CV',
          url: 'https://www.jamesl.dev/cv',
        }}
      />
      <Navigation currentPath="/cv" />
      <div className="flex items-center justify-center bg-slate-600 px-8 py-8 font-mono lg:px-0 lg:py-24 print:h-[1123px] print:w-[794px] print:p-0 print:contain-size">
        <div className="grid bg-slate-300 lg:h-[1123px] lg:w-[794px] lg:grid-cols-[240px_1fr] print:h-[1123px] print:w-[794px]">
          <Sidebar />
          <div className="h-fit w-full px-3 py-4 lg:h-full">
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
    </>
  );
}

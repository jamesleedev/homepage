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
    children: (
      <ul className="list-outside list-disc pl-4 text-slate-900">
        <li className="mb-2">
          Created v2 dashboard and settings pages in Next.JS w/ TypeScript using Radix UI, Tailwind and ApexCharts, and
          fixed multiple UI issues.
        </li>
        <li>
          Worked closely with founder as the sole frontend engineer to integrate existing payment and user data APIs,
          and architect then mock missing API features.
        </li>
      </ul>
    ),
  },
  {
    company: 'Glassnode',
    companyDesc: 'BTC and ETH analytics, indicators, and charts',
    position: 'Software Engineer I',
    duration: 'Aug 2021 - Dec 2023',
    children: (
      <>
        <p className="text-xs">
          Working in small, cross-functional product teams to maintain multilingual landing pages in Next.js, with focus
          on optimising UX and conversions.
        </p>
        <ul className="list-outside list-disc pl-4 text-slate-900">
          <li className="mb-2">
            Collaborated closely with marketing, content, and design teams to optimise conversions and SEO, and
            personally lead the development of new landing pages.
          </li>
          <li className="mb-2">
            Conducted investigations into performance and tracking issues, and resolved multiple downtime incidents.
          </li>
          <li className="mb-2">
            Produced developer onboarding guides, tutorials and technical documentation on external dependencies, as
            well as incident post-mortems.
          </li>
          <li className="mb-2">
            Participated heavily in our CMS selection process, rebranding, adoption of Usercentrics CMP, tracking and
            analytics with Segment and Amplitude, and code improvement initiatives e.g. Tailwind adoption.
          </li>
          <li>Sole maintainer of GhostCMS theme and WordPress blog before transition to Prismic CMS.</li>
        </ul>
      </>
    ),
  },
  {
    company: 'Freelance',
    position: 'Frontend Engineer',
    duration: 'Aug 2020 - Aug 2021',
    children: (
      <>
        <p className="text-xs">Working with clients to create and maintain:</p>
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
    <DefaultLayout seoTitle="CV" seoDescription="James Lee Full CV" currentPath="/cv" navClassName="print:hidden">
      <div className="flex h-full min-h-[100vh] items-center justify-center gap-4 bg-slate-100 font-mono">
        <div className="grid h-[842px] w-full max-w-[595px] grid-cols-[180px_1fr] bg-slate-300">
          <Sidebar />
          <div className="w-full px-3 py-2">
            {positions.map((p: JobPositionProps) => (
              <JobPosition
                key={p.company}
                company={p.company}
                companyDesc={p.companyDesc}
                position={p.position}
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

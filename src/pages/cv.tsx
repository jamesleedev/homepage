import { Sidebar } from '@components/cv';
import { JobPosition } from '@components/cv/job-position';
import { Navigation } from '@components/nav';
import { Separator } from '@components/ui/separator';
import { type JobPositionProps } from '@src/types/cv';
import { NextSeo } from 'next-seo';

const positions: JobPositionProps[] = [
  {
    company: 'Glassnode',
    position: 'Frontend Engineer',
    duration: 'Aug 2024 - current (part time contract)',
    technology: 'Next.js + TypeScript',
    children: (
      <>
        <p className="text-sm">
          Supporting Marketing in refining B2B leads, bought back into the team due to my familiarity with the codebase.
        </p>
        <Separator className="mx-auto my-4 w-[150px] bg-slate-400" />
        <ul className="list-outside list-disc space-y-2 pl-4 text-slate-900">
          <li>Completed landing pages and pricing page refresh.</li>
          <li>
            Updated onboarding survey and multiple contact forms, and implemented new user flows for feature upsells.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: 'Hashleap',
    companyDesc: 'Early stage startup for simple B2B crypto payments',
    position: 'Frontend Engineer',
    duration: 'May 2024 (contract)',
    technology: 'Next.js + TypeScript',
    children: (
      <>
        <p className="text-sm">
          Brought into the team as the only frontend engineer to finalise Hashleap’s UI refresh as soon as possible.
        </p>
        <Separator className="mx-auto my-4 w-[150px] bg-slate-400" />
        <ul className="list-outside list-disc space-y-2 pl-4 text-slate-900">
          <li>Built dashboard and settings pages using Radix UI, Tailwind, ApexCharts, and react-hook-form.</li>
          <li>
            Worked closely with the company founder to integrate existing REST APIs, then architecting and mocked
            missing API features such as image upload and date range filtering.
          </li>
          <li>Integrated password authentication with NextAuth, and implemented JWT based password reset flow.</li>
        </ul>
      </>
    ),
  },
  {
    company: 'Glassnode',
    companyDesc: 'BTC and ETH analytics, indicators, and charts',
    position: 'Software Engineer I',
    duration: 'Aug 2021 - Dec 2023',
    technology: 'Next.js + TypeScript',
    children: (
      <>
        <p className="text-sm">
          During my time at Glassnode, I was part of the team responsible for all public-facing websites and their tech
          stacks. My team collaborated closely with marketing, content, and design teams, focused on accelerating B2C
          growth, then later adapting to the B2B market segment and strategy.
        </p>
        <Separator className="mx-auto my-4 w-[150px] bg-slate-400" />
        <ul className="list-outside list-disc space-y-2 pl-4 text-slate-900">
          <li>
            Worked in a small, cross-functional product team to maintain and improve multilingual landing pages,
            focusing on UX and conversion optimisation.
          </li>
          <li>Led the development of new landing pages.</li>
          <li>Implemented custom server side AB testing framework with Next.js middleware.</li>
          <li>
            Conducted investigations into performance and tracking issues, and resolved multiple downtime incidents,
            complete with post-mortems.
          </li>
          <li>Produced developer onboarding guides, tutorials and technical documentation on external dependencies.</li>
          <li>
            Participated heavily in the CMS selection process, acquisition rebranding, adoption of Usercentrics CMP,
            tracking and analytics with Segment and Amplitude, and code improvement initiatives, e.g. Tailwind adoption.
          </li>
          <li>Maintained GhostCMS theme and WordPress blog before transitioning to Prismic CMS.</li>
        </ul>
      </>
    ),
  },
  {
    company: 'Freelance',
    position: 'Frontend Engineer',
    duration: 'Aug 2020 - Aug 2021',
    technology: 'PHP/Browser DOM JS',
    children: (
      <>
        <p className="text-sm">
          I Worked with an e-commerce client serving UK customers as the company’s only developer to improve their
          online presence. Later, I focused on developing their online sales funnel.
        </p>
        <Separator className="mx-auto my-4 w-[150px] bg-slate-400" />
        <ul className="list-outside list-disc pl-4 text-slate-900">
          <li>Created product pages on top of WooCommerce.</li>
          <li>Produced and tested custom email templates for email marketing & CRM.</li>
          <li>Integrated Zapier webhook and SendGrid.</li>
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
      <div className="flex items-center justify-center bg-slate-600 px-8 py-8 font-mono lg:px-0 lg:py-24 print:h-[1500px] print:w-[1060px] print:p-0 print:contain-size">
        <div className="grid bg-slate-300 lg:h-[1500px] lg:w-[1060px] lg:grid-cols-[240px_1fr] print:h-[1500px] print:w-[1060px]">
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

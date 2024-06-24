import { type JobPositionProps } from '@src/types/cv';
import { type FC } from 'react';

export const JobPosition: FC<JobPositionProps> = ({
  company,
  companyDesc,
  position,
  duration,
  technology,
  children,
}) => {
  return (
    <section className="mb-5 w-full rounded bg-slate-200 p-4">
      <header className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_170px] lg:gap-16">
        <div>
          <h1 className="mb-0 text-xl font-bold text-slate-700">{company}</h1>
          {companyDesc ? <p className="text-xs text-slate-500">{companyDesc}</p> : null}
          {technology ? <p className="text-xs text-slate-500">{technology}</p> : null}
        </div>
        <div>
          <p className="mb-0 text-sm text-slate-600">{position}</p>
          <p className="text-sm text-slate-600">{duration}</p>
        </div>
      </header>
      <div className="text-sm">{children}</div>
    </section>
  );
};

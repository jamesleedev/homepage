import { type JobPositionProps } from '@src/types/cv';
import { type FC } from 'react';

export const JobPosition: FC<JobPositionProps> = ({ company, companyDesc, position, duration, children }) => {
  return (
    <section className="mb-2 w-full rounded bg-slate-200 p-2">
      <header className="grid grid-cols-[1fr_140px] gap-8">
        <div>
          <h1 className="mb-0 text-base font-bold text-slate-700">{company}</h1>
          {companyDesc ? <p className="text-[10px] leading-tight text-slate-500">{companyDesc}</p> : null}
        </div>
        <div>
          <p className="mb-0 text-xs text-slate-600">{position}</p>
          <p className="text-xs text-slate-600">{duration}</p>
        </div>
      </header>
      <div className="text-xs">{children}</div>
    </section>
  );
};

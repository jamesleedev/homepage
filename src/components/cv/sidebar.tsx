import { Separator } from '@components/ui/separator';
import { GitHubLogoIcon, GlobeIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { type FC } from 'react';

const skills = {
  proficient: ['React', 'Next.js', 'JavaScript/TypeScript', 'Sass/TailwindCSS', 'Git', 'Linux', 'REST APIs', 'CMS'],
  familiar: ['Python', 'PHP', 'CI/CD', 'DevOps', 'Unit Tests', 'Integration Tests', 'i18n'],
};

export const Sidebar: FC = () => {
  return (
    <div className="h-full bg-emerald-900">
      <div className="mb-4 bg-emerald-950 py-2">
        <h1 className="m-0 text-center text-lg font-medium text-slate-50">James Lee</h1>
      </div>
      <div className="flex flex-col gap-6 px-2">
        <section className="mb-0 [&_p]:text-sm [&_p]:text-slate-50">
          <p>
            <span>
              <GitHubLogoIcon className="mr-2 inline-block" />
            </span>
            <span>jamesleedev</span>
          </p>
          <p>
            <span>
              <LinkedInLogoIcon className="mr-2 inline-block" />
            </span>
            <span>/in/jamesl-dev</span>
          </p>
          <p className="mb-0">
            <span>
              <GlobeIcon className="mr-2 inline-block" />
            </span>
            <span>jamesl.dev</span>
          </p>
        </section>
        <Separator className="bg-slate-50" />
        <section className="mb-0">
          <h1 className="mb-2 text-base text-slate-50">Education</h1>
          <p className="text-sm text-slate-50">
            Computer Science
            <br />
            (Diploma of HE)
          </p>
          <p className="text-xs text-slate-50">Heriot-Watt University</p>
          <p className="mb-0 text-xs text-slate-400">Jul 2017 - Jul 2021</p>
        </section>
        <Separator className="bg-slate-50" />
        <section className="mb-0 [&_p]:text-xs [&_p]:text-slate-50">
          <h1 className="mb-2 text-base text-slate-50">Skills</h1>
          <h2 className="mb-2 text-xs italic text-slate-50">Proficient</h2>
          {skills.proficient.map((skill) => (
            <p className="mb-0" key={skill}>
              {skill}
            </p>
          ))}
          <h2 className="my-2 text-xs italic text-slate-50">Familiar</h2>
          {skills.familiar.map((skill) => (
            <p className="mb-0" key={skill}>
              {skill}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
};

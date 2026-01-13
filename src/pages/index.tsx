import { DefaultLayout } from '@components/layouts/default';
import { Link } from '@components/link';
import { Separator } from '@components/ui/separator';
import { ROUTES } from '@constants/routes';
import { EnvelopeClosedIcon, ExternalLinkIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';

export default function Home() {
  return (
    <DefaultLayout
      seoTitle="Home"
      seoDescription="You've reached the home of James - I do stuff in React and Next.js, Python, PHP, and Go. Also studied some Computer Science at Heriot-Watt University, UK."
      currentPath="/"
    >
      <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[minmax(0,_1fr)_1px_330px]">
        <div>
          <section>
            <h1>About</h1>
            <p>
              I&apos;m a front end developer working on React/Next.js based near London and currently open to
              opportunities, both full-time and freelance. You can drop me a message anytime using my contact details.
            </p>
            <p>
              I&apos;ve been using Linux and coding recreationally for about 10 years, and currently running Fedora. In
              terms of languages and technologies, I have used React and Next.js for 3 years, in addition to Python and
              PHP where necessary during my career.
            </p>
            <p>
              When it comes to tools, I use Notion for pretty much everything when it comes to organisation, and Jira
              for work. I code pretty much exclusively in JetBrains IDEs with glorious Vim motions, with Neovim as a
              text editor when touching a file or two.
            </p>
            <p>
              My PGP key can be found in{' '}
              <NextLink prefetch={false} href={ROUTES.pgp.href}>
                /pgp.txt
              </NextLink>
            </p>
            <p>
              For more about my professional experiences, please check my <Link route={ROUTES.cv}>full CV</Link> or use
              the navigation.
            </p>
            <p>Currently learning Go via Boot.dev, and trying out Zed.</p>
          </section>
          <section>
            <h1>Projects</h1>
            <p>
              I created a patch for two popular mods in Starbound which you can find{' '}
              <Link route={ROUTES.projectStarboundEnhancedStorage}>in my GitHub</Link>.
            </p>
            <p>
              I made some basic mods for Project Zomboid which is also{' '}
              <Link route={ROUTES.projectZomboid}>in my GitHub</Link>.
            </p>
            <p>
              There&apos;s also{' '}
              <a href={ROUTES.projectPwc.href} rel="nofollow noopener noreferrer" target="_blank">
                pwc.jamesl.net
              </a>
              , a small tool which counts the number of words in a Spotify playlist.{' '}
              <Link route={ROUTES.projectPwcGithub}>Source code here</Link>.
            </p>
            <p>Right now, I&apos;m creating my own habit tracking Android app, and my own reading list web app.</p>
          </section>
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <section>
          <h1>Contact</h1>
          <p className="mb-4">
            <span>
              <EnvelopeClosedIcon className="mr-4 inline h-6 w-6" />
            </span>
            <span>james [at] jamesl [dot] dev</span>
          </p>
          <p className="mb-4">
            <span>
              <GitHubLogoIcon className="mr-4 inline h-6 w-6" />
            </span>
            <Link route={ROUTES.github}>
              <span>jamesleedev</span>
              <span>
                <ExternalLinkIcon className="ml-2 inline-block" />
              </span>
            </Link>
          </p>
          <p className="mb-4">
            <span>
              <LinkedInLogoIcon className="mr-4 inline h-6 w-6" />
            </span>
            <Link route={ROUTES.linkedin}>
              <span>www.linkedin.com/in/jamesl-dev</span>
              <span>
                <ExternalLinkIcon className="ml-2 inline-block" />
              </span>
            </Link>
          </p>
        </section>
      </div>
    </DefaultLayout>
  );
}

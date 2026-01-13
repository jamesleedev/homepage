import { DefaultLayout } from '@components/layouts/default';
import { Separator } from '@components/ui/separator';
import { EnvelopeClosedIcon, ExternalLinkIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <DefaultLayout
      seoTitle="Home"
      seoDescription="You've reached the home of James - I do stuff in Python, React and Next.js, and studied some Computer Science at Heriot-Watt University, UK."
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
              When it comes to tools, I use Notion for pretty much everything, and Jira for work. I code pretty much
              exclusively in JetBrains IDEs with glorious Vim motions, with Neovim as a text editor when touching a file
              or two.
            </p>
            <p>
              My PGP key can be found in <Link href="https://www.jamesl.dev/pgp.txt">/pgp.txt</Link>
            </p>
            <p>
              For more about my professional experiences, please check my <Link href="/cv">full CV</Link> or use the
              navigation.
            </p>
            <p>Currently learning Go via Boot.dev, and trying out Zed.</p>
          </section>
          <section>
            <h1>Projects</h1>
            <p>
              I created a patch for two popular mods in Starbound which you can find{' '}
              <a
                href="https://github.com/jamesleedev/tdg-gic-enhanced-storage"
                rel="noopener noreferrer"
                target="_blank"
              >
                in my GitHub
              </a>
              .
            </p>
            <p>
              I made some basic mods for Project Zomboid which is also{' '}
              <a href="https://github.com/jamesleedev/zomboid" rel="noopener noreferrer" target="_blank">
                in my GitHub
              </a>
              .
            </p>
            <p>
              There&apos;s also{' '}
              <a href="https://pwc.jamesl.net" rel="nofollow noopener noreferrer">
                pwc.jamesl.net
              </a>
              , a small tool which counts the number of words in a Spotify playlist.{' '}
              <a href="https://github.com/jamesleedev/playlist-wordcount" target="_blank" rel="noopener noreferrer">
                Source code here
              </a>
              .
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
            <a href="https://github.com/jamesleedev" rel="noreferrer noopener" target="_blank">
              <span>jamesleedev</span>
              <span>
                <ExternalLinkIcon className="ml-2 inline-block" />
              </span>
            </a>
          </p>
          <p className="mb-4">
            <span>
              <LinkedInLogoIcon className="mr-4 inline h-6 w-6" />
            </span>
            <a href="https://www.linkedin.com/in/jamesl-dev" rel="noreferrer noopener" target="_blank">
              <span>www.linkedin.com/in/jamesl-dev</span>
              <span>
                <ExternalLinkIcon className="ml-2 inline-block" />
              </span>
            </a>
          </p>
        </section>
      </div>
    </DefaultLayout>
  );
}

import { DefaultLayout } from "@components/layouts/default";
import { Separator } from "@components/ui/ui/separator";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout
      seoTitle="Home"
      seoDescription="You've reached the home of James - I do stuff in Python, React and Next.js, and studied some Computer Science at Heriot-Watt University, UK."
      currentPath="/"
    >
      <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[1fr_1fr_1px_1fr]">
        <section className="md:col-span-2">
          <h1>About</h1>
          <p>
            I'm a front end developer working on React/Next.js based in
            Portsmouth and currently open to opportunities. You can drop me a
            message anytime using my contact details.
          </p>
          <p>
            I've been using Linux and coding recreationally for about 8 years,
            and I am experienced in Python and PHP, working with WordPress
            specifically, and I've worked with React and Next.js for close to 2
            and a half years. Currently dual booting Fedora and Windows 10.
          </p>
          <p>
            In terms of tools, I use Notion/Google Keep for note-taking, and
            Trello/Jira for personal/work task management. I code pretty much
            exclusively in JetBrains IDEs, with Neovim as a text editor when
            needed.
          </p>
          <p>
            My PGP key can be found in{" "}
            <Link href="https://www.jamesl.dev/pgp.txt">/pgp.txt</Link>
          </p>
        </section>
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
            <a href="https://github.com/jamesleedev" rel="noreferrer noopener">
              jamesleedev
            </a>
          </p>
          <p className="mb-4">
            <span>
              <LinkedInLogoIcon className="mr-4 inline h-6 w-6" />
            </span>
            <a
              href="https://www.linkedin.com/in/jamesl-dev"
              rel="noreferrer noopener"
            >
              www.linkedin.com/in/jamesl-dev
            </a>
          </p>
        </section>
      </div>
    </DefaultLayout>
  );
}

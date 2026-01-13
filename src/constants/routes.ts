import { type Routes } from '@src/types/routes';

export const ROUTES = {
  home: {
    href: '/',
  },
  cv: {
    href: '/cv',
  },
  github: {
    href: 'https://github.com/jamesleedev',
    external: true,
  },
  linkedin: {
    href: 'https://linkedin.com/in/jamesleedev',
    external: true,
  },
  pgp: {
    href: '/pgp.txt',
  },
  projectStarboundEnhancedStorage: {
    href: 'https://github.com/jamesleedev/tdg-gic-enhanced-storage',
    external: true,
  },
  projectZomboid: {
    href: 'https://github.com/jamesleedev/zomboid',
    external: true,
  },
  projectPwc: {
    href: 'https://pwc.jamesl.net',
    external: true,
  },
  projectPwcGithub: {
    href: 'https://github.com/jamesleedev/playlist-wordcount',
    external: true,
  },
  projectHomepage: {
    href: 'https://github.com/jamesleedev/homepage',
    external: true,
  },
} satisfies Routes;

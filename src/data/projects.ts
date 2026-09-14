export interface Project {
  title: string
  description: string
  image: string
  href?: string
  repo?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    title: 'Video Game Calendar',
    description:
      'A web app that lists upcoming video game releases with platform filtering, using data from the IGDB API.',
    image: '/videopelikalenteri.png',
    href: 'https://roopesalonen.fi/videopelikalenteri/',
    repo: 'https://github.com/roopesalonen/videopelikalenteri',
    tags: ['TypeScript', 'Vue', 'Node', 'Express'],
  },
  {
    title: 'GitLab Support for MLOps Platform',
    description:
      `As a two-person team, added full GitLab support to the repo-scaffolding CLI of an open-source MLOps platform. It now works with GitLab and self-hosted instances, not just GitHub.`,
    image: '/gitlab.png',
    href: 'https://github.com/Softala-MLOPS/oss-mlops-platform/releases/tag/DevOps-tools-CLI-v1.2.0',
    repo: 'https://github.com/Softala-MLOPS/oss-mlops-platform',
    tags: ['Python', 'MLOps', 'CI/CD', 'Kubernetes'],
  },
  {
    title: 'Sleep Tracker',
    description:
      'An Android app for logging and reviewing your sleep in calendar and weekly views.',
    image: '/sleeptracker.png',
    repo: 'https://github.com/roopesalonen/sleeptracker',
    tags: ['JavaScript', 'React Native', 'Expo', 'Firebase'],
  },
  {
    title: 'Flappy Bird',
    description:
      'A Flappy Bird clone built with Python and Pygame, compiled to WebAssembly so it also runs in the browser.',
    image: '/flappy.png',
    href: 'https://roopesalonen.fi/flappybird/',
    repo: 'https://github.com/roopesalonen/FlappyBird',
    tags: ['Python', 'Pygame', 'Pygbag', 'WebAssembly'],
  },
  {
    title: 'VPS & Web Hosting',
    description:
      'A Debian VPS I manage to host my projects, including this site. Nginx serves static sites and reverse-proxies a Node backend that powers the Video game calendar.',
    image: '/vps.png',
    tags: ['Linux', 'Nginx', 'Node', 'DevOps'],
  },
]

export interface Project {
  id: string
  title: string
  description: string
  image: string
  href: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project 1',
    description:
      'Project descripion',
    image: '/placeholder.png',
    href: '',
    tags: ['React', 'TypeScript'],
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description:
      'Project descripion',
    image: '/placeholder.png',
    href: '',
    tags: ['Node.js'],
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description:
      'Project descripion',
    image: '/placeholder.png',
    href: '',
    tags: ['Python'],
  },
]

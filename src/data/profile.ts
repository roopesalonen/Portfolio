export interface SocialLink {
  label: string
  href: string
  /** Optional icon key — must match a name in `socialIcons` (components/Intro.tsx). */
  icon?: 'github' | 'linkedin' | 'email'
}

export interface Profile {
  name: string
  title: string
  intro: string
  avatar: string
  links: SocialLink[]
}

export const profile: Profile = {
  name: 'Roope Salonen',
  title: 'Software Developer',
  intro:
    'Description',
  avatar: '/avatar.png',
  links: [
    { label: 'GitHub', href: '', icon: 'github' },
    { label: 'LinkedIn', href: '', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
  ],
}

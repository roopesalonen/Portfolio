export interface SocialLink {
  label: string
  href: string
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
    { label: 'GitHub', href: '' },
    { label: 'LinkedIn', href: '' },
  ],
}
 
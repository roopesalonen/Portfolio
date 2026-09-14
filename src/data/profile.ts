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
    `I'm a software developer currently based in Jyväskylä, Finland. I recently graduated from Haaga-Helia University of Applied Sciences with a BBA in Business Information Technology, majoring in Full-Stack Development. Programming is a genuine passion of mine, and the whole reason I chose to study it. I'm looking for my place in the industry, always excited to learn something new.`,
  avatar: '/avatar.png',
  links: [
    { label: 'GitHub', href: 'https://github.com/roopesalonen', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roopesalonen/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:roopefy@gmail.com', icon: 'email' },
  ],
}

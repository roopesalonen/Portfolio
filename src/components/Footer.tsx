import type { ComponentType, SVGProps } from 'react'
import { profile } from '../data/profile'
import { useCopyEmail } from '../hooks/useCopyEmail'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { Toast } from './Toast'

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
}

export function Footer() {
  const { toast, handleLinkClick } = useCopyEmail()

  return (
    <footer className="mt-10 flex flex-col items-center gap-4 border-t border-[var(--border)] pt-8 text-center">
      {profile.links.length > 0 && (
        <ul className="flex items-center gap-2">
          {profile.links.map((link) => {
            const Icon = link.icon ? socialIcons[link.icon] : undefined
            if (!Icon) return null
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  onClick={() => handleLinkClick(link.href, link.label)}
                  className="flex items-center justify-center p-1.5 text-[var(--muted)] transition hover:text-[var(--accent)]"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      )}

      <p className="text-xs text-[var(--muted)]">
        &copy; {new Date().getFullYear()} Roope Salonen
      </p>

      <Toast message={toast.message} show={toast.show} />
    </footer>
  )
}

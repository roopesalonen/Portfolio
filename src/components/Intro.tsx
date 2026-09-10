import { useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { Toast } from './Toast'

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
}

/** Pull the bare address out of a mailto: href, dropping any ?subject=… params. */
function mailtoAddress(href: string): string | null {
  if (!href.startsWith('mailto:')) return null
  return decodeURIComponent(href.slice('mailto:'.length).split('?')[0]) || null
}

/** Copy text, falling back to execCommand where the async Clipboard API is unavailable. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const el = document.createElement('textarea')
      el.value = text
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(el)
      return ok
    } catch {
      return false
    }
  }
}

export function Intro() {
  const [toast, setToast] = useState({ message: '', show: false })

  async function handleClick(href: string, label: string) {
    const address = mailtoAddress(href)
    if (!address) return
    if (await copyText(address)) {
      setToast({ message: `${label} address copied`, show: true })
      window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500)
    }
  }

  return (
    <header className="flex flex-col items-center text-center">
      {profile.avatar && (
        <img
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          className="h-24 w-24 rounded-full object-cover ring-2 ring-[var(--border)] sm:h-40 sm:w-40"
        />
      )}

      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-1 text-lg text-[var(--accent)]">{profile.title}</p>

      <p className="mt-4 max-w-xl leading-relaxed">{profile.intro}</p>

      {profile.links.length > 0 && (
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {profile.links.map((link) => {
            const Icon = link.icon ? socialIcons[link.icon] : undefined
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  onClick={() => handleClick(link.href, link.label)}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-medium text-[var(--chip-text)] transition hover:bg-[var(--chip-bg-hover)]"
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      )}

      <Toast message={toast.message} show={toast.show} />
    </header>
  )
}

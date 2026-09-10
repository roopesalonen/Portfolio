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
      <div className="flex items-center gap-9 sm:gap-14">
        <div className="relative shrink-0">
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt={profile.name}
              width={160}
              height={160}
              className="h-24 w-24 rounded-full object-cover ring-2 ring-[var(--border)] sm:h-40 sm:w-40"
            />
          )}

          {profile.links.length > 0 && (
            <ul className="absolute top-1/2 -right-3 flex -translate-y-1/2 flex-col gap-1 sm:-right-4 sm:gap-2">
              {profile.links.map((link) => {
                const Icon = link.icon ? socialIcons[link.icon] : undefined
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      aria-label={link.label}
                      title={link.label}
                      onClick={() => handleClick(link.href, link.label)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] text-[var(--chip-text)] shadow-md transition hover:bg-[var(--chip-bg-hover)] sm:h-9 sm:w-9"
                    >
                      {Icon && (
                        <Icon
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-base text-[var(--accent)] sm:text-lg">
            {profile.title}
          </p>
        </div>
      </div>

      <p className="mt-6 w-full max-w-2xl leading-relaxed">{profile.intro}</p>

      <Toast message={toast.message} show={toast.show} />
    </header>
  )
}

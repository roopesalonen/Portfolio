import { profile } from '../data/profile'

export function Intro() {
  return (
    <header>
      <div className="flex items-center gap-4 sm:gap-5">
        {profile.avatar && (
          <img
            src={profile.avatar}
            alt={profile.name}
            width={96}
            height={96}
            className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-[var(--border)] sm:h-24 sm:w-24"
          />
        )}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-[var(--accent)]">{profile.title}</p>
        </div>
      </div>

      <p className="mt-5 max-w-2xl leading-relaxed">{profile.intro}</p>

      {profile.links.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex rounded-md bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-medium text-[var(--chip-text)] transition hover:bg-[var(--chip-bg-hover)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

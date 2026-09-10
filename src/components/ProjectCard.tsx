import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  /** Which page edge the card sits against on wider screens. */
  align?: 'left' | 'right'
}

export function ProjectCard({ project, align = 'left' }: ProjectCardProps) {
  return (
    <article
      className={
        'group flex w-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition hover:shadow-lg sm:w-[82%] sm:flex-row ' +
        (align === 'right' ? 'sm:ml-auto' : 'sm:mr-auto')
      }
    >
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="block sm:w-2/5 sm:shrink-0"
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-video w-full object-cover sm:h-full"
        />
      </a>
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-[var(--heading)]">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-[var(--chip-bg)] px-2 py-0.5 text-xs font-medium text-[var(--chip-text)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline"
        >
          View project
          <span
            aria-hidden="true"
            className="transition group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  )
}

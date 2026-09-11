import { GitHubIcon } from './icons'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  /** Which page edge the card sits against on wider screens. */
  align?: 'left' | 'right'
}

export function ProjectCard({ project, align = 'left' }: ProjectCardProps) {
  const imageOnRight = align === 'right'
  const imageLink = project.href ?? project.repo

  const imageClass =
    'block aspect-video self-start sm:w-[55%] sm:shrink-0 ' +
    (imageOnRight ? 'sm:order-2' : '')
  const image = (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  )

  return (
    <article
      className={
        'group flex w-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition hover:shadow-lg sm:w-[85%] sm:flex-row ' +
        (imageOnRight ? 'sm:ml-auto' : 'sm:mr-auto')
      }
    >
      {imageLink ? (
        <a
          href={imageLink}
          target="_blank"
          rel="noreferrer"
          className={imageClass}
        >
          {image}
        </a>
      ) : (
        <div className={imageClass}>{image}</div>
      )}

      <div className="flex flex-1 flex-col justify-center p-5 sm:p-7">
        <h3 className="text-lg font-semibold text-[var(--heading)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed">{project.description}</p>

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

        {(project.href ?? project.repo) && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline"
              >
                View project
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

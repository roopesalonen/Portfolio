import { Intro } from './components/Intro'
import { ProjectCard } from './components/ProjectCard'
import { projects } from './data/projects'

function App() {
  return (
    <div className="mx-auto max-w-5xl overflow-x-clip px-5 py-16 sm:px-8 sm:py-24">
      <Intro />

      <main className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
          Projects
        </h2>
        <div className="mt-8 flex flex-col gap-10 sm:gap-14">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              align={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </main>

      <footer className="mt-20 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
        &copy; Roope Salonen {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App

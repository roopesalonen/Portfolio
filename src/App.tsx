import { Footer } from './components/Footer'
import { Intro } from './components/Intro'
import { ProjectCard } from './components/ProjectCard'
import { Skills } from './components/Skills'
import { projects } from './data/projects'

function App() {
  return (
    <div className="mx-auto max-w-5xl overflow-x-clip px-5 py-16 sm:px-8 sm:py-10">
      <Intro />

      <Skills />

      <main className="mt-10">
        <h2 className="text-center text-xl font-semibold tracking-tight text-[var(--heading)]">
          Projects
        </h2>
        <div className="mt-8 flex flex-col gap-10 sm:gap-14">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              align={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App

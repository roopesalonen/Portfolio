import type { IconType } from 'react-icons'
import { FaDatabase, FaJava } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'
import {
  SiAngular,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiNginx,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
} from 'react-icons/si'
import { TbInfinity } from 'react-icons/tb'
import { skills, type Skill } from '../data/skills'
import { CSharpIcon, ExpressIcon } from './icons'

const skillIcons: Record<Skill['icon'], IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  reactnative: SiReact,
  vue: SiVuedotjs,
  api: MdApi,
  linux: SiLinux,
  nginx: SiNginx,
  git: SiGit,
  github: SiGithub,
  python: SiPython,
  java: FaJava,
  cicd: TbInfinity,
  node: SiNodedotjs,
  express: ExpressIcon,
  csharp: CSharpIcon,
  unity: SiUnity,
  angular: SiAngular,
  databases: FaDatabase,
}

function SkillList({ label, items }: { label: string; items: Skill[] }) {
  return (
    <div className="w-full">
      <p className="text-sm font-medium text-[var(--muted)]">{label}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-2">
        {items.map((skill) => {
          const Icon = skillIcons[skill.icon]
          return (
            <li
              key={skill.icon}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-medium text-[var(--chip-text)]"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {skill.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
        Skills
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        <SkillList label="Comfortable with" items={skills.comfortable} />
        <SkillList label="Familiar with" items={skills.familiar} />
        <SkillList label="Also explored" items={skills.explored} />
      </div>
    </section>
  )
}

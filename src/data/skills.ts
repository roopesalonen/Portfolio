export interface Skill {
  name: string
  icon:
    | 'typescript'
    | 'javascript'
    | 'react'
    | 'reactnative'
    | 'vue'
    | 'api'
    | 'linux'
    | 'nginx'
    | 'git'
    | 'github'
    | 'python'
    | 'java'
    | 'cicd'
    | 'node'
    | 'express'
    | 'csharp'
    | 'unity'
    | 'angular'
    | 'databases'
}

export interface SkillGroups {
  comfortable: Skill[]
  familiar: Skill[]
  explored: Skill[]
}

export const skills: SkillGroups = {
  comfortable: [
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Vue', icon: 'vue' },
    { name: 'APIs', icon: 'api' },
  ],
  familiar: [
    { name: 'Node', icon: 'node' },
    { name: 'Express', icon: 'express' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Python', icon: 'python' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Nginx', icon: 'nginx' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
  ],
  explored: [
    { name: 'React Native', icon: 'reactnative' },
    { name: 'CI/CD', icon: 'cicd' },
    { name: 'Databases', icon: 'databases' },
    { name: 'Java', icon: 'java' },
    { name: 'C#', icon: 'csharp' },
    { name: 'Unity', icon: 'unity' },
  ],
}

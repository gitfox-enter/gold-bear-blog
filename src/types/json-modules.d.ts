declare module '@/data/github-projects.json' {
  interface GithubProjectData {
    featuredProjects: Array<{
      name: string
      description: string
      stars: number
      forks: number
      language: string | null
      url: string
      homepage: string | null
      topics: string[]
      updated_at: string
    }>
    allProjects: Array<{
      name: string
      full_name: string
      description: string
      stars: number
      forks: number
      language: string | null
      url: string
      homepage: string | null
      topics: string[]
      is_fork: boolean
      created_at: string
      updated_at: string
    }>
    stats: {
      total_repos: number
      total_stars: number
      total_forks: number
      languages: string[]
      last_updated: string
    }
  }
  const value: GithubProjectData
  export default value
}

declare module '@/data/project-config.json' {
  interface ProjectConfig {
    projects: Record<string, {
      title?: string
      subtitle?: string
      customDescription?: string
      image?: string
      homepage?: string
      featured?: boolean
      order?: number
    }>
  }
  const value: ProjectConfig
  export default value
}
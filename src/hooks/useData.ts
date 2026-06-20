import { useEffect, useState } from 'react'
import membersData from '../../content/team/members.json'
import projectsData from '../../content/projects/projects.json'

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  color: string
  bio: string
  skills: string[]
  status: string
}

export interface Project {
  id: string
  title: string
  description: string
  status: string
  tags: string[]
  demo: string | null
}

export function useTeamData() {
  const [members] = useState<TeamMember[]>(membersData as TeamMember[])
  const [projects] = useState<Project[]>(projectsData as Project[])
  return { members, projects }
}

interface PostMeta {
  title: string
  date: string
  author: string
  tags: string[]
  content: string
}

export function useBlogPosts(): PostMeta[] {
  const [posts, setPosts] = useState<PostMeta[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const postFiles = import.meta.glob('../../content/posts/*.md', { as: 'raw' })
      const loaded: PostMeta[] = []

      for (const [path, loader] of Object.entries(postFiles)) {
        try {
          const raw = await loader()
          const metaMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
          if (metaMatch) {
            const metaLines = metaMatch[1].split('\n')
            const meta: Record<string, string> = {}
            for (const line of metaLines) {
              const [key, ...rest] = line.split(':')
              if (key && rest.length) {
                meta[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '')
              }
            }
            loaded.push({
              title: meta.title || 'Untitled',
              date: meta.date || '',
              author: meta.author || '',
              tags: meta.tags ? meta.tags.split(',').map(t => t.trim()) : [],
              content: metaMatch[2].trim(),
            })
          }
        } catch (e) {
          console.warn(`Failed to load post: ${path}`, e)
        }
      }

      loaded.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      setPosts(loaded)
    }

    fetchPosts()
  }, [])

  return posts
}

import { motion } from 'framer-motion'
import { ExternalLink, Folder, Tag } from 'lucide-react'
import { useTeamData, type Project } from '../../hooks/useData'

const statusColors: Record<string, string> = {
  development: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  shipped: 'bg-green-500/10 text-green-600 dark:text-green-400',
  planning: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
}

const statusLabels: Record<string, string> = {
  development: 'В разработке',
  shipped: 'Запущен',
  planning: 'Планирование',
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 card-hover group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
          <Folder size={20} className="text-brand-500" />
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
          {statusLabels[project.status] || project.status}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            <Tag size={10} />
            {tag}
          </span>
        ))}
      </div>

      {/* Demo link */}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors"
        >
          <ExternalLink size={14} />
          Открыть демо
        </a>
      )}
    </motion.div>
  )
}

export function Projects() {
  const { projects } = useTeamData()

  return (
    <section className="section-padding" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Наши <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Каждый проект — результат совместной работы команды. От идеи до деплоя.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

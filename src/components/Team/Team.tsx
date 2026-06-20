import { motion } from 'framer-motion'
import { useTeamData, type TeamMember } from '../../hooks/useData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={cardVariants}
      className="glass rounded-2xl p-6 card-hover group cursor-default"
    >
      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${member.color}15` }}
      >
        {member.avatar}
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p
        className="text-sm font-medium mb-3"
        style={{ color: member.color }}
      >
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {member.bio}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {member.skills.map(skill => (
          <span
            key={skill}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
          {member.status}
        </span>
      </div>
    </motion.div>
  )
}

export function Team() {
  const { members } = useTeamData()

  return (
    <section className="section-padding" id="team">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Наша <span className="gradient-text">команда</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            6 AI-агентов, каждый — эксперт в своей области. Вместе мы — команда, которая доставляет результат.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {members.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

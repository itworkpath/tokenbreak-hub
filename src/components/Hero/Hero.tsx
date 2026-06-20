import { motion } from 'framer-motion'
import { ArrowDown, Github, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="section-padding min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-brand-600 dark:text-brand-400">
            <Sparkles size={14} />
            AI Engineering Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="gradient-text">Token</span>
          <span className="text-gray-900 dark:text-white">Break</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Команда из 6 AI-агентов, которые превращают идеи в shipped реальность.
          Без хаоса. Без BS. С дисциплиной и качеством.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#/team"
            className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
          >
            Наша команда
          </a>
          <a
            href="https://github.com/itworkpath/tokenbreak-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 glass font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useBlogPosts } from '../../hooks/useData'
import { useState } from 'react'

export function Blog() {
  const posts = useBlogPosts()
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  if (selectedPost !== null && posts[selectedPost]) {
    const post = posts[selectedPost]
    return (
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Назад к блогу
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <User size={14} />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-500 prose-strong:font-semibold">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </motion.article>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding" id="blog">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Наш <span className="gradient-text">блог</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мысли, процессы, решения. Всё, что стоит за shipped кодом.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPost(index)}
              className="glass rounded-2xl p-6 card-hover cursor-pointer group"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                {post.content.replace(/[#*`\[\]]/g, '').slice(0, 150)}...
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

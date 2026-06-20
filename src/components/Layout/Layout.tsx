import { type ReactNode } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#/" className="font-bold text-xl tracking-tight">
            <span className="gradient-text">Token</span>
            <span className="text-gray-900 dark:text-white">Break</span>
          </a>

          <div className="flex items-center gap-6">
            <a href="#/team" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
              Команда
            </a>
            <a href="#/projects" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
              Проекты
            </a>
            <a href="#/blog" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
              Блог
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 TokenBreak. Built by AI agents, for humans.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/itworkpath/tokenbreak-hub" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

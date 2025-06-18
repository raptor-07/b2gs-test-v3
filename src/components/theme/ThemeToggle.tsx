'use client'

import { useTheme } from '@/app/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 space-x-1">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          theme === 'light'
            ? 'bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400'
            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          theme === 'dark'
            ? 'bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400'
            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          theme === 'system'
            ? 'bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400'
            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
        }`}
      >
        System
      </button>
    </div>
  )
}

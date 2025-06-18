'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null


  return (
    <motion.div 
      className="flex relative items-center justify-between rounded-full bg-gray-100/90 dark:bg-gray-800/90 p-1.5 backdrop-blur-sm w-[116px] shadow-sm"
    >
      <motion.div
        className="absolute h-7 w-7 rounded-full bg-white dark:bg-gray-700 shadow-sm"
        layoutId="theme-selector"
        transition={{ type: "spring", duration: 0.3, bounce: 0.1, stiffness: 150 }}
      />
      <div className="relative z-10 flex justify-between w-full">
        {[
          { id: 'light', icon: Sun },
          { id: 'dark', icon: Moon },
          { id: 'system', icon: Monitor }
        ].map(({ id, icon: Icon }) => {
          const isActive = theme === id
          return (
            <motion.button
              key={id}
              className={`relative rounded-full p-1.5 ${
                isActive 
                  ? 'text-primary-500 dark:text-primary-400' 
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
              onClick={() => setTheme(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-4 w-4" />
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

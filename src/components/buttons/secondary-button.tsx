'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  variant?: 'default' | 'outline'
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, children, fullWidth = false, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200',
          'px-6 py-3 text-sm',
          variant === 'default' && 'bg-secondary text-white hover:bg-secondary/90',
          variant === 'outline' && 'border-2 border-secondary text-secondary hover:bg-secondary/10',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

SecondaryButton.displayName = 'SecondaryButton'

export default SecondaryButton

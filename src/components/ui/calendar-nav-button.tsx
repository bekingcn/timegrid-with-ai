'use client'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CalendarNavButtonProps {
  icon: LucideIcon
  label?: string
  onClick?: () => void
  className?: string
}

export function CalendarNavButton({
  icon: Icon,
  label,
  onClick,
  className,
}: CalendarNavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-1 rounded-md p-1 text-sm text-gray-600 hover:bg-gray-100',
        className
      )}
    >
      <Icon className="h-4 w-4" />
      {label && <span>{label}</span>}
    </button>
  )
} 
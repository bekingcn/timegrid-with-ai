'use client'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItemProps {
  icon: LucideIcon
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export function NavItem({
  icon: Icon,
  label,
  isActive = false,
  onClick,
  className,
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100',
        isActive && 'bg-gray-100 font-medium text-gray-900',
        className
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  )
} 
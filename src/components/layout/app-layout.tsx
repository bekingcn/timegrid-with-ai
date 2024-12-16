'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AppLayoutProps {
  children?: ReactNode
  className?: string
  leftSidebar?: ReactNode
  rightSidebar?: ReactNode
}

export function AppLayout({
  children,
  className,
  leftSidebar,
  rightSidebar,
}: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left Sidebar */}
      {leftSidebar && (
        <aside className="hidden w-64 shrink-0 border-r border-gray-200 md:block">
          {leftSidebar}
        </aside>
      )}

      {/* Main Content */}
      <main className={cn('flex-1 overflow-auto', className)}>{children}</main>

      {/* Right Sidebar */}
      {rightSidebar && (
        <aside className="hidden w-80 shrink-0 border-l border-gray-200 lg:block">
          {rightSidebar}
        </aside>
      )}
    </div>
  )
} 
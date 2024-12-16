'use client'

import { UserAvatar } from '@/components/ui/user-avatar'
import { HeaderActions } from '@/components/header/header-actions'

export function PageTitle() {
  return <h1 className="text-lg font-semibold">Calendar</h1>
}

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 px-4">
      <div className="flex items-center gap-2">
        <UserAvatar name="John Doe" />
        <PageTitle />
      </div>
      <HeaderActions />
    </header>
  )
} 
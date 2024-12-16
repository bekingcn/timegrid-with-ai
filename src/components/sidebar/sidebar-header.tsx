'use client'

import { Plus } from 'lucide-react'
import { UserAvatar } from '@/components/ui/user-avatar'
import { HeaderActionButton } from '@/components/ui/header-action-button'

export function DesignSync() {
  return (
    <div>
      <h2 className="text-sm font-semibold">Design Sync</h2>
      <p className="text-xs text-gray-500">11 - 11:30 AM (in 10 min)</p>
    </div>
  )
}

export function AddTaskButton() {
  return <HeaderActionButton icon={Plus} className="rounded-md p-1" />
}

export function SidebarHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <UserAvatar name="John Doe" />
        <DesignSync />
      </div>
      <div className="flex gap-1">
        <AddTaskButton />
      </div>
    </div>
  )
} 
'use client'

import { Search, Users } from 'lucide-react'
import { SidebarHeader } from './sidebar-header'
import { SidebarNav } from './sidebar-nav'
import { SidebarWorkspaces } from './sidebar-workspaces'

export function SearchInput() {
  return (
    <div className="px-4 pb-2">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search sidebar"
          className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm outline-none focus:border-blue-500"
        />
      </div>
    </div>
  )
}

export function InviteTeamButton() {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
      <Users className="h-4 w-4" />
      <span>Invite team members</span>
    </button>
  )
}

export function LeftSidebar() {
  return (
    <div className="flex h-full flex-col">
      <SidebarHeader />
      <SearchInput />
      <SidebarNav />
      <SidebarWorkspaces />
      <div className="mt-auto p-4">
        <InviteTeamButton />
      </div>
    </div>
  )
} 
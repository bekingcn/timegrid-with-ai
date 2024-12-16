'use client'

import { Folder, Plus } from 'lucide-react'
import { NavItem } from '@/components/ui/nav-item'
import { HeaderActionButton } from '@/components/ui/header-action-button'

interface WorkspaceItemProps {
  label: string
  isPrivate?: boolean
  isActive?: boolean
  onClick?: () => void
}

export function WorkspaceItem({ label, isPrivate, isActive, onClick }: WorkspaceItemProps) {
  const fullLabel = isPrivate ? `${label} (Private)` : label
  return <NavItem icon={Folder} label={fullLabel} isActive={isActive} onClick={onClick} />
}

export function SidebarWorkspaces() {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between px-2 py-1">
        <span className="text-xs font-medium text-gray-500">Workspaces (2)</span>
        <HeaderActionButton
          icon={Plus}
          className="rounded p-0.5 hover:bg-gray-100"
          onClick={() => {}}
        />
      </div>
      <div className="mt-1 space-y-1">
        <WorkspaceItem label="My Workspace" isPrivate />
        <WorkspaceItem label="Engineering" />
      </div>
    </div>
  )
} 
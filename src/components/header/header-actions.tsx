'use client'

import { Settings, Link as LinkIcon, RefreshCw, Plus, ChevronDown, X } from 'lucide-react'
import { HeaderActionButton } from '@/components/ui/header-action-button'

export function BookingLinksButton() {
  return <HeaderActionButton icon={LinkIcon} label="Booking links" />
}

export function DisplayOptionsButton() {
  return <HeaderActionButton icon={Settings} label="Display options" />
}

export function RefreshAllTasksButton() {
  return <HeaderActionButton icon={RefreshCw} label="Refresh all tasks" />
}

export function AddButton() {
  return <HeaderActionButton icon={Plus} />
}

export function WeekSelector() {
  return <HeaderActionButton label="Week" icon={ChevronDown} />
}

export function CloseButton() {
  return <HeaderActionButton icon={X} label="Close" />
}

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <BookingLinksButton />
      <DisplayOptionsButton />
      <RefreshAllTasksButton />
      <AddButton />
      <WeekSelector />
      <CloseButton />
    </div>
  )
} 
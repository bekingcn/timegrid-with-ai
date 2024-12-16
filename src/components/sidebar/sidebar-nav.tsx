'use client'

import { Calendar, ListTodo, Briefcase, Users, Book, Clock } from 'lucide-react'
import { NavItem } from '@/components/ui/nav-item'

const NAV_ITEMS = [
  { icon: Calendar, label: 'Calendar' },
  { icon: ListTodo, label: 'My Tasks' },
  { icon: Briefcase, label: 'All Tasks' },
  { icon: Users, label: 'Team Schedule' },
  { icon: Book, label: 'Tutorials' },
  { icon: Clock, label: 'Past due' },
]

export function SidebarNav() {
  return (
    <nav className="flex-1 space-y-1 p-2">
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </nav>
  )
} 
'use client'

import { MiniCalendar } from '@/components/calendar/mini-calendar'
import { Agenda } from '@/components/calendar/agenda'

export function RightSidebar() {
  return (
    <div className="flex h-full flex-col">
      <MiniCalendar />
      <Agenda />
    </div>
  )
} 
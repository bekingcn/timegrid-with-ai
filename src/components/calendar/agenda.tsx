'use client'

import { Search } from 'lucide-react'
import { format, addDays, startOfWeek } from 'date-fns'
import { CalendarNavButton } from '@/components/ui/calendar-nav-button'

export function AgendaHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-base font-semibold">Agenda</h2>
      <CalendarNavButton icon={Search} />
    </div>
  )
}

interface AgendaItemProps {
  time: string
  title: string
  color?: string
}

export function AgendaItem({ time, title, color = 'blue' }: AgendaItemProps) {
  return (
    <div className="rounded-md border border-gray-200 p-2">
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full bg-${color}-500`} />
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="mt-1 text-sm">{title}</p>
    </div>
  )
}

interface AgendaDayProps {
  date: Date
  children?: React.ReactNode
}

export function AgendaDay({ date, children }: AgendaDayProps) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium">
        {format(date, 'EEEE, MMM d')}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

export function AgendaItems() {
  const today = new Date()
  const weekStart = startOfWeek(today)

  return (
    <div className="space-y-4">
      {Array.from({ length: 7 }).map((_, i) => {
        const date = addDays(weekStart, i)
        return (
          <AgendaDay key={i} date={date}>
            <AgendaItem time="10:00 AM" title="Team sync" />
            <AgendaItem time="2:00 PM" title="Design review" color="green" />
          </AgendaDay>
        )
      })}
    </div>
  )
}

export function Agenda() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4">
        <AgendaHeader />
        <AgendaItems />
      </div>
    </div>
  )
} 
'use client'

import { Search } from 'lucide-react'
import { format, addDays, startOfWeek, isSameDay } from 'date-fns'
import { CalendarNavButton } from '@/components/ui/calendar-nav-button'
import { useCalendar } from '@/contexts/calendar-context'

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
  events: Array<{
    id: string
    title: string
    start: Date
    color: string
  }>
}

export function AgendaDay({ date, events }: AgendaDayProps) {
  if (events.length === 0) return null

  return (
    <div>
      <h3 className="mb-2 text-sm font-medium">
        {format(date, 'EEEE, MMM d')}
      </h3>
      <div className="space-y-2">
        {events.map((event) => (
          <AgendaItem
            key={event.id}
            time={format(event.start, 'h:mm a')}
            title={event.title}
            color={event.color}
          />
        ))}
      </div>
    </div>
  )
}

export function AgendaItems() {
  const { state } = useCalendar()
  const weekStart = startOfWeek(state.selectedDate)

  return (
    <div className="space-y-4">
      {Array.from({ length: 7 }).map((_, i) => {
        const date = addDays(weekStart, i)
        const dayEvents = state.events.filter((event) =>
          isSameDay(event.start, date)
        )
        return <AgendaDay key={i} date={date} events={dayEvents} />
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
'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import { CalendarNavButton } from '@/components/ui/calendar-nav-button'
import { cn } from '@/lib/utils'

export function MiniCalendarHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-base font-semibold">{format(new Date(), 'MMMM yyyy')}</h2>
      <div className="flex items-center gap-2">
        <CalendarNavButton icon={ChevronLeft} />
        <CalendarNavButton icon={ChevronRight} />
      </div>
    </div>
  )
}

interface MiniDayHeaderProps {
  day: string
}

export function MiniDayHeader({ day }: MiniDayHeaderProps) {
  return (
    <div className="py-1 text-center text-xs font-medium text-gray-500">
      {day}
    </div>
  )
}

interface MiniDayProps {
  day: number
  isToday?: boolean
  isSelected?: boolean
  onClick?: () => void
}

export function MiniDay({ day, isToday, isSelected, onClick }: MiniDayProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'aspect-square rounded-md p-1 text-sm hover:bg-gray-100',
        isToday && 'font-semibold text-blue-500',
        isSelected && 'bg-blue-50'
      )}
    >
      {day}
    </button>
  )
}

export function MiniCalendarGrid() {
  return (
    <div className="grid grid-cols-7 gap-1 text-center text-xs">
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
        <MiniDayHeader key={day} day={day} />
      ))}
      {Array.from({ length: 35 }).map((_, i) => (
        <MiniDay
          key={i}
          day={i + 1}
          isToday={i + 1 === new Date().getDate()}
        />
      ))}
    </div>
  )
}

export function MiniCalendar() {
  return (
    <div className="border-b border-gray-200 p-4">
      <MiniCalendarHeader />
      <MiniCalendarGrid />
    </div>
  )
} 
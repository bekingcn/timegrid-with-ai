'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
import { CalendarNavButton } from '@/components/ui/calendar-nav-button'
import { cn } from '@/lib/utils'
import { useCalendar } from '@/contexts/calendar-context'

export function MiniCalendarHeader() {
  const { state, goToPreviousPeriod, goToNextPeriod } = useCalendar()
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-base font-semibold">{format(state.currentMonth, 'MMMM yyyy')}</h2>
      <div className="flex items-center gap-2">
        <CalendarNavButton icon={ChevronLeft} onClick={goToPreviousPeriod} />
        <CalendarNavButton icon={ChevronRight} onClick={goToNextPeriod} />
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
  date: Date
  isToday?: boolean
  isSelected?: boolean
  onClick?: () => void
}

export function MiniDay({ date, isToday, isSelected, onClick }: MiniDayProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'aspect-square rounded-md p-1 text-sm hover:bg-gray-100',
        isToday && 'font-semibold text-blue-500',
        isSelected && 'bg-blue-50'
      )}
    >
      {format(date, 'd')}
    </button>
  )
}

export function MiniCalendarGrid() {
  const { state, selectDate } = useCalendar()
  const monthStart = startOfMonth(state.currentMonth)
  const monthEnd = endOfMonth(state.currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  return (
    <div className="grid grid-cols-7 gap-1 text-center text-xs">
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
        <MiniDayHeader key={day} day={day} />
      ))}
      {days.map((date) => (
        <MiniDay
          key={date.toISOString()}
          date={date}
          isToday={isSameDay(date, new Date())}
          isSelected={isSameDay(date, state.selectedDate)}
          onClick={() => selectDate(date)}
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
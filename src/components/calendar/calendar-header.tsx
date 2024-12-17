'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import { CalendarNavButton } from '@/components/ui/calendar-nav-button'
import { useCalendar } from '@/contexts/calendar-context'

export function TodayButton() {
  const { goToToday } = useCalendar()
  return (
    <button
      onClick={goToToday}
      className="rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
    >
      Today
    </button>
  )
}

export function DateNavigator() {
  const { goToPreviousPeriod, goToNextPeriod } = useCalendar()
  return (
    <div className="flex items-center gap-1">
      <CalendarNavButton icon={ChevronLeft} onClick={goToPreviousPeriod} />
      <CalendarNavButton icon={ChevronRight} onClick={goToNextPeriod} />
    </div>
  )
}

export function MonthSelector() {
  const { state } = useCalendar()
  return (
    <h2 className="text-lg font-semibold">
      {format(state.currentMonth, 'MMMM yyyy')}
    </h2>
  )
}

export function ViewSelector() {
  const { state, changeView } = useCalendar()
  const views: Array<'day' | 'week' | 'month'> = ['day', 'week', 'month']

  return (
    <div className="flex rounded-md border border-gray-200">
      {views.map((view) => (
        <button
          key={view}
          onClick={() => changeView(view)}
          className={`px-3 py-1 text-sm capitalize ${
            state.currentView === view
              ? 'bg-gray-100 font-medium text-gray-900'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {view}
        </button>
      ))}
    </div>
  )
}

export function CalendarHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
      <div className="flex items-center gap-2">
        <TodayButton />
        <DateNavigator />
        <MonthSelector />
      </div>
      <ViewSelector />
    </div>
  )
} 
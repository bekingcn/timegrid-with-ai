'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import { CalendarNavButton } from '@/components/ui/calendar-nav-button'

export function TodayButton() {
  return (
    <button className="rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100">
      Today
    </button>
  )
}

export function DateNavigator() {
  return (
    <div className="flex items-center gap-1">
      <CalendarNavButton icon={ChevronLeft} />
      <CalendarNavButton icon={ChevronRight} />
    </div>
  )
}

export function MonthSelector() {
  return <h2 className="text-lg font-semibold">{format(new Date(), 'MMMM yyyy')}</h2>
}

export function CalendarHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
      <div className="flex items-center gap-2">
        <TodayButton />
        <DateNavigator />
        <MonthSelector />
      </div>
    </div>
  )
} 
'use client'

import { format, addDays, startOfWeek } from 'date-fns'
import { CalendarHeader } from './calendar-header'
import { TimeGrid, TimeSlot, TimeLabel } from './time-grid'
import { CalendarDay } from './calendar-day'
import { useCalendar } from '@/contexts/calendar-context'

const HOURS = Array.from({ length: 24 }, (_, i) => i) // (0:00 AM to 11:00 PM)

export function CalendarGrid() {
  const { state } = useCalendar()
  const weekStart = startOfWeek(state.selectedDate)

  return (
    <div className="flex flex-1">
      <div className="w-16 shrink-0 border-r border-gray-200 pt-14">
        {HOURS.map((hour) => (
          <TimeLabel key={hour} hour={hour} />
        ))}
      </div>

      <div className="flex flex-1">
        {Array.from({ length: 7 }).map((_, dayIndex) => {
          const date = addDays(weekStart, dayIndex)
          const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')

          return (
            <CalendarDay key={dayIndex} date={date} isToday={isToday}>
              <TimeGrid date={date} />
            </CalendarDay>
          )
        })}
      </div>
    </div>
  )
}

export function CalendarView() {
  return (
    <div className="flex h-full flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <CalendarGrid />
      </div>
    </div>
  )
} 
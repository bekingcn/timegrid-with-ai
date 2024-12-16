'use client'

import { format, addDays, startOfWeek } from 'date-fns'
import { CalendarHeader } from './calendar-header'
import { TimeGrid, TimeSlot, EventItem } from './time-grid'
import { CalendarDay } from './calendar-day'

const HOURS = Array.from({ length: 12 }, (_, i) => i + 9) // 9 AM to 8 PM

export function CalendarGrid() {
  const today = new Date()
  const weekStart = startOfWeek(today)

  return (
    <div className="flex flex-1">
      {Array.from({ length: 7 }).map((_, dayIndex) => {
        const date = addDays(weekStart, dayIndex)
        const isToday = format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')

        return (
          <CalendarDay key={dayIndex} date={date} isToday={isToday}>
            {HOURS.map((hour) => (
              <TimeSlot key={hour} hour={hour}>
                {hour === 10 && dayIndex === 3 && (
                  <EventItem title="Team sync" />
                )}
                {hour === 14 && dayIndex === 3 && (
                  <EventItem title="Design review" color="green" />
                )}
              </TimeSlot>
            ))}
          </CalendarDay>
        )
      })}
    </div>
  )
}

export function CalendarView() {
  return (
    <div className="flex h-full flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        {/* Time Labels */}
        <TimeGrid />
        {/* Days Grid */}
        <CalendarGrid />
      </div>
    </div>
  )
} 
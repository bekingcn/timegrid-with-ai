'use client'

import { format, addHours, startOfDay } from 'date-fns'

const HOURS = Array.from({ length: 12 }, (_, i) => i + 9) // 9 AM to 8 PM

interface TimeSlotProps {
  hour: number
  children?: React.ReactNode
}

export function TimeSlot({ hour, children }: TimeSlotProps) {
  return (
    <div className="relative h-14 border-t border-gray-200 first:border-t-0">
      {children}
    </div>
  )
}

export function TimeLabel({ hour }: { hour: number }) {
  return (
    <div className="relative h-14 border-t border-gray-200 text-right">
      <span className="absolute -top-2.5 right-2 text-xs text-gray-500">
        {format(addHours(startOfDay(new Date()), hour), 'h a')}
      </span>
    </div>
  )
}

interface EventItemProps {
  title: string
  color?: string
}

export function EventItem({ title, color = 'blue' }: EventItemProps) {
  return (
    <div className={`absolute inset-x-0 top-0 m-1 rounded bg-${color}-100 p-1`}>
      <div className="flex items-center gap-1">
        <div className={`h-2 w-2 rounded-full bg-${color}-500`} />
        <span className="text-xs">{title}</span>
      </div>
    </div>
  )
}

export function TimeGrid() {
  return (
    <div className="flex flex-1">
      {/* Time Labels */}
      <div className="w-16 shrink-0 border-r border-gray-200 pt-14">
        {HOURS.map((hour) => (
          <TimeLabel key={hour} hour={hour} />
        ))}
      </div>

      {/* Time Slots */}
      <div className="flex-1">
        {HOURS.map((hour) => (
          <TimeSlot key={hour} hour={hour}>
            {hour === 10 && <EventItem title="Team sync" />}
            {hour === 14 && <EventItem title="Design review" color="green" />}
          </TimeSlot>
        ))}
      </div>
    </div>
  )
} 
'use client'

import { format } from 'date-fns'
import { cn } from '@/lib/utils'

interface DayHeaderProps {
  date: Date
  isToday?: boolean
}

export function DayHeader({ date, isToday }: DayHeaderProps) {
  return (
    <div
      className={cn(
        'flex h-14 flex-col items-center justify-center border-b border-gray-200',
        isToday && 'bg-blue-50'
      )}
    >
      <span className="text-xs font-medium text-gray-500">
        {format(date, 'EEE')}
      </span>
      <span
        className={cn(
          'mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-sm',
          isToday
            ? 'bg-blue-500 font-semibold text-white'
            : 'font-medium text-gray-900'
        )}
      >
        {format(date, 'd')}
      </span>
    </div>
  )
}

interface CalendarDayProps {
  date: Date
  isToday?: boolean
  children?: React.ReactNode
}

export function CalendarDay({ date, isToday, children }: CalendarDayProps) {
  return (
    <div className="flex flex-1 flex-col border-r border-gray-200 last:border-r-0">
      <DayHeader date={date} isToday={isToday} />
      <div className="flex-1">{children}</div>
    </div>
  )
} 
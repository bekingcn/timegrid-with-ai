'use client'

import { useState } from 'react'
import { format, addHours, startOfDay, differenceInMinutes, isSameDay, isWithinInterval, addMinutes } from 'date-fns'
import { useCalendar } from '@/contexts/calendar-context'
import { AddEventModal } from './add-event-modal'
import { EventModal } from './event-modal'
import { DraggableEvent } from './draggable-event'

// 全天时间范围 (0:00 AM to 11:00 PM)
const HOURS = Array.from({ length: 24 }, (_, i) => i)

interface TimeSlotProps {
  hour: number
  date: Date
  children?: React.ReactNode
  onTimeClick: (date: Date) => void
  onDrop: (e: React.DragEvent, date: Date) => void
}

export function TimeSlot({ hour, date, children, onTimeClick, onDrop }: TimeSlotProps) {
  const slotDate = addHours(startOfDay(date), hour)
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    onDrop(e, slotDate)
  }
  
  return (
    <div
      className="relative h-14 border-t border-gray-200 first:border-t-0"
      onClick={() => onTimeClick(slotDate)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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

interface TimeGridProps {
  date: Date
}

export function TimeGrid({ date }: TimeGridProps) {
  const { state, updateEvent } = useCalendar()
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false)
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false)
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)

  const handleTimeClick = (slotDate: Date) => {
    setSelectedTime(slotDate)
    setIsAddEventModalOpen(true)
  }

  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId)
    setIsEditEventModalOpen(true)
  }

  const handleEventDrop = (e: React.DragEvent, newStart: Date) => {
    const eventId = e.dataTransfer.getData('text/plain')
    const event = state.events.find((ev) => ev.id === eventId)
    
    if (event) {
      const duration = differenceInMinutes(event.end, event.start)
      // Round to nearest 30 minutes
      const roundedMinutes = Math.round(newStart.getMinutes() / 30) * 30
      const roundedStart = new Date(newStart)
      roundedStart.setMinutes(roundedMinutes)
      const newEnd = addMinutes(roundedStart, duration)
      
      // Ensure the event stays within the day
      const dayStart = startOfDay(date)
      const dayEnd = addHours(dayStart, 24)
      
      if (roundedStart >= dayStart && newEnd <= dayEnd) {
        updateEvent({
          ...event,
          start: roundedStart,
          end: newEnd,
        })
      }
    }
  }

  // Get events for this day
  const dayEvents = state.events.filter(event => {
    const eventStart = new Date(event.start)
    const eventEnd = new Date(event.end)
    const currentDate = new Date(date)
    const dayStart = startOfDay(currentDate)
    const dayEnd = addHours(dayStart, 24)

    console.log('Event:', {
      event,
      eventStart: format(eventStart, 'yyyy-MM-dd HH:mm'),
      eventEnd: format(eventEnd, 'yyyy-MM-dd HH:mm'),
      dayStart: format(dayStart, 'yyyy-MM-dd HH:mm'),
      dayEnd: format(dayEnd, 'yyyy-MM-dd HH:mm'),
      overlapsDay: isWithinInterval(eventStart, { start: dayStart, end: dayEnd }) ||
                  isWithinInterval(eventEnd, { start: dayStart, end: dayEnd }) ||
                  (eventStart <= dayStart && eventEnd >= dayEnd)
    })

    return isWithinInterval(eventStart, { start: dayStart, end: dayEnd }) ||
           isWithinInterval(eventEnd, { start: dayStart, end: dayEnd }) ||
           (eventStart <= dayStart && eventEnd >= dayEnd)
  })

  console.log('Day events:', dayEvents)

  return (
    <>
      <div className="flex flex-col flex-1">
        {HOURS.map((hour) => {
          const hourEvents = dayEvents.filter(event => {
            const eventStart = new Date(event.start)
            const slotStart = addHours(startOfDay(date), hour)
            const slotEnd = addHours(slotStart, 1)
            
            // Only show event in its start hour slot
            return eventStart.getHours() === hour
          })
          
          console.log(`Events for hour ${hour}:`, hourEvents)
          
          return (
            <TimeSlot
              key={hour}
              hour={hour}
              date={date}
              onTimeClick={handleTimeClick}
              onDrop={handleEventDrop}
            >
              {hourEvents.map((event) => (
                <DraggableEvent
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  start={event.start}
                  end={event.end}
                  color={event.color}
                  onEventClick={handleEventClick}
                />
              ))}
            </TimeSlot>
          )
        })}
      </div>

      <AddEventModal
        isOpen={isAddEventModalOpen}
        onClose={() => setIsAddEventModalOpen(false)}
        initialDate={selectedTime || undefined}
      />

      {selectedEventId && (
        <EventModal
          isOpen={isEditEventModalOpen}
          onClose={() => {
            setIsEditEventModalOpen(false)
            setSelectedEventId(null)
          }}
          eventId={selectedEventId}
        />
      )}
    </>
  )
} 
'use client'

import { useRef, useState } from 'react'
import { useCalendar } from '@/contexts/calendar-context'
import { addMinutes, differenceInMinutes, startOfDay } from 'date-fns'

interface DraggableEventProps {
  id: string
  title: string
  start: Date
  end: Date
  color?: string
  onEventClick: (eventId: string) => void
}

export function DraggableEvent({
  id,
  title,
  start,
  end,
  color = 'blue',
  onEventClick,
}: DraggableEventProps) {
  const { updateEvent } = useCalendar()
  const eventRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const duration = differenceInMinutes(end, start)
  const height = (duration / 60) * 56 // 56px is the height of one hour

  const handleDragStart = (e: React.DragEvent) => {
    if (e.target === eventRef.current) {
      setIsDragging(true)
      const rect = eventRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      e.dataTransfer.setData('text/plain', id)
      e.dataTransfer.effectAllowed = 'move'
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsResizing(true)
    document.addEventListener('mousemove', handleResize)
    document.addEventListener('mouseup', handleResizeEnd)
  }

  const handleResize = (e: MouseEvent) => {
    if (!eventRef.current || !isResizing) return

    const rect = eventRef.current.getBoundingClientRect()
    const newHeight = Math.max(28, e.clientY - rect.top) // Minimum height of 28px (30 minutes)
    const newDuration = Math.round((newHeight / 56) * 60 / 30) * 30 // Round to nearest 30 minutes
    
    // Ensure the event doesn't extend beyond the day
    const dayEnd = new Date(start)
    dayEnd.setHours(23, 59, 59)
    const maxDuration = differenceInMinutes(dayEnd, start)
    const finalDuration = Math.min(newDuration, maxDuration)
    
    const newEnd = addMinutes(start, finalDuration)
    
    updateEvent({
      id,
      title,
      start,
      end: newEnd,
      color,
    })
  }

  const handleResizeEnd = () => {
    setIsResizing(false)
    document.removeEventListener('mousemove', handleResize)
    document.removeEventListener('mouseup', handleResizeEnd)
  }

  return (
    <div
      ref={eventRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={(e) => {
        e.stopPropagation()
        onEventClick(id)
      }}
      className={`relative mx-1 cursor-move rounded bg-${color}-100 p-2 hover:bg-${color}-200`}
      style={{
        height: `${height}px`,
        minHeight: '28px', // Minimum height for 30 minutes
        zIndex: isDragging ? 20 : 10
      }}
    >
      <div className="flex items-center gap-1 overflow-hidden">
        <div className={`h-2 w-2 shrink-0 rounded-full bg-${color}-500`} />
        <span className="truncate text-xs font-medium">{title}</span>
      </div>
      {height >= 28 && ( // Only show resize handle if event is at least 30 minutes
        <div
          className="absolute bottom-0 left-1/2 h-2 w-4 -translate-x-1/2 cursor-ns-resize"
          onMouseDown={handleResizeStart}
        >
          <div className={`mx-auto h-1 w-2 rounded-full bg-${color}-500`} />
        </div>
      )}
    </div>
  )
} 
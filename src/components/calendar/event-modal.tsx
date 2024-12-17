'use client'

import { useState } from 'react'
import { Modal } from '@/components/ui/modal'
import { useCalendar } from '@/contexts/calendar-context'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  eventId: string
}

export function EventModal({ isOpen, onClose, eventId }: EventModalProps) {
  const { state, updateEvent, deleteEvent } = useCalendar()
  const event = state.events.find((e) => e.id === eventId)

  if (!event) return null

  const [title, setTitle] = useState(event.title)
  const [start, setStart] = useState(format(event.start, "yyyy-MM-dd'T'HH:mm"))
  const [end, setEnd] = useState(format(event.end, "yyyy-MM-dd'T'HH:mm"))
  const [color, setColor] = useState(event.color)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateEvent({
      ...event,
      title,
      start: new Date(start),
      end: new Date(end),
      color,
    })
    onClose()
  }

  const handleDelete = () => {
    deleteEvent(event.id)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Event">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700">
              Start
            </label>
            <input
              type="datetime-local"
              id="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="end" className="block text-sm font-medium text-gray-700">
              End
            </label>
            <input
              type="datetime-local"
              id="end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center gap-1 rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
} 
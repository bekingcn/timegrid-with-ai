'use client'

import { useState } from 'react'
import { Modal } from '@/components/ui/modal'
import { useCalendar } from '@/contexts/calendar-context'
import { format } from 'date-fns'

interface AddEventModalProps {
  isOpen: boolean
  onClose: () => void
  initialDate?: Date
}

export function AddEventModal({ isOpen, onClose, initialDate = new Date() }: AddEventModalProps) {
  const { addEvent } = useCalendar()
  const [title, setTitle] = useState('')
  const [start, setStart] = useState(format(initialDate, "yyyy-MM-dd'T'HH:mm"))
  const [end, setEnd] = useState(
    format(new Date(initialDate.getTime() + 30 * 60000), "yyyy-MM-dd'T'HH:mm")
  )
  const [color, setColor] = useState('blue')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const startDate = new Date(start)
    const endDate = new Date(end)
    
    console.log('Adding event:', {
      start: startDate,
      end: endDate,
      title,
      color
    })
    
    addEvent({
      id: crypto.randomUUID(),
      title,
      start: startDate,
      end: endDate,
      color,
    })
    onClose()
    setTitle('')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Event">
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

        <div className="flex justify-end gap-2">
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
            Add Event
          </button>
        </div>
      </form>
    </Modal>
  )
} 
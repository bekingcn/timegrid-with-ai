'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { addDays, addMonths, startOfDay } from 'date-fns'

interface Event {
  id: string
  title: string
  start: Date
  end: Date
  color: string
}

interface CalendarState {
  selectedDate: Date
  currentView: 'day' | 'week' | 'month'
  currentMonth: Date
  events: Event[]
}

type CalendarAction =
  | { type: 'SELECT_DATE'; payload: Date }
  | { type: 'CHANGE_VIEW'; payload: 'day' | 'week' | 'month' }
  | { type: 'GO_TO_TODAY' }
  | { type: 'GO_TO_NEXT_PERIOD' }
  | { type: 'GO_TO_PREVIOUS_PERIOD' }
  | { type: 'ADD_EVENT'; payload: Event }
  | { type: 'UPDATE_EVENT'; payload: Event }
  | { type: 'DELETE_EVENT'; payload: string }

interface CalendarContextType {
  state: CalendarState
  goToToday: () => void
  goToNextPeriod: () => void
  goToPreviousPeriod: () => void
  selectDate: (date: Date) => void
  changeView: (view: 'day' | 'week' | 'month') => void
  addEvent: (event: Event) => void
  updateEvent: (event: Event) => void
  deleteEvent: (eventId: string) => void
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined)

function calendarReducer(state: CalendarState, action: CalendarAction): CalendarState {
  switch (action.type) {
    case 'SELECT_DATE':
      return {
        ...state,
        selectedDate: startOfDay(action.payload),
      }
    case 'CHANGE_VIEW':
      return {
        ...state,
        currentView: action.payload,
      }
    case 'GO_TO_TODAY':
      return {
        ...state,
        selectedDate: startOfDay(new Date()),
        currentMonth: startOfDay(new Date()),
      }
    case 'GO_TO_NEXT_PERIOD':
      switch (state.currentView) {
        case 'day':
          return {
            ...state,
            selectedDate: addDays(state.selectedDate, 1),
            currentMonth: addMonths(state.currentMonth, 1),
          }
        case 'week':
          return {
            ...state,
            selectedDate: addDays(state.selectedDate, 7),
            currentMonth: addMonths(state.currentMonth, 1),
          }
        case 'month':
          return {
            ...state,
            currentMonth: addMonths(state.currentMonth, 1),
          }
      }
    case 'GO_TO_PREVIOUS_PERIOD':
      switch (state.currentView) {
        case 'day':
          return {
            ...state,
            selectedDate: addDays(state.selectedDate, -1),
            currentMonth: addMonths(state.currentMonth, -1),
          }
        case 'week':
          return {
            ...state,
            selectedDate: addDays(state.selectedDate, -7),
            currentMonth: addMonths(state.currentMonth, -1),
          }
        case 'month':
          return {
            ...state,
            currentMonth: addMonths(state.currentMonth, -1),
          }
      }
    case 'ADD_EVENT': {
      console.log('Adding event to state:', action.payload)
      const newEvents = [...state.events, action.payload]
      console.log('New events state:', newEvents)
      return {
        ...state,
        events: newEvents,
      }
    }
    case 'UPDATE_EVENT': {
      console.log('Updating event:', action.payload)
      const newEvents = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event
      )
      console.log('Updated events state:', newEvents)
      return {
        ...state,
        events: newEvents,
      }
    }
    case 'DELETE_EVENT': {
      console.log('Deleting event:', action.payload)
      const newEvents = state.events.filter((event) => event.id !== action.payload)
      console.log('New events state after deletion:', newEvents)
      return {
        ...state,
        events: newEvents,
      }
    }
    default:
      return state
  }
}

export function CalendarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(calendarReducer, {
    selectedDate: startOfDay(new Date()),
    currentView: 'week',
    currentMonth: startOfDay(new Date()),
    events: [],
  })

  const contextValue: CalendarContextType = {
    state,
    goToToday: () => dispatch({ type: 'GO_TO_TODAY' }),
    goToNextPeriod: () => dispatch({ type: 'GO_TO_NEXT_PERIOD' }),
    goToPreviousPeriod: () => dispatch({ type: 'GO_TO_PREVIOUS_PERIOD' }),
    selectDate: (date: Date) => dispatch({ type: 'SELECT_DATE', payload: date }),
    changeView: (view) => dispatch({ type: 'CHANGE_VIEW', payload: view }),
    addEvent: (event) => {
      console.log('Dispatching ADD_EVENT:', event)
      dispatch({ type: 'ADD_EVENT', payload: event })
    },
    updateEvent: (event) => {
      console.log('Dispatching UPDATE_EVENT:', event)
      dispatch({ type: 'UPDATE_EVENT', payload: event })
    },
    deleteEvent: (eventId) => {
      console.log('Dispatching DELETE_EVENT:', eventId)
      dispatch({ type: 'DELETE_EVENT', payload: eventId })
    },
  }

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendar() {
  const context = useContext(CalendarContext)
  if (context === undefined) {
    throw new Error('useCalendar must be used within a CalendarProvider')
  }
  return context
} 
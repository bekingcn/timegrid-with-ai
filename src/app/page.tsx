import { AppLayout } from '@/components/layout/app-layout'
import { Header } from '@/components/layout/header'
import { LeftSidebar } from '@/components/sidebar/left-sidebar'
import { RightSidebar } from '@/components/sidebar/right-sidebar'
import { CalendarView } from '@/components/calendar/calendar-view'
import { CalendarProvider } from '@/contexts/calendar-context'

export default function Home() {
  return (
    <CalendarProvider>
      <AppLayout
        leftSidebar={<LeftSidebar />}
        rightSidebar={<RightSidebar />}
      >
        <div className="flex h-full flex-col">
          <Header />
          <CalendarView />
        </div>
      </AppLayout>
    </CalendarProvider>
  )
}

import { AppLayout } from '@/components/layout/app-layout'
import { Header } from '@/components/layout/header'
import { LeftSidebar } from '@/components/sidebar/left-sidebar'
import { RightSidebar } from '@/components/sidebar/right-sidebar'
import { CalendarView } from '@/components/calendar/calendar-view'

export default function Home() {
  return (
    <AppLayout
      leftSidebar={<LeftSidebar />}
      rightSidebar={<RightSidebar />}
    >
      <div className="flex h-full flex-col">
        <Header />
        <CalendarView />
      </div>
    </AppLayout>
  )
}

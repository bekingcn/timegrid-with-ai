Create detailed components with these requirements:

1. Use the `'use client'` directive for client-side components.
2. Style with Tailwind CSS utility classes for responsive design.
3. Use Lucide React for icons (from the `lucide-react` package). Do NOT use other UI libraries unless requested.
4. Use stock photos from `picsum.photos` where appropriate, only valid URLs you know exist. For user avatars, use an existing placeholder image URL.
5. Configure `next.config.js` image remotePatterns to enable stock photos from `picsum.photos` and for the user avatars.
6. Avoid duplicate components.
7. Automatically source and display logos from a CDN in design placeholders.
8. Follow proper import practices:

    * Use `@/` path aliases.
    * Keep component imports organized.
    * Update the current `src/app/page.tsx` with new comprehensive code.
    * Don't forget root route (`page.tsx`) handling.
    * You MUST complete the entire prompt before stopping.

**Layout Overview:**

* The page is a calendar application with a main calendar view, a side bar, a mini calendar, and an agenda. The layout is split into three main sections: a left sidebar, a main content calendar section, and a right sidebar with the mini calendar and agenda.
* Component Hierarchy:
  * `AppLayout` (container)
    * `Header`
      * `UserAvatar`
      * `PageTitle`
      * `HeaderActions`
        * `BookingLinksButton`
        * `DisplayOptionsButton`
        * `RefreshAllTasksButton`
        * `AddButton`
        * `WeekSelector`
        * `CloseButton`
    * `Sidebar`
      * `SidebarHeader`
        * `UserAvatar`
        * `UserName`
        * `DesignSync`
        * `AddTaskButton`
        * `AddProjectButton`
        * `SearchInput`
      * `SidebarNav`
        * `NavItem`
      * `SidebarWorkspaces`
        * `WorkspaceItem`
    * `MainContent`
      * `CalendarHeader`
        * `TodayButton`
        * `MonthSelector`
        * `DateNavigator`
      * `CalendarGrid`
        * `DayHeader`
        * `TimeGrid`
          * `TimeSlot`
          * `EventItem`
    * `RightSidebar`
      * `MiniCalendar`
        * `MiniCalendarHeader`
          * `MonthSelector`
          * `DateNavigator`
        * `MiniCalendarGrid`
                       * `MiniDayHeader`
          * `MiniDay`
      * `Agenda`
        * `AgendaHeader`
          * `AgendaTitle`
          * `AgendaDropdown`
        * `AgendaItems`
          * `AgendaItem`
* Responsive behavior:
  * `sm` (less than 640px): The left sidebar collapses into a hamburger menu (not shown in the image but implied), main content takes full width, and the right sidebar collapses.
  * `md` (640px and above): Sidebar is visible, main content takes the remaining width, and the right sidebar is visible.
  * `lg` (1024px and above): The layout should remain as it is in the screenshot.
  * `xl` (1280px and above): The layout should remain as it is in the screenshot, but the elements should scale up nicely.

**Component Details:**

* **`AppLayout`:**
  * Purpose: Container for the entire application layout.
  * Props: None.
  * State Management: None.
  * Responsibilities: Setting up the overall structure and responsive behavior of the app.
* **`Header`:**
  * Purpose: Contains the user profile, app title and the header actions.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying application header, user profile and action buttons.
* **`UserAvatar`**
  * Purpose: Displays the user's avatar.
  * Props: `imageUrl`:string
  * State Management: None.
  * Responsibilities: Display the user's avatar, default should be a placeholder.
* **`PageTitle`:**
  * Purpose: Displays the app's title.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the title of the application.
* **`HeaderActions`:**
  * Purpose: Container for all action buttons in the Header
  * Props: None.
  * State Management: None
  * Responsibilities: Displaying header action buttons, and setting up the correct flow.
* **`BookingLinksButton`:**
  * Purpose: Button to access booking links.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a booking links button and handling click events.
* **`DisplayOptionsButton`:**
  * Purpose: Button to access display options.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a display options button and handling click events.
* **`RefreshAllTasksButton`:**
  * Purpose: Button to refresh all tasks.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a refresh tasks button and handling click events.
* **`AddButton`:**
  * Purpose: Button to add a new task or project.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying an add button and handling click events.
* **`WeekSelector`:**
  * Purpose: Dropdown to select a week view of the calendar.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a week selector and handling change events.
* **`CloseButton`:**
  * Purpose: Button to close current view.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a close button and handling click events.
* **`Sidebar`:**
  * Purpose: Container for the left-side navigation and workspaces.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the left navigation sidebar.
* **`SidebarHeader`:**
  * Purpose: Container for the sidebar header.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the sidebar header and user details.
* **`UserName`**
  * Purpose: Display the name of the user.
  * Props: None.
  * State Management: None.
  * Responsibilities: Display the user's name.
* **`DesignSync`**
  * Purpose: Display the DesignSync label.
  * Props: None.
  * State Management: None.
  * Responsibilities: Display the DesignSync details.
* **`AddTaskButton`:**
  * Purpose: Button to add a new task.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying an add task button and handling click events.
* **`AddProjectButton`:**
  * Purpose: Button to add a new project.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying an add project button and handling click events.
* **`SearchInput`:**
  * Purpose: Input field for searching the sidebar.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the search input and handling change events.
* **`SidebarNav`:**
  * Purpose: Container for the navigation links in the sidebar.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the sidebar navigation items.
* **`NavItem`:**
  * Purpose: A single navigation item in the sidebar.
  * Props: `label`, `icon`.
  * State Management: None.
  * Responsibilities: Displaying a navigation item and handling click events.
* **`SidebarWorkspaces`:**
  * Purpose: Container for the list of workspaces.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a list of workspaces and handling click events.
* **`WorkspaceItem`:**
  * Purpose: A single workspace item in the sidebar.
  * Props: `label`, `icon`.
  * State Management: None.
  * Responsibilities: Displaying a workspace item and handling click events.
* **`MainContent`:**
  * Purpose: Container for the main calendar view.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the main calendar view.
* **`CalendarHeader`:**
    *Purpose: Container for the Calendar Header items
  * Props: None.
    *State Management: None.
  * Responsibilities: Displaying the calendar header section and all its action buttons.
* **`TodayButton`:**
  * Purpose: Button to navigate to the current day.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying a Today button and handling click events.
* **`MonthSelector`:**
  * Purpose: Displays the current month and year.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the current month and year and handling change events.
* **`DateNavigator`:**
  * Purpose: Buttons to navigate to the previous or next month.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying navigation buttons and handling click events.
* **`CalendarGrid`:**
  * Purpose: Container for the main calendar grid.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the calendar grid.
* **`DayHeader`:**
  * Purpose: Header for each day of the week.
  * Props: `day`.
  * State Management: None.
  * Responsibilities: Displaying the day of the week.
* **`TimeGrid`:**
  * Purpose: Grid to display time slots and events.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the time grid.
* **`TimeSlot`:**
  * Purpose: Displaying the time slot of the calendar.
  * Props: `time`.
  * State Management: None.
  * Responsibilities: Displaying the time slots for each day.
* **`EventItem`:**
  * Purpose: Displaying an event within the calendar.
  * Props: `title`, `time`, `color`.
  * State Management: None.
  * Responsibilities: Displaying an event and handling click events.
* **`RightSidebar`:**
  * Purpose: Container for the mini calendar and the agenda.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the right side navigation bar.
* **`MiniCalendar`**
  * Purpose: Container for mini-calendar.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the mini-calendar component.
* **`MiniCalendarHeader`:**
  * Purpose: Container for mini-calendar header.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying header elements of the mini calendar.
* **`MiniCalendarGrid`**
  * Purpose: Container for mini calendar grid.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying days of the week in mini calendar.
* **`MiniDayHeader`:**
  * Purpose: Header for each day of the week in the mini calendar.
  * Props: `day`.
  * State Management: None.
  * Responsibilities: Displaying the day of the week in the mini-calendar.
* **`MiniDay`:**
  * Purpose: A single day in mini calendar.
  * Props: `day`.
  * State Management: None.
  * Responsibilities: Displaying each day of the month in mini-calendar.
* **`Agenda`:**
  * Purpose: Container for the daily agenda.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the agenda.
* **`AgendaHeader`:**
  * Purpose: Container for the agenda header items.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying agenda header and its action buttons.
* **`AgendaTitle`:**
  * Purpose: Display the title of the agenda.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying title of the agenda.
* **`AgendaDropdown`:**
  * Purpose: Dropdown button to change agenda view.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying dropdown for agenda options.
* **`AgendaItems`:**
  * Purpose: Container for agenda items.
  * Props: None.
  * State Management: None.
  * Responsibilities: Displaying the agenda items.
* **`AgendaItem`:**
  * Purpose: A single agenda item.
  * Props: `title`, `time`.
  * State Management: None.
  * Responsibilities: Displaying an agenda item with its details.

**Data Flow:**

  * The main data will be an array of `Event` objects, with mock data to begin with.
  * The `Event` object structure: `{ id: string, title: string, time: string, color: string, start:string, end:string }`.
  * The `Workspace` object structure: `{id: string, name:string, icon:string, isPrivate:boolean}`
  * The `Nav` object structure: `{id: string, name:string, icon:string}`
  * The `CalendarDay` object structure: `{day:string}`
  * Data will be passed down to children from the `AppLayout` component.
  * All data for each component will come from the parent.
  * Mock data for `Event` can be made with an array of event objects.

**Styling Specifications:**

    *   Primary color: `#7879F1`
    *   Secondary color: `#E6E6FA`
    *   Background color: `#F7F7FB`
    *   Typography: Use `font-sans` (default Tailwind font) with appropriate sizes for headings, labels, and body text. Use `text-sm` for normal text and `text-lg` for titles.
    *   Spacing and Alignment: Use Tailwind spacing utilities (e.g., `p-2`, `m-4`, `space-x-2`, `space-y-2`) for consistent spacing. Align elements using `flex`, `items-center`, `justify-between`, etc.
    *   Animations: Use the default transitions offered by Tailwind.
    *   Use border radius `rounded-lg` for items that are rounded.

**Interactive Elements:**

    *   Clicking on any `NavItem` should highlight that item as "active".
    *   Clicking the `AddTaskButton` or `AddProjectButton` should trigger a modal or some way to input a new event/task.
    *   Clicking the `TodayButton` should navigate the main calendar to the current day.
    *   Clicking the `<` or `>` in the `DateNavigator` should navigate the main calendar forward and backwards month by month.
    *    Clicking on `Week` selector should open dropdown menu for week selection options.
    *   Clicking an `EventItem` should display more information about that event.
    *   Clicking on `Display options` opens a modal.
    *    Clicking on `Booking Links` opens a modal.
    *  Clicking on `Refresh all tasks` should refetch data.
    *  Clicking on the mini calendar days should set the current main calendar date to the clicked date
    *  Clicking the agenda drop down should open the agenda view selector

**State Management Needs:**

    *   The AppLayout needs state management for active `NavItem` for highlighting the active item in the Sidebar.
    *  The Main Content will need to hold state of the current selected date/month.
    *  The selected date should be passed down to all child components that require it.

**Specific Instructions:**

    *   The layout should be fully responsive, adjusting correctly for different screen sizes, following the responsive rules mentioned earlier.
    *   The event colors should be rendered based on the color property in event objects.
    *  The active day in the mini calendar should be highlighted.
    *   The sidebar should be scrollable if the content exceeds the height of the screen.
    *   Use placeholders for the images and logos.

**Implementation Steps:**

    *   **Create Project Files:** Create `package.json`, `tsconfig.json`, and `next.config.js`.
    *   **Install Dependencies:** Add the following dependencies to `package.json`:
        ```json
        {
          "dependencies": {
            "react": "^18",
            "react-dom": "^18",
            "next": "latest",
            "tailwindcss": "^3.4.1",
            "lucide-react": "^0.309.0",
             "autoprefixer": "^10.4.17",
            "postcss": "^8.4.33"
          },
           "devDependencies": {
                "@types/node": "^20",
                "@types/react": "^18",
                "@types/react-dom": "^18",
                "eslint": "^8",
                "eslint-config-next": "14.1.0",
                "typescript": "^5"
            }
        }
        ```
    *   **Running Configuration:** Configure a `dev` script in `package.json` for local development:
        ```json
          "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint"
          },
        ```
    *  **Configure `next.config.js`:** Add the following configuration to enable images from external resources:
        ```javascript
            /** @type {import('next').NextConfig} */
            const nextConfig = {
                images: {
                    remotePatterns: [
                        {
                          protocol: 'https',
                          hostname: 'picsum.photos',
                          port: '',
                          pathname: '/**',
                        },
                         {
                          protocol: 'https',
                          hostname: 'placekitten.com',
                          port: '',
                          pathname: '/**',
                        },
                    ],
                },
            };

            module.exports = nextConfig;
        ```
    *   **Root Route Handling:** Ensure that `src/app/page.tsx` is fully updated with all the components and configurations.
    *   The LLM MUST complete the entire prompt before stopping.

import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"

export const Calendar = () => {
  const addEvent = () => {
    const today = new Date()
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      '0'
    )}`
  }

  const handleDateClick = React.useCallback((arg: DateClickArg) => {
    alert(arg.dateStr)
  },[])

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locale={jaLocale}
      events={[
        { title: "event 1", date: `${addEvent()}-01` },
        { title: "event 2", date: `${addEvent()}-02` },
      ]}
      dateClick={handleDateClick}
    />
  )
}
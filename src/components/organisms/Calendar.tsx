import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja';

const AddEvent = () => {
  const today = new Date()
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    '0'
  )}`
}

export const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale={jaLocale}
      events={[
        { title: "event 1", date: `${AddEvent()}-01` },
        { title: "event 2", date: `${AddEvent()}-02` },
      ]}
    />
  )
}
import * as React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  const getTileContent = ({view}) => {
    if (view !== 'month') {
      return null
    }

    return (
      <div>
        予定
      </div>
    )
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
      tileContent={getTileContent}
    />
  )
}
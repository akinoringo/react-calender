import * as React from 'react'
import { render } from 'react-dom'
import { ReactCalendar } from './components/organisms/ReactCalendar'

const Main = (
  <>
    <h1>React Calendar</h1>
    <ReactCalendar />
  </>
)

render(Main, document.getElementById('app'))
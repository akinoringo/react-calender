import * as React from 'react'
import { render } from 'react-dom'
import { Calendar } from './components/organisms/Calendar'

const Main = (
  <>
    <h1>React Calendar</h1>
    <Calendar />
  </>
)

render(Main, document.getElementById('app'))
import ReactDOM from 'react-dom'

// import { CounterApp } from './components/01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook.jsx'

import './index.css'

ReactDOM.render(
  <CounterWithCustomHook />,
  document.getElementById('root')
)

import {useState} from 'react'
import Clock from './components/Clock'

import './App.css'

const App = () => {
  const [isMounted, setIsMounted] = useState(false)
  const onToggeleClock = () => {
    setIsMounted(prevMounted => !prevMounted)
  }
  return (
    <div className="app-container">
      <button type="button" className="toggle-btn" onClick={onToggeleClock}>
        {isMounted ? 'Hide Clock' : 'Show Clock'}
      </button>
      {isMounted && <Clock />}
    </div>
  )
}

export default App

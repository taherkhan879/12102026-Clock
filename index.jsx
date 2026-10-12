import {useState, useEffect} from 'react'
import './index.css'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    setInterval(setDate(new Date()), 1000)
  })

  return (
    <div className="clock-container">
      <h1 className="heading">Clock</h1>
      <img
        className="clock-image"
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <p className="time">{date.toLocaleTimeString()}</p>
    </div>
  )
}
export default Clock

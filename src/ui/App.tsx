import './App.css'
import './components/HabitTracker.css'
import './components/HelloSend.css'
import HabitTracker from './components/HabitTracker'
import HelloMessage from './components/HelloSend'
import { useState } from "react";

function App() {
  const [showHelloSend, setHelloSendDiv] = useState(false);
  const [showHabbitTracker, setHabbitTrackerDiv] = useState(false);
  
  const toggleHelloSend = ()=> {
      setHelloSendDiv(!showHelloSend);
      if (showHabbitTracker) { setHabbitTrackerDiv(!showHabbitTracker)};
  };
  const toggleHabbitTracker = ()=> {
    setHabbitTrackerDiv(!showHabbitTracker);
    if (showHelloSend) {setHelloSendDiv(!showHelloSend)};
  };

  return (
    <>
      <div>
        <h1 className="appTitle">Lab 01</h1>
        <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button className="btn btn-outline-primary" onClick={toggleHelloSend}>Hello App</button>
        <button className="btn btn-outline-primary" onClick={toggleHabbitTracker}>Habit App</button>
        </div>
      </div>
      <div className="appArea">
        {showHelloSend ? <HelloMessage/> : <></>}
        {showHabbitTracker ? <HabitTracker/> : <></>}
      </div>
    </>
  )
}

export default App

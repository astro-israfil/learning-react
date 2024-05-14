import { useState } from "react";
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  function increaseState() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function decreaseState() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React Counter</h1>
      <p>Learn to update state using react hook</p>
      <h2>State: {counter}</h2>
      <button onClick={increaseState}>Increase State {counter}</button>
      <button onClick={decreaseState}>Decrease State {counter}</button>
    </>
  )
}

export default App

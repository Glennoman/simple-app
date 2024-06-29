import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [changeCount, setChangeCount] = useState(0);

  // Effect to update the document title when changecount changes
  useEffect(() => {
    document.title = `Changes: ${changeCount}`;
  }, [changeCount]);

  // Function to increment counter + 1
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setChangeCount((prevCount) => prevCount + 1); // increment the change count
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setChangeCount((prevCount) => prevCount + 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCounter(0);
    setChangeCount((prevCount) => prevCount + 1);
  };

  // Function to increment counter by custom value
  const incrementValue = (value) => {
    setCounter((prevCounter) => prevCounter + value);
    setChangeCount((prevCount) => prevCount + 1);
  };

  // Handling form submission to get custom increment value
  const handleIncrementValue = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.elements.customValue.value, 10);
    if (!isNaN(value)) {
      incrementValue(value);
    }
    event.target.reset();
  };

  return (
    <>
      <h1>Counter Application</h1>
      <p>Counter: {counter}</p>
      <div className="card">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <form onSubmit={handleIncrementValue}>
        <input type="number" name="customValue" placeholder="Enter a custom value"/>
        <button type="submit">Increment by Value</button>
      </form>
    </>
  );
}

export default App;

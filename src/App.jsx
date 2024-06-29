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
  setCounter(prevCounter => prevCounter + 1);
  setChangeCount(prevCount => prevCount + 1); // increment the change count
};

const decrement = () => {
  setCounter(prevCounter => prevCounter - 1);
  setChangeCount(prevCount => prevCount + 1);
};

// Function to reset the counter
const reset = () => {
  setCounter(0);
  setChangeCount(prevCount => prevCount + 1);
}

// Function to increment counter by custom value
const incrementValue = (value) => {
  setCounter(prevCounter => prevCounter + value);
  setChangeCount(prevCount => prevCount + 1);
}

// Handling form submission to get custom increment value
const handleIncrementValue = (event) => {
  event.preventDefault();
  const value = parseInt(event.target.elements.customValue.value, 10);
  if (!isNaN(value)){
    incrementValue(value);
  }
  event.target.reset();
};

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

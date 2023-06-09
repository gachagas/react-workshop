import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

// Excercise Variables
// const NAMES_A = ["Orange", "Blue", "Rose"];
// const NAMES_B = ["Yellow", "Gray", "Pink"];
// const NAMES_C = ["Red", "Purple", "Green"];

// const COLORS_A = ["bg-orange-500", "bg-blue-300", "bg-rose-300"];
// const COLORS_B = ["bg-yellow-300", "bg-slate-300", "bg-pink-400"];
// const COLORS_C = ["bg-red-500", "bg-violet-400", "bg-green-300"];

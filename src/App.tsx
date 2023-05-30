import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-200">Hello world! Here be an edit new edit!John Doe</h1>
    </>
  );
}

export default App;

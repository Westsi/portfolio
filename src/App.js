import Terminal, { updateLines } from "./terminal";
import Art2 from "./art2";
import React, { useState } from "react";

function App() {

  const [lines, setLines] = useState([]);
  const updateLines = (line) => {
    setLines(lines + line);
  }
  return (
    <div className="App">
      <Terminal lines={lines} />
      <button onClick={updateLines("1")}>Click me!</button>
    </div>
  );
}

export default App;

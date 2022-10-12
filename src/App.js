import Terminal from "./terminal";
import Art2 from "./art2";
import React, { useState } from "react";


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1);
}

function App() {
	const [lines, setLines] = useState(["hello"]);

	const forceUpdate = useForceUpdate();
	
	
	const updateLines = (line) => {
		var lines2 = lines;
		lines2.push(line);
		setLines(lines2);
		console.log(lines2);
		console.log(lines);
		console.log("lines updated!");
		forceUpdate();
	}
	return (
		<div className="App">
			<h1>Hello!</h1>
			{lines.map(line => {
			return <h2>{line}</h2>
		})}
			<Terminal />
			<button onClick={() => {updateLines("1")}}>Click me!</button>
		</div>
	);
}

export default App;

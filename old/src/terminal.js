import React, { useState } from "react";


const Terminal = (props) => {
	const prompt = "WS C:\\Users\\visitor>";
	const [input, setInput] = useState("")

	const delay = ms => new Promise(res => setTimeout(res, ms));

	const getInput = async () => {
		await delay(150);
		const inp = input;
		console.log(inp);
		setInput("");
		props.onCommand(inp);
	}

	return (
		<div className="terminalInput">
			<h5>{prompt}<input type={"text"} value={input} onChange={e => setInput(e.target.value)} onKeyDown={(e) => {
				if (e.key == "Enter") {
					getInput();
				}
			}} className="inputBox"></input></h5>
		</div>
	)
}

export default Terminal;

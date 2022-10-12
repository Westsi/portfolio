import React, { useEffect } from "react";


const Terminal = (props) => {
    const prompt = "WS C:\\Users\\visitor>";

    return (
        <div className="app">
            <h1>{prompt}</h1>
            <button onClick={() => props.onCommand("help")}>Click</button>
        </div>
    )
}

export default Terminal;

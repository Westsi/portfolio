import React, { useEffect } from "react";


const Terminal = (props) => {
    const prompt = "WS C:\\Users\\visitor>";

    return (
        <div className="app">
            <h1>{prompt}</h1>
            <button onClick={() => props.onCommand("help")}>help</button>
            <button onClick={() => props.onCommand("skills")}>skills</button>
        </div>
    )
}

export default Terminal;

import React, { useState } from "react";


const Terminal = (props) => {
    const prompt = "WS C:\\Users\\visitor>";
    return(
        <div className="app">
            {props.lines.map(line => 
                <h2 className="line">{line}</h2>
                )}
            <h1>{prompt}</h1>
        </div>
    )
}

export default Terminal;

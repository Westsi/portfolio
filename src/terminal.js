import React from "react";


const Terminal = (props) => {
    const prompt = "WS C:\\Users\\visitor>";
    return(
        <div className="app">
            <h1>{prompt}</h1>
        </div>
    )
}

export default Terminal;

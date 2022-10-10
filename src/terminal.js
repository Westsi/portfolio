import React from "react";

const Terminal = () => {
    const prompt = "WS C:\\Users\\visitor>"
    
    return(
        <div className="app">
            <h1>{prompt}</h1>
            <p>Hello!</p>
        </div>
    )
}

export default Terminal;

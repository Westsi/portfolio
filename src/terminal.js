import React, { useState } from "react";


const [lines, setLines] = useState([]);


const updateLines = (line) =>{
    setLines(lines + line);
}
const Terminal = () => {
    const prompt = "WS C:\\Users\\visitor>";
    return(
        <div className="app">
            {lines.map(line => 
                <h2 className="line">{line}</h2>
                )}
            <h1>{prompt}</h1>
        </div>
    )
}

export default Terminal;
export {updateLines};

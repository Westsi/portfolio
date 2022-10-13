import React, { useState } from "react";
import { help, about, contact, skills, projects } from "./commands";
import Terminal from "./terminal";

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const CommandExecutor = (props) => {
    const [lines, setLines] = useState([]);
    const forceUpdate = useForceUpdate();

    const updateLines = (line) => {
        var lines2 = lines;
        lines2.push(line);
        setLines(lines2);
        console.log("lines updated!");
        forceUpdate();
    }

    const prompt = "WS C:\\Users\\visitor>";


    const runCommand = (command) => {
        const commands = ["help", "about", "contact", "skills", "projects"]
        if (commands.includes(command)) {
            updateLines(prompt + command);
            if (command == "help") {
                updateLines("command\t\tdescription")
                for (const com in help) {
                    console.log(help[com]);
                    updateLines(help[com].command + "\t\t" + help[com].description);
                }
            }

        }
        else {
            updateLines("invalid command!")
        }
    }
    /*
    TODO
    make lines an arr of objects so can have classNames and stuff
    */
    return (
        <>
            {lines.map(line => <h2>{line}</h2>)}
            <Terminal onCommand={(command) => { runCommand(command) }} />
        </>
    )
}

export default CommandExecutor
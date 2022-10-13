import React, { useState } from "react";
import { help, about, contact, skills, projects } from "./commands";
import Terminal from "./terminal";
import "./terminal.css";

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const CommandExecutor = (props) => {
    const [lines, setLines] = useState([]);
    const forceUpdate = useForceUpdate();

    const updateLines = (line, className) => {
        var lines2 = lines;
        var lObject = { line: line, className: className };
        lines2.push(lObject);
        setLines(lines2);
        console.log("lines updated!");
        forceUpdate();
    }

    const prompt = "WS C:\\Users\\visitor>";


    const runCommand = (command) => {
        const commands = ["help", "about", "contact", "skills", "projects"]
        if (commands.includes(command)) {
            updateLines(prompt + command, "promptCom");
            if (command == "help") {
                updateLines("command\t\tdescription")
                for (const com in help) {
                    updateLines(help[com].command + " \t \t " + help[com].description, "helpRes");
                }
            }

            else if (command == "contact") {
                for (const obj in contact) {
                    updateLines(contact[obj].text, "contactRes");
                    updateLines(contact[obj].link, "contactLink")
                }
            }

            else if (command == "skills") {
                for (const skill in skills) {
                    console.log(skill);
                    const Yr_s = "year"
                    if (skills[skill].yrsExp != 1) {
                        Yr_s = "years"
                    }
                    updateLines(skills[skill].text + ": I have " + skills[skill].yrsExp + " " + Yr_s + " of experience with this tool.", "skillHeader");
                    updateLines("Confidence:", "confidenceHeader");
                    updateLines((skills[skill].confidence * 10).toString() + "%");
                }

            }
        }
        else {
            updateLines("invalid command!")
        }
    }
    return (
        <>
            <div className="output">
                {lines.map(line => <h2 className={line.className}>{line.line}</h2>)}
                <Terminal onCommand={(command) => { runCommand(command) }} />
            </div>
        </>
    )
}

export default CommandExecutor
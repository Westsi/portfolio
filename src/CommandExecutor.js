import React, { useState, useEffect } from "react";
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


    const pushLines = (line, className) => {
        var lines2 = lines;
		var lObject = { line: line, className: className };
		lines2.push(lObject);
		setLines(lines2);
		forceUpdate();
    }
	const updateLines = (line, className) => {
        /*
        BROKEN
        */
        if (line.length > 45){
            var prevC = 0;
            for (var i = 45; i < (line.length + 45); i += 45){
                pushLines(line.substring(prevC, i), className)
                prevC = i;
            }
        }
        else {
            pushLines(line, className)
        }
		
	}

	const prompt = "WS C:\\Users\\visitor>";


	useEffect(() => {
		document.title = "WS - Portfolio";
	}, []);

	const runCommand = (command) => {
		const commands = ["help", "about", "contact", "skills", "projects"]
		updateLines(prompt + command, "promptCom");
		if (commands.includes(command)) {
			if (command === "help") {
				updateLines("command\t\tdescription")
				for (const com in help) {
					updateLines(help[com].command + "\t \t" + help[com].description, "helpRes");
				}
			}

			else if (command === "contact") {
				for (const obj in contact) {
					updateLines(contact[obj].text, "contactRes");
					updateLines(contact[obj].link, "contactLink")
				}
			}

			else if (command === "skills") {
				for (const skill in skills) {
					console.log(skill);
					var Yr_s = "year"
					if (skills[skill].yrsExp != 1) {
						Yr_s = "years"
					}
					if (skills[skill].yrsExp === "<1") {
						Yr_s = "year";
					}
					updateLines("-" + skills[skill].text + ": " + skills[skill].yrsExp + " " + Yr_s + " of experience.", "skillHeader");
					updateLines("- Confidence: " + (skills[skill].confidence * 10).toString() + "%", "confidence");
				}

			}

			else if (command === "about") {
				for (const line in about) {
					updateLines(about[line], "aboutLine")
				}
			}

			else if (command === "projects") {
				for (const p in projects) {
					const project = projects[p];
					console.log(project.name + " - " + project.description);
					updateLines(project.name, "projName");
					updateLines("- " + project.description, "projDesc");
					updateLines("This was written in:", "writtenIn");
					for (const w in project.writtenIn) {
						updateLines("-" + project.writtenIn[w], "writtenInLine");
					}
					updateLines("I used " + project.toolsUsed.toString() + " to work on this project.");

				}
			}
		}
		else {
			updateLines("invalid command!", "errorOut")
		}
	}

	return (
		<>
			<div className="output">
				{lines.map(line => <h5 className={line.className}>{line.line}</h5>)}
				<Terminal onCommand={(command) => { runCommand(command) }} />
			</div>
		</>
	)
}

export default CommandExecutor
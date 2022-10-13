const help = [
    {
        command :"about",
        description: "About me"
    },
    {
        command :"contact",
        description: "Contact me"
    },
    {
        command :"projects",
        description: "My Projects"
    },
    {
        command :"skills",
        description: "The languages, frameworks and tools that I have experience with and my other skills"
    }
]

const about = [
    "Hey There!",
    "I am Jamie, a 'fullstack' developer from the UK and Canada."
]

const contact = [
    {text: "Email: ", link: <a href="mailto:jamie@rockyroost.com" target="_blank" rel="noreferrer">jamie@rockyroost.com</a>},
    {text: "Discord: ", link: <a href="https://discord.com/users/688085162265018547" target="_blank" rel="noreferrer">1Westsi#0412</a>},
    {text: "Github: ", link: <a href="https://github.com/westsi" target="_blank" rel="noreferrer">Westsi</a>},
    {text: "Youtube: ", link: <a href="https://youtube.com/westsi" target="_blank" rel="noreferrer">Westsi</a>}
]

const skills = [
    {text: "Python", icon: "", yrsExp: "4", confidence: 7, tfl: "language"},
    {text: "Javascript", icon: "", yrsExp: "2", confidence: 4, tfl: "language"},
    {text: "Java", icon: "", yrsExp: "1", confidence: 3, tfl: "language"},
    {text: "Golang", icon: "", yrsExp: "1", confidence: 3, tfl: "language"},
    {text: "React", icon: "", yrsExp: "2", confidence: 7, tfl: "framework"},
    {text: "Flask/Flask-RESTful", icon: "", yrsExp: "2", confidence: 6, tfl: "framework"},
    {text: "Gin-Gonic", icon: "", yrsExp: "1", confidence: 3, tfl: "framework"},
    {text: "Postman", icon: "", yrsExp: "3", confidence: 8, tfl: "tool"},
    {text: "Git", icon: "", yrsExp: "3", confidence: 6, tfl: "tool"},
    {text: "VSCode", icon: "", yrsExp: "2", confidence: 8, tfl: "IDE"},
    {text: "Pycharm/IntelliJ", icon: "", yrsExp: "3", confidence: 8, tfl: "IDE"},
    {text: "Repl.it", icon: "", yrsExp: "5", confidence: 9, tfl: "online IDE"},
    {text: "Wondershare Filmora Editing Software", icon: "", yrsExp: "3", confidence: 8, tfl: "tool"},
    {text: "C", icon: "", yrsExp: "1", confidence: 2, tfl: "language"},
    {text: "Spigot Development for Minecraft", icon: "", yrsExp: "1", confidence: 4, tfl: "framework"},
    {text: "Fabric Minecraft Mods", icon: "", yrsExp: "<1", confidence: 2, tfl: "framework"},
]


const projects = [
    {name: <a href="https://github.com/westsi/thynkr" target="_blank" rel="noreferrer">Thynkr</a>, writtenIn: ["Frontend - Javascript with React.", "Backend - Python with Flask, SQL-Alchemy and Marshmallow."], toolsUsed: ["JS", "Flask", "Flask-RESTful", "Postman", "Python", "VSCode", "Git", "Pycharm", "(Flask) SQL-Alchemy", "(Flask) Marshmallow", "React", "CRA"], description: "A learning platform (half-finished, first react project)"},
    {name: <a href="https://github.com/westsi/aeterna" target="_blank" rel="noreferrer">Aeterna</a>, writtenIn: ["Frontend - Javascript with React.", "Backend - Golang with GORM and Gin-Gonic."], toolsUsed: ["JS", "Golang", "Gin-Gonic", "Postman", "GORM", "VSCode", "Git", "React", "CRA"], description: "A youtube clone (WIP)"},
    {name: <a href="https://github.com/shopyo/shopcube" target="_blank" rel="noreferrer">Shopcube</a>, writtenIn: ["Python with Flask and SQL-Alchemy"], toolsUsed: ["Python", "SQL-Alchemy", "Shopyo", "pre-commit", "Git", "VSCode", "Flask", "jinja2"], description: "My first open-source project I contributed to!"},
]


export {help, about, contact, skills, projects};
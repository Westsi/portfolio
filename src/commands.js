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
    {text: "Python", icon: "", yrsExp: "4", confidence: 7},
    {text: "Javascript", icon: "", yrsExp: "2", confidence: 4},
    {text: "Java", icon: "", yrsExp: "1", confidence: 5},
    {text: "Golang", icon: "", yrsExp: "1", confidence: 4},
    {text: "React", icon: "", yrsExp: "2", confidence: 7},
    {text: "Flask/Flask-RESTful", icon: "", yrsExp: "2", confidence: 6},
    {text: "Gin for Golang", icon: "", yrsExp: "1", confidence: 3},
    {text: "Postman", icon: "", yrsExp: "3", confidence: 8},
    {text: "Git", icon: "", yrsExp: "3", confidence: 6},
    {text: "VSCode", icon: "", yrsExp: "2", confidence: 8},
    {text: "Pycharm/IntelliJ", icon: "", yrsExp: "3", confidence: 8},
    {text: "Repl.it", icon: "", yrsExp: "5", confidence: 9},
    {text: "Video Editing", icon: "", yrsExp: "3", confidence: 5},
    {text: "C", icon: "", yrsExp: "1", confidence: 2},
    {text: "Spigot Development for Minecraft", icon: "", yrsExp: "1", confidence: 4},
    {text: "Fabric Minecraft Mods", icon: "", yrsExp: "<1", confidence: 2},
]


const projects = [
    {name: <a href="https://github.com/westsi/thynkr" target="_blank" rel="noreferrer">Thynkr</a>, writtenIn: ["Frontend - Javascript with React.", "Backend - Python with Flask, SQL-Alchemy and Marshmallow."], toolsUsed: ["JS", "Flask", "Flask-RESTful", "Postman", "Python", "VSCode", "Git", "Pycharm", "(Flask) SQL-Alchemy", "(Flask) Marshmallow", "React", "CRA"], description: "A learning platform (half-finished, first react project)"},
    {name: <a href="https://github.com/westsi/aeterna" target="_blank" rel="noreferrer">Aeterna</a>, writtenIn: ["Frontend - Javascript with React.", "Backend - Golang with GORM and Gin-Gonic."], toolsUsed: ["JS", "Golang", "Gin-Gonic", "Postman", "GORM", "VSCode", "Git", "React", "CRA"], description: "A youtube clone (WIP)"},
    {name: <a href="https://github.com/shopyo/shopcube" target="_blank" rel="noreferrer">Shopcube</a>, writtenIn: ["Python with Flask and SQL-Alchemy"], toolsUsed: ["Python", "SQL-Alchemy", "Shopyo", "pre-commit", "Git", "VSCode", "Flask", "jinja2"], description: "My first open-source project I contributed to!"},
]


export {help, about, contact, skills, projects};
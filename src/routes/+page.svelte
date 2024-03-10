<script>
    import Project from "$lib/components/Project.svelte";
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    import Logo from '$lib/logo.png';
    import GHLogo from '$lib/gh-logo.png';
    import Projects from "$lib/data/projects.json";

    const skills_data = ["Python", "Go", "Java", "HTML/CSS/JS", "C", "Java", "Svelte", "Git", "Vite", "SQLite", "Docker", "Flask", "Postman", "ESP-IDF", "KiCad", "Platform-IO", "Fusion360"]
    // check if element is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            (rect.bottom >= 0 || rect.top <= 0) &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // on scroll, check if element is in viewport, and if so add class name to bg
    onMount(async () => {
        if (browser) {
            window.addEventListener('scroll', () => {
                const bg = document.querySelector('.bg');
                if (isInViewport(document.getElementById('splash'))) {
                    bg.classList = 'bg splash';
                }
                if (isInViewport(document.getElementById('about'))) {
                    bg.classList = 'bg about';
                }
                if (isInViewport(document.getElementById('skills'))) {
                    bg.classList = 'bg skills';
                } 
                if (isInViewport(document.getElementById('projects'))) {
                    bg.classList = 'bg projects';
                }
            })
        }
    });

</script>
<main>
    <div class="bg">
        <div class="sect splash" id="splash">
            <div class="splash-text-container">
                <p class="splash-tagline">Creating and programming</p>
                <p class="splash-title">Software and Hardware</p>
                <p class="splash-tagline">Full-Stack Developer, Engineer</p>
            </div>
            <div class="splash-lottie-container">
                <dotlottie-player src={"/anims/computer.lottie"} background="transparent" speed="1" style="width: 600px; height: 600px;" loop autoplay></dotlottie-player>
            </div>
        </div>

        <div class="sect about" id="about">
            <h1 class="sect-title">About</h1>
            <div class="about-container">
                <img src={Logo} class="logo" alt="Logo" />
                <div class="text-container">
                    <p class="about-text">Software and Hardware Engineer and Full Stack Developer, with an interest in OS, IoT and embedded development.</p>
                    <p class="links"><a href="https://github.com/Westsi" target="_blank" rel="noreferrer"><img class="gh-link"src={GHLogo} alt="GitHub Logo" /></a></p>
                </div>
            </div>
        </div>
        
        <div class="sect skills" id="skills">
            <h1 class="sect-title">Skills</h1>
            <div class="skills-icons-container">
                <div class="skill-icon">
                    <dotlottie-player class="skill-icon-lottie" src={"/anims/server.lottie"} background="transparent" speed="1" loop autoplay></dotlottie-player>
                    <p class="skill-title">Backend Development</p>
                </div>
                <div class="skill-icon">
                    <dotlottie-player class="skill-icon-lottie" src={"/anims/cpu.lottie"} background="transparent" speed="1" loop autoplay></dotlottie-player>
                    <p class="skill-title">Low Level and Hardware</p>
                </div>
                <div class="skill-icon">
                    <dotlottie-player class="skill-icon-lottie" src={"/anims/web-dev.lottie"} background="transparent" speed="1" loop autoplay></dotlottie-player>
                    <p class="skill-title">Front-End Development</p>
                </div>
            </div>
            <p class="tools-title">Languages, Frameworks, and Tools</p>
            <div class="tools-grid-container">
                {#each skills_data as skill}
                    <b><div class="skill">{skill}</div></b>
                {/each}
            </div>
        </div>
        
        <div class="sect projects" id="projects">
            <h1>Projects</h1>
            <div class="projects-container">
                {#each Projects.projects as project}
                    <Project name={project.name} description={project.description} ghurl={project.ghurl}/>
                {/each}
            </div>
        </div>

        <div class="sect footer">
            <p class="footer-text">© Jamie Andersen 2023-2024</p>
            <p class="footer-text">Built with Svelte and Lottie (<a href="https://github.com/Westsi/portfolio" target="_blank" rel="noreferrer">View on GitHub</a>)</p>
            <p class="footer-text">Version 1.0</p>
        </div>

    </div>
</main>


<style>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .projects-container {
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .about-text {
        font-size: 1.5rem;
    }

    .about-container {
        display: flex;
        flex-direction: row;
        column-gap: 100px;
        align-items: center;
        padding-left: 3rem;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        width: 200px;
    }

    .gh-link {
        width: 50px;
        filter: drop-shadow(0 0 1em #00d9ff);
    }

    .sect {
        scroll-margin-top: 50px;
        border-top: 2px solid rgb(77, 77, 77);
    }

    .skills-icons-container {
        display: flex;
        justify-content: center;
    }

    .skill-icon-lottie {
        width: 200px;
        height: 200px;
        border: 5px solid #00d9ff;
        border-radius: 50%;
        filter: drop-shadow(0 0 1em #00d9ff);
    }

    .skill-title {
        font-weight: 900;
        max-width: 200px;
        text-align: center;
    }

    .splash-text-container {
        padding: 3rem;
        padding-left: 10rem;
        width: 30%; /* TODO: make this mobile compatible*/
        top: 50%;
        position:absolute;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .splash-title {
        margin-top: 10px;
        color: #00d9ff;
        font-size: 5rem;
        line-height: 1;
        margin-bottom: 10px;
    }

    .splash-tagline {
        margin-bottom: 10px;
        color: #ffffff;
        font-size: 2.5rem;
        line-height: 1;
    }

    .splash {
        /* background-image: linear-gradient(#242424, #262626, #282828, #2a2a2a, #2c2c2c, #2e2e2e); */
        height: 100vh;
    }

    .splash-lottie-container {
        top: 50%;
        position:absolute;
        left: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }


    @media (max-width: 1300px) {
        .splash-lottie-container {
            display: none;
        }
        .logo {
            display: none;
        }
    }
    @media (max-width: 900px) {
        .skills-icons-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    @media (max-width: 750px) {
        .splash-text-container {
            padding: 3rem;
            padding-left: 3rem;
            width: 70%; /* TODO: make this mobile compatible*/
            top: 40%;
            position:absolute;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        .splash-lottie-container {
            display: block;
            position: absolute;
            left: 50%;
            top: 72%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        .splash-title {
            font-size: 3rem;
        }

        .splash-tagline {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 700px) {
        .projects-container {
            display: flex;
            flex-direction:column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }

    .tools-grid-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #242424;
        filter: drop-shadow(-20px -15px 1em #7d12ff7f);
    }
    .tools-title {
        font-weight: 900;
        font-size: 32px;
    }

    .skill {
        padding: 0.5rem;
        color: #2e2e2e;
        margin: 0.5rem;
        background-color: rgba(255, 255, 255, 0.87);
        border-radius: 24px;
        width: 100px;
        height: 24px;
        text-align: center;
    }

    div {
        padding: 2rem;
    }

    :global(.bg) {
        padding: 0;
        transition: background-color 0.5s ease;
        background-color: #242424;
    }

    :global(.bg.splash) {
        background-color: #242424;
    }

    :global(.bg.about) {
        background-color: #282828;
    }

    :global(.bg.skills) {
        background-color: #2a2a2a;
    }

    :global(.bg.projects) {
        background-color: #2e2e2e;
    }
    /* .skills {
        background-image: linear-gradient(#2e2e2e, #303030, #323232, #343434, #363636, #383838);
    }
    .projects {
        background-image: linear-gradient(#383838, #3a3a3a, #3c3c3c, #3e3e3e, #404040, #424242);
    } */
</style>

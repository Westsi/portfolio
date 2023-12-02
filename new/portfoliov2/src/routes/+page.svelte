<script>
    import Project from "$lib/components/Project.svelte";
    import { onMount } from "svelte";
    import { browser } from '$app/environment';

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
    onMount(() => {
        if (browser) {
            window.addEventListener('scroll', () => {
                const bg = document.querySelector('.bg');
                if (isInViewport(document.getElementById('splash'))) {
                    bg.classList = 'bg splash';
                }
                if (isInViewport(document.getElementById('skills'))) {
                    bg.classList = 'bg skills';
                } 
                if (isInViewport(document.getElementById('projects'))) {
                    bg.classList = 'bg projects';
                }
            })
        }
    })
</script>
<main>
    <div class="bg">
        <div class="sect splash" id="splash">
            <div class="splash-text-container">
                <p class="splash-tagline">Creating and programming</p>
                <p class="splash-title">Software and Hardware</p>
            </div>
        </div>
        
        <div class="sect skills" id="skills">
            <h1>Languages and Frameworks</h1>
            <div class="skills-container">
                <div class="skill">
                    <p>Python</p>
                </div>
                <div class="skill">
                    <p>JavaScript</p>
                </div>
                <div class="skill">
                    <p>C++</p>
                </div>
            </div>
            <h1>Tools</h1>
        </div>
        
        <div class="sect projects" id="projects">
            <h1>Projects</h1>
            <Project name="Project 1" description="Project 1 description" ghurl="https://github.com"/>
            <Project name="Project 2" description="Project 2 description" ghurl="https://github.com"/>
            <Project name="Project 3" description="Project 3 description" ghurl="https://github.com"/>
            <Project name="Project 4" description="Project 4 description" ghurl="https://github.com"/>
            <Project name="Project 5" description="Project 5 description" ghurl="https://github.com"/>
            <Project name="Project 6" description="Project 6 description" ghurl="https://github.com"/>
            <Project name="Project 7" description="Project 7 description" ghurl="https://github.com"/>
            <Project name="Project 8" description="Project 8 description" ghurl="https://github.com"/>
        </div>
    </div>
</main>


<style>

    .sect {
        scroll-margin-top: 50px;
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

    :global(.bg.skills) {
        background-color: #2e2e2e;
    }

    :global(.bg.projects) {
        background-color: #383838;
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

    /* .skills {
        background-image: linear-gradient(#2e2e2e, #303030, #323232, #343434, #363636, #383838);
    }
    .projects {
        background-image: linear-gradient(#383838, #3a3a3a, #3c3c3c, #3e3e3e, #404040, #424242);
    } */
</style>

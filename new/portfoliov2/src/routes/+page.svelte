<script>
    import Project from "$lib/components/Project.svelte";

</script>
<main>
    <div class="splash">
        <div class="splash-text-container">
            <h2 class="splash-tagline">Creating and programming</h2>
        </div>
    </div>
    
    <div class="skills">
        <h1>Languages and Frameworks</h1>
        <h1>Tools</h1>
    </div>
    
    <div class="projects">
        <h1>Projects</h1>
        <Project name="Project 1" description="Project 1 description" ghurl="https://github.com"/>
    </div>
</main>


<style>
    div {
        padding: 2rem;
    }

    .splash {
        background-image: linear-gradient(#242424, #262626, #282828, #2a2a2a, #2c2c2c, #2e2e2e);
        height: 100vh;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.87); TODO: work on this */
    }

    .splash-text-container {
        padding: 3rem;
        padding-left: 5rem;
        width: 30%; /* TODO: make this mobile compatible*/
    }

    .splash-tagline {
        color: #00d9ff;
        font-size: 5rem;
        line-height: 1;
    }

    .skills {
        background-image: linear-gradient(#2e2e2e, #303030, #323232, #343434, #363636, #383838);
    }
    .projects {
        background-image: linear-gradient(#383838, #3a3a3a, #3c3c3c, #3e3e3e, #404040, #424242);
    }
</style>

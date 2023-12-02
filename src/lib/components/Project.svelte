<script>
    export let name;
    export let description;
    export let ghurl;
    import GHLogo from '$lib/gh-logo.png';
</script>
<div class="project">
    <div class="text-container">
        <h2 class="project-title">{name}</h2>
        <p class="project-description">{description}</p>
        <a class="project-link" href={ghurl} target="_blank" rel="noreferrer"><img class="gh-link" src={GHLogo} alt="GitHub Logo" /></a>
    </div>
    <!-- <div class="project-lottie-container">
        <dotlottie-player class="project-lottie" src={"/anims/computer.lottie"} background="transparent" speed="1" loop autoplay></dotlottie-player>
    </div> -->
    </div>

<style>
    .project {
        background-color: #242424;
        padding: 1rem;
        margin: 10px;
        border-radius: 24px;
        width: 30%;
        display: flex;
    }

    .project-lottie-container {
        width: 400px;
        position: relative;
        right: 50px;
    }

    .project-title {
        font-size: 1.5rem;
    }
    .project-description {
        font-size: 1rem;
        width: 50%;
        height: 110px;
    }
    .gh-link {
        width: 50px;
        filter: drop-shadow(0 0 1em #00d9ff);
    }
</style>
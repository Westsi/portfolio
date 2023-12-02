<script>
    import Logo from '$lib/logo.png';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';

	let scrollClickHandler = (id) => {
		const element = document.getElementById(id);
		console.log(element.offsetTop);
		element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // works but goes to center of element instead of top
	}
</script>

<nav>
	<a href="#splash" rel="noreferrer" on:click|preventDefault={() => scrollClickHandler('splash')}>
		<img src={Logo} class="logo" alt="Logo" />
	</a>
	<a href="#skills" on:click|preventDefault={() => scrollClickHandler('skills')} class="navlink" title="Skills"><h3>Skills</h3></a>
	<a href="#projects" on:click|preventDefault={() => scrollClickHandler('projects')} class="navlink" title="Projects"><h3>Projects</h3></a>
</nav>
<slot />

<style>
	nav {
		display: flex;
		position: fixed;
		z-index: 1;
		/* place-items: center;
        text-align: center; */
		width: 100%;
        background-image:	linear-gradient(#1a1a1a, #242424);
		/* border-bottom: 1px solid rgba(255, 255, 255, 0.87); */
	}
	.logo {
		height: 3em;
		padding: 1.5em;
		will-change: filter;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #00d9ff);
	}

	@media screen and (max-width: 660px) {
		.navlink {
			padding: 0.5em;
		}
		.logo {
			height: 2em;
		}
	}

	@media screen and (min-width: 660px) {
		.navlink {
			padding: 1em;
		}
	}

	.navlink {
		will-change: filter;
	}

	.navlink:hover {
		filter: drop-shadow(0 0 1em #00d9ff);
	}
</style>

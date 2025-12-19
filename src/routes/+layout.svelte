<script lang="ts">
	import '$lib/styles/globals.css';
	import gsap from 'gsap';
	import { onMount, type Snippet } from 'svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import MenuOverlay from '$lib/components/navigation/MenuOverlay.svelte';
	import { ChevronLeft } from '@lucide/svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { page } from '$app/state';

	let { children }: { children: Snippet } = $props();

	let tl: GSAPTimeline;
	let container: HTMLButtonElement;
	let dropdownMenu: HTMLMenuElement;

	let isDropdownMenuOpen: boolean = $state(false);

	const currentPage = $derived(page.url);

	onMount(() => {
		tl = gsap.timeline({ paused: true });

		tl.to(dropdownMenu, {
			duration: 0.75,
			height: 'auto',
			ease: 'power2.in'
		});
	});

	const toggleDropDownMenu = () => {
		if (isDropdownMenuOpen) {
			tl.reverse();
			isDropdownMenuOpen = false;
		} else {
			tl.play();
			isDropdownMenuOpen = true;
		}
	};

	$effect(() => {
		if (currentPage) {
			tl.reverse();
			isDropdownMenuOpen = false;
		} else {
			tl.play();
			isDropdownMenuOpen = true;
		}
	});
</script>

<header class="Header">
	<NavBar>
		<Logo />

		<ul class="Header__navList">
			<li class="Header__navItem">
				<button class="Header__navDropdown" onclick={toggleDropDownMenu} bind:this={container}>
					<p>Layout</p>
					<span class="Header__dropdownLogo {isDropdownMenuOpen ? 'open' : ''}"
						><ChevronLeft /></span
					>
				</button>
			</li>
			<li class="Header__navItem">
				<NavLink href="/season/winter">Winter</NavLink>
			</li>
			<li class="Header__navItem">
				<NavLink href="/season/summer">Summer</NavLink>
			</li>
			<li class="Header__navItem">
				<NavLink href="/getting-here">Getting here</NavLink>
			</li>
			<li class="Header__navItem">
				<NavLink href="/contact">Contact</NavLink>
			</li>
		</ul>
		<MenuOverlay />
	</NavBar>
	<menu class="DropdownMenu" bind:this={dropdownMenu}>
		<li>
			<NavLink class="flex w-full" href="/layout/living">Living</NavLink>
		</li>
		<li>
			<NavLink class="flex w-full" href="/layout/sleeping">Sleeping</NavLink>
		</li>
		<li>
			<NavLink class="flex w-full" href="/layout/relaxing">Relaxing</NavLink>
		</li>
	</menu>
</header>

{@render children?.()}

<Footer />

<style lang="scss">
	@use '../lib/styles/partials/breakpoints';
	@use '../lib/styles/partials/mixins';
	@use '../lib/styles/partials/variables';

	.Header {
		background-color: #f6f1eb;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 900;

		&__navList {
			display: none;

			@include breakpoints.desktop {
				display: flex;
				gap: 2rem;
			}
		}

		&__navItem {
			position: relative;
		}

		&__navDropdown {
			cursor: pointer;
			display: flex;
			gap: 0.5rem;
		}

		&__dropdownLogo {
			display: inline-block;
			transform: rotate(0deg);
			transition: transform 0.5s ease-in-out;

			&.open {
				transform: rotate(-90deg);
			}
		}

		&__navItem {
			text-transform: capitalize;
		}
	}

	.DropdownMenu {
		display: none;

		@include breakpoints.desktop {
			background-color: #f6f1eb;
			border-bottom: 1px solid #403a34;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			height: 0;
			padding-inline: 5rem;
		}

		li {
			padding: 0.5rem;
			transition: all 0.3s;

			&:hover {
				background-color: #403a34;
				color: #f6f1eb;
			}
		}
	}
</style>

<script lang="ts">
	import '../lib/styles/globals.css';
	import type { Snippet } from 'svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import MenuOverlay from '$lib/components/navigation/MenuOverlay.svelte';
	import { ChevronLeft } from '@lucide/svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<header class="Header">
	<NavBar>
		<Logo />

		<ul class="Header__navList">
			<li class="Header__navItem">
				<div class="Header__navDropdown">
					<p>Layout</p>
					<span class="Header__dropdownLogo"><ChevronLeft /></span>
				</div>
				<menu class="DropdownMenu">
					<li><NavLink class="flex w-full" href="/layout/living">Living</NavLink></li>
					<li><NavLink class="flex w-full" href="/layout/sleeping">Sleeping</NavLink></li>
					<li><NavLink class="flex w-full" href="/layout/relaxing">Relaxing</NavLink></li>
				</menu>
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
</header>

{@render children()}

<Footer />

<style lang="scss">
	@use '../lib/styles/partials/breakpoints';
	@use '../lib/styles/partials/mixins';
	@use '../lib/styles/partials/variables';

	.Header {
		backdrop-filter: blur(12px);

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
			transition: transform 0.3s ease-out;
		}

		&__navItem {
			text-transform: capitalize;
		}

		&__navItem:first-child:hover {
			.DropdownMenu {
				max-height: 10rem;
				opacity: 1;
				pointer-events: auto;
				transform: translateY(0);
				visibility: visible;
				z-index: 100000;
			}

			.Header__dropdownLogo {
				transform: rotate(-90deg);
			}
		}
	}

	.DropdownMenu {
		background-color: #eee9e2;
		display: flex;
		flex-direction: column;
		left: 0;
		max-height: 0;
		min-width: 8rem;
		opacity: 0;
		overflow: hidden;
		padding: 0.5rem;
		pointer-events: none;
		position: absolute;
		top: 100%;
		transform: translateY(-10px);
		transition:
			opacity 0.3s ease-out,
			visibility 0.3s ease-out,
			max-height 0.4s ease-out,
			transform 0.3s ease-out;
		visibility: hidden;
		z-index: 100000;

		li {
			padding: 0.5rem 0.25rem;
			width: 100%;

			&:hover {
				background-color: #f0f0f0;
				border-radius: 1rem;
			}
		}
	}
</style>

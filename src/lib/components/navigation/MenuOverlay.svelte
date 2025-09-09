<script lang="ts">
	import gsap from 'gsap';
	import { goto } from '$app/navigation';
	import type { Attachment } from 'svelte/attachments';

	import NavLink from './NavLink.svelte';

	let tl: GSAPTimeline;

	const toggleMenuOverlay = () => {
		tl.reversed(!tl.reversed());
	};

	const handleNavigation = (e: MouseEvent, href: string) => {
		e.preventDefault();

		if (!tl.reversed()) {
			tl.reverse().then(() => {
				goto(href);
			});
		}
	};

	const createMenuOverlayAnimation: Attachment = (container) => {
		tl = gsap.timeline({ paused: true });

		gsap.set(container, { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0%)' });

		gsap.set('.MenuOverlay__itemHolder', {
			y: 75
		});

		tl.to(container, {
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			ease: 'power4.inOut',
			duration: 1
		})
			.to(
				'.MenuOverlay__itemHolder',
				{
					y: 0,
					ease: 'power4.inOut',
					duration: 0.8,
					delay: 0.4,
					stagger: 0.1
				},
				'<'
			)
			.reverse();
	};
</script>

<div class="OverlayToggle">
	<button onclick={toggleMenuOverlay}>Menu</button>
</div>

<div class="MenuOverlay" {@attach createMenuOverlayAnimation}>
	<div class="MenuOverlay__button">
		<button onclick={toggleMenuOverlay}>Close</button>
	</div>
	<nav class="MenuOverlay__nav">
		<ul class="MenuOverlay__list">
			<li class="MenuOverlay__item">
				<div class="MenuOverlay__itemHolder">
					<NavLink
						class="!text-4xl tracking-tight"
						onclick={(e: MouseEvent) => handleNavigation(e, '/layout')}>Layout</NavLink
					>

					<menu class="SideMenu">
						<li>
							<NavLink
								class="flex w-full"
								onclick={(e: MouseEvent) => handleNavigation(e, '/layout/living')}>Living /</NavLink
							>
						</li>
						<li>
							<NavLink
								class="flex w-full"
								onclick={(e: MouseEvent) => handleNavigation(e, '/layout/sleeping')}
								>Sleeping /</NavLink
							>
						</li>
						<li>
							<NavLink
								class="flex w-full"
								onclick={(e: MouseEvent) => handleNavigation(e, '/layout/relaxing')}
								>Relaxing /</NavLink
							>
						</li>
					</menu>
				</div>
			</li>
			<li class="MenuOverlay__item">
				<div class="MenuOverlay__itemHolder">
					<NavLink
						class="!text-4xl tracking-tight"
						onclick={(e: MouseEvent) => handleNavigation(e, '/season/winter')}>Winter</NavLink
					>
				</div>
			</li>
			<li class="MenuOverlay__item">
				<div class="MenuOverlay__itemHolder">
					<NavLink
						class="!text-4xl tracking-tight"
						onclick={(e: MouseEvent) => handleNavigation(e, '/season/summer')}>Summer</NavLink
					>
				</div>
			</li>
			<li class="MenuOverlay__item">
				<div class="MenuOverlay__itemHolder">
					<NavLink
						class="!text-4xl tracking-tight"
						onclick={(e: MouseEvent) => handleNavigation(e, '/getting-here')}>Getting here</NavLink
					>
				</div>
			</li>
			<li class="MenuOverlay__item">
				<div class="MenuOverlay__itemHolder">
					<NavLink
						class="!text-4xl tracking-tight"
						onclick={(e: MouseEvent) => handleNavigation(e, '/contact')}>Contact</NavLink
					>
				</div>
			</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	@use '../../styles/partials/breakpoints';
	@use '../../styles/partials/mixins';

	.MenuOverlay {
		@include mixins.flex($direction: column, $justify: flex-start);
		background-color: #f6f1eb;
		inset: 0;
		min-height: 100vh;
		opacity: 0;
		overflow: hidden;
		padding: 1rem;
		position: fixed;
		z-index: 99999;

		@include breakpoints.tablet {
			padding-inline: 3rem;
		}

		@include breakpoints.desktop {
			display: none;
		}

		&__button {
			@include mixins.flex($justify: flex-end);
			width: 100%;
			z-index: 999;
		}

		&__nav {
			color: black;
			height: 100vh;
			width: 100%;
			z-index: 10;
		}

		&__list {
			@include mixins.flex($direction: column, $justify: center, $gap: 2rem);
			height: 100%;
		}

		&__item {
			cursor: pointer;
			border-bottom: 1px solid black;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
			overflow: hidden;
			position: relative;
			width: 100%;
		}

		&__itemHolder {
			position: relative;
			text-transform: capitalize;
			width: 100%;

			&:first-child {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
	}

	.SideMenu {
		display: flex;
		font-size: 0.875rem;
		padding-top: 0.5rem;
		width: 100%;

		li {
			width: 100%;
			white-space: nowrap;
		}
	}

	.OverlayToggle {
		@include breakpoints.desktop {
			display: none;
		}
	}
</style>

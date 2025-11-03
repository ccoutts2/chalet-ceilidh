<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	let { data, heading }: { data: any; heading: string } = $props();

	let scrollSection: HTMLElement;
	let isPageReady: boolean = $state(false);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		isPageReady = true;

		const features = gsap.utils.toArray('.Features__item');

		gsap.set(features, { opacity: 1, y: 0 });

		const ctx = gsap.context(() => {
			gsap.from(features, {
				opacity: 0,
				y: 50,
				delay: 0.3,
				duration: 1,
				ease: 'power2.out',
				stagger: 0.1,
				scrollTrigger: {
					trigger: scrollSection,
					start: 'top bottom-=25%',
					once: true
				}
			});
		});
		return () => ctx.revert();
	});
</script>

<section class="Features" bind:this={scrollSection}>
	<h2 class="Features__heading">{heading}</h2>
	<ul class="Features__list">
		{#each data as feature}
			<li class="Features__item">{feature}</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@use '../../styles/partials/breakpoints';

	.Features {
		padding-block: 2rem;

		&__heading {
			max-width: 24ch;
		}
		&__list {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
			margin-top: 2.025rem;
			max-width: 60rem;
		}

		&__item {
			background: #faf7f2;
			border-radius: 0.375rem;
			border: 1px solid #dacfc1;
			display: inline-block;
			font-size: 0.8em;
			opacity: 0;
			padding: 0.85em 1em;
			text-transform: uppercase;

			@include breakpoints.tablet {
				padding: 1em 1.25em;
			}
		}
	}
</style>

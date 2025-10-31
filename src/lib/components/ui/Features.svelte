<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	let { data, heading }: { data: any; heading: string } = $props();

	let scrollSection: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const features = gsap.utils.toArray('.Features__item');

		gsap.set(features, { autoAlpha: 0 });

		gsap.to(features, {
			autoAlpha: 1,
			stagger: 0.1,
			ease: 'none',
			scrollTrigger: {
				trigger: scrollSection,
				start: 'top center',
				toggleActions: 'play none none reverse'
			}
		});
	});
</script>

<section class="Features" bind:this={scrollSection}>
	<h2 class="Features__heading">{heading}</h2>
	<ul class="Features__list">
		{#each data as feature}
			<div class="overflow-hidden">
				<li class="Features__item">{feature}</li>
			</div>
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
			padding: 0.85em 1em;
			text-transform: uppercase;

			@include breakpoints.tablet {
				padding: 1em 1.25em;
			}
		}
	}
</style>

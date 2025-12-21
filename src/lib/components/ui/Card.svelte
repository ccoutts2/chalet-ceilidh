<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type { Cards } from '$lib/types';
	import { onMount } from 'svelte';

	interface CardProps {
		data: Cards[];
		externalLink?: boolean;
	}
	let { data, externalLink = false }: CardProps = $props();

	let cards: HTMLUListElement | null = $state(null);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (!cards) return;

		gsap.set(cards.children, { opacity: 1 });

		gsap.from(cards.children, {
			opacity: 0,
			ease: 'power1.inOut',
			duration: 0.8,
			stagger: 0.1,
			scrollTrigger: {
				trigger: cards,
				start: 'top bottom-=25%',
				once: true
			}
		});
	});
</script>

{#if data && data.length > 0}
	<ul class="Cards" bind:this={cards}>
		{#each data as card}
			{@const Icon = card.icon}
			<li>
				<article class="Card">
					<header class="Card__header">
						<h3>{card.title}</h3>
						<div class="Card__icon">
							<Icon />
						</div>
					</header>

					<div>
						{@html card.copy}
					</div>
					{#if card.dataLinks && card.href}
						{#if externalLink}
							<a href={card.href} target="_blank"
								><span class="visually-hidden">Link to {card.title}</span></a
							>
						{:else}
							<a href={card.href}><span class="visually-hidden">Link to {card.title}</span></a>
						{/if}
					{/if}
				</article>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	@use '../../styles/partials/breakpoints';
	@use '../../styles/partials/mixins';

	.Cards {
		align-items: flex-start;
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
		grid-template-rows: auto;
		height: 100%;
		justify-content: space-between;
		width: 100%;

		li {
			height: 100%;
			opacity: 0;
			width: 100%;
		}
	}

	.Card {
		@include mixins.flex($direction: column, $align: flex-start, $justify: space-between);
		background-color: #403a34;
		border-radius: 1rem;
		color: #f6f1eb;
		font-family: ClashGrotesk-Light;
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		height: 100%;
		padding: 1rem;
		position: relative;
		width: 100%;

		&__header {
			@include mixins.flex($justify: space-between);
			font-family: ClashGrotesk-Regular;
			width: 100%;
		}

		&__icon {
			width: 2rem;

			@include breakpoints.tablet {
				width: 2.5rem;
			}
		}

		a::after {
			content: '';
			position: absolute;
			inset: 0;
		}
	}
</style>

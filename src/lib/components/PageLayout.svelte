<script lang="ts">
	import { onDestroy, onMount, type Snippet } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';

	let { title, children }: { title: string; children: Snippet } = $props();

	let headerElement: HTMLHeadElement;
	let isInView: boolean = $state(false);

	const callback: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			isInView = entry.isIntersecting;
		});
	};

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};

	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(callback, options);
		observer.observe(headerElement);
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<main class="PageLayout">
	<header class="PageLayout__headerContainer {isInView ? 'in-view' : ''}" bind:this={headerElement}>
		<h1 class="PageLayout__title">{title}</h1>
	</header>
	{@render children?.()}
</main>

<style lang="scss">
	@use '../styles/partials/breakpoints';
	@use '../styles/partials/mixins';
	@use '../styles/partials/variables';

	.PageLayout {
		@include mixins.max-content($maxWidth: variables.$content--max-width--lg);
		min-height: 100vh;
		padding: 5rem 1rem;

		@include breakpoints.tablet {
			padding-inline: 3rem;
		}

		@include breakpoints.desktop {
			padding-inline: 5rem;
		}

		&__headerContainer {
			overflow: hidden;

			&.in-view .PageLayout__title {
				transform: translateY(0%);
			}
		}

		&__title {
			font-size: clamp(2.5rem, 3vw, 4rem);
			transform: translateY(100%);
			transition: transform 1s cubic-bezier(0.845, 0.05, 0.55, 0.95);
		}
	}
</style>

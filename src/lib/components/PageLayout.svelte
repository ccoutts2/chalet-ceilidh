<script lang="ts">
	import { type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<main class="PageLayout" in:fade={{ duration: 1000 }}>
	<header>
		<h1 class="PageLayout__title">{title}</h1>
	</header>
	{@render children()}
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

		&__title {
			font-size: clamp(2.5rem, 3vw, 4rem);
		}
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<main class="PageLayout">
	<header>
		<h1 class="PageLayout__title">{title}</h1>
	</header>
	{@render children()}
</main>

<style lang="scss">
	@use '../styles/partials/breakpoints';

	.PageLayout {
		padding: 3rem 1rem;

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

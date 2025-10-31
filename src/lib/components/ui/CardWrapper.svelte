<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CardWrapper {
		children: Snippet;
		layout?: 'vertical' | 'horizontal';
	}

	let { children, layout = 'vertical' }: CardWrapper = $props();
</script>

<div class="CardWrapper" data-layout={layout}>
	{@render children?.()}
</div>

<style lang="scss">
	@use '$lib/styles/partials/breakpoints.scss';

	.CardWrapper {
		position: relative;
		width: 100%;
	}

	.CardWrapper[data-layout='vertical'] :global(ul:first-child) {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: fit-content;

		@include breakpoints.tablet {
			min-width: 40rem;
		}
	}

	.CardWrapper[data-layout='horizontal'] :global(ul:first-child) {
		display: flex;
		flex-direction: row;
	}
</style>

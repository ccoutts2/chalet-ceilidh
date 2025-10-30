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

<style>
	.CardWrapper {
		position: relative;
		width: 100%;
	}

	.CardWrapper[data-layout='vertical'] :global(ul:first-child) {
		display: flex;
		flex-direction: column;
		min-width: 40rem;
		max-width: fit-content;
	}

	.CardWrapper[data-layout='horizontal'] :global(ul:first-child) {
		display: flex;
		flex-direction: row;
	}
</style>

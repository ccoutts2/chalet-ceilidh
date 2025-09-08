<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="CardWrapper">
	{@render children?.()}
</div>

<style>
	.CardWrapper {
		align-items: flex-start;
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
		grid-template-rows: auto;
		justify-content: space-between;
		position: relative;
		width: 100%;
	}
</style>

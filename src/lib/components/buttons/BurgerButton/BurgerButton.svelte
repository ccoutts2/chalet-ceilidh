<script lang="ts">
	let { onclick, status } = $props();
</script>

{#if status === 'closed'}
	<button {onclick}> Menu </button>
{:else}
	<button {onclick}> Close </button>
{/if}

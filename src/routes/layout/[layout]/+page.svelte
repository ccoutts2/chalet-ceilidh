<script lang="ts">
	import type { PageProps } from './$types';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import Features from '$lib/components/ui/Features.svelte';
	let { data }: PageProps = $props();

	const { title, pageDescription, carouselItems, features, creatureComforts, copy } = $derived(
		data.pageContent
	);
</script>

<PageLayout title="Layout | {title}">
	<div class="py-8 md:py-12">
		<p>{pageDescription}</p>
	</div>
	<Carousel data={carouselItems} />
	{#if features.length}
		<Features data={features} heading="Features" />
	{/if}
	{#if creatureComforts?.length}
		<Features data={creatureComforts} heading="Creature Comforts" />
	{/if}
	<div class="flex flex-col gap-4 py-8 md:py-12">
		{#each copy as sentence}
			<p>{sentence}</p>
		{/each}
	</div>
</PageLayout>

<style lang="scss">
</style>

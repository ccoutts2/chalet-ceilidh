<script lang="ts">
	import type { PageProps } from './$types';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import Features from '$lib/components/ui/Features.svelte';
	let { data }: PageProps = $props();
</script>

<PageLayout title="Layout | {data.pageContent.title}">
	<div class="py-8 md:py-12">
		<p>{data.pageContent.pageDescription}</p>
	</div>
	<Carousel data={data.pageContent.carouselItems} />
	{#if data.pageContent.features.length}
		<Features data={data.pageContent.features} heading="Features" />
	{/if}
	{#if data.pageContent.creatureComforts?.length}
		<Features data={data.pageContent.creatureComforts} heading="Creature Comforts" />
	{/if}
	<div class="py-8 md:py-12">
		<p>{data.pageContent.copy}</p>
	</div>
</PageLayout>

<style lang="scss">
</style>

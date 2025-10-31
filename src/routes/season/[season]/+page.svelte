<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import Features from '$lib/components/ui/Features.svelte';
	import UsefulLinks from '$lib/components/ui/UsefulLinks.svelte';
	import type { UsefulLinksProps } from '$lib/types';
	import type { EmblaOptionsType } from 'embla-carousel';

	let { data }: PageProps = $props();

	const { title, pageDescription, carouselItems, features, slug, copy } = $derived(
		data.pageContent
	);

	const options: EmblaOptionsType = { loop: true, duration: 40 };

	const usefulLinks: UsefulLinksProps[] = [
		{
			href: 'https://www.valdanniviers.ch/en/',
			text: 'www.zinal.ch'
		},
		{
			href: 'https://www.valais.ch/fr',
			text: 'www.valais.ch'
		},
		{
			href: 'https://grand-raid-bcvs.ch/',
			text: 'www.grand-raid.ch'
		}
	];
</script>

<PageLayout title="{title} in the Val D'Anniviers">
	<div class="py-8 md:py-12">
		<p>
			{pageDescription}
		</p>
	</div>
	{#key page.url.pathname}
		<Carousel slides={carouselItems} {options} />
	{/key}
	<div class="flex flex-col items-start justify-between gap-8 lg:flex-row">
		<div class="flex-2">
			<Features data={features} heading="At a Glance" />
		</div>
		{#if slug === 'summer'}
			<aside class="flex flex-1 justify-end py-8">
				<UsefulLinks data={usefulLinks} />
			</aside>
		{/if}
	</div>

	<section class="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
		<h2>Information</h2>
		<div class="flex max-w-[80ch] flex-col gap-6 leading-7">
			{#each copy as sentence}
				<p>
					{sentence}
				</p>
			{/each}
		</div>
	</section>
</PageLayout>

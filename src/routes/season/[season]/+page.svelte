<script lang="ts">
	import type { PageProps } from './$types';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import Features from '$lib/components/ui/Features.svelte';
	import UsefulLinks from '$lib/components/ui/UsefulLinks.svelte';

	let { data }: PageProps = $props();

	interface UsefulLinksProps {
		href: string;
		text: string;
	}

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

<PageLayout title="{data.pageContent.title} in the Val D'Anniviers">
	<div class="py-8 md:py-12">
		<p>
			{data.pageContent.pageDescription}
		</p>
	</div>
	<Carousel data={data.pageContent.carouselItems} />

	<Features data={data.pageContent.features} heading="At a Glance" />

	{#if data.pageContent.slug === 'summer'}
		<UsefulLinks data={usefulLinks} />
	{/if}

	<section class="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
		<h2>Information</h2>
		<div class="flex max-w-[80ch] flex-col gap-6 leading-7">
			{#each data.pageContent.copy as copy}
				<p>
					{copy}
				</p>
			{/each}
		</div>
	</section>
</PageLayout>

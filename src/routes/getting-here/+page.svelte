<script lang="ts">
	import UsefulLinks from '$lib/components/ui/UsefulLinks.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import CardWrapper from '$lib/components/ui/CardWrapper.svelte';
	import type { Cards } from '$lib/types';

	import { Plane, TrainFront, Car } from '@lucide/svelte';

	let cards: Cards[] = [
		{
			title: 'By Air',
			icon: Plane,
			copy: '<p>Zinal is easily accessible from a variety of airports including Geneva, Zurich and Bern.</p><p>The nearest airport is Sion that can be reached by private flight or helicopter.</p>'
		},
		{
			title: 'By Rail',
			icon: TrainFront,
			copy: '<p>There is an excellent rail link from Geneva airport to Sierre.</p><p>At the bottom of the valley, Sierre is the nearest train station making rail connections to all over Europe simple.</p><p>From Sierre, the Post Bus links up to Vissoie with onward connections to Zinal.</p>'
		},
		{
			title: 'By Car',
			icon: Car,
			copy: '<p>Approximate journey times by car:</p><ul><li>Sierre: 30mins</li><li>Sion: 45 mins</li><li>Geneva: 2h 15mins</li><li>Bern: 2h 15mins</li><li>Zurich: 3h 15mins</li><li>Calais: 8h 30mins</li></ul>'
		}
	];
</script>

<PageLayout title="Getting Here">
	<h2>How to get here</h2>

	<CardWrapper>
		<Card data={cards} />
	</CardWrapper>
</PageLayout>

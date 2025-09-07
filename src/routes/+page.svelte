<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import Features from '$lib/components/ui/Features.svelte';

	const features: string[] = [
		'Exclusive rental of the entire private chalet and all associated running costs',
		'Log Fire with complimentary firewood',
		'Outdoor Hot Tub with mountain views',
		'Sauna with Aromatic Oils',
		'Ski Room with Heated Boot Warmers',
		'WiFi throughout',
		"Smart TV's with a sound system and Blue Ray DVD",
		'Play Station 3 plus games',
		'DVD Library, Games and Books',
		'Private off road parking',
		'Outdoor furniture for al fresco eating and dining',
		'BBQ',
		'Flexibility to choose from self catering or dining out',
		'Experienced live out chalet managers'
	];

	const creatureComforts: string[] = [
		'Finest Quality Bed and Bath Linen',
		'“Just Like Down” anti allergenic duvets and pillows',
		'Personal Bathrobes and Slippers',
		'Spa Towels',
		'Rainfall Showers',
		'Complimentary Toiletries',
		'Hairdryers in every bathroom',
		'Welcome Champagne',
		'Nespresso maker with complimentary capsules',
		'Selection of Fine Teas'
	];

	type Cards = {
		title: string;
		href: string;
	};

	const cards: Cards[] = [
		{
			title: 'Living',
			href: '/layout/living'
		},
		{
			title: 'Sleeping',
			href: '/layout/sleeping'
		},
		{
			title: 'Relaxing',
			href: '/layout/relaxing'
		}
	];
</script>

<main class="Home">
	<picture class="Home__hero">
		<source srcset="/assets/images/home/zinal-chalet.webp" media="(width >= 1024px)" />
		<source srcset="/assets/images/home/zinal-chalet-tablet.webp" media="(width >= 768px)" />
		<source srcset="/assets/images/home/zinal-chalet-mobile.webp" media="(width >= 320px)" />
		<img src="/assets/images/home/zinal-chalet.webp" alt="" />
	</picture>
	<div class="Home__pageContent">
		<div class="Home__sectionRow">
			<div>
				<h1 class="Home__title">Chalet Celidh Zinal</h1>
				<p class="text-4xl italic">( pronounced kaylee )</p>
			</div>
			<p>
				Chalet Ceilidh is an outstanding luxury ski chalet and one of the few privately owned
				chalets available to book exclusively in the traditional but delightful mountain village of
				Zinal situated close to Grimentz.
			</p>
		</div>
		<section class="Home__sectionRow relative h-[175vh] gap-8">
			<div
				class="sticky top-0 flex h-[75vh] max-w-[80ch] flex-[1.25] flex-col gap-6 pt-12 leading-7"
			>
				<p>
					This luxury holiday home sits on a large plot of land with panoramic views of the
					surrounding peaks of the “Imperial Crown” and is within easy walking distance of the
					village and ski lift.
				</p>
				<p>
					The chalet is a blend of contemporary décor and Alpine charm and has been beautifully
					designed and furnished.
				</p>
				<p>
					Sleeping up to eight guests in four bedrooms, the chalet is self catering giving you the
					option to enjoy the specialties of the Valais in one of the many local restaurants, or for
					cosy evenings in, there is a very well equipped modern kitchen.
				</p>
				<p>
					Zinal and Grimentz nestle at the top of the Val d'Annivers, one of Switzerland's most
					beautiful and still relatively unknown ski regions with 220km of ski runs and one of the
					longest ski seasons in the Alps.
				</p>
				<p>
					The area is perfect for family skiing and is also well known for it's extensive off piste
					and mountain guiding for the more adventurous.
				</p>
				<p>
					Lift queues are rare, the pistes uncrowded, the scenery is breathtaking and skiing simply
					superb!
				</p>
			</div>
			<aside class="flex-[1] overflow-y-hidden">
				<Features data={features} heading="Features" />
				<Features data={creatureComforts} heading="Creature Comforts" />
			</aside>
		</section>
		<section class="Home__sectionRow">
			{#each cards as card}
				<Card data={card} />
			{/each}
		</section>
	</div>
</main>

<style lang="scss">
	@use '../lib/styles/partials/breakpoints';

	.Home {
		display: flex;
		flex-direction: column;

		&__hero {
			height: 90vh;
			width: 100%;

			source,
			img {
				height: 100%;
				object-fit: cover;
				width: 100%;
			}
		}

		&__pageContent {
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

		&__sectionRow {
			display: flex;
			justify-content: space-between;
			padding-block: 3rem;

			div {
				flex: 1;
			}

			p {
				flex: 1.125;
			}
		}
	}
</style>

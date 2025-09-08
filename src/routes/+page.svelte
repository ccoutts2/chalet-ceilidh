<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import CardWrapper from '$lib/components/ui/CardWrapper.svelte';
	import Features from '$lib/components/ui/Features.svelte';
	import type { Cards } from '$lib/types';
	import { House, Bed, RockingChair } from '@lucide/svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	let tl: GSAPTimeline;
	let container: HTMLElement;

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

	const cards: Cards[] = [
		{
			title: 'Living',
			href: '/layout/living',
			icon: House,
			copy: '<p>We offer an amazing space.</p>',
			dataLinks: true
		},
		{
			title: 'Sleeping',
			href: '/layout/sleeping',
			icon: Bed,
			copy: '<p>We offer a place which sleeps up to 8.</p>',
			dataLinks: true
		},
		{
			title: 'Relaxing',
			href: '/layout/relaxing',
			icon: RockingChair,
			copy: '<p>No skiing? No problem. Relax in our space.<p>',
			dataLinks: true
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.set(container, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });

		if (!container) return;

		tl = gsap.timeline().to(container, {
			clipPath: 'polygon(15% 10%, 85% 10%, 85% 90%, 15% 90%)',
			ease: 'none',
			scrollTrigger: {
				trigger: container,
				start: 'top top',
				end: '+=700',
				scrub: true
			}
		});
	});
</script>

<main class="Home">
	<picture class="Home__hero" bind:this={container}>
		<source srcset="/assets/images/home/zinal-chalet.webp" media="(width >= 1024px)" />
		<source srcset="/assets/images/home/zinal-chalet-tablet.webp" media="(width >= 768px)" />
		<source srcset="/assets/images/home/ski-lift.webp" media="(width >= 320px)" />
		<img src="/assets/images/home/zinal-chalet.webp" alt="" />
	</picture>

	<div class="Home__sectionRow">
		<div>
			<h1 class="Home__title">Chalet Celidh Zinal</h1>
			<p class="text-4xl text-pretty italic">( pronounced kaylee )</p>
		</div>
		<p>
			Chalet Ceilidh is an outstanding luxury ski chalet and one of the few privately owned chalets
			available to book exclusively in the traditional but delightful mountain village of Zinal
			situated close to Grimentz.
		</p>
	</div>
	<section class="Home__sectionRow | relative gap-8 xl:max-h-[175vh]">
		<div class="Home__information">
			<p>
				This luxury holiday home sits on a large plot of land with panoramic views of the
				surrounding peaks of the “Imperial Crown” and is within easy walking distance of the village
				and ski lift.
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
		<aside class="flex-[1] xl:overflow-y-hidden">
			<Features data={features} heading="Features" />
			<Features data={creatureComforts} heading="Creature Comforts" />
		</aside>
	</section>
	<section class="Home__sectionRow">
		<h2>See more of what we have to offer</h2>
		<CardWrapper>
			<Card data={cards} />
		</CardWrapper>
	</section>
</main>

<style lang="scss">
	@use '../lib/styles/partials/breakpoints';
	@use '../lib/styles/partials/mixins';
	@use '../lib/styles/partials/variables';

	.Home {
		@include mixins.max-content($maxWidth: variables.$content--max-width--lg);
		display: flex;
		flex-direction: column;
		padding: 3rem 1rem;

		@include breakpoints.tablet {
			padding-inline: 3rem;
		}

		@include breakpoints.desktop {
			padding-inline: 5rem;
		}

		&__hero {
			border-radius: 1rem;
			height: 90vh;
			width: 100%;

			source,
			img {
				height: 100%;
				object-fit: cover;
				width: 100%;
				border-radius: 1rem;
			}
		}

		&__title {
			font-size: clamp(2.5rem, 3vw, 4rem);
		}

		&__sectionRow {
			background-color: #eee9e2;
			display: flex;
			gap: 2rem;
			flex-direction: column;
			justify-content: space-between;
			padding-block: 2rem;

			@include breakpoints.desktop {
				flex-direction: row;
				padding-block: 5rem;
			}

			div {
				flex: 1;
			}

			p {
				flex: 1.125;
			}
		}

		&__information {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			@include breakpoints.desktop {
				position: sticky;
				top: 0;
				height: 75vh;
				max-width: 80ch;
				flex: 1.25;
				padding-top: 3rem;
				line-height: 1.75rem;
			}
		}
	}
</style>

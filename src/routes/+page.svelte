<script lang="ts">
	import LayoutSpace from '$lib/components/LayoutSpace.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import CardWrapper from '$lib/components/ui/CardWrapper.svelte';
	import Features from '$lib/components/ui/Features.svelte';
	import type { Cards } from '$lib/types';
	import { Snowflake, Sun } from '@lucide/svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onDestroy, onMount } from 'svelte';

	let { data } = $props();

	let isInView: boolean = $state(false);

	let headingContainer: HTMLHeadElement;
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

	const callback: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			isInView = entry.isIntersecting;
		});
	};

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};

	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(callback, options);
		observer.observe(headingContainer);
	});

	onDestroy(() => {
		observer?.disconnect();
	});

	const cards: Cards[] = [
		{
			title: 'Winter',
			href: '/season/winter',
			icon: Snowflake,
			copy: '<p>Check out what you can get up to during winter.</p>',
			dataLinks: true
		},
		{
			title: 'Summer',
			href: '/season/summer',
			icon: Sun,
			copy: '<p>Check out what you can get up to during summer.</p>',
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
		<header bind:this={headingContainer} class="Home__headingContainer {isInView ? 'in-view' : ''}">
			<div class="overflow-hidden">
				<h1 class="Home__title">Chalet Ceilidh Zinal</h1>
			</div>
			<div class="overflow-hidden">
				<p class="text-2xl text-pretty italic">( pronounced kaylee )</p>
			</div>
		</header>
		<p>
			Chalet Ceilidh is an outstanding luxury ski chalet and one of the few privately owned chalets
			available to book exclusively in the traditional but delightful mountain village of Zinal
			situated close to Grimentz.
		</p>
	</div>
	<section class="Home__sectionRow | relative gap-8 xl:max-h-[175vh]">
		<div class="Home__information">
			<h2>About Chalet Ceilidh</h2>
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

	<section class="Home__sectionRow Layout" data-is-column>
		<LayoutSpace data={data.selectedLayout} />
	</section>

	<section class="Home__sectionRow">
		<h2>See more of what we have to offer</h2>
		<CardWrapper>
			<Card data={cards} externalLink={false} />
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
		padding: 5rem 1rem;

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
				border-radius: 1rem;
				height: 100%;
				object-fit: cover;
				width: 100%;
			}
		}

		&__headingContainer {
			&.in-view .Home__title,
			&.in-view p {
				transform: translateY(0%);
			}

			p {
				transform: translateY(100%);
				transition: transform 1s cubic-bezier(0.845, 0.05, 0.55, 0.95);
				transition-delay: 0.2s;
			}
		}

		&__title {
			font-size: clamp(2.5rem, 3vw, 4rem);
			transform: translateY(100%);
			transition: transform 1s cubic-bezier(0.845, 0.05, 0.55, 0.95);
		}

		&__sectionRow {
			@include mixins.flex($direction: column, $justify: space-between, $gap: 2rem);
			background-color: #f6f1eb;
			padding-block: 2rem;

			@include breakpoints.desktop {
				flex-direction: row;
				padding-block: 5rem;
			}

			&[data-is-column] {
				@include breakpoints.desktop {
					align-items: center;
					flex-direction: column;
					padding-block: 5rem;
				}
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
				flex: 1.25;
				height: 75vh;
				line-height: 1.75rem;
				max-width: 80ch;
				padding-top: 3rem;
				position: sticky;
				top: 2rem;
			}
		}
	}
</style>

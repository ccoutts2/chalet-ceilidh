<script lang="ts">
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import ClassNames from 'embla-carousel-class-names';

	interface CarouselProps {
		slides: any;
		options?: EmblaOptionsType;
	}

	let { slides, options = {} }: CarouselProps = $props();

	let scrollProgress: number = $state(0);
	let animationName: string = '';
	let timeoutId = 0;
	let rafId = 0;

	let progressNode: HTMLDivElement;

	let emblaApi: EmblaCarouselType | undefined = $state(undefined);

	let plugins = [
		Autoplay({
			delay: 6000,
			stopOnInteraction: false,
			stopOnMouseEnter: false
		}),
		ClassNames()
	];

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		if (!emblaApi) return;
		startProgress(emblaApi);
	}

	function startProgress(emblaApi: EmblaCarouselType) {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay || !progressNode) return;

		const restartProgress = () => {
			const timeUntilNext = autoplay.timeUntilNext();
			if (timeUntilNext === null) return;

			if (!animationName) {
				const style = window.getComputedStyle(progressNode);
				animationName = style.animationName;
			}

			progressNode.style.animationName = 'none';
			progressNode.style.transform = 'translate3d(0,0,0)';

			cancelAnimationFrame(rafId);
			clearTimeout(timeoutId);

			rafId = requestAnimationFrame(() => {
				timeoutId = setTimeout(() => {
					progressNode.style.animationName = animationName;
					progressNode.style.animationDuration = `${timeUntilNext}ms`;
				}, 0);
			});
		};

		restartProgress();

		emblaApi.on('autoplay:timerset', restartProgress);
	}
</script>

<div class="embla">
	<div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} onemblaInit={onInit}>
		<div class="embla__container">
			{#each slides as slide}
				<div class="embla__slide">
					<div class="embla__parallax__layer">
						<img class="embla__slide__img embla__parallax__img" src={slide.src} alt={slide.alt} />
					</div>
					<div class="embla__slide__caption">
						<p class="embla__slide__text">{slide.caption}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="embla__progress">
			<div
				bind:this={progressNode}
				class="embla__progress__bar"
				style="transform: translate3d({scrollProgress}%,0px,0px)"
			></div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/partials/breakpoints';

	.embla {
		width: 100%;
		margin: auto;

		--slide-height: 35rem;
		--slide-spacing: 2rem;
		--slide-size: 100%;

		&__viewport {
			overflow: hidden;
			position: relative;
		}

		&__container {
			cursor: grab;
			display: flex;
			margin-left: calc(var(--slide-spacing) * -1);
			touch-action: pan-y pinch-zoom;

			:active {
				cursor: grabbing;
			}
		}
		&__slide {
			flex: 0 0 var(--slide-size);
			min-width: 0;
			padding-left: var(--slide-spacing);
			transform: translate3d(0, 0, 0);
		}
		&__slide__img {
			display: block;
			height: var(--slide-height);
			object-fit: cover;
			width: 100%;
			object-fit: cover;
			transform: scale(1);
			transition: transform 2s cubic-bezier(1, 0.15, 0.46, 0.95);
			transition-delay: 0.4s;
		}

		&__slide:not(.is-snapped) &__slide__img {
			transform: scale(1.1);
		}

		&__slide__caption {
			bottom: 0.25rem;
			text-align: left;
			color: black;
			font-size: 2rem;
			text-transform: uppercase;
			pointer-events: none;
			overflow: hidden;
			position: relative;
		}

		&__slide__text {
			transform: translateY(0%);
			transition: transform 1s cubic-bezier(0.14, 1.04, 0.1, 1);
			transition-delay: 1.8s;
			font-size: 1.5rem;
		}

		&__slide:not(.is-snapped) p {
			transform: translateY(100%);
		}

		&__progress {
			border-radius: 1.8rem;
			background-color: transparent;
			border: 0.5px solid #403a34;
			height: 0.5rem;
			justify-self: flex-end;
			align-self: center;
			width: 15rem;
			max-width: 90%;
			overflow: hidden;
			position: absolute;
			bottom: 1rem;
			right: 0;
		}
		&__progress__bar {
			background-color: #403a34;
			position: absolute;
			width: 100%;
			top: 0;
			bottom: 0;
			left: -100%;
		}

		&__parallax__layer {
			display: flex;
			justify-content: center;
			position: relative;
			width: 100%;
			overflow: hidden;
		}

		&__progress {
			justify-self: center;
			transition: opacity 0.3s ease-in-out;
			width: 8rem;
		}

		&__progress__bar {
			animation-name: autoplay-progress;
			animation-timing-function: linear;
			animation-iteration-count: 1;
		}
	}

	@keyframes autoplay-progress {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(100%, 0, 0);
		}
	}
</style>

<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import gsap from 'gsap';
	import { onDestroy } from 'svelte';
	let { data } = $props();

	let count: number = $state(0);
	let progressBar: HTMLElement;
	let interval: ReturnType<typeof setInterval>;

	const createCarouselAnimation: Attachment = (container) => {
		const slides = container.querySelectorAll('.Carousel__image');
		const captions = container.querySelectorAll('.Carousel__captionText');

		slides.forEach((img, i) => {
			gsap.set(img, {
				xPercent: i === 0 ? 0 : 100
			});
		});

		captions.forEach((caption, i) => [
			gsap.set(caption, {
				yPercent: i === 0 ? 0 : 100
			})
		]);

		gsap.set(progressBar, {
			scaleX: 0
		});

		interval = setInterval(autoPlay, 5000);

		gsap.to(progressBar, {
			scaleX: 1,
			delay: 1,
			duration: 5,
			ease: 'none',
			repeat: -1,
			transformOrigin: 'left'
		});

		function autoPlay() {
			const current = count;
			const next = (count + 1) % slides.length;

			gsap.to(slides[current], { duration: 2, ease: 'power4.inOut', xPercent: -100 });
			gsap.to(captions[current], { duration: 1, ease: 'power4.inOut', yPercent: 100 });

			gsap.fromTo(
				slides[next],
				{ xPercent: 100 },
				{ duration: 2, ease: 'power4.inOut', xPercent: 0 }
			);

			gsap.fromTo(
				captions[next],
				{ yPercent: 100 },
				{ delay: 1, duration: 1, ease: 'power4.inOut', yPercent: 0 }
			);

			count = next;
		}
	};

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="Carousel" {@attach createCarouselAnimation}>
	<div class="Carousel__wrapper">
		{#each data as slide}
			<article class="Carousel__slide">
				<div class="Carousel__imageContainer">
					<img class="Carousel__image" src={slide.src} alt={slide.alt} />
				</div>
				<div class="Carousel__caption">
					<h3 class="Carousel__captionText">{slide.caption}</h3>
				</div>
			</article>
		{/each}
		<div class="ProgressBar">
			<span class="ProgressBar__index">{count + 1}</span>
			<span class="ProgressBar__time">
				<span class="ProgressBar__timeSlider" bind:this={progressBar}></span>
			</span>
			<span class="ProgressBar__length">{data.length}</span>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/partials/breakpoints';

	.Carousel {
		height: 85vh;
		width: 100%;
		position: relative;
		pointer-events: none;

		&__wrapper {
			position: relative;
			height: 100%;
			overflow: hidden;
		}

		&__slide {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			overflow: hidden;
		}

		&__imageContainer {
			cursor: pointer;
			-webkit-box-flex: 2;
			-ms-flex-positive: 2;
			flex-grow: 2;
			width: 100%;
			height: 100%;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			height: 100%;
			width: 100%;
			position: relative;
		}

		&__image {
			height: 100%;
			width: 100%;
			-o-object-fit: cover;
			object-fit: cover;
			-o-object-position: center;
			object-position: center;
			position: absolute;
			top: 0;
			left: 0;
		}

		&__caption {
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			-webkit-box-align: end;
			-ms-flex-align: end;
			align-items: flex-end;
			pointer-events: auto;
			overflow: hidden;
			line-height: 1;
			margin-block: 1rem;
		}
	}

	.ProgressBar {
		-ms-flex-align: center;
		-ms-flex-direction: column;
		-webkit-box-align: center;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		align-items: center;
		display: flex;
		flex-direction: column;
		pointer-events: none;
		position: absolute;
		right: 1rem;
		bottom: 3rem;

		@include breakpoints.tablet {
			-webkit-transform: translateY(-50%);
			top: 50%;
			transform: translateY(-50%);
		}

		&__index,
		&__length {
			font-size: 1.125rem;
			line-height: 1.7;
			color: #fff;
		}

		&__time {
			height: 1px;
			width: 113px;
			background-color: #fff;
			position: relative;
			display: flex;
		}

		&__timeSlider {
			height: 3px;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: white;
		}
	}
</style>

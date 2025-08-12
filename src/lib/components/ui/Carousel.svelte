<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import gsap from 'gsap';
	let { data } = $props();

	let count: number = $state(0);

	const createCarouselAnimation: Attachment = (container) => {
		const images = container.querySelectorAll('.Carousel__image');
		const numImages = images.length;

		if (numImages === 0) return;

		const wrapper = container.querySelector('.Carousel__wrapper');
		const firstSlide = wrapper?.querySelector('.Carousel__slide')?.cloneNode(true);
		if (firstSlide) wrapper?.appendChild(firstSlide);

		const slides = container.querySelectorAll('.Carousel__image');
		const totalSlides = slides.length;

		slides.forEach((img, i) => {
			gsap.set(img, {
				clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
				zIndex: i === 0 ? totalSlides : 0
			});
		});

		const timeline = gsap.timeline({
			repeat: -1,
			onRepeat: () => {
				slides.forEach((img, i) => {
					gsap.set(img, {
						clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
						zIndex: i === 0 ? totalSlides : 0
					});
				});
				timeline.pause();
				requestAnimationFrame(() => timeline.play(0));
			}
		});

		for (let i = 0; i < totalSlides - 1; i++) {
			const current = slides[i];
			const next = slides[i + 1];

			const step = gsap.timeline();

			step.set(next, {
				clipPath: 'inset(0% 100% 0% 0%)',
				zIndex: totalSlides
			});

			step.to(next, {
				clipPath: 'inset(0% 0% 0% 0%)',
				duration: 3.5,
				ease: 'power4.inOut'
			});

			step.set(current, { zIndex: 0 });
			step.to({}, { duration: 3 });

			timeline.add(step);
		}
	};
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
				<span class="ProgressBar__timeSlider"></span>
			</span>
			<span class="ProgressBar__length">{data.length}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.Carousel {
		height: 100vh;
		width: 100%;
		position: relative;

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
			-webkit-box-flex: 2;
			-ms-flex-positive: 2;
			flex-grow: 2;
			width: 100%;
			height: 100%;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			cursor: pointer;
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
		right: 20px;
		top: 50%;
		bottom: auto;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		position: absolute;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		pointer-events: none;
		display: flex;

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

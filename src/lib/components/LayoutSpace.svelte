<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { page } from '$app/state';
	let { data } = $props();
</script>

<div class="Layout">
	<h2>See our layouts</h2>
	<div class="Layout__container">
		<nav class="Layout__nav">
			<a
				class="Layout__link"
				class:active={page.url.searchParams.get('layout') === 'living'}
				href="/?layout=living"
				data-content="Living"
				data-sveltekit-noscroll>Living</a
			>
			<a
				class="Layout__link"
				class:active={page.url.searchParams.get('layout') === 'sleeping'}
				href="/?layout=sleeping"
				data-content="Sleeping"
				data-sveltekit-noscroll>Sleeping</a
			>
			<a
				class="Layout__link"
				class:active={page.url.searchParams.get('layout') === 'relaxing'}
				href="/?layout=relaxing"
				data-content="Relaxing"
				data-sveltekit-noscroll>Relaxing</a
			>
		</nav>
		<div class="Layout__content">
			{#if data}
				{@const selectedLayout = data[0]}

				<div class="Layout__imageContainer">
					<img src={selectedLayout.carouselItems[0].src} alt="placeholder" />
				</div>

				<section class="Layout__copy">
					<div>
						<h3>{selectedLayout.title}</h3>
						<p>{selectedLayout.pageDescription}</p>
					</div>
					<a class="flex underline" href="/layout/{selectedLayout.slug}"
						>View Layout<span><ArrowUpRight /></span></a
					>
				</section>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@use '../styles/partials/breakpoints';
	@use '../styles/partials/mixins';

	.Layout {
		display: flex;
		flex-direction: column;

		h2 {
			padding-block: 2rem;
		}

		&__container {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@include breakpoints.tablet {
				column-gap: 1rem;
				display: grid;
				flex-direction: row;
				grid-template-columns: repeat(12, 1fr);
				justify-content: space-between;
				row-gap: 1rem;
			}
		}

		&__nav {
			display: flex;
			flex-wrap: wrap;
			gap: 2rem;
			grid-column-end: 4;
			grid-column-start: 1;
			justify-content: center;

			@include breakpoints.tablet {
				flex-direction: column;
				flex-wrap: nowrap;
				justify-content: flex-start;
			}
		}

		&__link {
			@include mixins.flex($align: center);
			background-color: #f6f1eb;
			border: 1px solid #403a34;
			color: #403a34;
			flex: 1;
			max-width: 12rem;
			padding: 1rem;
			position: relative;
			text-transform: uppercase;

			&::after {
				content: '';
				align-items: center;
				background-color: #403a34;
				color: #f6f1eb;
				display: flex;
				inset: 0;
				justify-content: center;
				position: absolute;
				transform-origin: top;
				transform: scaleY(0);
				transition: transform 0.55s cubic-bezier(0, 1.09, 0.83, 1);
			}

			&:hover {
				&::after {
					content: attr(data-content);
					transform: scaleY(1);
				}
			}
		}

		&__content {
			@include breakpoints.mobile {
				display: grid;
				gap: 2rem;
				grid-column-end: 13;
				grid-column-start: 5;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		&__imageContainer {
			height: auto;
			width: auto;

			img {
				height: 100%;
				object-fit: cover;
				width: 100%;
			}
		}

		&__copy {
			@include mixins.flex($direction: column, $justify: space-between);

			p {
				font-family: ClashGrotesk-Light;
			}
		}
	}

	.active {
		background-color: #403a34;
		color: #f6f1eb;
	}
</style>

<script lang="ts">
	import type { Cards } from '$lib/types';

	interface CardProps {
		data: Cards[];
		externalLink?: boolean;
	}
	let { data, externalLink = false }: CardProps = $props();
</script>

{#if data.length > 1}
	<ul class="Cards">
		{#each data as item}
			{@const Icon = item.icon}
			<li>
				<article class="Card">
					<header class="Card__header">
						<h3>{item.title}</h3>
						<div class="Card__icon">
							<Icon />
						</div>
					</header>

					<p>{@html item.copy}</p>
					{#if item.dataLinks}
						{#if externalLink}
							<a href={item.href} target="blank"
								><span class="visually-hidden">Link to {item.title}</span></a
							>
						{:else}
							<a href={item.href}><span class="visually-hidden">Link to {item.title}</span></a>
						{/if}
					{/if}
				</article>
			</li>
		{/each}
	</ul>
{:else}
	{#each data as item}
		{@const Icon = item.icon}

		<article class="Card">
			<header class="Card__header">
				<h3>{item.title}</h3>
				<div class="Card__icon">
					<Icon />
				</div>
			</header>

			<p>{@html item.copy}</p>
			{#if item.dataLinks}
				<a href={item.href}><span class="visually-hidden">Link to {item.title}</span></a>
			{/if}
		</article>
	{/each}
{/if}

<style lang="scss">
	@use '../../styles/partials/breakpoints';
	@use '../../styles/partials/mixins';

	.Cards {
		align-items: flex-start;
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
		grid-template-rows: auto;
		justify-content: space-between;
		width: 100%;

		li {
			width: 100%;
		}
	}

	.Card {
		@include mixins.flex($direction: column, $align: flex-start, $justify: space-between);
		background-color: #e7e3de;
		border-radius: 1rem;
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		padding: 1rem;
		position: relative;
		width: 100%;

		&__header {
			@include mixins.flex($justify: space-between);
			width: 100%;
		}

		&__icon {
			width: 2rem;

			@include breakpoints.tablet {
				width: 2.5rem;
			}
		}

		a::after {
			content: '';
			position: absolute;
			inset: 0;
		}
	}
</style>

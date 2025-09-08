<script lang="ts">
	let { data } = $props();
</script>

{#each data as item}
	{@const Icon = item.icon}
	<article class="Card">
		<header class="Card__header">
			<h3>{item.title}</h3>
			<div class="Card__icon">
				<Icon />
			</div>
		</header>

		<p>{item.copy}</p>

		<a href={item.href}><span class="visually-hidden">Link to {item.title}</span></a>
	</article>
{/each}

<style lang="scss">
	@use '../../styles/partials/breakpoints';
	@use '../../styles/partials/mixins';

	.Card {
		@include mixins.flex($direction: column, $align: flex-start, $justify: space-between);
		border-radius: 1rem;
		position: relative;
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		padding: 1rem;
		width: 100%;
		background-color: #e7e3de;

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

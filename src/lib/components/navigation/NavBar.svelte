<script lang="ts">
	import type { Snippet } from 'svelte';

	interface NavBarProps {
		children: Snippet;
	}
	let props: NavBarProps = $props();
</script>

<nav class="NavBar">
	{@render props.children()}
</nav>

<style lang="scss">
	@use '../../styles/partials/breakpoints';
	@use '../../styles/partials/mixins';

	.NavBar {
		@include mixins.flex($direction: row, $justify: space-between, $align: center);
		padding: 1rem;

		@include breakpoints.tablet {
			padding-inline: 3rem;
		}

		@include breakpoints.desktop {
			padding-inline: 5rem;
		}
	}
</style>

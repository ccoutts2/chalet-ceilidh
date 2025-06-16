<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue, HTMLAnchorAttributes } from 'svelte/elements';

	interface NavLinkProps extends HTMLAnchorAttributes {
		class?: ClassValue;
		children?: Snippet;
	}

	let { children, ...props }: NavLinkProps = $props();
</script>

<a {...props} class={['NavLink', props.class]}>
	{@render children?.()}
</a>

<style lang="scss">
	@use '../../styles/partials/variables';

	.NavLink {
		font-size: clamp(0.875rem, 3vw, 1rem);
	}
</style>

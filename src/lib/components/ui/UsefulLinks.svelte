<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';

	let { data } = $props();
</script>

<section class="UsefulLinks">
	<h2>Useful Links</h2>
	<ul class="my-6">
		{#each data as { href, text }}
			<li class="py-1 md:py-2">
				<a {href} target="_blank"
					><span>{text}</span>
					<div><span><ArrowUpRight /></span><span><ArrowUpRight /></span></div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@use '$lib/styles/partials/mixins.scss';

	.UsefulLinks {
		li {
			padding-block: 0.5rem;
		}

		a {
			@include mixins.flex($justify: space-between, $align: center);
			background-color: #403a34;
			border-radius: 4px;
			color: #f6f1eb;
			flex: 1;
			max-width: 18rem;
			padding: 1rem;
			position: relative;
			text-transform: uppercase;

			div {
				height: 1.5em;
				overflow: hidden;
				position: relative;
				width: 1.5em;

				span {
					display: inline-block;
					left: 0;
					position: absolute;
					top: 0;
					transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
				}

				span:first-of-type {
					transform: translate(-20px, 20px);
				}

				span:last-of-type {
					transform: translate(0, 0);
				}
			}

			&:hover div span:first-of-type {
				transform: translate(0, 0);
			}

			&:hover div span:last-of-type {
				transform: translate(20px, -20px);
			}
		}
	}
</style>

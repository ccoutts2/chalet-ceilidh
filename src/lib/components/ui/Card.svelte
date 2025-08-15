<script lang="ts">
	let { data } = $props();
</script>

<article class="Card">
	<div>
		<img />
	</div>
	<footer>
		<h3>{data.title}</h3>
		<p>See more</p>
	</footer>
	<a href={data.href}><span class="visually-hidden">Link to {data.title}</span></a>
</article>

<style lang="scss">
	.Card {
		position: relative;

		a::after {
			position: absolute;
			inset: 0;
		}
	}
</style>

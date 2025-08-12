<script lang="ts">
	let { data } = $props();
</script>

<section>
	<h2>Useful Links</h2>
	<ul class="my-6">
		{#each data as { href, text }}
			<li class="py-1 md:py-2">
				<a class="underline" {href} target="_blank">{text}</a>
			</li>
		{/each}
	</ul>
</section>

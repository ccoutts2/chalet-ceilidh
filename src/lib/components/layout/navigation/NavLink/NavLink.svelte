<script lang="ts">
	let { href, children }: { href: string; children: any } = $props();
</script>

<a {href}>{@render children()}</a>

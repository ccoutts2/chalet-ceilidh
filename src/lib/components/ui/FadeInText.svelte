<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type { Attachment } from 'svelte/attachments';
	import type { ClassValue } from 'svelte/elements';

	const props: { class?: ClassValue; children: Snippet } = $props();

	let text: HTMLParagraphElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});

	const createReveal: Attachment = (element) => {
		gsap.set(element, {
			opacity: 1,
			filter: 'blur(8px)'
		});
		gsap.to(element, {
			opacity: 1,
			filter: 'blur(0px)',
			duration: 1,
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=50px'
			}
		});
	};
</script>

<p bind:this={text} {@attach createReveal} {...props} class={props.class}>
	{@render props.children?.()}
</p>

<style lang="scss">
	p {
		opacity: 0;
		filter: blur(0px);
	}
</style>

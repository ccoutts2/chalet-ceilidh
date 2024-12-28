<script lang="ts">
	import NavLink from '../NavLink/NavLink.svelte';

	let menuState: string = 'closed';

	const toggleMenu = () => {};
</script>

<header>
	<nav class="relative flex items-center p-4 md:justify-end lg:justify-center">
		<figure class="absolute left-4 top-4">
			<img
				alt="Chalet Ceilidh Logo"
				src="https://www.zinalskichalets.com/wp-content/uploads/2013/04/new-logo-2.png"
			/>
		</figure>
		<ul class="hidden gap-2 md:flex">
			<li class="flex-1"><NavLink href="/">Home,</NavLink></li>
			<li class="flex-1"><NavLink href="/">Chalet,</NavLink></li>
			<li class="flex-1"><NavLink href="/">Layout,</NavLink></li>
			<li class="flex-1"><NavLink href="/">Services,</NavLink></li>
			<li class="flex-1"><NavLink href="/">Winter,</NavLink></li>
			<li class="flex-1"><NavLink href="/">Summer,</NavLink></li>
			<li class="flex-1"><NavLink href="/">Contact</NavLink></li>
		</ul>
	</nav>
</header>

<script>
	import Logo from './Logo.svelte';
	import NavLink from './navigation/NavLink.svelte';
</script>

<footer class="Footer">
	<div class="Footer__container">
		<Logo />
		<div class="Footer__navSection">
			<section class="Footer__col | pt-4 md:pt-0">
				<h3>Explore</h3>
				<nav>
					<ul class="Footer__col">
						<li><NavLink href="/">Home</NavLink></li>
						<li><NavLink href="/layout">Layout</NavLink></li>
						<li><NavLink href="/layout/living">Living</NavLink></li>
						<li><NavLink href="/layout/sleeping">Sleeping</NavLink></li>
						<li><NavLink href="/layout/relaxing">Relaxing</NavLink></li>
						<li><NavLink href="/season/winter">Winter</NavLink></li>
						<li><NavLink href="/season/summer">Summer</NavLink></li>
					</ul>
				</nav>
			</section>

			<section class="Footer__col">
				<h3>Chalet</h3>
				<nav>
					<ul class="Footer__col">
						<li><NavLink href="/getting-here">Getting Here</NavLink></li>
						<li><NavLink href="/contact">Contact</NavLink></li>
						<li><NavLink href="/">Booking Form</NavLink></li>
						<li><NavLink href="/">Terms & Conditions</NavLink></li>
					</ul>
				</nav>
			</section>

			<section class="Footer__col">
				<h3>Contact</h3>
				<address>
					<ul class="Footer__col">
						<li><a href="mailto:zinalskichalets@aol.com">zinalskichalets@aol.com</a></li>
						<li><a href="tel:+447980649054">+44 (0)7980 649054</a></li>
					</ul>
				</address>
			</section>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '../styles/partials/breakpoints';
	@use '../styles/partials/mixins';

	.Footer {
		padding: 1rem;
		border-radius: 1rem;

		@include breakpoints.tablet {
			padding: 2rem;
		}

		&__container {
			@include mixins.flex($direction: column, $align: center, $gap: 2rem);
			background-color: #e7e3de;
			border-radius: 1rem;
			padding: 1rem;

			h3 {
				font-size: 1rem !important;
				margin-bottom: 0.75rem;
				text-transform: uppercase;
			}

			@include breakpoints.tablet {
				@include mixins.flex(
					$direction: column,
					$align: flex-start,
					$justify: space-between,
					$gap: 2rem
				);

				padding: 2rem;
			}

			@include breakpoints.desktop {
				@include mixins.flex(
					$direction: row,
					$align: flex-start,
					$justify: space-between,
					$gap: normal
				);

				padding: 4rem;
			}
		}

		&__navSection {
			@include mixins.flex($direction: column, $align: center, $justify: space-between, $gap: 2rem);
			width: 100%;

			@include breakpoints.tablet {
				@include mixins.flex($direction: row, $align: flex-start, $justify: space-between);
			}

			@include breakpoints.desktop {
				justify-content: flex-end;
				gap: 8rem;
			}
		}

		&__col {
			@include mixins.flex($direction: column, $align: center);

			@include breakpoints.tablet {
				align-items: flex-start;
			}
		}
	}
</style>

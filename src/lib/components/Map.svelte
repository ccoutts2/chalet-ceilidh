<script lang="ts">
	import { onMount } from 'svelte';

	let mapContainer: HTMLDivElement;

	onMount(async () => {
		const L = await import('leaflet');
		await import('leaflet/dist/leaflet.css');

		const map = L.map(mapContainer).setView([46.137972, 7.626603], 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);

		L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenSnowMap contributors'
		}).addTo(map);

		const marker = L.marker([46.137972, 7.626603]).addTo(map);

		marker.bindPopup('<b>Chalet Ceilidh</b>').openPopup();
	});
</script>

<div bind:this={mapContainer} class="map"></div>

<style>
	.map {
		width: 100%;
		height: 30rem;
		margin-top: 10vh;
	}

	:global(.leaflet-right) {
		display: none;
	}

	:global(.leaflet-left) {
		display: none;
	}
</style>

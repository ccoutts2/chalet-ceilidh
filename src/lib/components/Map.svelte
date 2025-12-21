<script lang="ts">
	import type { LatLngTuple } from 'leaflet';
	import type { Map } from 'leaflet';
	import { onMount } from 'svelte';

	let mapContainer: HTMLDivElement;

	let defaultCoordinates: LatLngTuple = $state([46.137972, 7.626603]);
	let map: Map;

	const recenter = () => {
		if (map) {
			map.flyTo(defaultCoordinates);
		}
	};

	onMount(async () => {
		const L = await import('leaflet');
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapContainer).setView(defaultCoordinates, 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);

		L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenSnowMap contributors'
		}).addTo(map);

		const houseIcon = L.icon({
			iconUrl: '/assets/logos/house.svg'
		});

		const marker = L.marker(defaultCoordinates, { icon: houseIcon }).addTo(map);
		marker.bindPopup('<b>Chalet Ceilidh</b>').openPopup();
	});
</script>

<button onclick={recenter}>Recenter</button>
<div bind:this={mapContainer} class="map"></div>

<style>
	button {
		margin-top: 5vh;
	}
	.map {
		width: 100%;
		height: 30rem;
		margin-top: 2vh;
	}

	:global(.leaflet-right) {
		display: none;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import MainInformation from '../components/mainInformation.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { handleWeather } from '$lib/handleWeather';
	import { coords } from '$lib/store';

	onMount(async () => {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				if (position) {
					coords.set({ latitude: position.coords.latitude, longitude: position.coords.longitude });
				}
				coords.subscribe((value) => {
					handleWeather(value.latitude, value.longitude);
				});
			},
			() => {
				coords.set({ latitude: 40.71427, longitude: -74.00597 });
				coords.subscribe((value) => {
					handleWeather(value.latitude, value.longitude);
				});
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			}
		);
	});
</script>


<main
	class="w-screen min-h-screen bg-slate-900 text-slate-100 lg:p-8 p-2 flex flex-col items-center gap-4"
>
	<Navbar />
	<h1 class="lg:text-2xl text-xl font-semibold text-start w-full">Today's Weather</h1>
	<MainInformation />
</main>

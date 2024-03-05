<script lang="ts">
	import { handleWeather } from '$lib/handleWeather';
	import Icon from '@iconify/svelte';
	let search = '';
	let results: any;
	let dropdownOpen: boolean = false;

	const handleFetchCityCoords = async () => {
		const response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`
		);
		const body = await response.json();
		if (!body.reults) {
			dropdownOpen = true;
		}
		console.log(body);
		results = body.results;
		dropdownOpen = true;
	};

	const handleSetCoords = (latitude: number, longitude: number) => {
		handleWeather(latitude, longitude);
		dropdownOpen = false;
	};
</script>

<nav class="flex lg:flex-row flex-col items-start w-full justify-between gap-2">
	<div class="flex flex-row items-center gap-1">
		<img src="/favicon.png" class="lg:h-8 h-6 lg:w-8 w-6" alt="img" />
		<h1 class="lg:text-2xl text-xl font-semibold">Atlas Weather</h1>
	</div>
	<div class="flex flex-row items-center gap-2 lg:max-w-sm w-full">
		<div class="relative w-full">
			<input
				title="search-bar"
				type="text"
				placeholder="Search for your city"
				class="w-full bg-slate-800 px-4 py-2 rounded placeholder:text-slate-400 focus:outline-none lg:text-base text-sm"
				bind:value={search}
				on:blur={() => (dropdownOpen = false)}
			/>
			{#if dropdownOpen}
				<ul class="bg-slate-800 w-full absolute top-12 left-0 rounded py-2 border border-slate-700">
					{#if results}
						{#each results as result}
							<li>
								<button
									class="w-full text-left bg-slate-800 hover:bg-slate-600 transition-all px-2 py-1 focus:outline-none"
									on:click={() => {
										handleSetCoords(result.latitude, result.longitude);
									}}>{result.name} : {result.country}</button
								>
							</li>
						{/each}
					{:else}
						<p class="text-slate-400">No results found</p>
					{/if}
				</ul>
			{/if}
		</div>
		<button
			class="p-2 bg-slate-800 rounded focus:outline-none hover:bg-slate-600 transition-all"
			on:click={handleFetchCityCoords}
		>
			<Icon icon="fe:search" class="lg:h-6 h-5 lg:w-6 w-5" />
		</button>
	</div>
</nav>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import MainListItem from './mainListItem.svelte';
	import ForecastBlock from './forecastBlock.svelte';
	import { data, type APIResponse } from '$lib/store';

	let weatherData: APIResponse;

	data.subscribe((value) => {
		weatherData = value;
	});
</script>

<section class="flex flex-col lg:gap-4 gap-2 w-full h-full py-2">
	{#if weatherData}<div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
			<div
				class="flex flex-col items-center justify-center gap-8 w-full px-4 py-8 bg-slate-800 rounded h-full"
			>
				<div class="flex flex-row items-center lg:gap-8 gap-4">
					<Icon icon="fe:sunny-o" class="lg:h-24 h-16 lg:w-24 w-16" />
					<div class="flex flex-col items-center gap-2">
						<h1 class="lg:text-6xl text-3xl font-semibold">{weatherData.weather.main.temp}°C</h1>
						<p class="lg:text-2xl text-xl text-slate-400">Temperature</p>
					</div>
				</div>
				<div class="flex flex-row items-center lg:gap-4 gap-2">
					<Icon icon="fe:map" class="lg:h-12 h-6 lg:w-12 w-6" />
					<p class="lg:text-2xl text-lg">{weatherData.weather.name}</p>
				</div>
			</div>
			<ul class="grid grid-cols-2 grid-testrows-2 lg:gap-4 gap-2 w-full">
				<MainListItem
					propsData={{
						title: 'Min Temp',
						number: weatherData.weather.main.temp_min,
						unit: '°C'
					}}
				/>
				<MainListItem
					propsData={{
						title: 'Max Temp',
						number: weatherData.weather.main.temp_max,
						unit: '°C'
					}}
				/>
				<MainListItem
					propsData={{
						title: 'Humidity',
						number: weatherData.weather.main.humidity,
						unit: '%'
					}}
				/>
				<MainListItem
					propsData={{
						title: 'Pressure',
						number: weatherData.weather.main.pressure,
						unit: 'hPa'
					}}
				/>
				<MainListItem
					propsData={{
						title: 'Visibility',
						number: weatherData.weather.visibility,
						unit: 'm'
					}}
				/>
				<MainListItem
					propsData={{
						title: 'Wind Speed',
						number: weatherData.weather.wind.speed,
						unit: 'm/s'
					}}
				/>
			</ul>
		</div>
		<h1 class="lg:text-2xl text-xl font-semibold">5 day Forecast</h1>
		<div class="flex items-center lg:gap-4 gap-2 overflow-x-auto">
			{#each weatherData.forecast.list as list, index}
				{#if index % 8 === 0}
					<ForecastBlock
						forecastData={{
							temp: list.main.temp,
							time: list.dt
						}}
					/>
				{/if}
			{/each}
		</div>
	{:else}
		<p class="lg:text-2xl text-xl font-semibold">Loading...</p>
	{/if}
</section>

<script lang="ts">
	export let forecastData: { temp: number; time: number } = {
		temp: 0,
		time: 0
	};
</script>

<div class="flex flex-col items-center gap-2 lg:w-full min-w-48 bg-slate-800 p-4 rounded">
	<p class="lg:text-xl textlg">{forecastData.temp}°C</p>
	<p class="lg:text-lg text-base text-slate-400">
		{new Date(forecastData.time * 1000).toLocaleDateString('en-US', {
			weekday: 'long',
			hour: 'numeric'
		})}
	</p>
</div>

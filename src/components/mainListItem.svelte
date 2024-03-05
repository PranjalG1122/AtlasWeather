<script lang="ts">
	export let propsData: { title: string; number: number; unit: string } = {
		title: '',
		number: 0,
		unit: ''
	};
</script>

<li class="bg-slate-800 w-full flex flex-col items-center gap-2 p-4 rounded">
	<h1 class="lg:text-3xl text-2xl">
		{propsData.number}<span class="text-lg text-start">{propsData.unit}</span>
	</h1>
	<h1 class="lg:text-lg text-base text-slate-400">{propsData.title}</h1>
</li>

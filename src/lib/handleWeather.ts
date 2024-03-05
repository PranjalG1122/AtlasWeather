import { data, type APIResponse } from "./store";

export const handleWeather = async (latitude:number, longitude: number) => {
	const response = await fetch('/api/fetch-weather', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ latitude, longitude })
	});
	const body: APIResponse = await response.json();
	if (body) {
		data.update((val) => (val = body));
	}
};

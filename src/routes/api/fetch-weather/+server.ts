import { API_ID } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { latitude, longitude } = await request.json();
	const weatherResponse = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_ID}&units=metric`
	);

	if (!weatherResponse.ok) return error(weatherResponse.status, weatherResponse.statusText);

	const forecastResponse = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_ID}&units=metric`
	);

	if (!forecastResponse.ok) return error(forecastResponse.status, forecastResponse.statusText);

	return new Response(
		JSON.stringify({
			weather: await weatherResponse.json(),
			forecast: await forecastResponse.json()
		})
	);
};

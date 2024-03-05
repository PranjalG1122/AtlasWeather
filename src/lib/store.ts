import { writable } from 'svelte/store';
import type { CurrentWeatherResponse, ThreeHourResponse } from '../types';

export type APIResponse = {
	weather: CurrentWeatherResponse;
	forecast: ThreeHourResponse;
};

export const data = writable<APIResponse>();

export const coords = writable<{
	latitude: number;
	longitude: number;
}>();

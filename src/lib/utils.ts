import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function roundDownOneDecimal(value: number): number {
	return Math.floor(value * 10) / 10;
}

export function getWeatherDescription(code: number): string {
	switch (code) {
		case 0:
			return "Clear sky";
		case 1:
			return "Mainly clear";
		case 2:
			return "Partly cloudy";
		case 3:
			return "Overcast";
		case 45:
			return "Fog";
		case 48:
			return "Depositing rime fog";
		case 51:
			return "Light drizzle";
		case 53:
			return "Moderate drizzle";
		case 55:
			return "Dense drizzle";
		case 56:
			return "Light freezing drizzle";
		case 57:
			return "Dense freezing drizzle";
		case 61:
			return "Slight rain";
		case 63:
			return "Moderate rain";
		case 65:
			return "Heavy rain";
		case 66:
			return "Light freezing rain";
		case 67:
			return "Heavy freezing rain";
		case 71:
			return "Slight snowfall";
		case 73:
			return "Moderate snowfall";
		case 75:
			return "Heavy snowfall";
		case 77:
			return "Snow grains";
		case 80:
			return "Slight rain showers";
		case 81:
			return "Moderate rain showers";
		case 82:
			return "Violent rain showers";
		case 85:
			return "Slight snow showers";
		case 86:
			return "Heavy snow showers";
		case 95:
			return "Thunderstorm: Slight or moderate";
		case 96:
			return "Thunderstorm with slight hail";
		case 99:
			return "Thunderstorm with heavy hail";
		default:
			return "Unknown weather";
	}
}

export function getWindDirection(degree: number): string {
	const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
	const index = Math.round(degree / 45) % 8;
	return directions[index];
}

export const cityCoordinates: Record<
	string,
	{ latitude: number; longitude: number }
> = {
	Tokyo: { latitude: 35.6762, longitude: 139.6503 },
	Paris: { latitude: 48.8566, longitude: 2.3522 },
	HongKong: { latitude: 22.3193, longitude: 114.1694 },
	Bangkok: { latitude: 13.7563, longitude: 100.5018 },
	StPetersburg: { latitude: 59.9343, longitude: 30.3351 },
	Kiev: { latitude: 50.4501, longitude: 30.5245 },
	Berlin: { latitude: 52.52, longitude: 13.405 },
	Dublin: { latitude: 53.3498, longitude: -6.2603 },
	London: { latitude: 51.5074, longitude: -0.1278 },
	NewYork: { latitude: 40.7128, longitude: -74.006 },
	MexicoCity: { latitude: 19.4326, longitude: -99.1332 },
};
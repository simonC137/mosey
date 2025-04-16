import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";

interface Coordinates {
	latitude: number;
	longitude: number;
}

interface CurrentWeather {
	time: Date;
	temperature2m: number;
	windSpeed10m: number;
	weatherCode: number;
	cloudCover: number;
	rain: number;
	precipitation: number;
	relativeHumidity2m: number;
	windDirection10m: number;
	apparentTemperature: number;
	isDay: number;
	windGusts10m: number;
	showers: number;
	snowfall: number;
	pressureMsl: number;
	surfacePressure: number;
}

export function useWeather(coords: Coordinates | null) {
	const [weather, setWeather] = useState<CurrentWeather | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!coords) return;

		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const params = {
					latitude: coords.latitude,
					longitude: coords.longitude,
					current: [
						"temperature_2m",
						"wind_speed_10m",
						"weather_code",
						"cloud_cover",
						"rain",
						"precipitation",
						"relative_humidity_2m",
						"apparent_temperature",
						"is_day",
						"wind_direction_10m",
						"wind_gusts_10m",
						"showers",
						"snowfall",
						"pressure_msl",
						"surface_pressure",
					],
					timezone: "auto",
					forecast_days: 3,
				};

				const url = "https://api.open-meteo.com/v1/forecast";
				const responses = await fetchWeatherApi(url, params);
				const response = responses[0];
				const utcOffsetSeconds = response.utcOffsetSeconds();
				const current = response.current()!;

				const weatherData: CurrentWeather = {
					time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
					temperature2m: current.variables(0)!.value(),
					windSpeed10m: current.variables(1)!.value(),
					weatherCode: current.variables(2)!.value(),
					cloudCover: current.variables(3)!.value(),
					rain: current.variables(4)!.value(),
					precipitation: current.variables(5)!.value(),
					relativeHumidity2m: current.variables(6)!.value(),
					apparentTemperature: current.variables(7)!.value(),
					isDay: current.variables(8)!.value(),
					windDirection10m: current.variables(9)!.value(),
					windGusts10m: current.variables(10)!.value(),
					showers: current.variables(11)!.value(),
					snowfall: current.variables(12)!.value(),
					pressureMsl: current.variables(13)!.value(),
					surfacePressure: current.variables(14)!.value(),
				};

				setWeather(weatherData);
			} catch (err) {
				console.error(err);
				setError("Failed to fetch weather data");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [coords]);

	return { weather, loading, error };
}

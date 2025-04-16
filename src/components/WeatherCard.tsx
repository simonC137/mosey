import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useWeather } from "@/hooks/useWeather";
// import { usePlaceName } from "@/hooks/usePlaceName.ts";
import {
	roundDownOneDecimal,
	getWeatherDescription,
	getWindDirection,
} from "@/lib/utils.ts";
import { WeatherIcon } from "@/components/WeatherIcons";
import { cityCoordinates } from "@/lib/utils.ts";

const cities = ["Current Location", ...Object.keys(cityCoordinates)];

interface WeatherCardProps {
	setWeatherCode: (code: number) => void;
	handleCitySelection: (citySelected: boolean) => void;
}

export function WeatherCard({
	setWeatherCode,
	handleCitySelection,
}: WeatherCardProps) {
	const [selectedCity, setSelectedCity] = useState("Current Location");
	const [coords, setCoords] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);

	useEffect(() => {
		if (selectedCity === "Current Location") {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					setCoords({
						latitude: pos.coords.latitude,
						longitude: pos.coords.longitude,
					});
				},
				(err) => {
					console.error("Geolocation error:", err);
				}
			);
		} else {
			setCoords(cityCoordinates[selectedCity]);
		}
	}, [selectedCity]);

	const { weather, loading, error } = useWeather(coords);
	// const { place } = usePlaceName();

	useEffect(() => {
		if (weather) {
			setWeatherCode(weather.weatherCode);
		}
	}, [weather, setWeatherCode]);

	useEffect(() => {
		if (selectedCity !== "Current Location") {
			handleCitySelection(true);
		}
	}, [selectedCity, handleCitySelection]);

	if (!coords) return <p>Fetching location...</p>;
	if (loading) return <p>Loading weather...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!weather) return null;

	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="flex flex-col items-center justify-center space-y-2">
				<select
					value={selectedCity}
					onChange={(e) => setSelectedCity(e.target.value)}
					className="text-sm px-2 py-1 rounded border bg-background"
				>
					{cities.map((city) => (
						<option key={city} value={city}>
							{city.replace(/([A-Z])/g, " $1").trim()}
						</option>
					))}
				</select>
				{/* <CardTitle className="uppercase text-center">{place}</CardTitle> */}
				<WeatherIcon
					wmoCode={weather.weatherCode}
					className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 text-primary"
				/>
			</CardHeader>
			<CardContent className="space-y-1">
				<p>
					<strong>Conditions:</strong>{" "}
					{getWeatherDescription(weather.weatherCode)}
				</p>
				<p>
					<strong>Temperature:</strong>{" "}
					{roundDownOneDecimal(weather.temperature2m)}°C
				</p>
				<p>
					<strong>Wind Speed:</strong>{" "}
					{roundDownOneDecimal(weather.windSpeed10m)} km/h
				</p>
				<p>
					<strong>Wind Direction:</strong>{" "}
					{getWindDirection(roundDownOneDecimal(weather.windDirection10m))}
				</p>
				<p>
					<strong>Cloud Cover:</strong> {weather.cloudCover}%
				</p>
				<p>
					<strong>Rain:</strong> {weather.rain} mm
				</p>
			</CardContent>
		</Card>
	);
}

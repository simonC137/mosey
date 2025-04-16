import { useState, useEffect } from "react";
import "./App.css";
import { WeatherCard } from "./components/WeatherCard";
import { FoodRecommendation } from "./components/FoodRecommendation";

function App() {
	const [weatherCode, setWeatherCode] = useState<number | null>(null);
	const [hasSelectedCity, setHasSelectedCity] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			setIsLoading(true);
			setError(null);
			try {
				if (!navigator.onLine) {
					throw new Error("No internet connection");
				}

				setWeatherCode(200);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchWeatherData();
	}, []);

	return (
		<div className="app-container flex justify-center items-center min-h-screen">
			<div className="weather-card-container w-full max-w-lg p-4">
				{isLoading && <div>Loading...</div>}
				{error && <div className="error-message text-red-500">{error}</div>}
				{weatherCode !== null && !isLoading && (
					<FoodRecommendation
						weatherCode={weatherCode}
						hasSelectedCity={hasSelectedCity}
					/>
				)}

				<WeatherCard
					setWeatherCode={setWeatherCode}
					handleCitySelection={setHasSelectedCity}
				/>
			</div>
		</div>
	);
}

export default App;

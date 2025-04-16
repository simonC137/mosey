import { useEffect, useState } from "react";

interface Coordinates {
	latitude: number;
	longitude: number;
}

export function usePlaceName(coords: Coordinates | null) {
	const [place, setPlace] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!coords) return;

		const fetchPlaceName = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`,
					{
						headers: {
							"User-Agent": "Mosey Weather App",
							"Accept-Language": "en",
						},
					}
				);
				const data = await response.json();
				console.log("Fetched place name:", data);
				setPlace(data.name || data.display_name || "Unknown location");
			} catch (err) {
				setError("Failed to fetch location");
			} finally {
				setLoading(false);
			}
		};

		fetchPlaceName();
	}, [coords]);

	return { place, loading, error };
}

import { cityCoordinates } from "@/lib/utils.ts";

export function CitySelector({
	selectedCity,
	onChange,
}: {
	selectedCity: string;
	onChange: (city: string) => void;
}) {
	return (
		<select
			value={selectedCity}
			onChange={(e) => onChange(e.target.value)}
			className="text-sm px-2 py-1 rounded border bg-background"
		>
			{Object.keys(cityCoordinates).map((city) => (
				<option key={city} value={city}>
					{city}
				</option>
			))}
		</select>
	);
}

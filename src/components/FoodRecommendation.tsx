import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

interface FoodRecommendationProps {
	weatherCode: number | null;
	hasSelectedCity: boolean;
}

export const FoodRecommendation: React.FC<FoodRecommendationProps> = ({
	weatherCode,
	hasSelectedCity,
}) => {
	let foodSuggestion = "";

	if (weatherCode === 0 || weatherCode === 1 || weatherCode === 2) {
		foodSuggestion =
			"It's a beautiful day! How about checking out a place with outdoor seating to enjoy the nice weather?";
	}
	else if (weatherCode === 3 || weatherCode === 45 || weatherCode === 48) {
		foodSuggestion =
			"It might be a bit cloudy, but still a great day for a cozy indoor place. Time to find a comfy spot!";
	}
	else if (
		weatherCode === 51 ||
		weatherCode === 53 ||
		weatherCode === 55 ||
		weatherCode === 56 ||
		weatherCode === 57
	) {
		foodSuggestion =
			"Looks like light rain or drizzle. A cozy indoor spot with a warm atmosphere is the perfect choice!";
	}
	else if (
		weatherCode === 61 ||
		weatherCode === 63 ||
		weatherCode === 65 ||
		weatherCode === 66 ||
		weatherCode === 67
	) {
		foodSuggestion =
			"Looks like it's raining. Perfect weather for finding a cozy indoor spot with a warm atmosphere.";
	}
	else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) {
		foodSuggestion =
			"Heavy snowfall! It's a great time for a warm, hearty meal indoors.";
	}
	else if (weatherCode === 85 || weatherCode === 86) {
		foodSuggestion =
			"Snow showers outside. Stay warm with a comforting indoor meal!";
	}
	else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
		foodSuggestion =
			"Thunderstorms brewing! Best to stay inside and enjoy a meal in a safe, cozy environment.";
	}
	else {
		foodSuggestion =
			"The weather is a bit unpredictable today. Maybe stay indoors and enjoy a warm meal!";
	}

	return (
		<Card className="w-full max-w-sm mb-4">
			<CardHeader className="text-center">
				<CardTitle className="text-xl font-semibold">
					Weather Insights from Mosey
				</CardTitle>
			</CardHeader>
			<CardContent className="p-4 space-y-2">
				{!hasSelectedCity ? (
					<p className="text-lg font-semibold">
						Consider the weather when using the Mosey app! The right atmosphere
						can make your meal experience even better.
					</p>
				) : (
					<p className="text-lg font-semibold">{foodSuggestion}</p>
				)}
			</CardContent>
		</Card>
	);
};

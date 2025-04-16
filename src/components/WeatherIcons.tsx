import {
	Sun,
	Cloud,
	CloudDrizzle,
	CloudRain,
	CloudSnow,
	CloudLightning,
	Snowflake,
	CloudFog,
} from "lucide-react";

type WeatherIconProps = {
	wmoCode: number;
	className?: string;
};

const wmoIconMap: Record<number, React.ElementType> = {
	0: Sun, // Clear sky
	1: Sun, // Mainly clear
	2: Cloud, // Partly cloudy
	3: Cloud, // Overcast
	45: CloudFog, // Fog
	48: CloudFog, // Fog with frost
	51: CloudDrizzle, // Light drizzle
	53: CloudDrizzle, // Moderate drizzle
	55: CloudDrizzle, // Dense drizzle
	61: CloudRain, // Light rain
	63: CloudRain, // Moderate rain
	65: CloudRain, // Heavy rain
	71: CloudSnow, // Light snow
	73: CloudSnow, // Moderate snow
	75: Snowflake, // Heavy snow
	80: CloudRain, // Rain showers
	81: CloudRain, // More intense rain showers
	82: CloudRain, // Violent rain showers
	95: CloudLightning, // Thunderstorm
	96: CloudLightning, // Thunderstorm + hail
	99: CloudLightning, // Thunderstorm + heavy hail
};

export const WeatherIcon = ({
	wmoCode, className
}: WeatherIconProps) => {
	const IconComponent = wmoIconMap[wmoCode] || Cloud; 
	return <IconComponent className={className} />;
};

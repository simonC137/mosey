import { useState, useEffect } from 'react';

interface GeolocationPosition {
    latitude: number;
    longitude: number;
}

interface GeolocationState {
    position: GeolocationPosition | null;
    error: string | null;
}

export function useGeolocation(): GeolocationState {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation not supported by uyour browser.");
            return;
        }
        
        const success = (pos: globalThis.GeolocationPosition) => {
            console.log("Position retrieved:", pos);
            setPosition({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            });
        }
        
        const failure = (err: GeolocationPositionError) => {
            console.error("Error getting location:", err.message);
            setError(err.message);
        }
        
        navigator.geolocation.getCurrentPosition(success, failure);
    }, [])
    
    return { position, error };
}
# Weather App

This is a simple weather app that pulls real-time data using the Open-Meteo API. You can check the weather based on your current location or by picking a city.

## What I've Done

- Set up a React app that fetches weather data using hooks.
- Display current weather like temperature, wind speed, and conditions.
- Styled with Tailwind and DaisyUI for a clean look.
- Basic error handling for location and API issues.

## Things I'd Improve

- **Error Handling**: Right now, errors are a bit basic. I’d make them more user-friendly e.g., “Check your location settings.”
- **UI**: The app works and has a nice minimalistic style, but could use some design enhancements. I’d use more than just icons to show weather conditions, for example maybe animations or illustrations to draw attention, or even full screen background changes to make the weather conditions unmistakeable.
- **City Selection**: Adding a search option so you can pick any city instead of just a few preloaded ones would greatly improve the user experience.
- **Accessibility**: Better keyboard navigation, color contrast, and screen reader support.
- **Performance**: Add caching to reduce API calls and make the app faster.
- **Loading States**: Add a spinner or animation or skeleton components while the app is fetching data.
- **Dark Mode**: Add an option for dark mode

In short, it works as intended, but there’s room for small improvements to make it more polished and user-friendly.

## Instructions to Run App

1. Clone repo into your local machine
2. `cd` into project
3. `npm install` to install dependancies
4. `npm run dev` to spin up dev server
5. Open browser to url provided in the terminal
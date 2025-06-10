import { useState, useEffect } from 'react';
import WeatherService, { WeatherData } from '../components/WeatherService';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [alerts, setAlerts] = useState<string[]>([]);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const weatherService = WeatherService.getInstance();
      const [weatherData, alertsData] = await Promise.all([
        weatherService.getCurrentWeather(),
        weatherService.getWeatherAlerts()
      ]);
      setWeather(weatherData);
      setAlerts(alertsData);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    
    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { weather, loading, error, alerts, refetch: fetchWeather };
};
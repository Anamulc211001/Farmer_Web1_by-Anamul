// Weather service to fetch real weather data
export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  forecast: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  dayName: string;
  temperature: number;
  condition: string;
  icon: string;
}

class WeatherService {
  private static instance: WeatherService;
  private apiKey = 'demo'; // In production, use environment variable
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  // Mock weather data for demonstration (replace with real API in production)
  async getCurrentWeather(city: string = 'Dhaka'): Promise<WeatherData> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data that changes based on current time to simulate real updates
    const now = new Date();
    const hour = now.getHours();
    const baseTemp = 28 + Math.sin(hour / 24 * Math.PI * 2) * 8; // Temperature varies throughout day
    
    return {
      temperature: Math.round(baseTemp),
      condition: hour < 6 || hour > 18 ? 'Clear Night' : hour < 12 ? 'Sunny' : 'Partly Cloudy',
      humidity: 65 + Math.round(Math.random() * 20),
      windSpeed: 8 + Math.round(Math.random() * 10),
      icon: hour < 6 || hour > 18 ? 'moon' : hour < 12 ? 'sun' : 'cloud',
      forecast: this.generateForecast()
    };
  }

  private generateForecast(): ForecastDay[] {
    const days = ['আজ / Today', 'আগামীকাল / Tomorrow', 'পরশু / Day After', 'রবিবার / Sunday', 'সোমবার / Monday', 'মঙ্গলবার / Tuesday', 'বুধবার / Wednesday'];
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'];
    const icons = ['sun', 'cloud', 'cloud-rain', 'cloud-sun'];
    
    return days.slice(0, 7).map((day, index) => ({
      date: new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString(),
      dayName: day,
      temperature: Math.round(25 + Math.random() * 10),
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
  }

  // Get weather alerts
  async getWeatherAlerts(): Promise<string[]> {
    // Mock alerts
    const alerts = [
      'আগামী ২ দিনে ভারী বৃষ্টির সম্ভাবনা। ফসল সুরক্ষার ব্যবস্থা নিন।',
      'Heavy rainfall expected in next 2 days. Take measures to protect crops.',
      'তাপমাত্রা স্বাভাবিকের চেয়ে বেশি থাকবে। পানি সেচের ব্যবস্থা করুন।',
      'Temperature will remain above normal. Arrange for irrigation.'
    ];
    
    return Math.random() > 0.5 ? alerts : [];
  }
}

export default WeatherService;
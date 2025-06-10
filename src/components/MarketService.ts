// Market service for real-time price updates
export interface MarketPrice {
  crop: string;
  cropBangla: string;
  todayPrice: number;
  yesterdayPrice: number;
  change: number;
  trend: 'up' | 'down' | 'same';
  unit: string;
}

class MarketService {
  private static instance: MarketService;

  static getInstance(): MarketService {
    if (!MarketService.instance) {
      MarketService.instance = new MarketService();
    }
    return MarketService.instance;
  }

  async getMarketPrices(): Promise<MarketPrice[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock data with realistic price fluctuations
    const baseData = [
      { crop: 'Rice', cropBangla: 'ধান', basePrice: 28 },
      { crop: 'Jute', cropBangla: 'পাট', basePrice: 45 },
      { crop: 'Wheat', cropBangla: 'গম', basePrice: 32 },
      { crop: 'Corn', cropBangla: 'ভুট্টা', basePrice: 25 },
      { crop: 'Mustard', cropBangla: 'সরিষা', basePrice: 65 }
    ];

    return baseData.map(item => {
      const fluctuation = (Math.random() - 0.5) * 4; // ±2 price change
      const todayPrice = Math.round(item.basePrice + fluctuation);
      const yesterdayPrice = Math.round(item.basePrice + (Math.random() - 0.5) * 3);
      const change = todayPrice - yesterdayPrice;
      
      return {
        crop: item.crop,
        cropBangla: item.cropBangla,
        todayPrice,
        yesterdayPrice,
        change,
        trend: change > 0 ? 'up' : change < 0 ? 'down' : 'same',
        unit: 'kg'
      };
    });
  }
}

export default MarketService;
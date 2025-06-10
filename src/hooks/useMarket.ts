import { useState, useEffect } from 'react';
import MarketService, { MarketPrice } from '../components/MarketService';

export const useMarket = () => {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = async () => {
    try {
      setLoading(true);
      setError(null);
      const marketService = MarketService.getInstance();
      const pricesData = await marketService.getMarketPrices();
      setPrices(pricesData);
    } catch (err) {
      setError('Failed to fetch market prices');
      console.error('Market fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    
    // Update prices every 30 minutes
    const interval = setInterval(fetchPrices, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { prices, loading, error, refetch: fetchPrices };
};
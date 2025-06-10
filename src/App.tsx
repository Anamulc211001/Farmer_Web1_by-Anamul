import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Cloud, 
  Wheat, 
  TrendingUp, 
  HelpCircle,
  Sun,
  Droplets,
  DollarSign,
  Thermometer,
  Wind,
  Phone,
  Mail,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Users,
  BookOpen,
  Smartphone,
  Menu,
  X,
  ChevronRight,
  Star,
  Heart,
  Shield,
  Zap,
  RefreshCw,
  CloudRain,
  CloudSun,
  Moon
} from 'lucide-react';
import { useWeather } from './hooks/useWeather';
import { useMarket } from './hooks/useMarket';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const { weather, loading: weatherLoading, alerts, refetch: refetchWeather } = useWeather();
  const { prices, loading: marketLoading, refetch: refetchMarket } = useMarket();

  // Animation cycle for hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3); // Cycle through 3 animation phases
    }, 4000); // Change animation every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sun': return Sun;
      case 'cloud': return Cloud;
      case 'cloud-rain': return CloudRain;
      case 'cloud-sun': return CloudSun;
      case 'moon': return Moon;
      default: return Sun;
    }
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAnimationClass = (phase: number) => {
    switch (phase) {
      case 0:
        return 'animate-fade-in-up';
      case 1:
        return 'animate-bounce-in';
      case 2:
        return 'animate-slide-in-right';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typewriter {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes blink {
          0%, 50% {
            border-color: transparent;
          }
          51%, 100% {
            border-color: #fbbf24;
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(251, 191, 36, 0.5), 0 0 10px rgba(251, 191, 36, 0.3), 0 0 15px rgba(251, 191, 36, 0.2);
          }
          50% {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounceIn 1.5s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-typewriter {
          overflow: hidden;
          border-right: 3px solid #fbbf24;
          white-space: nowrap;
          animation: typewriter 3s steps(40) forwards, blink 1s infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .text-gradient {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
        }

        /* Staggered animation for individual words */
        .word-1 { animation-delay: 0s; }
        .word-2 { animation-delay: 0.2s; }
        .word-3 { animation-delay: 0.4s; }
        .word-4 { animation-delay: 0.6s; }
      `}</style>

      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Wheat className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 animate-float" />
              <span className="text-green-800 font-bold text-base sm:text-lg">কৃষক সহায়ক</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center space-x-2 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-green-50 hover:scale-105"
              >
                <Home className="h-4 w-4" />
                <span>হোম / Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('weather')}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center space-x-2 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-green-50 hover:scale-105"
              >
                <Cloud className="h-4 w-4" />
                <span>আবহাওয়া / Weather</span>
              </button>
              <button 
                onClick={() => scrollToSection('crops')}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center space-x-2 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-green-50 hover:scale-105"
              >
                <Wheat className="h-4 w-4" />
                <span>ফসল / Crops</span>
              </button>
              <button 
                onClick={() => scrollToSection('market')}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center space-x-2 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-green-50 hover:scale-105"
              >
                <TrendingUp className="h-4 w-4" />
                <span>বাজার / Market</span>
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center space-x-2 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-green-50 hover:scale-105"
              >
                <HelpCircle className="h-4 w-4" />
                <span>সহায়তা / Support</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-green-600 p-2 rounded-md hover:bg-green-50 transition-all duration-300 hover:scale-110"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                হোম / Home
              </button>
              <button 
                onClick={() => scrollToSection('weather')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                আবহাওয়া / Weather
              </button>
              <button 
                onClick={() => scrollToSection('crops')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                ফসল / Crops
              </button>
              <button 
                onClick={() => scrollToSection('market')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                বাজার / Market
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                সহায়তা / Support
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-600 to-yellow-400 pt-16">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-green-300/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="text-center mb-8 sm:mb-12">
            {/* Animated Main Heading */}
            <div className="mb-4 sm:mb-6">
              {/* First Line - Animated */}
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
                <span className={`inline-block text-gradient animate-glow ${getAnimationClass(animationPhase)} word-1`}>
                  স্মার্ট
                </span>
                <span className="text-white mx-2 sm:mx-4">
                  <span className={`inline-block ${getAnimationClass(animationPhase)} word-2`}>তথ্য</span>
                </span>
                <span className={`inline-block text-yellow-200 text-shadow-glow ${getAnimationClass(animationPhase)} word-3`}>
                  দিয়ে
                </span>
              </div>
              
              {/* Second Line - Different Animation */}
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className={`inline-block text-white animate-pulse-scale ${getAnimationClass((animationPhase + 1) % 3)} word-4`}>
                  সফল চাষ
                </span>
              </div>
            </div>

            {/* Subtitle with Typewriter Effect */}
            <div className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className={animationPhase === 2 ? 'animate-typewriter' : ''}>
                Successful Farming with Smart Data
              </span>
            </div>

            {/* Description with Fade Animation */}
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
              আপনার স্থানীয় আবহাওয়া, ফসলের যত্ন এবং বাজারের সর্বশেষ দাম জানুন। 
              <br className="hidden sm:block" />
              Get localized weather forecasts, crop care tips, and current market prices.
            </p>

            {/* Animated CTA Button */}
            <button 
              onClick={() => scrollToSection('weather')}
              className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-in animate-pulse-scale"
              style={{animationDelay: '1.5s'}}
            >
              <span className="flex items-center space-x-2">
                <Zap className="h-5 w-5 animate-float" />
                <span>আজকের আবহাওয়া দেখুন / Check Today's Weather</span>
              </span>
            </button>
          </div>

          {/* Information Cards with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Weather Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fade-in-up" style={{animationDelay: '2s'}}>
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 animate-pulse-scale">
                  {weatherLoading ? (
                    <LoadingSpinner size="sm" color="text-yellow-300" />
                  ) : (
                    <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-float" />
                  )}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">আজকের আবহাওয়া</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Today's Weather</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/90 flex items-center text-sm">
                    <Thermometer className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-pulse" />
                    তাপমাত্রা / Temp
                  </span>
                  <span className="text-white font-semibold text-sm animate-glow">
                    {weatherLoading ? '...' : `${weather?.temperature || 32}°C`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90 flex items-center text-sm">
                    <Wind className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-pulse" />
                    বাতাস / Wind
                  </span>
                  <span className="text-white font-semibold text-sm">
                    {weatherLoading ? '...' : `${weather?.windSpeed || 12} km/h`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90 flex items-center text-sm">
                    <Droplets className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-pulse" />
                    আর্দ্রতা / Humidity
                  </span>
                  <span className="text-white font-semibold text-sm">
                    {weatherLoading ? '...' : `${weather?.humidity || 75}%`}
                  </span>
                </div>
              </div>
            </div>

            {/* Soil Moisture Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in-up" style={{animationDelay: '2.3s'}}>
              <div className="flex items-center mb-4">
                <div className="bg-blue-400/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 animate-pulse-scale">
                  <Droplets className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300 animate-float" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">মাটির আর্দ্রতা</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Soil Moisture</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-white/10 rounded-full h-2 sm:h-3 mb-2 overflow-hidden">
                  <div className="bg-blue-400 h-2 sm:h-3 rounded-full transition-all duration-2000 animate-pulse" style={{width: '68%'}}></div>
                </div>
                <p className="text-white font-semibold text-center text-sm animate-glow">68% - ভালো / Good</p>
                <p className="text-white/80 text-xs sm:text-sm text-center">
                  ধানের জন্য উপযুক্ত
                  <br />
                  Suitable for rice cultivation
                </p>
              </div>
            </div>

            {/* Market Prices Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fade-in-up" style={{animationDelay: '2.6s'}}>
              <div className="flex items-center mb-4">
                <div className="bg-green-400/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 animate-pulse-scale">
                  <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-300 animate-float" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">বাজারের দাম</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Market Prices</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {marketLoading ? (
                  <LoadingSpinner size="sm" color="text-green-300" />
                ) : (
                  prices.slice(0, 3).map((price, index) => (
                    <div key={index} className="flex items-center justify-between animate-fade-in-up" style={{animationDelay: `${3 + index * 0.2}s`}}>
                      <span className="text-white/90 text-sm">{price.cropBangla} / {price.crop}</span>
                      <span className="text-green-300 font-semibold text-sm animate-glow">৳{price.todayPrice}/{price.unit}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Additional Info Section with Enhanced Animation */}
          <div className="mt-12 sm:mt-16 text-center animate-fade-in-up" style={{animationDelay: '3.5s'}}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 animate-glow">
                আপনার চাষাবাদকে করুন আরো লাভজনক
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 animate-typewriter">
                Make Your Farming More Profitable
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
                <div className="text-center animate-bounce-in" style={{animationDelay: '4s'}}>
                  <div className="bg-yellow-400/20 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-scale">
                    <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-float" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">সঠিক পূর্বাভাস</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Accurate Forecasts</p>
                </div>
                <div className="text-center animate-bounce-in" style={{animationDelay: '4.3s'}}>
                  <div className="bg-green-400/20 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-scale">
                    <Wheat className="h-6 w-6 sm:h-8 sm:w-8 text-green-300 animate-float" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">ফসলের পরিচর্যা</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Crop Care Tips</p>
                </div>
                <div className="text-center animate-bounce-in" style={{animationDelay: '4.6s'}}>
                  <div className="bg-blue-400/20 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-scale">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300 animate-float" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">বাজার তথ্য</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Market Information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section id="weather" className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                আবহাওয়ার পূর্বাভাস / Weather Forecast
              </h2>
              <button
                onClick={refetchWeather}
                className="ml-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-180"
                title="Refresh Weather Data"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              পরবর্তী ৭ দিনের আবহাওয়ার পূর্বাভাস এবং কৃষিকাজের জন্য প্রয়োজনীয় তথ্য
              <br />
              7-day weather forecast and essential information for farming
            </p>
          </div>

          {weatherLoading ? (
            <div className="flex justify-center mb-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
              {weather?.forecast.slice(0, 4).map((forecast, index) => {
                const IconComponent = getWeatherIcon(forecast.icon);
                return (
                  <div key={index} className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                    <div className="text-center">
                      <IconComponent className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500 mx-auto mb-2 sm:mb-3 animate-float" />
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base">{forecast.dayName}</h3>
                      <p className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 animate-glow">{forecast.temperature}°C</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{forecast.condition}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Weather Alerts */}
          {alerts.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-lg animate-bounce-in">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-yellow-800">
                    আবহাওয়া সতর্কতা / Weather Alert
                  </h3>
                  <div className="text-yellow-700 mt-1 space-y-1">
                    {alerts.map((alert, index) => (
                      <p key={index} className="text-sm sm:text-base">{alert}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Crops Section */}
      <section id="crops" className="py-12 sm:py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ফসলের পরিচর্যা / Crop Care
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              বিভিন্ন ফসলের যত্ন, রোগ প্রতিরোধ এবং উৎপাদনশীলতা বৃদ্ধির উপায়
              <br />
              Crop care, disease prevention, and productivity enhancement methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                title: 'ধান / Rice',
                season: 'আমন মৌসুম / Aman Season',
                tips: ['নিয়মিত সেচ দিন', 'Regular irrigation', 'রোগ প্রতিরোধী জাত ব্যবহার করুন', 'Use disease-resistant varieties'],
                status: 'রোপণের সময় / Planting Time',
                color: 'green'
              },
              {
                title: 'পাট / Jute',
                season: 'খরিফ মৌসুম / Kharif Season',
                tips: ['মাটির আর্দ্রতা বজায় রাখুন', 'Maintain soil moisture', 'সার প্রয়োগ করুন', 'Apply fertilizers'],
                status: 'বৃদ্ধির পর্যায় / Growth Stage',
                color: 'yellow'
              },
              {
                title: 'গম / Wheat',
                season: 'রবি মৌসুম / Rabi Season',
                tips: ['শীতকালীন যত্ন নিন', 'Winter care needed', 'পানি নিষ্কাশনের ব্যবস্থা করুন', 'Ensure proper drainage'],
                status: 'প্রস্তুতি পর্যায় / Preparation Stage',
                color: 'orange'
              }
            ].map((crop, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`bg-${crop.color}-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 animate-pulse-scale`}>
                    <Wheat className={`h-6 w-6 sm:h-8 sm:w-8 text-${crop.color}-600 animate-float`} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{crop.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{crop.season}</p>
                  </div>
                </div>
                <div className={`bg-${crop.color}-50 rounded-lg p-2 sm:p-3 mb-4`}>
                  <p className={`text-${crop.color}-800 font-semibold text-sm sm:text-base`}>{crop.status}</p>
                </div>
                <ul className="space-y-2">
                  {crop.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <span className="text-gray-700 text-xs sm:text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Seasonal Calendar */}
          <div className="mt-12 sm:mt-16 bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              কৃষি ক্যালেন্ডার / Agricultural Calendar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mb-3 animate-float" />
                <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">খরিফ মৌসুম / Kharif Season</h4>
                <p className="text-green-700 text-xs sm:text-sm">এপ্রিল - সেপ্টেম্বর<br />April - September</p>
                <p className="text-green-600 text-xs sm:text-sm mt-2">ধান, পাট, তুলা<br />Rice, Jute, Cotton</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600 mx-auto mb-3 animate-float" />
                <h4 className="font-semibold text-yellow-800 mb-2 text-sm sm:text-base">রবি মৌসুম / Rabi Season</h4>
                <p className="text-yellow-700 text-xs sm:text-sm">অক্টোবর - মার্চ<br />October - March</p>
                <p className="text-yellow-600 text-xs sm:text-sm mt-2">গম, ভুট্টা, সরিষা<br />Wheat, Corn, Mustard</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-3 animate-float" />
                <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">জায়িদ মৌসুম / Zaid Season</h4>
                <p className="text-blue-700 text-xs sm:text-sm">মার্চ - জুন<br />March - June</p>
                <p className="text-blue-600 text-xs sm:text-sm mt-2">তরমুজ, শসা, ভুট্টা<br />Watermelon, Cucumber, Corn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                বাজারের দাম / Market Prices
              </h2>
              <button
                onClick={refetchMarket}
                className="ml-4 p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-180"
                title="Refresh Market Data"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              আজকের সর্বশেষ বাজার দর এবং দামের প্রবণতা
              <br />
              Latest market rates and price trends
            </p>
          </div>

          {/* Price Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8 sm:mb-12 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-600 text-white p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl font-bold">আজকের দাম / Today's Prices</h3>
            </div>
            <div className="overflow-x-auto">
              {marketLoading ? (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="lg" />
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ফসল / Crop
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        আজকের দাম / Today's Price
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                        গতকালের দাম / Yesterday's Price
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        পরিবর্তন / Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {prices.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                          <div>
                            <div className="font-semibold">{item.cropBangla}</div>
                            <div className="text-gray-500">{item.crop}</div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-semibold">
                          ৳{item.todayPrice}/{item.unit}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden sm:table-cell">
                          ৳{item.yesterdayPrice}/{item.unit}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm">
                          <span className={`flex items-center ${
                            item.trend === 'up' ? 'text-green-600' : 
                            item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {item.trend === 'up' && <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transform rotate-90 animate-bounce" />}
                            {item.trend === 'down' && <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transform -rotate-90 animate-bounce" />}
                            {item.change >= 0 ? '+' : ''}৳{item.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Market Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-200 hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mr-3 animate-float" />
                <h3 className="text-lg sm:text-xl font-bold text-green-800">বিক্রয়ের সুযোগ / Selling Opportunities</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                  <span className="text-green-700 text-sm sm:text-base">ধানের দাম বৃদ্ধি পেয়েছে - বিক্রয়ের ভালো সময়</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                  <span className="text-green-700 text-sm sm:text-base">Rice prices have increased - good time to sell</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3 animate-float" />
                <h3 className="text-lg sm:text-xl font-bold text-blue-800">বাজার পরামর্শ / Market Advice</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                  <span className="text-blue-700 text-sm sm:text-base">দাম তুলনা করে বিক্রয় করুন</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                  <span className="text-blue-700 text-sm sm:text-base">Compare prices before selling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              সহায়তা ও যোগাযোগ / Support & Contact
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              আমাদের বিশেষজ্ঞ দল আপনার সেবায় নিয়োজিত
              <br />
              Our expert team is dedicated to serving you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {/* Helpline */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
              <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-scale">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 animate-float" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">হটলাইন / Hotline</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">২৪/৭ সেবা<br />24/7 Service</p>
              <button className="text-xl sm:text-2xl font-bold text-green-600 hover:text-green-800 transition-all duration-300 hover:scale-110 animate-glow">
                ১৬২৬৩
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">বিনামূল্যে / Toll Free</p>
            </div>

            {/* SMS Service */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-scale">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 animate-float" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">SMS সেবা / SMS Service</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">তাৎক্ষণিক তথ্য<br />Instant Information</p>
              <p className="text-sm sm:text-lg font-bold text-blue-600">WEATHER পাঠান ১৬২৬ৃ নম্বরে</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Send WEATHER to 16263</p>
            </div>

            {/* Expert Consultation */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 md:col-span-2 lg:col-span-1">
              <div className="bg-yellow-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-scale">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600 animate-float" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">বিশেষজ্ঞ পরামর্শ / Expert Consultation</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">কৃষি বিশেষজ্ঞ<br />Agricultural Experts</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-110 animate-pulse-scale">
                পরামর্শ নিন / Get Advice
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              সচরাচর জিজ্ঞাসা / Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  q: 'আবহাওয়ার তথ্য কতটা নির্ভরযোগ্য?',
                  qEn: 'How reliable is the weather information?',
                  a: 'আমাদের তথ্য বাংলাদেশ আবহাওয়া অধিদপ্তর থেকে সংগৃহীত এবং ৯৫% নির্ভুল।'
                },
                {
                  q: 'বাজারের দাম কত ঘন ঘন আপডেট হয়?',
                  qEn: 'How often are market prices updated?',
                  a: 'বাজারের দাম প্রতিদিন সকাল ৮টায় আপডেট করা হয়।'
                },
                {
                  q: 'ফসলের রোগ সম্পর্কে পরামর্শ পেতে পারি?',
                  qEn: 'Can I get advice about crop diseases?',
                  a: 'হ্যাঁ, আমাদের কৃষি বিশেষজ্ঞরা ২৪/৭ সেবা প্রদান করেন।'
                },
                {
                  q: 'এই সেবা কি বিনামূল্যে?',
                  qEn: 'Is this service free?',
                  a: 'হ্যাঁ, আমাদের সকল মৌলিক সেবা সম্পূর্ণ বিনামূল্যে।'
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 italic">{faq.qEn}</p>
                  <p className="text-gray-700 text-xs sm:text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Wheat className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-float" />
                <span className="text-white font-bold text-lg sm:text-xl">কৃষক সহায়ক</span>
              </div>
              <p className="text-green-100 mb-4 text-sm sm:text-base">
                বাংলাদেশের কৃষকদের জন্য একটি সম্পূর্ণ তথ্য সেবা প্ল্যাটফর্ম। 
                আবহাওয়া, ফসল এবং বাজারের সর্বশেষ তথ্য পান।
              </p>
              <p className="text-green-200 text-xs sm:text-sm">
                A complete information service platform for farmers in Bangladesh. 
                Get the latest weather, crop, and market information.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">দ্রুত লিংক / Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-green-200 hover:text-white transition-all duration-300 text-sm sm:text-base hover:scale-105">হোম / Home</button></li>
                <li><button onClick={() => scrollToSection('weather')} className="text-green-200 hover:text-white transition-all duration-300 text-sm sm:text-base hover:scale-105">আবহাওয়া / Weather</button></li>
                <li><button onClick={() => scrollToSection('crops')} className="text-green-200 hover:text-white transition-all duration-300 text-sm sm:text-base hover:scale-105">ফসল / Crops</button></li>
                <li><button onClick={() => scrollToSection('market')} className="text-green-200 hover:text-white transition-all duration-300 text-sm sm:text-base hover:scale-105">বাজার / Market</button></li>
                <li><button onClick={() => scrollToSection('support')} className="text-green-200 hover:text-white transition-all duration-300 text-sm sm:text-base hover:scale-105">সহায়তা / Support</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">যোগাযোগ / Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 animate-pulse" />
                  <span className="text-green-200 text-sm sm:text-base">১৬২৬৩</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 animate-pulse" />
                  <span className="text-green-200 text-xs sm:text-sm">info@krishoksahayak.gov.bd</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 animate-pulse" />
                  <span className="text-green-200 text-sm sm:text-base">ঢাকা, বাংলাদেশ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-green-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-green-200 text-xs sm:text-sm text-center md:text-left">
                © ২০২৫ কৃষক সহায়ক। সকল অধিকার সংরক্ষিত। / © 2025 Krishok Sahayak. All rights reserved.
              </div>
              <div className="text-green-200 text-xs sm:text-sm text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 animate-pulse" />
                  <span>This project is designed and developed by</span>
                  <strong className="text-yellow-300 animate-glow">Md Anamul Haque</strong>
                </div>
                <div className="text-center mt-1 text-xs text-green-300">
                  CS Engineer & UI/UX Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
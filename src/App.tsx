import React, { useState } from 'react';
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
  Zap
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Wheat className="h-8 w-8 text-green-600" />
              <span className="text-green-800 font-bold text-lg">কৃষক সহায়ক</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2 font-medium">
                <Home className="h-4 w-4" />
                <span>হোম / Home</span>
              </a>
              <a href="#weather" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2 font-medium">
                <Cloud className="h-4 w-4" />
                <span>আবহাওয়া / Weather</span>
              </a>
              <a href="#crops" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2 font-medium">
                <Wheat className="h-4 w-4" />
                <span>ফসল / Crops</span>
              </a>
              <a href="#market" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2 font-medium">
                <TrendingUp className="h-4 w-4" />
                <span>বাজার / Market</span>
              </a>
              <a href="#support" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2 font-medium">
                <HelpCircle className="h-4 w-4" />
                <span>সহায়তা / Support</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-green-600 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium">হোম / Home</a>
              <a href="#weather" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium">আবহাওয়া / Weather</a>
              <a href="#crops" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium">ফসল / Crops</a>
              <a href="#market" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium">বাজার / Market</a>
              <a href="#support" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium">সহায়তা / Support</a>
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center mb-12">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block text-yellow-200 mb-2">স্মার্ট তথ্য দিয়ে</span>
              <span className="block">সফল চাষ</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Successful Farming with Smart Data
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-4xl mx-auto">
              আপনার স্থানীয় আবহাওয়া, ফসলের যত্ন এবং বাজারের সর্বশেষ দাম জানুন। 
              <br className="hidden sm:block" />
              Get localized weather forecasts, crop care tips, and current market prices.
            </p>

            {/* CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              আজকের আবহাওয়া দেখুন / Check Today's Weather
            </button>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Weather Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                  <Sun className="h-8 w-8 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">আজকের আবহাওয়া</h3>
                  <p className="text-white/80 text-sm">Today's Weather</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/90 flex items-center">
                    <Thermometer className="h-4 w-4 mr-2" />
                    তাপমাত্রা / Temp
                  </span>
                  <span className="text-white font-semibold">32°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90 flex items-center">
                    <Wind className="h-4 w-4 mr-2" />
                    বাতাস / Wind
                  </span>
                  <span className="text-white font-semibold">12 km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90 flex items-center">
                    <Droplets className="h-4 w-4 mr-2" />
                    আর্দ্রতা / Humidity
                  </span>
                  <span className="text-white font-semibold">75%</span>
                </div>
              </div>
            </div>

            {/* Soil Moisture Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-400/20 p-3 rounded-full mr-4">
                  <Droplets className="h-8 w-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">মাটির আর্দ্রতা</h3>
                  <p className="text-white/80 text-sm">Soil Moisture</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-full h-3 mb-2">
                  <div className="bg-blue-400 h-3 rounded-full" style={{width: '68%'}}></div>
                </div>
                <p className="text-white font-semibold text-center">68% - ভালো / Good</p>
                <p className="text-white/80 text-sm text-center">
                  ধানের জন্য উপযুক্ত
                  <br />
                  Suitable for rice cultivation
                </p>
              </div>
            </div>

            {/* Market Prices Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-400/20 p-3 rounded-full mr-4">
                  <DollarSign className="h-8 w-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">বাজারের দাম</h3>
                  <p className="text-white/80 text-sm">Market Prices</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">ধান / Rice</span>
                  <span className="text-green-300 font-semibold">৳28/kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">পাট / Jute</span>
                  <span className="text-green-300 font-semibold">৳45/kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">গম / Wheat</span>
                  <span className="text-green-300 font-semibold">৳32/kg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                আপনার চাষাবাদকে করুন আরো লাভজনক
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Make Your Farming More Profitable
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="bg-yellow-400/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Cloud className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">সঠিক পূর্বাভাস</h3>
                  <p className="text-white/80">Accurate Forecasts</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-400/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Wheat className="h-8 w-8 text-green-300" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">ফসলের পরিচর্যা</h3>
                  <p className="text-white/80">Crop Care Tips</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-400/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-blue-300" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">বাজার তথ্য</h3>
                  <p className="text-white/80">Market Information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section id="weather" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              আবহাওয়ার পূর্বাভাস / Weather Forecast
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              পরবর্তী ৭ দিনের আবহাওয়ার পূর্বাভাস এবং কৃষিকাজের জন্য প্রয়োজনীয় তথ্য
              <br />
              7-day weather forecast and essential information for farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { day: 'আজ / Today', temp: '32°C', condition: 'রোদ / Sunny', icon: Sun },
              { day: 'আগামীকাল / Tomorrow', temp: '29°C', condition: 'মেঘলা / Cloudy', icon: Cloud },
              { day: 'পরশু / Day After', temp: '31°C', condition: 'বৃষ্টি / Rain', icon: Droplets },
              { day: 'রবিবার / Sunday', temp: '28°C', condition: 'ঝড় / Storm', icon: Wind }
            ].map((weather, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <weather.icon className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{weather.day}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{weather.temp}</p>
                  <p className="text-gray-600">{weather.condition}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Weather Alerts */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800">
                  আবহাওয়া সতর্কতা / Weather Alert
                </h3>
                <p className="text-yellow-700 mt-1">
                  আগামী ২ দিনে ভারী বৃষ্টির সম্ভাবনা। ফসল সুরক্ষার ব্যবস্থা নিন।
                  <br />
                  Heavy rainfall expected in next 2 days. Take measures to protect crops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crops Section */}
      <section id="crops" className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ফসলের পরিচর্যা / Crop Care
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              বিভিন্ন ফসলের যত্ন, রোগ প্রতিরোধ এবং উৎপাদনশীলতা বৃদ্ধির উপায়
              <br />
              Crop care, disease prevention, and productivity enhancement methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`bg-${crop.color}-100 p-3 rounded-full mr-4`}>
                    <Wheat className={`h-8 w-8 text-${crop.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{crop.title}</h3>
                    <p className="text-gray-600">{crop.season}</p>
                  </div>
                </div>
                <div className={`bg-${crop.color}-50 rounded-lg p-3 mb-4`}>
                  <p className={`text-${crop.color}-800 font-semibold`}>{crop.status}</p>
                </div>
                <ul className="space-y-2">
                  {crop.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Seasonal Calendar */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              কৃষি ক্যালেন্ডার / Agricultural Calendar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-800 mb-2">খরিফ মৌসুম / Kharif Season</h4>
                <p className="text-green-700 text-sm">এপ্রিল - সেপ্টেম্বর<br />April - September</p>
                <p className="text-green-600 text-sm mt-2">ধান, পাট, তুলা<br />Rice, Jute, Cotton</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Calendar className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h4 className="font-semibold text-yellow-800 mb-2">রবি মৌসুম / Rabi Season</h4>
                <p className="text-yellow-700 text-sm">অক্টোবর - মার্চ<br />October - March</p>
                <p className="text-yellow-600 text-sm mt-2">গম, ভুট্টা, সরিষা<br />Wheat, Corn, Mustard</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-blue-800 mb-2">জায়িদ মৌসুম / Zaid Season</h4>
                <p className="text-blue-700 text-sm">মার্চ - জুন<br />March - June</p>
                <p className="text-blue-600 text-sm mt-2">তরমুজ, শসা, ভুট্টা<br />Watermelon, Cucumber, Corn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              বাজারের দাম / Market Prices
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আজকের সর্বশেষ বাজার দর এবং দামের প্রবণতা
              <br />
              Latest market rates and price trends
            </p>
          </div>

          {/* Price Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-12">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-bold">আজকের দাম / Today's Prices</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ফসল / Crop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      আজকের দাম / Today's Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      গতকালের দাম / Yesterday's Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      পরিবর্তন / Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { crop: 'ধান / Rice', today: '৳28/kg', yesterday: '৳27/kg', change: '+৳1', trend: 'up' },
                    { crop: 'পাট / Jute', today: '৳45/kg', yesterday: '৳47/kg', change: '-৳2', trend: 'down' },
                    { crop: 'গম / Wheat', today: '৳32/kg', yesterday: '৳32/kg', change: '৳0', trend: 'same' },
                    { crop: 'ভুট্টা / Corn', today: '৳25/kg', yesterday: '৳24/kg', change: '+৳1', trend: 'up' },
                    { crop: 'সরিষা / Mustard', today: '৳65/kg', yesterday: '৳63/kg', change: '+৳2', trend: 'up' }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.crop}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                        {item.today}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.yesterday}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`flex items-center ${
                          item.trend === 'up' ? 'text-green-600' : 
                          item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {item.trend === 'up' && <ChevronRight className="h-4 w-4 transform rotate-90" />}
                          {item.trend === 'down' && <ChevronRight className="h-4 w-4 transform -rotate-90" />}
                          {item.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Market Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-800">বিক্রয়ের সুযোগ / Selling Opportunities</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-green-700">ধানের দাম বৃদ্ধি পেয়েছে - বিক্রয়ের ভালো সময়</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-green-700">Rice prices have increased - good time to sell</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">বাজার পরামর্শ / Market Advice</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-blue-700">দাম তুলনা করে বিক্রয় করুন</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-blue-700">Compare prices before selling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              সহায়তা ও যোগাযোগ / Support & Contact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আমাদের বিশেষজ্ঞ দল আপনার সেবায় নিয়োজিত
              <br />
              Our expert team is dedicated to serving you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Helpline */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">হটলাইন / Hotline</h3>
              <p className="text-gray-600 mb-4">২৪/৭ সেবা<br />24/7 Service</p>
              <p className="text-2xl font-bold text-green-600">১৬২৬৩</p>
              <p className="text-sm text-gray-500 mt-2">বিনামূল্যে / Toll Free</p>
            </div>

            {/* SMS Service */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMS সেবা / SMS Service</h3>
              <p className="text-gray-600 mb-4">তাৎক্ষণিক তথ্য<br />Instant Information</p>
              <p className="text-lg font-bold text-blue-600">WEATHER পাঠান ১৬২৬৩ নম্বরে</p>
              <p className="text-sm text-gray-500 mt-2">Send WEATHER to 16263</p>
            </div>

            {/* Expert Consultation */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">বিশেষজ্ঞ পরামর্শ / Expert Consultation</h3>
              <p className="text-gray-600 mb-4">কৃষি বিশেষজ্ঞ<br />Agricultural Experts</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                পরামর্শ নিন / Get Advice
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              সচরাচর জিজ্ঞাসা / Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-sm text-gray-600 mb-2 italic">{faq.qEn}</p>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Wheat className="h-8 w-8 text-yellow-300" />
                <span className="text-white font-bold text-xl">কৃষক সহায়ক</span>
              </div>
              <p className="text-green-100 mb-4">
                বাংলাদেশের কৃষকদের জন্য একটি সম্পূর্ণ তথ্য সেবা প্ল্যাটফর্ম। 
                আবহাওয়া, ফসল এবং বাজারের সর্বশেষ তথ্য পান।
              </p>
              <p className="text-green-200 text-sm">
                A complete information service platform for farmers in Bangladesh. 
                Get the latest weather, crop, and market information.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক / Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-green-200 hover:text-white transition-colors">হোম / Home</a></li>
                <li><a href="#weather" className="text-green-200 hover:text-white transition-colors">আবহাওয়া / Weather</a></li>
                <li><a href="#crops" className="text-green-200 hover:text-white transition-colors">ফসল / Crops</a></li>
                <li><a href="#market" className="text-green-200 hover:text-white transition-colors">বাজার / Market</a></li>
                <li><a href="#support" className="text-green-200 hover:text-white transition-colors">সহায়তা / Support</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">যোগাযোগ / Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-green-200">১৬২৬৩</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-green-200">info@krishoksahayak.gov.bd</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-green-200">ঢাকা, বাংলাদেশ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-green-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-green-200 text-sm mb-4 md:mb-0">
                © ২০২৫ কৃষক সহায়ক। সকল অধিকার সংরক্ষিত। / © 2025 Krishok Sahayak. All rights reserved.
              </div>
              <div className="text-green-200 text-sm">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-400" />
                  <span>This project is designed and developed by</span>
                  <strong className="text-yellow-300">Md Anamul Haque</strong>
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
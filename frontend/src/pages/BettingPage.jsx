import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

const BettingPage = () => {
  const navigate = useNavigate();
  const { wallet } = useWallet();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [betAmount, setBetAmount] = useState('');
  const [betType, setBetType] = useState('price_increase'); // price_increase, price_decrease, popularity

  // Sample betting locations
  const bettingLocations = [
    {
      id: 1,
      name: 'Beverly Hills, CA',
      currentPrice: '$2,500,000',
      priceChange: '+12.5%',
      popularity: 85,
      peopleBetting: 1247,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      description: 'Premium luxury real estate market with high growth potential'
    },
    {
      id: 2,
      name: 'Manhattan, NY',
      currentPrice: '$5,800,000',
      priceChange: '+8.3%',
      popularity: 92,
      peopleBetting: 2156,
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      description: 'Urban core with strong investment fundamentals'
    },
    {
      id: 3,
      name: 'Miami Beach, FL',
      currentPrice: '$3,200,000',
      priceChange: '+15.2%',
      popularity: 78,
      peopleBetting: 892,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      description: 'Beachfront properties with rising demand'
    },
    {
      id: 4,
      name: 'San Francisco, CA',
      currentPrice: '$1,200,000',
      priceChange: '-3.1%',
      popularity: 65,
      peopleBetting: 634,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      description: 'Tech hub with evolving market dynamics'
    },
    {
      id: 5,
      name: 'Aspen, CO',
      currentPrice: '$1,800,000',
      priceChange: '+6.7%',
      popularity: 71,
      peopleBetting: 456,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      description: 'Mountain resort area with seasonal appeal'
    },
    {
      id: 6,
      name: 'Seattle, WA',
      currentPrice: '$1,900,000',
      priceChange: '+9.4%',
      popularity: 73,
      peopleBetting: 723,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      description: 'Growing tech market with strong fundamentals'
    }
  ];

  const handlePlaceBet = () => {
    if (!wallet) {
      navigate('/login');
      return;
    }
    if (!selectedLocation || !betAmount) {
      alert('Please select a location and enter a bet amount');
      return;
    }
    // Placeholder for bet placement logic
    alert(`Bet placed: ${betType} on ${selectedLocation.name} for $${betAmount}`);
  };

  return (
    <div className="min-h-screen animated-gradient-bg">
      {/* Header */}
      <header className="bg-dark-card/80 backdrop-blur-lg border-b border-dark-border sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">TERRA</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-text-secondary hover:text-white transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Location <span 
              style={{
                background: 'linear-gradient(135deg, #5b6fed 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >Betting</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Bet on real estate market trends and location performance. Predict price movements and popularity changes.
          </p>
        </div>

        {/* Betting Form Section */}
        {selectedLocation && (
          <div className="mb-12 bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden animate-slide-up">
            {/* Bet Type Buttons - Heading Section */}
            <div className="bg-dark-bg/50 border-b border-dark-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Place Your Bet</h2>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-text-muted hover:text-white transition-colors"
                >
                  ✕ Close
                </button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setBetType('price_increase')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${
                    betType === 'price_increase'
                      ? 'btn-gradient text-white shadow-glow-sm'
                      : 'bg-dark-card border border-dark-border text-text-secondary hover:border-primary-500 hover:text-white'
                  }`}
                >
                  {betType === 'price_increase' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <span>Join Price Increase</span>
                </button>
                <button
                  onClick={() => setBetType('price_decrease')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${
                    betType === 'price_decrease'
                      ? 'btn-gradient text-white shadow-glow-sm'
                      : 'bg-dark-card border border-dark-border text-text-secondary hover:border-primary-500 hover:text-white'
                  }`}
                >
                  {betType === 'price_decrease' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <span>Join Price Decrease</span>
                </button>
                <button
                  onClick={() => setBetType('popularity')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${
                    betType === 'popularity'
                      ? 'btn-gradient text-white shadow-glow-sm'
                      : 'bg-dark-card border border-dark-border text-text-secondary hover:border-primary-500 hover:text-white'
                  }`}
                >
                  {betType === 'popularity' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <span>Join Popularity Growth</span>
                </button>
              </div>
            </div>

            {/* Form Content Inside */}
            <div className="p-8">
              <div className="mb-6">
                <label className="block text-text-secondary mb-2">Selected Location</label>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-semibold">{selectedLocation.name}</p>
                    <div className="flex items-center gap-2 bg-primary-500/20 border border-primary-500/50 rounded-lg px-3 py-1.5">
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-primary-400 font-bold text-sm">{selectedLocation.peopleBetting?.toLocaleString() || 0}</span>
                      <span className="text-text-muted text-xs">people betting</span>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm mt-1">{selectedLocation.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-text-secondary mb-2">Bet Amount (USD)</label>
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="1"
                  className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-white focus:outline-none focus:border-primary-500"
                />
              </div>

              <button
                onClick={handlePlaceBet}
                className="btn-gradient px-8 py-3 rounded-xl text-white text-lg font-semibold transform hover:scale-105 cursor-pointer w-full md:w-auto"
              >
                Place Bet
              </button>
            </div>
          </div>
        )}

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bettingLocations.map((location, index) => (
            <div
              key={location.id}
              className={`bg-dark-card/50 backdrop-blur-sm border rounded-2xl overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-glow-sm cursor-pointer animate-slide-up group ${
                selectedLocation?.id === location.id ? 'border-primary-500' : 'border-dark-border'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedLocation(location)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent z-10"></div>
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Location';
                  }}
                />
                <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-primary-500 rounded-full text-white text-xs font-bold">
                  {location.priceChange}
                </div>
                <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 bg-dark-bg/90 backdrop-blur-sm border border-primary-500/50 rounded-lg px-3 py-1.5">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-primary-400 font-bold text-sm">{location.peopleBetting?.toLocaleString() || 0}</span>
                  <span className="text-text-muted text-xs">betting</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-2">{location.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Current Price</span>
                    <span className="text-white font-semibold">{location.currentPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">People Betting</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-primary-400 font-bold text-sm">{location.peopleBetting?.toLocaleString() || 0}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Popularity</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-dark-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary"
                          style={{ width: `${location.popularity}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm font-semibold">{location.popularity}%</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(location);
                  }}
                  className="w-full btn-gradient px-4 py-2 rounded-lg text-white font-medium text-sm"
                >
                  Select to Bet
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-dark-card/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Choose Location</h4>
              <p className="text-text-secondary text-sm">
                Select a location you want to bet on based on market trends and data.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Set Your Bet</h4>
              <p className="text-text-secondary text-sm">
                Choose bet type (price increase/decrease or popularity) and enter your bet amount.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Win Rewards</h4>
              <p className="text-text-secondary text-sm">
                If your prediction is correct, you'll receive rewards based on the odds and your bet amount.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-text-muted text-sm">
              © 2024 TERRA. Built on Mantle Network.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BettingPage;


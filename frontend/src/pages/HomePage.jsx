import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useRole } from '../context/RoleContext';

const HomePage = () => {
  const { wallet } = useWallet();
  const { selectedRole } = useRole();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen animated-gradient-bg">
      {/* Header */}
      <header className="bg-dark-card/80 backdrop-blur-lg border-b border-dark-border sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">TERRA</span>
          </div>

          {/* Login/Dashboard Button */}
          <div>
            {wallet && selectedRole ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="btn-gradient px-6 py-2.5 rounded-lg text-white font-medium shadow-glow-sm cursor-pointer"
              >
                Go to Dashboard →
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="btn-gradient px-6 py-2.5 rounded-lg text-white font-medium shadow-glow-sm cursor-pointer"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-12">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span 
                style={{
                  background: 'linear-gradient(135deg, #5b6fed 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >TERRA</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              The ultimate builder platform on blockchain. Register as a builder, 
              manage your profile, and connect with opportunities in the decentralized world.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center animate-scale-in">
              {wallet && selectedRole ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn-gradient px-8 py-4 rounded-xl text-white text-lg font-semibold transform hover:scale-105 cursor-pointer"
                >
                  Go to Dashboard →
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="btn-gradient px-8 py-4 rounded-xl text-white text-lg font-semibold transform hover:scale-105 cursor-pointer"
                >
                  Login to Get Started →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Real Estate Marketplace Section */}
        <div className="mt-32 relative z-10">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
              Explore Real Estate <span 
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #5b6fed 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >Marketplace</span>
            </h2>
            <p className="text-xl text-white relative z-10">
              Discover premium tokenized real estate investment opportunities
            </p>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Modern Villa in Beverly Hills',
                location: 'Beverly Hills, CA',
                price: '$2,500,000',
                bedrooms: 5,
                bathrooms: 4,
                area: '4,500 sq ft',
                image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'
              },
              {
                title: 'Luxury Penthouse Downtown',
                location: 'Manhattan, NY',
                price: '$5,800,000',
                bedrooms: 4,
                bathrooms: 3,
                area: '3,200 sq ft',
                image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800'
              },
              {
                title: 'Beachfront Property Miami',
                location: 'Miami Beach, FL',
                price: '$3,200,000',
                bedrooms: 6,
                bathrooms: 5,
                area: '5,000 sq ft',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
              },
              {
                title: 'Mountain Cabin Resort',
                location: 'Aspen, CO',
                price: '$1,800,000',
                bedrooms: 4,
                bathrooms: 3,
                area: '3,500 sq ft',
                image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800'
              },
              {
                title: 'Contemporary Urban Loft',
                location: 'San Francisco, CA',
                price: '$1,200,000',
                bedrooms: 2,
                bathrooms: 2,
                area: '1,800 sq ft',
                image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
              },
              {
                title: 'Historic Estate Mansion',
                location: 'Boston, MA',
                price: '$4,500,000',
                bedrooms: 8,
                bathrooms: 6,
                area: '8,000 sq ft',
                image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800'
              },
              {
                title: 'Desert Oasis Villa',
                location: 'Scottsdale, AZ',
                price: '$2,100,000',
                bedrooms: 5,
                bathrooms: 4,
                area: '4,200 sq ft',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
              },
              {
                title: 'Lakeside Contemporary Home',
                location: 'Seattle, WA',
                price: '$1,900,000',
                bedrooms: 4,
                bathrooms: 3,
                area: '3,800 sq ft',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
              }
            ].map((property, index) => (
              <div
                key={index}
                className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-glow-sm cursor-pointer animate-slide-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/marketplace/${index + 1}`)}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent z-10"></div>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Property';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-white line-clamp-1 mb-1">{property.title}</h3>
                  
                  <div className="flex items-center gap-1 text-text-muted text-xs mb-3">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1 mb-3 text-xs text-text-secondary">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="line-clamp-1">{property.area}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-dark-border">
                    <span className="text-lg font-bold text-primary-500">{property.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center animate-fade-in">
            <button
              onClick={() => navigate('/marketplace')}
              className="btn-gradient px-8 py-4 rounded-xl text-white text-lg font-semibold transform hover:scale-105 cursor-pointer flex items-center gap-3 shadow-glow-sm"
            >
              <span>Explore More Properties</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Location Betting Section */}
        <div className="mt-32 relative z-10">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
              Location <span 
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #5b6fed 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >Betting</span>
            </h2>
            <p className="text-xl text-white relative z-10">
              Bet on real estate market trends and predict location performance
            </p>
          </div>

          {/* Betting Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Price Prediction',
                description: 'Bet on whether property prices will increase or decrease in specific locations',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Popularity Trends',
                description: 'Predict which locations will see the highest growth in investor interest',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-600'
              },
              {
                title: 'Market Insights',
                description: 'Access real-time data and analytics to make informed betting decisions',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'from-purple-500 to-pink-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-glow-sm animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate('/betting')}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-glow group-hover:shadow-glow-lg transition-all`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Locations Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: 'Beverly Hills, CA',
                priceChange: '+12.5%',
                trend: 'up',
                image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'
              },
              {
                name: 'Manhattan, NY',
                priceChange: '+8.3%',
                trend: 'up',
                image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800'
              },
              {
                name: 'Miami Beach, FL',
                priceChange: '+15.2%',
                trend: 'up',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
              },
              {
                name: 'San Francisco, CA',
                priceChange: '-3.1%',
                trend: 'down',
                image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
              }
            ].map((location, index) => (
              <div
                key={index}
                className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-glow-sm cursor-pointer animate-slide-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate('/betting')}
              >
                <div className="relative h-32 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent z-10"></div>
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Location';
                    }}
                  />
                  <div className={`absolute top-3 right-3 z-20 px-2 py-1 rounded-full text-white text-xs font-bold ${
                    location.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {location.priceChange}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-bold text-white mb-1">{location.name}</h4>
                  <p className="text-text-muted text-xs">Click to bet on this location</p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore Betting Button */}
          <div className="flex justify-center animate-fade-in">
            <button
              onClick={() => navigate('/betting')}
              className="btn-gradient px-8 py-4 rounded-xl text-white text-lg font-semibold transform hover:scale-105 cursor-pointer flex items-center gap-3 shadow-glow-sm"
            >
              <span>Explore Location Betting</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 relative z-10">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
              Why Choose <span 
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #5b6fed 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >TERRA</span>
            </h2>
            <p className="text-xl text-white relative z-10">
              Powerful features to help you build and manage your real estate portfolio
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div 
              onClick={() => wallet ? navigate('/select-role') : navigate('/login')}
              className="group bg-dark-card/60 backdrop-blur-md border border-dark-border rounded-3xl p-8 hover:border-primary-500/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow-lg animate-slide-up relative overflow-hidden cursor-pointer" 
              style={{animationDelay: '0.1s'}}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Register as Builder</h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  Create your professional builder profile on the blockchain and establish your presence in the decentralized real estate ecosystem.
                </p>
              </div>
            </div>

            <div 
              onClick={() => wallet && selectedRole ? navigate('/dashboard') : navigate('/login')}
              className="group bg-dark-card/60 backdrop-blur-md border border-dark-border rounded-3xl p-8 hover:border-primary-500/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow-lg animate-slide-up relative overflow-hidden cursor-pointer" 
              style={{animationDelay: '0.2s'}}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Manage Profile</h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  Update and showcase your company information, credentials, and portfolio to attract investors and opportunities.
                </p>
              </div>
            </div>

            <div 
              onClick={() => wallet && selectedRole ? navigate('/dashboard') : navigate('/login')}
              className="group bg-dark-card/60 backdrop-blur-md border border-dark-border rounded-3xl p-8 hover:border-primary-500/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow-lg animate-slide-up relative overflow-hidden cursor-pointer" 
              style={{animationDelay: '0.3s'}}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Secure & Decentralized</h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  Your data is stored securely on IPFS and verified on-chain, ensuring transparency and immutability.
                </p>
              </div>
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
            <div className="flex gap-6 text-text-secondary text-sm">
              <a href="#" className="hover:text-primary-500 transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary-500 transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


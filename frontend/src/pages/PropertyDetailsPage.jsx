import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wallet } = useWallet();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [tokenQuantity, setTokenQuantity] = useState(1);

  // Sample property data (in real app, fetch from API/blockchain)
  const properties = {
    1: {
      title: 'Modern Villa in Beverly Hills',
      location: 'Beverly Hills, CA',
      price: 2500000,
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,500 sq ft',
      yearBuilt: 2020,
      tokenPrice: 25000,
      totalTokens: 100,
      availableTokens: 75,
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'
      ],
      description: 'Experience luxury living in this stunning modern villa located in the heart of Beverly Hills. This architectural masterpiece features floor-to-ceiling windows, an open-concept design, and state-of-the-art amenities throughout. The property boasts a gourmet kitchen with top-of-the-line appliances, a spacious master suite with a spa-like bathroom, and a resort-style backyard with a pool and outdoor entertainment area.',
      features: [
        'Smart Home Technology',
        'Private Pool & Spa',
        'Gourmet Kitchen',
        'Home Theater',
        'Wine Cellar',
        'Fitness Center',
        'Security System',
        '3-Car Garage'
      ],
      amenities: [
        'Hardwood Floors',
        'High Ceilings',
        'Walk-in Closets',
        'Central Air',
        'Fireplace',
        'Balcony/Patio',
        'Garden',
        'Gym'
      ],
      currentValue: 2500000,
      appreciation: '+12.5%',
      annualReturn: '8.2%',
      rentalYield: '4.5%'
    },
    2: {
      title: 'Luxury Penthouse Downtown',
      location: 'Manhattan, NY',
      price: 5800000,
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      yearBuilt: 2019,
      tokenPrice: 58000,
      totalTokens: 100,
      availableTokens: 45,
      images: [
        'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200'
      ],
      description: 'Unparalleled luxury awaits in this stunning penthouse with breathtaking city views. This exclusive residence features soaring ceilings, designer finishes, and panoramic windows. The chef\'s kitchen is equipped with premium appliances, and the master suite offers a private terrace overlooking the Manhattan skyline.',
      features: [
        'Panoramic City Views',
        'Private Terrace',
        'Concierge Service',
        'Valet Parking',
        'Rooftop Access',
        'Smart Home System',
        'High-end Finishes',
        'Premium Appliances'
      ],
      amenities: [
        'Marble Floors',
        'Floor-to-Ceiling Windows',
        'Custom Closets',
        'Central AC',
        'Gas Fireplace',
        'Private Elevator',
        'Storage Unit',
        'Building Gym'
      ],
      currentValue: 5800000,
      appreciation: '+18.3%',
      annualReturn: '10.5%',
      rentalYield: '5.2%'
    }
  };

  const property = properties[id] || properties[1];

  const handleBuy = () => {
    if (!wallet) {
      navigate('/login');
    } else {
      alert('Purchase functionality coming soon!');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this property: ${property.title}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
      setShowShareModal(false);
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      setShowShareModal(false);
    }
  };

  return (
    <div className="min-h-screen animated-gradient-bg">
      {/* Header */}
      <header className="bg-dark-card/80 backdrop-blur-lg border-b border-dark-border sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/marketplace')}
              className="p-2 hover:bg-dark-hover rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">TERRA</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {wallet ? (
              <div className="px-4 py-2 bg-dark-hover rounded-lg text-sm font-mono text-text-primary">
                {wallet.slice(0, 6)}...{wallet.slice(-4)}
              </div>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 animate-fade-in">
              {/* Main Image */}
              <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/1200x800/1a1a2e/3b82f6?text=Property';
                  }}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-primary-500 scale-105'
                        : 'hover:opacity-75'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200/1a1a2e/3b82f6?text=View';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 animate-slide-up">
              <h2 className="text-2xl font-bold text-white mb-4">About This Property</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {property.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-text-secondary text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 animate-slide-up">
              <h2 className="text-2xl font-bold text-white mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-text-muted text-sm mb-1">Property Type</p>
                  <p className="text-white font-medium">{property.type}</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Bedrooms</p>
                  <p className="text-white font-medium">{property.bedrooms} Beds</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Bathrooms</p>
                  <p className="text-white font-medium">{property.bathrooms} Baths</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Area</p>
                  <p className="text-white font-medium">{property.area}</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Year Built</p>
                  <p className="text-white font-medium">{property.yearBuilt}</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Location</p>
                  <p className="text-white font-medium">{property.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Card */}
          <div className="lg:col-span-1">
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 sticky top-24 animate-scale-in">
              {/* Title */}
              <h1 className="text-2xl font-bold text-white mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-text-muted mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{property.location}</span>
              </div>

              {/* Current Value */}
              <div className="mb-6 pb-6 border-b border-dark-border">
                <p className="text-text-muted text-sm mb-2">Current Value</p>
                <p className="text-4xl font-bold text-primary-500 mb-1">
                  ${property.currentValue.toLocaleString()}
                </p>
                <p className="text-success text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>{property.appreciation} this year</span>
                </p>
              </div>

              {/* Token Info */}
              <div className="mb-6 pb-6 border-b border-dark-border">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-text-muted">Token Price</span>
                  <span className="text-white font-bold">${property.tokenPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-text-muted">Total Tokens</span>
                  <span className="text-white font-medium">{property.totalTokens}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Available</span>
                  <span className="text-primary-500 font-medium">{property.availableTokens} tokens</span>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-dark-bg rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full"
                      style={{ width: `${((property.totalTokens - property.availableTokens) / property.totalTokens) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-text-muted mt-2">
                    {property.totalTokens - property.availableTokens} tokens sold
                  </p>
                </div>
              </div>

              {/* Investment Returns */}
              <div className="mb-6 pb-6 border-b border-dark-border">
                <h3 className="text-white font-bold mb-3">Investment Returns</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Annual Return</span>
                    <span className="text-success font-medium">{property.annualReturn}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Rental Yield</span>
                    <span className="text-success font-medium">{property.rentalYield}</span>
                  </div>
                </div>
              </div>

              {/* Token Purchase Slider */}
              <div className="mb-6 pb-6 border-b border-dark-border">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-white font-medium">Select Tokens</label>
                  <div className="text-right">
                    <p className="text-primary-500 font-bold text-lg">{tokenQuantity} token{tokenQuantity !== 1 ? 's' : ''}</p>
                    <p className="text-text-muted text-sm">${(tokenQuantity * property.tokenPrice).toLocaleString()}</p>
                  </div>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max={property.availableTokens}
                  value={tokenQuantity}
                  onChange={(e) => setTokenQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-dark-bg rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #5b6fed 0%, #5b6fed ${((tokenQuantity - 1) / (property.availableTokens - 1)) * 100}%, #2e3142 ${((tokenQuantity - 1) / (property.availableTokens - 1)) * 100}%, #2e3142 100%)`
                  }}
                />
                
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>1</span>
                  <span>{property.availableTokens} available</span>
                </div>

                {/* Quick Select Buttons */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setTokenQuantity(1)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      tokenQuantity === 1
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-hover hover:bg-dark-bg border border-dark-border text-white'
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setTokenQuantity(Math.floor(property.availableTokens / 4))}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      tokenQuantity === Math.floor(property.availableTokens / 4)
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-hover hover:bg-dark-bg border border-dark-border text-white'
                    }`}
                  >
                    25%
                  </button>
                  <button
                    onClick={() => setTokenQuantity(Math.floor(property.availableTokens / 2))}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      tokenQuantity === Math.floor(property.availableTokens / 2)
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-hover hover:bg-dark-bg border border-dark-border text-white'
                    }`}
                  >
                    50%
                  </button>
                  <button
                    onClick={() => setTokenQuantity(property.availableTokens)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      tokenQuantity === property.availableTokens
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-hover hover:bg-dark-bg border border-dark-border text-white'
                    }`}
                  >
                    Max
                  </button>
                </div>
              </div>

              {/* Buy Button */}
              <button
                onClick={() => {
                  if (!wallet) {
                    navigate('/login');
                  } else {
                    alert(`Purchasing ${tokenQuantity} token${tokenQuantity !== 1 ? 's' : ''} for $${(tokenQuantity * property.tokenPrice).toLocaleString()}`);
                  }
                }}
                className="w-full btn-gradient px-6 py-4 rounded-xl text-white text-lg font-semibold shadow-glow-sm cursor-pointer mb-4 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Buy {tokenQuantity} Token{tokenQuantity !== 1 ? 's' : ''}</span>
              </button>

              {/* Share Button */}
              <button
                onClick={() => setShowShareModal(true)}
                className="w-full px-6 py-3 bg-dark-hover hover:bg-dark-bg border border-dark-border rounded-xl text-white font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share Property</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowShareModal(false)}>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Share Property</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-2 hover:bg-dark-hover rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1877f2] hover:bg-[#1665d8] rounded-lg text-white font-medium transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>

              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1da1f2] hover:bg-[#1a8cd8] rounded-lg text-white font-medium transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </button>

              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0077b5] hover:bg-[#006399] rounded-lg text-white font-medium transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </button>

              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25d366] hover:bg-[#20bd5a] rounded-lg text-white font-medium transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => handleShare('copy')}
                className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-dark-hover hover:bg-dark-bg border border-dark-border rounded-lg text-white font-medium transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailsPage;


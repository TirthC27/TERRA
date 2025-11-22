import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

const MarketplacePage = () => {
  const navigate = useNavigate();
  const { wallet } = useWallet();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample real estate data
  const properties = [
    {
      id: 1,
      title: 'Modern Villa in Beverly Hills',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,500 sq ft',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Luxury Penthouse Downtown',
      location: 'Manhattan, NY',
      price: '$5,800,000',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      featured: true
    },
    {
      id: 3,
      title: 'Beachfront Property Miami',
      location: 'Miami Beach, FL',
      price: '$3,200,000',
      type: 'Beach House',
      bedrooms: 6,
      bathrooms: 5,
      area: '5,000 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Mountain Cabin Resort',
      location: 'Aspen, CO',
      price: '$1,800,000',
      type: 'Cabin',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,500 sq ft',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Contemporary Urban Loft',
      location: 'San Francisco, CA',
      price: '$1,200,000',
      type: 'Loft',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,800 sq ft',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Historic Estate Mansion',
      location: 'Boston, MA',
      price: '$4,500,000',
      type: 'Mansion',
      bedrooms: 8,
      bathrooms: 6,
      area: '8,000 sq ft',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      featured: true
    },
    {
      id: 7,
      title: 'Desert Oasis Villa',
      location: 'Scottsdale, AZ',
      price: '$2,100,000',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,200 sq ft',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      featured: false
    },
    {
      id: 8,
      title: 'Lakeside Contemporary Home',
      location: 'Seattle, WA',
      price: '$1,900,000',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,800 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      featured: false
    },
    {
      id: 9,
      title: 'Ranch Style Estate',
      location: 'Austin, TX',
      price: '$2,800,000',
      type: 'Ranch',
      bedrooms: 6,
      bathrooms: 5,
      area: '6,500 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      featured: false
    },
    {
      id: 10,
      title: 'Coastal Modern Residence',
      location: 'San Diego, CA',
      price: '$3,500,000',
      type: 'House',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,800 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      featured: true
    },
    {
      id: 11,
      title: 'Suburban Family Home',
      location: 'Portland, OR',
      price: '$950,000',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,000 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
      featured: false
    },
    {
      id: 12,
      title: 'Luxury Sky Residence',
      location: 'Chicago, IL',
      price: '$4,200,000',
      type: 'Penthouse',
      bedrooms: 5,
      bathrooms: 4,
      area: '5,200 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      featured: true
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesFilter = filter === 'all' || property.type.toLowerCase() === filter.toLowerCase();
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {wallet ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-white font-medium transition-all cursor-pointer"
                >
                  Dashboard
                </button>
                <div className="px-4 py-2 bg-dark-hover rounded-lg text-sm font-mono text-text-primary">
                  {wallet.slice(0, 6)}...{wallet.slice(-4)}
                </div>
              </>
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
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">
            Real Estate <span 
              style={{
                background: 'linear-gradient(135deg, #5b6fed 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >Marketplace</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover premium properties and invest in tokenized real estate assets
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6 mb-8 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg pl-12 pr-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
            </div>

            {/* Filter */}
            <div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="house">House</option>
                <option value="mansion">Mansion</option>
                <option value="loft">Loft</option>
                <option value="cabin">Cabin</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              onClick={() => navigate(`/marketplace/${property.id}`)}
              className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-glow-lg cursor-pointer animate-slide-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent z-10"></div>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Property';
                  }}
                />
                {property.featured && (
                  <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-primary-500 rounded-full text-white text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white line-clamp-1">{property.title}</h3>
                </div>
                
                <div className="flex items-center gap-1 text-text-muted text-sm mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-text-secondary">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <span className="text-2xl font-bold text-primary-500">{property.price}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/marketplace/${property.id}`);
                    }}
                    className="p-2 bg-primary-500/20 hover:bg-primary-500 text-primary-500 hover:text-white rounded-lg transition-all cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-dark-card rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No properties found</h3>
            <p className="text-text-secondary">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MarketplacePage;


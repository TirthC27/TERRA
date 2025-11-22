import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyInvestments = ({ wallet }) => {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Sample investment properties data
  const investments = [
    {
      id: 1,
      propertyTitle: 'Modern Villa in Beverly Hills',
      location: 'Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      tokensOwned: 15,
      totalTokens: 100,
      investmentAmount: 375000,
      currentValue: 420000,
      appreciation: '+12%',
      monthlyReturn: 2850,
      annualReturn: '8.2%',
      rentalYield: '4.5%',
      investedDate: '2024-01-15',
      status: 'Active',
      propertyType: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,500 sq ft'
    },
    {
      id: 2,
      propertyTitle: 'Luxury Penthouse Downtown',
      location: 'Manhattan, NY',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      tokensOwned: 8,
      totalTokens: 100,
      investmentAmount: 464000,
      currentValue: 548000,
      appreciation: '+18.3%',
      monthlyReturn: 3800,
      annualReturn: '10.5%',
      rentalYield: '5.2%',
      investedDate: '2024-02-20',
      status: 'Active',
      propertyType: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft'
    },
    {
      id: 3,
      propertyTitle: 'Beachfront Property Miami',
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      tokensOwned: 12,
      totalTokens: 100,
      investmentAmount: 384000,
      currentValue: 398400,
      appreciation: '+3.8%',
      monthlyReturn: 2400,
      annualReturn: '6.8%',
      rentalYield: '3.9%',
      investedDate: '2024-03-10',
      status: 'Active',
      propertyType: 'Beach House',
      bedrooms: 6,
      bathrooms: 5,
      area: '5,000 sq ft'
    },
    {
      id: 4,
      propertyTitle: 'Mountain Cabin Resort',
      location: 'Aspen, CO',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      tokensOwned: 20,
      totalTokens: 100,
      investmentAmount: 360000,
      currentValue: 378000,
      appreciation: '+5%',
      monthlyReturn: 2100,
      annualReturn: '7%',
      rentalYield: '4.2%',
      investedDate: '2024-04-05',
      status: 'Active',
      propertyType: 'Cabin',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,500 sq ft'
    },
    {
      id: 5,
      propertyTitle: 'Contemporary Urban Loft',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      tokensOwned: 10,
      totalTokens: 100,
      investmentAmount: 120000,
      currentValue: 132000,
      appreciation: '+10%',
      monthlyReturn: 850,
      annualReturn: '8.5%',
      rentalYield: '4.8%',
      investedDate: '2024-05-12',
      status: 'Active',
      propertyType: 'Loft',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,800 sq ft'
    },
    {
      id: 6,
      propertyTitle: 'Historic Estate Mansion',
      location: 'Boston, MA',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      tokensOwned: 5,
      totalTokens: 100,
      investmentAmount: 225000,
      currentValue: 247500,
      appreciation: '+10%',
      monthlyReturn: 1200,
      annualReturn: '6.4%',
      rentalYield: '3.5%',
      investedDate: '2024-06-01',
      status: 'Active',
      propertyType: 'Mansion',
      bedrooms: 8,
      bathrooms: 6,
      area: '8,000 sq ft'
    }
  ];

  const totalInvested = investments.reduce((sum, inv) => sum + inv.investmentAmount, 0);
  const totalCurrentValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalProfit = totalCurrentValue - totalInvested;
  const totalReturn = ((totalProfit / totalInvested) * 100).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Investments</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">{investments.length}</p>
          <p className="text-text-muted text-sm mt-1">Properties</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Invested</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(totalInvested / 1000).toFixed(0)}K</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Return</h3>
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-success">+{totalReturn}%</p>
          <p className="text-text-muted text-sm mt-1">${(totalProfit / 1000).toFixed(0)}K profit</p>
        </div>
      </div>

      {/* Investment Properties Grid */}
      <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">My Investment Properties</h2>
          <button
            onClick={() => navigate('/marketplace')}
            className="px-4 py-2 bg-primary-500/20 hover:bg-primary-500 text-primary-500 hover:text-white rounded-lg text-sm font-medium transition-all cursor-pointer"
          >
            Explore More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => (
            <div
              key={investment.id}
              onClick={() => setSelectedProperty(investment)}
              className="bg-dark-bg/50 border border-dark-border rounded-xl overflow-hidden hover:border-primary-500 transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={investment.image}
                  alt={investment.propertyTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Property';
                  }}
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-success rounded-full text-white text-xs font-bold">
                  {investment.status}
                </div>
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-dark-card/90 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                  {investment.propertyType}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold mb-1 line-clamp-1">{investment.propertyTitle}</h3>
                <p className="text-text-muted text-sm mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {investment.location}
                </p>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-text-secondary">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{investment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>{investment.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="line-clamp-1">{investment.area}</span>
                  </div>
                </div>

                {/* Token Ownership */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Tokens Owned</span>
                    <span className="text-white font-medium">{investment.tokensOwned}/{investment.totalTokens}</span>
                  </div>
                  <div className="w-full bg-dark-card rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full"
                      style={{ width: `${(investment.tokensOwned / investment.totalTokens) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Investment Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dark-border">
                  <div>
                    <p className="text-text-muted text-xs mb-1">Investment</p>
                    <p className="text-white font-bold text-sm">${(investment.investmentAmount / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted text-xs mb-1">Current Value</p>
                    <p className="text-success font-bold text-sm">${(investment.currentValue / 1000).toFixed(0)}K</p>
                    <p className="text-success text-xs">{investment.appreciation}</p>
                  </div>
                </div>

                {/* Returns */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-dark-border">
                  <div>
                    <p className="text-text-muted text-xs">Monthly Return</p>
                    <p className="text-primary-500 font-bold">${investment.monthlyReturn.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted text-xs">Annual Return</p>
                    <p className="text-success font-bold">{investment.annualReturn}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedProperty(null)}>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Investment Details</h3>
              <button
                onClick={() => setSelectedProperty(null)}
                className="p-2 hover:bg-dark-hover rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="h-64 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.propertyTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{selectedProperty.propertyTitle}</h4>
                <p className="text-text-muted flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {selectedProperty.location}
                </p>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-dark-bg/50 rounded-xl p-4 text-center">
                  <p className="text-text-muted text-sm mb-1">Bedrooms</p>
                  <p className="text-2xl font-bold text-white">{selectedProperty.bedrooms}</p>
                </div>
                <div className="bg-dark-bg/50 rounded-xl p-4 text-center">
                  <p className="text-text-muted text-sm mb-1">Bathrooms</p>
                  <p className="text-2xl font-bold text-white">{selectedProperty.bathrooms}</p>
                </div>
                <div className="bg-dark-bg/50 rounded-xl p-4 text-center">
                  <p className="text-text-muted text-sm mb-1">Area</p>
                  <p className="text-2xl font-bold text-white">{selectedProperty.area}</p>
                </div>
              </div>

              {/* Investment Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-bg/50 rounded-xl p-4">
                  <p className="text-text-muted text-sm mb-1">Investment Amount</p>
                  <p className="text-2xl font-bold text-white">${(selectedProperty.investmentAmount / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-dark-bg/50 rounded-xl p-4">
                  <p className="text-text-muted text-sm mb-1">Current Value</p>
                  <p className="text-2xl font-bold text-success">${(selectedProperty.currentValue / 1000).toFixed(0)}K</p>
                  <p className="text-success text-sm">{selectedProperty.appreciation}</p>
                </div>
              </div>

              {/* Returns */}
              <div>
                <h5 className="text-white font-bold mb-3">Returns & Yields</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Monthly Return</span>
                    <span className="text-white font-bold">${selectedProperty.monthlyReturn.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Annual Return</span>
                    <span className="text-success font-bold">{selectedProperty.annualReturn}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Rental Yield</span>
                    <span className="text-success font-bold">{selectedProperty.rentalYield}</span>
                  </div>
                </div>
              </div>

              {/* Token Ownership */}
              <div>
                <h5 className="text-white font-bold mb-3">Token Ownership</h5>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-muted">Tokens Owned</span>
                  <span className="text-white font-bold">{selectedProperty.tokensOwned}/{selectedProperty.totalTokens}</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-3">
                  <div
                    className="bg-gradient-primary h-3 rounded-full"
                    style={{ width: `${(selectedProperty.tokensOwned / selectedProperty.totalTokens) * 100}%` }}
                  ></div>
                </div>
                <p className="text-text-muted text-sm mt-2">
                  You own {((selectedProperty.tokensOwned / selectedProperty.totalTokens) * 100).toFixed(1)}% of this property
                </p>
              </div>

              {/* Investment Date */}
              <div className="flex justify-between items-center pt-4 border-t border-dark-border">
                <span className="text-text-muted">Invested On</span>
                <span className="text-white">{new Date(selectedProperty.investedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/marketplace/${selectedProperty.id}`)}
                  className="flex-1 btn-gradient px-6 py-3 rounded-xl text-white font-medium cursor-pointer"
                >
                  View Full Details
                </button>
                <button className="px-6 py-3 bg-dark-hover hover:bg-dark-bg border border-dark-border rounded-xl text-white font-medium transition-all cursor-pointer">
                  Sell Tokens
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyInvestments;


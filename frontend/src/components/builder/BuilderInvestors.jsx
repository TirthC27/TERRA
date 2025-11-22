import { useState } from 'react';

const BuilderInvestors = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [showSendModal, setShowSendModal] = useState(null);

  // Sample properties data
  const properties = [
    {
      id: 1,
      title: 'Modern Villa in Beverly Hills',
      location: 'Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      totalTokens: 100,
      tokensSold: 30,
      totalValue: 2500000
    },
    {
      id: 2,
      title: 'Luxury Penthouse Downtown',
      location: 'Manhattan, NY',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      totalTokens: 100,
      tokensSold: 35,
      totalValue: 5800000
    },
    {
      id: 3,
      title: 'Beachfront Property Miami',
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      totalTokens: 100,
      tokensSold: 12,
      totalValue: 3200000
    }
  ];

  // Sample investors data
  const investors = [
    {
      id: 1,
      wallet: '0x1234567890abcdef1234567890abcdef12345678',
      propertyId: 1,
      propertyName: 'Modern Villa in Beverly Hills',
      tokensOwned: 15,
      investment: 375000,
      joinDate: '2024-01-15',
      lastPayout: 2850,
      totalPayouts: 25650,
      ownership: 15
    },
    {
      id: 2,
      wallet: '0x2345678901bcdef2345678901bcdef23456789',
      propertyId: 1,
      propertyName: 'Modern Villa in Beverly Hills',
      tokensOwned: 10,
      investment: 250000,
      joinDate: '2024-02-01',
      lastPayout: 1900,
      totalPayouts: 17100,
      ownership: 10
    },
    {
      id: 3,
      wallet: '0x3456789012cdef3456789012cdef34567890ab',
      propertyId: 1,
      propertyName: 'Modern Villa in Beverly Hills',
      tokensOwned: 5,
      investment: 125000,
      joinDate: '2024-03-01',
      totalPayouts: 4750,
      lastPayout: 950,
      ownership: 5
    },
    {
      id: 4,
      wallet: '0x4567890123def4567890123def4567890123cd',
      propertyId: 2,
      propertyName: 'Luxury Penthouse Downtown',
      tokensOwned: 20,
      investment: 1160000,
      joinDate: '2024-01-20',
      lastPayout: 9500,
      totalPayouts: 85500,
      ownership: 20
    },
    {
      id: 5,
      wallet: '0x5678901234ef5678901234ef5678901234efde',
      propertyId: 2,
      propertyName: 'Luxury Penthouse Downtown',
      tokensOwned: 15,
      investment: 870000,
      joinDate: '2024-02-15',
      lastPayout: 7125,
      totalPayouts: 64125,
      ownership: 15
    },
    {
      id: 6,
      wallet: '0x6789012345f6789012345f6789012345f67890',
      propertyId: 3,
      propertyName: 'Beachfront Property Miami',
      tokensOwned: 8,
      investment: 256000,
      joinDate: '2024-03-10',
      lastPayout: 1920,
      totalPayouts: 17280,
      ownership: 8
    },
    {
      id: 7,
      wallet: '0x7890123456a7890123456a7890123456a78901',
      propertyId: 3,
      propertyName: 'Beachfront Property Miami',
      tokensOwned: 4,
      investment: 128000,
      joinDate: '2024-04-05',
      lastPayout: 960,
      totalPayouts: 8640,
      ownership: 4
    }
  ];

  const filteredInvestors = selectedPropertyId
    ? investors.filter(inv => inv.propertyId === selectedPropertyId)
    : [];

  const selectedProperty = properties.find(p => p.id === selectedPropertyId);

  const totalInvestors = new Set(investors.map(i => i.wallet)).size;
  const totalInvestment = investors.reduce((sum, inv) => sum + inv.investment, 0);
  const propertyInvestment = filteredInvestors.reduce((sum, inv) => sum + inv.investment, 0);
  const propertyTokensSold = filteredInvestors.reduce((sum, inv) => sum + inv.tokensOwned, 0);

  const handleSendPayout = (investorId, amount) => {
    // Handle payout logic here
    console.log('Sending payout:', investorId, amount);
    setShowSendModal(null);
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Investors</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">{totalInvestors}</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Investment</h3>
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(totalInvestment / 1000000).toFixed(1)}M</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Properties</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">{properties.length}</p>
        </div>
      </div>

      {/* Property Listings */}
      {!selectedPropertyId ? (
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Select Property to View Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => {
              const propertyInvestors = investors.filter(inv => inv.propertyId === property.id);
              const propertyTotalInvestment = propertyInvestors.reduce((sum, inv) => sum + inv.investment, 0);
              const propertyTokensSold = propertyInvestors.reduce((sum, inv) => sum + inv.tokensOwned, 0);
              
              return (
                <div
                  key={property.id}
                  onClick={() => setSelectedPropertyId(property.id)}
                  className="bg-dark-bg/50 border border-dark-border rounded-xl overflow-hidden hover:border-primary-500 transition-all cursor-pointer group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Property';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1 line-clamp-1">{property.title}</h3>
                    <p className="text-text-muted text-sm mb-4">{property.location}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Investors</span>
                        <span className="text-white font-medium">{propertyInvestors.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Tokens Sold</span>
                        <span className="text-white font-medium">{propertyTokensSold}/{property.totalTokens}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Total Investment</span>
                        <span className="text-success font-medium">${(propertyTotalInvestment / 1000).toFixed(0)}K</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {/* Back Button */}
          <button
            onClick={() => setSelectedPropertyId(null)}
            className="flex items-center gap-2 text-text-secondary hover:text-primary-500 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Properties</span>
          </button>

          {/* Selected Property Info */}
          {selectedProperty && (
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
              <div className="flex gap-6 mb-6">
                <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/3b82f6?text=Property';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedProperty.title}</h2>
                  <p className="text-text-muted mb-4">{selectedProperty.location}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-text-muted text-sm mb-1">Total Value</p>
                      <p className="text-white font-bold">${(selectedProperty.totalValue / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Investors</p>
                      <p className="text-white font-bold">{filteredInvestors.length}</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Tokens Sold</p>
                      <p className="text-white font-bold">{propertyTokensSold}/{selectedProperty.totalTokens}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Investors List */}
          <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Investor Holdings</h2>
              <div className="text-right">
                <p className="text-text-muted text-sm">Total Investment</p>
                <p className="text-success font-bold text-lg">${(propertyInvestment / 1000).toFixed(0)}K</p>
              </div>
            </div>

            <div className="space-y-4">
              {filteredInvestors.length > 0 ? (
                filteredInvestors.map((investor) => (
                  <div
                    key={investor.id}
                    className="bg-dark-bg/50 border border-dark-border rounded-xl p-6 hover:border-primary-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {investor.wallet.slice(2, 4).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">{investor.wallet}</h3>
                          <p className="text-text-muted text-sm">Joined {new Date(investor.joinDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowSendModal(investor.id)}
                        className="px-4 py-2 bg-gradient-primary hover:opacity-90 text-white rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Send Payout
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-dark-card/50 rounded-lg p-4">
                        <p className="text-text-muted text-xs mb-1">Tokens Owned</p>
                        <p className="text-primary-500 font-bold text-lg">{investor.tokensOwned}</p>
                        <p className="text-text-muted text-xs mt-1">{investor.ownership}% ownership</p>
                      </div>
                      <div className="bg-dark-card/50 rounded-lg p-4">
                        <p className="text-text-muted text-xs mb-1">Initial Investment</p>
                        <p className="text-white font-bold text-lg">${(investor.investment / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="bg-dark-card/50 rounded-lg p-4">
                        <p className="text-text-muted text-xs mb-1">Last Payout</p>
                        <p className="text-success font-bold text-lg">${investor.lastPayout.toLocaleString()}</p>
                        <p className="text-text-muted text-xs mt-1">Monthly</p>
                      </div>
                      <div className="bg-dark-card/50 rounded-lg p-4">
                        <p className="text-text-muted text-xs mb-1">Total Payouts</p>
                        <p className="text-success font-bold text-lg">${investor.totalPayouts.toLocaleString()}</p>
                        <p className="text-text-muted text-xs mt-1">All time</p>
                      </div>
                    </div>

                    {/* Token Ownership Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-muted">Ownership</span>
                        <span className="text-white font-medium">{investor.ownership}%</span>
                      </div>
                      <div className="w-full bg-dark-card rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full"
                          style={{ width: `${investor.ownership}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-dark-card rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No investors yet</h3>
                  <p className="text-text-secondary">This property doesn't have any investors yet</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Send Payout Modal */}
      {showSendModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowSendModal(null)}>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Send Payout</h3>
              <button
                onClick={() => setShowSendModal(null)}
                className="p-2 hover:bg-dark-hover rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {filteredInvestors.find(inv => inv.id === showSendModal) && (
              <div className="space-y-4">
                <div>
                  <p className="text-text-muted text-sm mb-2">Investor</p>
                  <p className="text-white font-mono text-sm">
                    {filteredInvestors.find(inv => inv.id === showSendModal)?.wallet}
                  </p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-2">Tokens Owned</p>
                  <p className="text-white font-bold">
                    {filteredInvestors.find(inv => inv.id === showSendModal)?.tokensOwned} tokens
                  </p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-2">Last Payout</p>
                  <p className="text-success font-bold">
                    ${filteredInvestors.find(inv => inv.id === showSendModal)?.lastPayout.toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Payout Amount</label>
                  <input
                    type="number"
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Enter amount"
                    defaultValue={filteredInvestors.find(inv => inv.id === showSendModal)?.lastPayout}
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const investor = filteredInvestors.find(inv => inv.id === showSendModal);
                      if (investor) {
                        handleSendPayout(investor.id, investor.lastPayout);
                      }
                    }}
                    className="flex-1 btn-gradient px-6 py-3 rounded-xl text-white font-semibold cursor-pointer"
                  >
                    Send Payout
                  </button>
                  <button
                    onClick={() => setShowSendModal(null)}
                    className="px-6 py-3 bg-dark-hover hover:bg-dark-bg border border-dark-border rounded-xl text-white font-medium transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderInvestors;

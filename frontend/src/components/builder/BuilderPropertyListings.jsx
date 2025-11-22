import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BuilderPropertyListings = ({ wallet }) => {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [editingProperty, setEditingProperty] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'Villa',
    totalValue: '',
    totalTokens: '',
    description: ''
  });

  // Sample properties data
  const properties = [
    {
      id: 1,
      title: 'Modern Villa in Beverly Hills',
      location: 'Beverly Hills, CA',
      price: 2500000,
      tokenPrice: 25000,
      totalTokens: 100,
      tokensSold: 25,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      investors: 5,
      revenue: 625000,
      documents: 8,
      approvalStatus: 'Approved'
    },
    {
      id: 2,
      title: 'Luxury Penthouse Downtown',
      location: 'Manhattan, NY',
      price: 5800000,
      tokenPrice: 58000,
      totalTokens: 100,
      tokensSold: 55,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      investors: 12,
      revenue: 3190000,
      documents: 12,
      approvalStatus: 'Approved'
    },
    {
      id: 3,
      title: 'Beachfront Property Miami',
      location: 'Miami Beach, FL',
      price: 3200000,
      tokenPrice: 32000,
      totalTokens: 100,
      tokensSold: 0,
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      investors: 0,
      revenue: 0,
      documents: 5,
      approvalStatus: 'Under Review'
    }
  ];

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.revenue, 0);
  const totalInvestors = properties.reduce((sum, prop) => sum + prop.investors, 0);
  const activeListings = properties.filter(p => p.status === 'Active').length;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Properties</h3>
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">{properties.length}</p>
          <p className="text-success text-sm mt-1">{activeListings} Active</p>
        </div>

        <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm">Total Revenue</h3>
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">${(totalRevenue / 1000000).toFixed(1)}M</p>
        </div>

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
          <button
            onClick={() => {
              setEditingProperty(null);
              setFormData({
                title: '',
                location: '',
                type: 'Villa',
                totalValue: '',
                totalTokens: '',
                description: ''
              });
              setShowAddModal(true);
            }}
            className="w-full h-full flex flex-col items-center justify-center gap-2 text-primary-500 hover:text-primary-400 transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-bold">Add Property</span>
          </button>
        </div>
      </div>

      {/* Properties List */}
      <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">My Property Listings</h2>

        <div className="space-y-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-dark-bg/50 border border-dark-border rounded-xl p-6 hover:border-primary-500/50 transition-colors"
            >
              <div className="flex gap-6">
                {/* Image */}
                <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/1a1a2e/3b82f6?text=Property';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{property.title}</h3>
                      <p className="text-text-muted flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {property.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        property.status === 'Active' ? 'bg-success/20 text-success' :
                        property.status === 'Pending' ? 'bg-warning/20 text-warning' :
                        'bg-danger/20 text-danger'
                      }`}>
                        {property.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        property.approvalStatus === 'Approved' ? 'bg-success/20 text-success' :
                        property.approvalStatus === 'Under Review' ? 'bg-warning/20 text-warning' :
                        'bg-danger/20 text-danger'
                      }`}>
                        {property.approvalStatus}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-text-muted text-xs mb-1">Property Value</p>
                      <p className="text-white font-bold">${(property.price / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs mb-1">Tokens Sold</p>
                      <p className="text-white font-bold">{property.tokensSold}/{property.totalTokens}</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs mb-1">Investors</p>
                      <p className="text-white font-bold">{property.investors}</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs mb-1">Revenue</p>
                      <p className="text-success font-bold">${(property.revenue / 1000).toFixed(0)}K</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-muted">Funding Progress</span>
                      <span className="text-white font-medium">{((property.tokensSold / property.totalTokens) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-dark-card rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full"
                        style={{ width: `${(property.tokensSold / property.totalTokens) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/marketplace/${property.id}`)}
                      className="px-4 py-2 bg-primary-500/20 hover:bg-primary-500 text-primary-500 hover:text-white rounded-lg text-sm font-medium transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setEditingProperty(property);
                        setFormData({
                          title: property.title,
                          location: property.location,
                          type: 'Villa', // Default, can be enhanced
                          totalValue: property.price.toString(),
                          totalTokens: property.totalTokens.toString(),
                          description: '' // Add description field to property data if needed
                        });
                        setShowAddModal(true);
                      }}
                      className="px-4 py-2 bg-primary-500/20 hover:bg-primary-500 text-primary-500 hover:text-white rounded-lg text-sm font-medium transition-all cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-fade-in" onClick={() => {
          setShowAddModal(false);
          setEditingProperty(null);
          setFormData({
            title: '',
            location: '',
            type: 'Villa',
            totalValue: '',
            totalTokens: '',
            description: ''
          });
        }}>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {editingProperty ? 'Edit Property' : 'Add New Property'}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingProperty(null);
                  setFormData({
                    title: '',
                    location: '',
                    type: 'Villa',
                    totalValue: '',
                    totalTokens: '',
                    description: ''
                  });
                }}
                className="p-2 hover:bg-dark-hover rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                console.log('Form submitted:', formData, editingProperty ? 'Editing' : 'Adding');
                // Close modal and reset
                setShowAddModal(false);
                setEditingProperty(null);
                setFormData({
                  title: '',
                  location: '',
                  type: 'Villa',
                  totalValue: '',
                  totalTokens: '',
                  description: ''
                });
              }}
            >
              <div>
                <label className="block text-white font-medium mb-2">Property Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Enter property title"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="City, State"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Property Type</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
                  >
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Beach House</option>
                    <option>Cabin</option>
                    <option>Loft</option>
                    <option>Mansion</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Total Value</label>
                  <input
                    type="number"
                    value={formData.totalValue}
                    onChange={(e) => setFormData({ ...formData, totalValue: e.target.value })}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="$0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Total Tokens</label>
                  <input
                    type="number"
                    value={formData.totalTokens}
                    onChange={(e) => setFormData({ ...formData, totalTokens: e.target.value })}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="100"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description</label>
                <textarea
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Describe the property..."
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 btn-gradient px-6 py-3 rounded-xl text-white font-semibold cursor-pointer"
                >
                  {editingProperty ? 'Update Property' : 'Add Property'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingProperty(null);
                    setFormData({
                      title: '',
                      location: '',
                      type: 'Villa',
                      totalValue: '',
                      totalTokens: '',
                      description: ''
                    });
                  }}
                  className="px-6 py-3 bg-dark-hover hover:bg-dark-bg border border-dark-border rounded-xl text-white font-medium transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderPropertyListings;


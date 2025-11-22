import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const Sidebar = ({ currentPage, setCurrentPage, wallet }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const { selectedRole } = useRole();

  const getMenuItems = () => {
    if (selectedRole === 'investor') {
      return [
        { 
          id: 'portfolio', 
          label: 'My Portfolio',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
        { 
          id: 'investments', 
          label: 'My Investments',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        { 
          id: 'wallet', 
          label: 'Wallet & Payouts',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
      ];
    } else if (selectedRole === 'builder') {
      return [
        { 
          id: 'dashboard', 
          label: 'Dashboard',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        },
      ];
    } else if (selectedRole === 'owner') {
      return [
        { 
          id: 'listings', 
          label: 'Property Listings',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        },
        { 
          id: 'investors', 
          label: 'View Investors',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-72'} bg-dark-sidebar/95 backdrop-blur-xl h-screen fixed left-0 top-0 border-r border-dark-border/50 flex flex-col transition-all duration-300 animated-gradient-bg shadow-dark-lg z-50`}>
      
      {/* Logo Section */}
      <div className="p-6 border-b border-dark-border/30">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => navigate('/')}
            className={`flex items-center gap-3 transition-all duration-300 cursor-pointer hover:opacity-80 ${isCollapsed ? 'justify-center w-full' : ''}`}
          >
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-dark-sidebar animate-pulse"></div>
            </div>
            {!isCollapsed && (
              <div className="animate-fade-in">
                <h1 className="text-xl font-bold text-white tracking-wide">TERRA</h1>
                <p className="text-xs text-text-muted">Builder Platform</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden animate-slide-up ${
                currentPage === item.id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'text-text-secondary hover:bg-dark-hover/50 hover:text-text-primary'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`transform transition-transform duration-300 ${currentPage === item.id ? 'scale-110' : 'group-hover:scale-105'}`}>
                {item.icon}
              </div>
              {!isCollapsed && (
                <span className="font-semibold text-sm tracking-wide">{item.label}</span>
              )}
              
              {/* Active indicator */}
              {currentPage === item.id && !isCollapsed && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-glow"></div>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
            </button>
          ))}
        </div>

        {/* Stats Card */}
        {!isCollapsed && wallet && (
          <div className="mt-6 p-4 bg-dark-card/50 backdrop-blur-sm rounded-xl border border-dark-border/30 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-text-muted uppercase tracking-wider">Wallet Status</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs font-mono text-text-primary truncate">{wallet.slice(0, 8)}...{wallet.slice(-6)}</p>
          </div>
        )}
      </nav>

      {/* Upgrade Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-dark-border/30 animate-slide-up">
          <div className="relative overflow-hidden bg-gradient-primary rounded-2xl p-5 text-white shadow-glow group cursor-pointer">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="font-bold text-sm">Upgrade to Pro</h3>
              </div>
              <p className="text-xs opacity-90 mb-4 leading-relaxed">
                Unlock premium features and advanced analytics
              </p>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2.5 px-4 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 group">
                <span>Upgrade Now</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Collapse Toggle */}
      <div className="p-4 border-t border-dark-border/30">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center py-2.5 rounded-lg bg-dark-hover/50 hover:bg-dark-hover text-text-secondary hover:text-primary-500 transition-all cursor-pointer group"
        >
          <svg 
            className={`w-5 h-5 transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/WalletContext";
import { useRole } from "../context/RoleContext";
import Sidebar from "../components/Sidebar";
import BuilderPropertyListings from "../components/builder/BuilderPropertyListings";
import BuilderInvestors from "../components/builder/BuilderInvestors";
import InvestorPortfolio from "../components/investor/InvestorPortfolio";
import InvestorWallet from "../components/investor/InvestorWallet";
import MyInvestments from "../components/investor/MyInvestments";

function Dashboard() {
  const { wallet, isMetaMaskInstalled, error, connectWallet, disconnectWallet: disconnect } = useWallet();
  const { selectedRole, selectRole, clearAllData } = useRole();
  
  // Set default page based on role
  const getDefaultPage = () => {
    if (selectedRole === 'investor') return 'portfolio';
    if (selectedRole === 'builder') return 'dashboard';
    if (selectedRole === 'owner') return 'listings';
    return 'analytics';
  };
  
  const [page, setPage] = useState(getDefaultPage());
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);
  const notificationRef = useRef(null);
  const roleSwitcherRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet) {
      navigate('/login');
    } else if (!selectedRole) {
      navigate('/select-role');
    }
  }, [wallet, selectedRole, navigate]);

  // Update page when role changes
  useEffect(() => {
    setPage(getDefaultPage());
  }, [selectedRole]);

  const disconnectWallet = () => {
    disconnect();
    clearAllData();
    navigate('/');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (roleSwitcherRef.current && !roleSwitcherRef.current.contains(event.target)) {
        setShowRoleSwitcher(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'Profile Updated',
      message: 'Your builder profile has been successfully updated',
      time: '5 minutes ago',
      read: false,
      type: 'success'
    },
    {
      id: 2,
      title: 'New Message',
      message: 'You have received a new message from the admin',
      time: '1 hour ago',
      read: false,
      type: 'info'
    },
    {
      id: 3,
      title: 'KYC Verification',
      message: 'Your KYC documents are under review',
      time: '2 hours ago',
      read: true,
      type: 'warning'
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const roles = [
    {
      id: 'investor',
      name: 'Investor Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'owner',
      name: 'Owner Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'builder',
      name: 'Builder Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const currentRole = roles.find(r => r.id === selectedRole);

  const handleRoleSwitch = (roleId) => {
    selectRole(roleId);
    setShowRoleSwitcher(false);
    setPage('register'); // Reset to default page when switching roles
  };

  return (
    <div className="flex h-screen animated-gradient-bg overflow-hidden">
      {/* Sidebar */}
      <Sidebar currentPage={page} setCurrentPage={setPage} wallet={wallet} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-72">
        {/* Top Header */}
        <header className="bg-dark-card/80 backdrop-blur-lg border-b border-dark-border px-8 py-4 flex items-center justify-end animate-fade-in relative z-50">
          {/* Right Side - Role Switcher, Notifications, Wallet & Buttons */}
          <div className="flex items-center gap-3 relative">
            {/* Role Switcher Dropdown */}
            <div className="relative" ref={roleSwitcherRef}>
              <button
                onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
                className="flex items-center gap-2 px-4 py-2 bg-dark-hover hover:bg-dark-bg border border-dark-border rounded-lg transition-all cursor-pointer"
              >
                <div className="text-primary-500">
                  {currentRole?.icon}
                </div>
                <span className="text-white font-medium text-sm">{currentRole?.name}</span>
                <svg
                  className={`w-4 h-4 text-text-muted transition-transform ${showRoleSwitcher ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Role Switcher Dropdown Menu */}
              {showRoleSwitcher && (
                <div className="absolute right-0 mt-2 w-64 bg-dark-card border border-dark-border rounded-xl shadow-dark-lg z-[100] animate-fade-in overflow-hidden">
                  <div className="px-4 py-3 border-b border-dark-border bg-gradient-primary/10">
                    <h3 className="text-white font-semibold text-sm">Switch Dashboard</h3>
                  </div>
                  <div className="py-2">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => handleRoleSwitch(role.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer ${
                          selectedRole === role.id
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'text-text-secondary hover:bg-dark-hover hover:text-white'
                        }`}
                      >
                        <div className={selectedRole === role.id ? 'text-primary-400' : ''}>
                          {role.icon}
                        </div>
                        <span className="text-sm font-medium">{role.name}</span>
                        {selectedRole === role.id && (
                          <svg className="w-4 h-4 ml-auto text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Notification Icon with Dropdown */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-dark-hover rounded-lg transition-all cursor-pointer"
              >
                <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-danger rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-dark-card border border-dark-border rounded-xl shadow-dark-lg z-[100] animate-fade-in overflow-hidden">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-dark-border bg-gradient-primary/10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="px-2 py-1 bg-danger rounded-full text-xs text-white font-bold">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Notifications List */}
                  <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-8 text-center text-text-muted">
                        <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p>No notifications yet</p>
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 border-b border-dark-border hover:bg-dark-hover transition-colors cursor-pointer ${
                            !notification.read ? 'bg-primary-500/5' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                              notification.type === 'success' ? 'bg-success' :
                              notification.type === 'warning' ? 'bg-warning' :
                              notification.type === 'danger' ? 'bg-danger' :
                              'bg-primary-500'
                            }`}></div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-white font-medium text-sm">{notification.title}</h4>
                                {!notification.read && (
                                  <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                                )}
                              </div>
                              <p className="text-text-secondary text-xs mt-1 line-clamp-2">
                                {notification.message}
                              </p>
                              <p className="text-text-muted text-xs mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-dark-border bg-dark-sidebar/50">
                    <button className="w-full text-center text-primary-500 hover:text-primary-400 text-sm font-medium transition-colors">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {wallet ? (
              <>
                <div className="px-4 py-2 bg-dark-hover rounded-lg text-sm font-mono text-text-primary border border-dark-border">
                  {wallet.slice(0, 6)}...{wallet.slice(-4)}
                </div>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 bg-danger rounded-lg text-white text-sm font-medium hover:bg-danger-light transition-all transform hover:scale-105 cursor-pointer"
                >
                  Disconnect
                </button>
              </>
            ) : (
              <button
                onClick={connectWallet}
                disabled={!isMetaMaskInstalled}
                className="btn-gradient px-4 py-2 rounded-lg text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Alerts */}
          {!isMetaMaskInstalled && (
            <div className="mb-6 bg-warning/10 border border-warning/20 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
              <span className="text-2xl">⚠️</span>
              <div className="flex-1">
                <h3 className="text-warning font-semibold mb-1">MetaMask Not Detected</h3>
                <p className="text-text-secondary text-sm mb-2">
                  Please install MetaMask extension to use this application.
                </p>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-400 text-sm font-medium"
                >
                  Download MetaMask →
                </a>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-danger/10 border border-danger/20 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
              <span className="text-2xl">❌</span>
              <div className="flex-1">
                <h3 className="text-danger font-semibold mb-1">Error</h3>
                <p className="text-text-secondary text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Content Based on Role */}
          {selectedRole === 'investor' && (
            <>
              {page === "portfolio" && <InvestorPortfolio wallet={wallet} />}
              {page === "investments" && <MyInvestments wallet={wallet} />}
              {page === "wallet" && <InvestorWallet wallet={wallet} />}
            </>
          )}

          {selectedRole === 'builder' && (
            <>
              {page === "dashboard" && (
                <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-12 flex flex-col items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                    <p className="text-text-secondary text-lg max-w-md mx-auto">
                      We're working on building amazing features for your builder dashboard. Stay tuned!
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {selectedRole === 'owner' && (
            <>
              {page === "listings" && <BuilderPropertyListings wallet={wallet} />}
              {page === "investors" && <BuilderInvestors />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;


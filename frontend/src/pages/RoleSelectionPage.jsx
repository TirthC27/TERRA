import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useRole } from '../context/RoleContext';
import { useEffect } from 'react';

const RoleSelectionPage = () => {
  const { wallet } = useWallet();
  const { selectRole, isRoleRegistered } = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet) {
      navigate('/login');
    }
  }, [wallet, navigate]);

  const roles = [
    {
      id: 'investor',
      name: 'Investor',
      description: 'Invest in projects and track your portfolio',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-700',
      registered: true // Always available, no registration needed
    },
    {
      id: 'owner',
      name: 'Owner',
      description: 'Manage platform settings and oversee operations',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-yellow-500 to-yellow-700',
      registered: isRoleRegistered('owner')
    },
    {
      id: 'builder',
      name: 'Builder',
      description: 'Manage your projects and build your profile',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-red-500 to-red-700',
      registered: isRoleRegistered('builder')
    }
  ];

  const handleRoleSelect = (roleId) => {
    // Find the role to check its registered status
    const role = roles.find(r => r.id === roleId);
    if (role && role.registered) {
      selectRole(roleId);
      navigate('/dashboard');
    }
  };

  const handleRegister = (roleId, e) => {
    e.stopPropagation();
    navigate(`/register/${roleId}`);
  };

  return (
    <div className="min-h-screen animated-gradient-bg flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          {/* Wallet Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="px-4 py-2 bg-dark-card/80 backdrop-blur-xl border border-dark-border rounded-lg text-sm font-mono text-text-primary">
              {wallet?.slice(0, 6)}...{wallet?.slice(-4)}
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">
            Choose what you want to access now:
          </h1>
          <p className="text-xl text-text-secondary">
            {roles.some(r => !r.registered) ? 'Register or select your role to continue' : 'Select your role to continue to the dashboard'}
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role, index) => (
            <div
              key={role.id}
              onClick={() => role.registered && handleRoleSelect(role.id)}
              className={`group bg-dark-card/50 backdrop-blur-xl border-2 rounded-2xl p-8 transition-all animate-slide-up relative ${
                role.registered
                  ? 'border-dark-border hover:border-primary-500 cursor-pointer transform hover:scale-105 hover:shadow-glow-lg'
                  : 'border-dark-border/30 opacity-75 cursor-not-allowed'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Disabled Overlay */}
              {!role.registered && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-danger/20 border border-danger/30 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-danger text-xs font-bold">Not Registered</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-24 h-24 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow transition-transform ${
                role.registered ? 'group-hover:scale-110' : 'opacity-50'
              }`}>
                {role.icon}
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold text-white text-center mb-3 transition-colors ${
                role.registered ? 'group-hover:text-primary-400' : ''
              }`}>
                {role.name}
              </h3>
              <p className="text-text-secondary text-center leading-relaxed mb-6">
                {role.description}
              </p>

              {/* Action Button */}
              {role.registered ? (
                <div className={`flex justify-center transition-opacity pointer-events-none ${role.id === 'investor' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className="px-4 py-2 bg-primary-500/20 rounded-lg flex items-center gap-2 text-primary-500 text-sm font-medium pointer-events-none">
                    <span>Select</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={(e) => handleRegister(role.id, e)}
                    className="px-6 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-white text-sm font-medium transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Register</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Profile Button */}
        <div className="flex justify-center animate-fade-in">
          <div className="bg-dark-card/30 backdrop-blur-sm border border-dark-border/50 rounded-xl px-6 py-4 flex items-center gap-3">
            <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-text-muted text-sm">
              You can switch roles anytime from the dashboard dropdown
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;


import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useRole } from '../context/RoleContext';
import { useEffect, useState } from 'react';

const RegisterInvestorPage = () => {
  const { wallet } = useWallet();
  const { isRoleRegistered, registerRole } = useRole();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!wallet) {
      navigate('/login');
    }
  }, [wallet, navigate]);

  // Redirect if already registered
  useEffect(() => {
    if (isRoleRegistered('investor')) {
      navigate('/select-role');
    }
  }, [isRoleRegistered, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate registration process
    setTimeout(() => {
      registerRole('investor');
      setLoading(false);
      // Navigate to role selection
      navigate('/select-role');
    }, 1500);
  };

  return (
    <div className="min-h-screen animated-gradient-bg py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/select-role')}
          className="mb-8 flex items-center gap-2 text-text-secondary hover:text-primary-500 transition-colors animate-fade-in"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Role Selection</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Investor Registration
          </h1>
          <p className="text-xl text-text-secondary">
            Register to start investing in projects
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-dark-card/50 backdrop-blur-xl border border-dark-border rounded-2xl p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Investment Experience</label>
              <select
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (Less than 1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3-5 years)</option>
                <option value="expert">Expert (5+ years)</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Investment Range</label>
              <select
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
              >
                <option value="">Select your typical investment range</option>
                <option value="1k-10k">$1,000 - $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                id="terms"
                className="mt-1 cursor-pointer"
              />
              <label htmlFor="terms" className="text-text-secondary text-sm">
                I agree to the Terms of Service and Privacy Policy. I understand that investments carry risk and I should only invest what I can afford to lose.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gradient px-6 py-4 rounded-xl text-white text-lg font-semibold shadow-glow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Registering...</span>
                </>
              ) : (
                <span>Complete Registration</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterInvestorPage;


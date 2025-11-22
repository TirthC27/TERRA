import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useRole } from '../context/RoleContext';
import { useEffect, useState } from 'react';

const RegisterOwnerPage = () => {
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
    if (isRoleRegistered('owner')) {
      navigate('/select-role');
    }
  }, [isRoleRegistered, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate registration process
    setTimeout(() => {
      registerRole('owner');
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
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Owner Registration Request
          </h1>
          <p className="text-xl text-text-secondary">
            Request platform ownership access
          </p>
        </div>

        {/* Warning Notice */}
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-6 mb-8 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-warning/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-warning font-semibold mb-2">Important Notice</h3>
              <p className="text-text-secondary text-sm">
                Owner role grants administrative access to the platform. Your request will be reviewed by existing platform administrators before approval.
              </p>
            </div>
          </div>
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
              <label className="block text-white font-medium mb-2">Official Email</label>
              <input
                type="email"
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Organization/Company</label>
              <input
                type="text"
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Your organization name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Role/Position</label>
              <input
                type="text"
                required
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="CEO, CTO, etc."
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Reason for Request</label>
              <textarea
                required
                rows="4"
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Please explain why you need owner access to the platform..."
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">LinkedIn Profile (Optional)</label>
              <input
                type="url"
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                id="terms"
                className="mt-1 cursor-pointer"
              />
              <label htmlFor="terms" className="text-text-secondary text-sm">
                I understand that this is a request for administrative access and requires approval. I agree to use the platform responsibly and in accordance with all policies.
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
                  <span>Submitting Request...</span>
                </>
              ) : (
                <span>Submit Request</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterOwnerPage;


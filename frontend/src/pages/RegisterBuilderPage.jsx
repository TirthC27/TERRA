import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useRole } from '../context/RoleContext';
import { useEffect } from 'react';
import BuilderRegister from '../components/builder/BuilderRegister';

const RegisterBuilderPage = () => {
  const { wallet } = useWallet();
  const { isRoleRegistered } = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet) {
      navigate('/login');
    }
  }, [wallet, navigate]);

  // Redirect if already registered
  useEffect(() => {
    if (isRoleRegistered('builder')) {
      navigate('/select-role');
    }
  }, [isRoleRegistered, navigate]);

  return (
    <div className="min-h-screen animated-gradient-bg py-12 px-6">
      <div className="max-w-5xl mx-auto">
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
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Builder Registration
          </h1>
          <p className="text-xl text-text-secondary">
            Complete the form below to register as a builder
          </p>
        </div>

        {/* Registration Form */}
        <div className="animate-slide-up">
          <BuilderRegister wallet={wallet} isRegistrationPage={true} />
        </div>
      </div>
    </div>
  );
};

export default RegisterBuilderPage;


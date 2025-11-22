import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useEffect } from 'react';

const LoginPage = () => {
  const { wallet, isMetaMaskInstalled, connectWallet, error } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (wallet) {
      navigate('/select-role');
    }
  }, [wallet, navigate]);

  return (
    <div className="min-h-screen animated-gradient-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Back to Home */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-text-secondary hover:text-primary-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>

        {/* Login Card */}
        <div className="bg-dark-card/80 backdrop-blur-xl border border-dark-border rounded-2xl p-8 shadow-dark-lg animate-scale-in">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Welcome to TERRA
          </h1>
          <p className="text-text-secondary text-center mb-8">
            Connect your wallet to access the platform
          </p>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-danger/10 border border-danger/20 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
              <span className="text-2xl">❌</span>
              <div className="flex-1">
                <h3 className="text-danger font-semibold mb-1">Error</h3>
                <p className="text-text-secondary text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* MetaMask Not Installed */}
          {!isMetaMaskInstalled ? (
            <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-warning font-semibold mb-2 text-lg">MetaMask Not Detected</h3>
              <p className="text-text-secondary text-sm mb-4">
                Please install MetaMask extension to use this application.
              </p>
              <a
                href="https://metamask.io/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-gradient px-6 py-3 rounded-xl text-white font-medium shadow-glow-sm cursor-pointer"
              >
                Download MetaMask →
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Connect Wallet Button */}
              <button
                onClick={connectWallet}
                className="w-full btn-gradient px-6 py-4 rounded-xl text-white text-lg font-semibold shadow-glow-sm cursor-pointer flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                <span className="text-2xl">🦊</span>
                <span>Connect Wallet</span>
              </button>

              {/* Info Section */}
              <div className="bg-dark-bg/50 rounded-xl p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Secure Connection</h4>
                    <p className="text-text-muted text-xs">Your wallet is secured by MetaMask</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Decentralized</h4>
                    <p className="text-text-muted text-xs">Built on Mantle Network</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Multiple Roles</h4>
                    <p className="text-text-muted text-xs">Access as Investor, Builder, or Owner</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-text-muted text-sm mt-6">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


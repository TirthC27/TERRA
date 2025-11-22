import { createContext, useContext, useState, useEffect } from 'react';

const WalletContext = createContext();

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(() => {
    // Initialize from localStorage
    return localStorage.getItem('walletAddress') || null;
  });
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if MetaMask is installed
    const checkMetaMask = () => {
      if (typeof window.ethereum !== 'undefined') {
        if (window.ethereum.providers) {
          const metamaskProvider = window.ethereum.providers.find(
            (provider) => provider.isMetaMask
          );
          if (metamaskProvider) {
            window.ethereum = metamaskProvider;
          }
        }
        setIsMetaMaskInstalled(true);
      }
    };
    
    checkMetaMask();
  }, []);

  // Check if wallet is still connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (!window.ethereum) return;

      try {
        let provider = window.ethereum;
        
        if (window.ethereum.providers) {
          const metamaskProvider = window.ethereum.providers.find(
            (p) => p.isMetaMask
          );
          if (metamaskProvider) {
            provider = metamaskProvider;
          }
        }

        const accounts = await provider.request({ method: 'eth_accounts' });
        
        if (accounts && accounts.length > 0) {
          const currentAccount = accounts[0];
          setWallet(currentAccount);
          localStorage.setItem('walletAddress', currentAccount);
        } else {
          // No accounts connected, clear stored wallet
          setWallet(null);
          localStorage.removeItem('walletAddress');
        }
      } catch (err) {
        console.error('Error checking wallet connection:', err);
      }
    };

    checkConnection();
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (!window.ethereum) return;

    let provider = window.ethereum;
    
    if (window.ethereum.providers) {
      const metamaskProvider = window.ethereum.providers.find(
        (p) => p.isMetaMask
      );
      if (metamaskProvider) {
        provider = metamaskProvider;
      }
    }

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        // User disconnected their wallet
        setWallet(null);
        localStorage.removeItem('walletAddress');
      } else {
        // User switched accounts
        setWallet(accounts[0]);
        localStorage.setItem('walletAddress', accounts[0]);
      }
    };

    const handleChainChanged = () => {
      // Reload the page when chain changes
      window.location.reload();
    };

    provider.on('accountsChanged', handleAccountsChanged);
    provider.on('chainChanged', handleChainChanged);

    return () => {
      provider.removeListener('accountsChanged', handleAccountsChanged);
      provider.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  const connectWallet = async () => {
    try {
      setError(null);
      
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install MetaMask extension from https://metamask.io");
        return false;
      }

      let provider = window.ethereum;
      
      if (window.ethereum.providers) {
        const metamaskProvider = window.ethereum.providers.find(
          (p) => p.isMetaMask
        );
        
        if (metamaskProvider) {
          provider = metamaskProvider;
        } else {
          alert("MetaMask not found. Please make sure MetaMask extension is installed and enabled.");
          return false;
        }
      }

      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length > 0) {
        const walletAddress = accounts[0];
        setWallet(walletAddress);
        localStorage.setItem('walletAddress', walletAddress);
        return true;
      } else {
        setError("No accounts found. Please unlock MetaMask and try again.");
        return false;
      }
    } catch (err) {
      console.error("Wallet connection error:", err);
      
      if (err.code === 4001) {
        setError("Connection rejected. Please approve the connection in MetaMask.");
      } else if (err.code === -32002) {
        setError("Connection request already pending. Please check MetaMask.");
      } else {
        setError(`Failed to connect wallet: ${err.message || "Unknown error"}`);
      }
      return false;
    }
  };

  const disconnectWallet = () => {
    setWallet(null);
    setError(null);
    localStorage.removeItem('walletAddress');
  };

  const value = {
    wallet,
    isMetaMaskInstalled,
    error,
    connectWallet,
    disconnectWallet,
    setError
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};


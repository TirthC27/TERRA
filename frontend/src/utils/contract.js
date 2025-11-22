import { ethers } from "ethers";
import abi from "../abi/BuilderRegistry.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || "0x9833a6ED541DD4B19E5E5F758fC764EEA6318112";

// Helper to get the correct Ethereum provider (handles multiple wallet providers)
function getEthereumProvider() {
  if (!window.ethereum) {
    throw new Error("MetaMask not detected");
  }
  
  // If multiple providers exist (e.g., MetaMask + Coinbase Wallet)
  if (window.ethereum.providers) {
    const metamaskProvider = window.ethereum.providers.find(
      (provider) => provider.isMetaMask
    );
    
    if (metamaskProvider) {
      return metamaskProvider;
    }
    
    throw new Error("MetaMask not found among installed wallet providers");
  }
  
  return window.ethereum;
}

export async function getContract(readOnly = false) {
  try {
    const ethereumProvider = getEthereumProvider();
    const provider = new ethers.BrowserProvider(ethereumProvider);
    
    if (readOnly) {
      return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
    } else {
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    }
  } catch (error) {
    console.error("Error initializing contract:", error);
    throw error;
  }
}

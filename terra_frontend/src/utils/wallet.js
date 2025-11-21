import { ethers } from "ethers";

export const getMantleBalance = async (address) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance); // convert from wei → MNT
};

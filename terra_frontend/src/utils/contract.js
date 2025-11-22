import { ethers } from "ethers";
import abi from "../abi/BuilderRegistry.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || "0x11A50F2f38252432adE0bb06877b70f8D297C046";

export async function getContract(readOnly = false) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  if (readOnly) {
    return new ethers.Contract(CONTRACT_ADDRESS, abi.abi, provider);
  } else {
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer);
  }
}

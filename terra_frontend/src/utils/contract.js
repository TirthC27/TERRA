import { ethers } from "ethers";
import abi from "../abi/BuilderRegistry.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || "0x9833a6ED541DD4B19E5E5F758fC764EEA6318112";

export async function getContract(readOnly = false) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  if (readOnly) {
    return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
  } else {
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  }
}

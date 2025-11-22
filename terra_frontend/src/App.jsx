import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { getContract } from "./utils/contract";
import { getMantleBalance } from "./utils/wallet";

function App() {
  const [wallet, setWallet] = useState(null);
  const [unlockTime, setUnlockTime] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask!");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWallet(accounts[0]);
  };

  const loadUnlockTime = async () => {
    try {
      const contract = await getContract();
      const time = await contract.unlockTime();
      setUnlockTime(Number(time));
    } catch (err) {
      console.error(err);
    }
  };

  const loadBalance = async () => {
    if (!wallet) return;
    const bal = await getMantleBalance(wallet);
    setBalance(bal);
  };

  useEffect(() => {
    if (wallet) {
      loadUnlockTime();
      loadBalance();
    }
  }, [wallet]);

  return (
    <>
      <h1>Mantle Wallet Dashboard</h1>

      <button onClick={connectWallet}>
        {wallet ? `Connected: ${wallet.slice(0, 6)}...` : "Connect Wallet"}
      </button>

      {wallet && (
        <>
          <div className="card">
            <h3>Wallet Balance</h3>
            <p>{balance ? `${balance} MNT (testnet)` : "Loading..."}</p>
          </div>

          <div className="card">
            <h3>Contract Unlock Time</h3>
            {unlockTime ? (
              <>
                <p>Timestamp: {unlockTime}</p>
                <p>Readable: {new Date(unlockTime * 1000).toLocaleString()}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;

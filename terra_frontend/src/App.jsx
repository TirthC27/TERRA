import { useState } from "react";
import "./App.css";

import BuilderRegister from "./components/builder/BuilderRegister";
import BuilderProfile from "./components/builder/BuilderProfile";

function App() {
  const [wallet, setWallet] = useState(null);
  const [page, setPage] = useState("register");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask!");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWallet(accounts[0]);
  };

  const disconnectWallet = () => {
    setWallet(null);
    setPage("register");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Terra Platform – Builder Panel</h1>

      <button onClick={wallet ? disconnectWallet : connectWallet}>
        {wallet ? `Disconnect: ${wallet.slice(0, 6)}...` : "Connect Wallet"}
      </button>

      {wallet && (
        <>
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setPage("register")}>Register Builder</button>
            <button onClick={() => setPage("profile")}>View Profile</button>
          </div>

          {page === "register" && <BuilderRegister />}
          {page === "profile" && <BuilderProfile address={wallet} />}
        </>
      )}
    </div>
  );
}

export default App;

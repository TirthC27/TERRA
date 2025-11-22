# TERRA – Full Stack dApp Setup Guide (For Frontend Developers)

Welcome to the **TERRA Project**!  
This guide explains how the **frontend developer** should set up, connect, and interact with the deployed smart contract.

---

# 🔥 Project Overview

This project consists of:

```
TERRA/
│
├── terra_backend/     → Hardhat (Solidity Smart Contracts)
└── terra_frontend/    → Vite + React Frontend
```

A smart contract (`Lock.sol`) is already deployed on **Mantle Sepolia Testnet**, and the frontend interacts with it using **ethers.js**.

---

# ✅ Frontend Developer Setup

## 1️⃣ Navigate to the Frontend Directory

```
cd terra_frontend
```

---

## 2️⃣ Install Dependencies

```
npm install
npm install ethers
```

---

## 3️⃣ Add Your Environment Variable

Create a `.env` file **in the root directory**:

```
VITE_CONTRACT_ADDRESS=<DEPLOYED_CONTRACT_ADDRESS>
```

⚠️ This contains ONLY the contract address — it is **safe** to commit.

---

## 4️⃣ Folder Structure to Follow

```
src/
│ App.jsx
│ main.jsx
│
├── utils/
│     contract.js   → creates & exports contract instance
│
└── abi/
      Lock.json     → ABI copied from backend
```

Make sure:
- `contract.js` is inside `src/utils`
- `Lock.json` is inside `src/abi`

---

# 📡 Connecting to the Smart Contract

Frontend uses **ethers.js** with Metamask to connect to the deployed contract.

### `src/utils/contract.js`:

```js
import { ethers } from "ethers";
import Lock from "../abi/Lock.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export const getContract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, Lock.abi, signer);
};
```

---

# 🧪 How to Fetch Unlock Time

In `App.jsx`:

```js
const contract = await getContract();
const time = await contract.unlockTime();
```

---

# 💰 How to Fetch Mantle Testnet Balance

Because Mantle uses **native MNT**, balance is fetched via:

```js
const provider = new ethers.BrowserProvider(window.ethereum);
const balance = await provider.getBalance(walletAddress);
```

---

# 🎯 Running the Frontend

```
npm run dev
```

Visit the local server shown in the terminal.

---

# 🔒 What Frontend Dev DOES NOT Need

❌ Backend `.env`  
❌ Hardhat setup  
❌ RPC URLs  
❌ Private keys  

These stay only with the blockchain dev.

---

# ✨ Summary

| Task | Done by |
|------|----------|
| Smart contract deploy | Backend/Blockchain dev |
| Provide ABI + contract address | Backend dev |
| Display unlock time | Frontend dev |
| Fetch wallet balance | Frontend dev |
| UI + wallet connect | Frontend dev |

---

# 📩 Need Help?

Ping the backend/contract developer if:
- You need new contract methods
- ABI changes
- Contract redeployment is required

Happy building! 🚀
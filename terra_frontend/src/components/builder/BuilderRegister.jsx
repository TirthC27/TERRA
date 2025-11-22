import { useState } from "react";
import { uploadFileToPinata, uploadJSONToPinata } from "../../utils/ipfs";
import { getContract } from "../../utils/contract";
import { ethers } from "ethers";

function BuilderRegister() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [logo, setLogo] = useState(null);

  async function handleRegister() {
    try {
      // 1️⃣ Provider + signer get
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const walletAddress = await signer.getAddress();

      // 2️⃣ Contract instance get
      const contract = await getContract();

      // 3️⃣ Upload logo
      let logoCID = "";
      if (logo) {
        logoCID = await uploadFileToPinata(logo);
        console.log("Uploaded logo CID:", logoCID);
      }

      // 4️⃣ Build profile JSON
      const profileJson = {
        schema: "builder_profile_v1",
        builderAddress: walletAddress,
        companyName,
        logoCID,
        contact: { email, phone },
        about,
        createdAt: new Date().toISOString(),
      };

      // 5️⃣ Upload JSON to IPFS
      const profileCID = await uploadJSONToPinata(profileJson);
      console.log("Uploaded profile CID:", profileCID);

      // 6️⃣ Send CID to blockchain
      const tx = await contract.registerBuilder(profileCID);
      await tx.wait();
      console.log("Stored on blockchain, TX hash:", tx.hash);

      alert("Builder registered successfully!");

    } catch (err) {
      console.error(err);
      alert("Registration failed: " + err.message);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Builder Registration</h2>

      <input placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} /><br /><br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} /><br /><br />
      <textarea placeholder="About" onChange={(e) => setAbout(e.target.value)} /><br /><br />

      <label>Logo:</label>
      <input type="file" onChange={(e) => setLogo(e.target.files[0])} /><br /><br />

      <button onClick={handleRegister}>Submit</button>
    </div>
  );
}

export default BuilderRegister;

import { useEffect, useState } from "react";
import { getContract } from "../../utils/contract";

function BuilderProfile({ address }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const contract = await getContract();

      console.log("Contract address:", contract.target); // Log contract address
      console.log("Wallet address:", await contract.runner.getAddress()); // Log wallet address
      console.log("Network:", await contract.runner.provider.getNetwork()); // Log network

      // 1️⃣ Fetch CID from blockchain
      const cid = await contract.getBuilderCID(address);

      console.log("CID FROM BLOCKCHAIN:", cid);

      if (!cid || cid.length < 10) {
        console.log("No valid CID found - Builder not registered");
        setProfile({ message: "No profile registered for this address." });
        return;
      }

      // 2️⃣ Fetch JSON from IPFS
      const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
      const res = await fetch(url);

      if (!res.ok) {
        console.error("IPFS Fetch Error:", res.status);
        return;
      }

      const json = await res.json();
      console.log("PROFILE JSON LOADED:", json);
      setProfile(json);

    } catch (err) {
      console.error("Error loading profile:", err);
    }
  }

  if (!profile) return <p>Loading profile...</p>;

  if (profile.message) return <p>{profile.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{profile.companyName}</h2>

      <img
        src={`https://gateway.pinata.cloud/ipfs/${profile.logoCID}`}
        width="150"
        alt="Builder Logo"
      />

      <p><b>Builder Address:</b> {profile.builderAddress}</p>
      <p><b>Email:</b> {profile.contact.email}</p>
      <p><b>Phone:</b> {profile.contact.phone}</p>
      <p><b>About:</b> {profile.about}</p>
    </div>
  );
}

export default BuilderProfile;

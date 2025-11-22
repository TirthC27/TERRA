export async function uploadFileToPinata(file) {
  const JWT = import.meta.env.VITE_PINATA_JWT;
  if (!JWT) throw new Error("Pinata JWT missing");

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: { Authorization: `Bearer ${JWT}` },
    body: formData,
  });

  if (!res.ok) throw new Error("Pinata file upload failed");

  const data = await res.json();
  return data.IpfsHash;
}

export async function uploadJSONToPinata(json) {
  const JWT = import.meta.env.VITE_PINATA_JWT;
  if (!JWT) throw new Error("Pinata JWT missing");

  const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
    body: JSON.stringify(json),
  });

  if (!res.ok) throw new Error("Pinata JSON upload failed");

  const data = await res.json();
  return data.IpfsHash;
}

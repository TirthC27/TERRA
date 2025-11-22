import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../../context/RoleContext";
import { uploadFileToPinata, uploadJSONToPinata } from "../../utils/ipfs";
import { getContract } from "../../utils/contract";

function BuilderRegister({ wallet, isRegistrationPage = false }) {
  const navigate = useNavigate();
  const { registerRole } = useRole();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setLogo(file);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  async function handleRegister(e) {
    e.preventDefault();
    
    if (!companyName || !email || !about) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      // 1️⃣ Contract instance get (includes provider + signer)
      setLoadingStep("Connecting to blockchain...");
      const contract = await getContract();
      const signer = contract.runner;
      const walletAddress = await signer.getAddress();

      // 2️⃣ Upload logo
      let logoCID = "";
      if (logo) {
        setLoadingStep("Uploading logo to IPFS...");
        logoCID = await uploadFileToPinata(logo);
        console.log("Uploaded logo CID:", logoCID);
      }

      // 3️⃣ Build profile JSON
      const profileJson = {
        schema: "builder_profile_v1",
        builderAddress: walletAddress,
        companyName,
        logoCID,
        contact: { email, phone },
        about,
        createdAt: new Date().toISOString(),
      };

      // 4️⃣ Upload JSON to IPFS
      setLoadingStep("Uploading profile data to IPFS...");
      const profileCID = await uploadJSONToPinata(profileJson);
      console.log("Uploaded profile CID:", profileCID);

      // 5️⃣ Send CID to blockchain
      setLoadingStep("Registering on blockchain...");
      const tx = await contract.registerBuilder(profileCID);
      
      setLoadingStep("Waiting for confirmation...");
      await tx.wait();
      console.log("Stored on blockchain, TX hash:", tx.hash);

      setSuccess(true);
      setLoading(false);

      // If this is the registration page, register the role and redirect
      if (isRegistrationPage) {
        registerRole('builder');
        setTimeout(() => {
          navigate('/select-role');
        }, 2000);
      } else {
        // Reset form for dashboard registration
        setTimeout(() => {
          setCompanyName("");
          setEmail("");
          setPhone("");
          setAbout("");
          setLogo(null);
          setSuccess(false);
        }, 3000);
      }

    } catch (err) {
      console.error(err);
      alert("Registration failed: " + err.message);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Register as a Builder</h2>
        <p className="text-text-secondary">Fill in your details to join the Terra Platform</p>
      </div>

      {success && (
        <div className="mb-6 bg-success/10 border border-success/20 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
          <span className="text-2xl">✅</span>
          <div>
            <h3 className="text-success font-semibold mb-1">Registration Successful!</h3>
            <p className="text-text-secondary text-sm">Your builder profile has been created on the blockchain</p>
          </div>
        </div>
      )}

      <form onSubmit={handleRegister} className="bg-dark-card rounded-2xl p-8 border border-dark-border">
        {/* Company Name */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Company Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* About */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-text-primary mb-2">
            About Your Company <span className="text-danger">*</span>
          </label>
          <textarea
            className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
            rows="5"
            placeholder="Tell us about your company, expertise, and experience..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
        </div>

        {/* Logo Upload */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Company Logo
          </label>
          <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-primary-500 ${
            logo ? 'border-success bg-success/5' : 'border-dark-border bg-dark-bg'
          }`}>
            <label htmlFor="logo-upload" className="cursor-pointer">
              <div className="text-5xl mb-3">{logo ? "✅" : "📤"}</div>
              <div className="text-text-primary font-semibold mb-1">
                {logo ? "Logo Selected" : "Upload Company Logo"}
              </div>
              <div className="text-sm text-text-muted">
                {logo ? logo.name : "Click to browse or drag and drop (Max 5MB)"}
              </div>
              <input
                id="logo-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
          {logo && (
            <div className="mt-4 bg-success/10 border border-success/20 rounded-lg p-3 flex items-center gap-3">
              <span className="text-2xl">🖼️</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-success">{logo.name}</div>
                <div className="text-xs text-text-muted">{formatFileSize(logo.size)}</div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end pt-6 border-t border-dark-border">
          <button
            type="button"
            onClick={() => {
              setCompanyName("");
              setEmail("");
              setPhone("");
              setAbout("");
              setLogo(null);
            }}
            className="px-6 py-2.5 bg-dark-hover hover:bg-dark-border text-text-primary rounded-lg font-medium transition-all cursor-pointer"
          >
            Reset Form
          </button>
          <button
            type="submit"
            disabled={loading}
            className="btn-gradient px-6 py-2.5 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 cursor-pointer"
          >
            {loading ? "Processing..." : "Register Builder"}
          </button>
        </div>
      </form>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-dark-card rounded-2xl p-8 max-w-md w-full mx-4 border border-dark-border shadow-dark-lg">
            <div className="w-16 h-16 border-4 border-dark-border border-t-primary-500 rounded-full animate-spin mx-auto mb-6"></div>
            <div className="text-xl font-bold text-white text-center mb-2">Processing Registration</div>
            <div className="text-sm text-text-secondary text-center">{loadingStep}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuilderRegister;

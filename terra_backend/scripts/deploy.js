const hre = require("hardhat");

async function main() {

  // unlockTime = current time + 60 seconds (1 minute)
  const unlockTime = Math.floor(Date.now() / 1000) + 60;

  const Lock = await hre.ethers.getContractFactory("Lock");

  // Contract requires the unlockTime argument + optional ETH value
  const lock = await Lock.deploy(unlockTime, {
    value: hre.ethers.parseEther("0.001") // optional, you can set to "0"
  });

  await lock.waitForDeployment();

  console.log("Contract deployed at:", await lock.getAddress());
  console.log("Unlock Time:", unlockTime);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

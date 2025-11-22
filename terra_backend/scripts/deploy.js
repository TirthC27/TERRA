const hre = require("hardhat");

async function main() {
  const BuilderRegistry = await hre.ethers.getContractFactory("BuilderRegistry");
  const builderRegistry = await BuilderRegistry.deploy();
  await builderRegistry.waitForDeployment();

  console.log("BuilderRegistry deployed at:", await builderRegistry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

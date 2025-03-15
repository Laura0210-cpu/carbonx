async function main() {
    const CarbonCredit = await ethers.getContractFactory("CarbonCredit");
    const contract = await CarbonCredit.deploy(1000000);
  
    // Wait for the deployment to be mined
    await contract.waitForDeployment();
  
    // In ethers v6, use `getAddress()` or `target` to get the contract address
    const contractAddress = await contract.getAddress();
    console.log("CarbonCredit deployed to:", contractAddress);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  
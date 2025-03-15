const { expect } = require("chai");

describe("CarbonCredit", function () {
  it("Should assign the initial supply to the deployer", async function () {
    const [owner] = await ethers.getSigners();
    const CarbonCredit = await ethers.getContractFactory("CarbonCredit");
    const contract = await CarbonCredit.deploy(1000000);
    // Wait for the deployment to be fully mined (ethers v6)
    await contract.waitForDeployment();

    const ownerBalance = await contract.balanceOf(owner.address);
    expect(ownerBalance).to.equal(1000000);
  });
});

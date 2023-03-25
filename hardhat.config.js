require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  solidity: "0.8.11",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/PFUKT-uKNGl1RuFtkqVmECrontQj0eBl",
    accounts: [`d0f63dc6b4ff2798e524c3a1b48088bcf3dee9dce6fbcadf9f48083e3e78964f`],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "6MKNRK1UKURCSIFSHYQFE9CJ7J315WMJDZ",
    },
  },
};
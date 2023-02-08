require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    buildbear: {
      url: "https://rpc.dev.buildbear.io/Solid_Wedge_Antilles_fdcf2516",
      accounts: ["5849c78835ad2825b86fd1537bfd6ff9414a40f45598760234e42e05eba1c654"],
      // url: "https://rpc.dev.buildbear.io/Naughty_Ratts_Tyerel_abcc8bba",
    },
  },
  etherscan: {
    apiKey: {
      buildbear: "test1",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 8350,
        urls: {
          apiURL:
            "https://rpc.dev.buildbear.io/verify/etherscan/Solid_Wedge_Antilles_fdcf2516",
          browserURL: "https://explorer.dev.buildbear.io/Solid_Wedge_Antilles_fdcf2516",
        },
      },
    ],
  },
};

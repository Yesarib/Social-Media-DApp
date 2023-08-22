require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.18',
    defaultNetwork: 'polygon',
    networks: {
      hardhat: {},
      mumbai: {
        url: 'https://rpc.ankr.com/polygon',
        accounts: [`0x7164a9fbb3f3fd71dc8cb41204494f0c6ef1c1c4761207ddd04b1d6092e32763`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
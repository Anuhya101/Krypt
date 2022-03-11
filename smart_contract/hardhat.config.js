
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/kCC-rs_5eoi1VwWzYERD3fGMcZK98FNC',
      accounts: ['eb57c66841cabe3f11278eac994e14074778522eb8b1cf4d3af53afa1d4c6dda']
      
    }
  }
}
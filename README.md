# omula

# deploy contract

- navigate to contracts folder
- install dependencies `npm install`
- run the hardhat node `npm run node`
- deploy contract to node `npm run deploy:localhost`
- copy address of deployed contract from deployment-info.json
- paste address in `client/constants/contracts/finance/index.ts` in the address variable
- copy the compiled .json artifact of the contract from
  `contracts/artifacts/contracts/FinancialPlatform.sol/FinancialPlatform.json`
  into `client/constants/contracts/finance/`

# login to wallet

- open browser
- install metamask
- connect to hardhat network - 127.0.0.1:7545
- add an account - the admin account - deployer from `deployment-info.json`

# run client

- navigate to client folder
- install dependencies `pnpm install`
- run client `pnpm run dev`

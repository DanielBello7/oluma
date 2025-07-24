/* eslint-disable prefer-const */
import { ethers } from 'ethers';
import FinancialPlatform from './FinancialPlatform.json';

export const get_contract = async (signer: ethers.JsonRpcSigner) => {
  let address = '0x1e275a41f6CE6caeBAD5478a0949e809F6001b22';
  let abi = FinancialPlatform.abi;
  return new ethers.Contract(address, abi, signer);
};

/* eslint-disable prefer-const */
import { ethers } from 'ethers';
import FinancialPlatform from './FinancialPlatform.json';

export const get_contract = async (signer: ethers.JsonRpcSigner) => {
  let address = '0xBBAa8e11bA6625923E341ecC965f3430bbfFb915';
  let abi = FinancialPlatform.abi;
  return new ethers.Contract(address, abi, signer);
};

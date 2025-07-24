/* eslint-disable prefer-const */
import { ethers } from 'ethers';

export const initByEthers = async () => {
  if (window.ethereum) {
    await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    let provider = new ethers.BrowserProvider(window.ethereum);
    let accounts = await provider.send('eth_requestAccounts', []);
    let signer = await provider.getSigner();
    return {
      provider,
      signer,
      account: accounts[0],
    };
  } else {
    throw new Error(
      'Non-Ethereum Browser Detected!!!. You should try using MetaMask',
    );
  }
};

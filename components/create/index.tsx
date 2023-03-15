import ethers from 'ethers'
import QuantumHub from './abis'

async function CreateRaffle() {
    
const FairContract = '0xa1eB5e2893442B0Eeb115eE0B31470790EE9D1a7'
const ethereum = (window as any).ethereum;
const accounts = await ethereum.request({ method: "eth_requestAccounts", })
const provider = new ethers.providers.Web3Provider(ethereum);
const walletAddress = accounts[0]; 
const signer = provider.getSigner(walletAddress);
const RaffleContract = new ethers.Contract(FairContract, QuantumHub, signer)

 return (
    
 )
}
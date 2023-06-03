import axios from "axios";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useState } from "react";
import { Raffle } from "../abis/raffle";

function useSmartContract() {
  const vaultFactory = "0xE37F25b41D33AF5A6844aE910C2390d6954f9a61";
  const vaultRouter = "0x04B3ceE98aa97284322CB8591eD3aC33c7a35414";
  const [screen, setScreen] = useState(false);
  const [canyed, setCanyed] = useState(false);
  // const [copied, setCopied] = React.useState(false);
  const [output, setOutput] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [winners, setWinners] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [nftContract, setnftContract] = useState(""); // 0x38abA480f2bA7A17bC01EE5E1AD64fCedd93EfE7
  const [id, setId] = useState(""); // 29
  const [hub, setHub] = useState(""); // 0xca11f9ff5fc64de0445b0a64a27f94cc91f6b9d5

  async function create() {
    try {
      const ProxyContract = "0x21f754BEEB1c5d1c9470E8E5a33D8E2526462799";
      const ethereum = (window as any).ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const walletAddress = accounts[0];
      const signer = provider.getSigner(walletAddress);
      const FairProxy = new ethers.Contract(ProxyContract, Proxy, signer);
      const createRaffle = await FairProxy.createRaffle(
        start,
        end,
        winners,
        price,
        {
          hash: "0xf7baab1baf661869e72d3f70214e394102486912b6ed3872d9bb9d7e36e286c3",
          hash_function: 18,
          size: 32,
        }
      );
      await createRaffle.wait();
      const receipt = await provider.getTransactionReceipt(createRaffle.hash);
      if (receipt.status == 1) {
        const bucle = setInterval(async () => {
          await axios
            .post<CreateData>(
              `https://api-goerli-optimism.etherscan.io/api?module=account&action=txlistinternal&txhash=${createRaffle.hash}&apikey=GBCBJB46CJB6NMCGMR3X5KENZR3P84RUZH`
            )
            .then((getContract) => {
              if (getContract.data.status == 1) {
                setHub(getContract.data.result[0].contractAddress);
                setCanyed(true);
                setScreen(true);
                clearInterval(bucle);
              }
              return getContract;
            });
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function open() {
    const router = useRouter();
    try {
      const ethereum = (window as any).ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const walletAddress = accounts[0];
      const signer = provider.getSigner(walletAddress);
      const ERC721 = new ethers.Contract(nftContract, ERC721ABI, signer);
      const raffle = new ethers.Contract(hub, Raffle, signer);
      const approve = await ERC721.approve(hub, id);
      const approving = await approve.wait();
      if (approving.status == 1) {
        const opener = await raffle.open([nftContract], [id]);
        const opening = await opener.wait();
        if (opening.status == 1) {
          const raffleId = await raffle.raffleId();
          router.push(`/raffle?id=${raffleId}`);
        }
      }
    } catch (err) {
      console.error(err);
    }
 
   return {create,open}
}
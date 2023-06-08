import axios from "axios";
import { ethers } from "ethers";
import { ERC721ABI } from "../abis/nft";
import { Proxy } from "../abis/proxy";
import { Raffle } from "../abis/raffle";
import { Queries, CreateData, RaffleProps } from "../types";

export default function useSmartContract() {
  // 0x38abA480f2bA7A17bC01EE5E1AD64fCedd93EfE7
  // 29
  // 0xca11f9ff5fc64de0445b0a64a27f94cc91f6b9d5
  const ProxyContract = "0x21f754BEEB1c5d1c9470E8E5a33D8E2526462799";
  async function create(
    start: string,
    end: string,
    winners: string,
    price: string
  ): Promise<Queries> {
    try {
      const ethereum = (window as any).ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
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
                clearInterval(bucle);
                return {
                  status: 400,
                  data: getContract.data.result[0].contractAddress,
                };
              }
            });
        }, 3000);
      }
      return { status: 400, data: "Something went wrong" };
    } catch (err: any) {
      console.error(err);
      return { status: 500, data: err };
    }
  }

  async function open(
    nftContract: string,
    hub: string,
    id: string
  ): Promise<Queries> {
    try {
      const ethereum = (window as any).ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const ERC721 = new ethers.Contract(nftContract, ERC721ABI, signer);
      const raffle = new ethers.Contract(hub, Raffle, signer);
      const approve = await ERC721.approve(hub, id);
      const approving = await approve.wait();
      if (approving.status == 1) {
        const opener = await raffle.open([nftContract], [id]);
        const opening = await opener.wait();
        if (opening.status == 1) {
          const raffleId = await raffle.raffleId();
          return { status: 200, data: raffleId };
        }
      }
      return { status: 400, data: "Something went wrong" };
    } catch (err: any) {
      console.error(err);
      return { status: 500, data: err };
    }
  }

  async function findByHub(hub: any): Promise<RaffleProps> {
    try {
      const ethereum = (window as any).ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const FairProxy = new ethers.Contract(hub, Proxy, signer);
      const raffleId = await FairProxy.raffleId();
      const creatorAddress = await FairProxy.creatorAddress();
      const startTime = await FairProxy.startTime();
      const endTime = await FairProxy.endTime();
      const status = await FairProxy.status();
      return {
        id: raffleId,
        address: hub,
        owner: creatorAddress,
        startTime: startTime,
        endTime: endTime,
        status: status,
      };
    } catch (err: any) {
      throw Error(err);
    }
  }

  return { create, open, findByHub };
}

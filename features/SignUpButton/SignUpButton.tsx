"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BarLoader } from "react-spinners";
import { Button } from "@/components/Button/Button";

const BSC_CHAIN_ID = "0x38"; 
const BSC_PARAMS = {
  chainId: BSC_CHAIN_ID,
  chainName: "Binance Smart Chain Mainnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: ["https://bsc-dataseed.binance.org/"],
  blockExplorerUrls: ["https://bscscan.com/"],
};

export const SignUpButton = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  const switchToBSC = async () => {
    try {
      // Try to switch to BSC network
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: BSC_CHAIN_ID }],
      });
      return true;
    } catch (switchError: any) {
     
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [BSC_PARAMS],
          });
          return true;
        } catch (addError) {
          console.error("Error adding BSC network", addError);
          return false;
        }
      } else {
        console.error("Error switching to BSC network", switchError);
        return false;
      }
    }
  };

  const handleConnect = async () => {
    setConnecting(true);

    try {
      if (!window.ethereum) {
        alert("MetaMask not detected. Please install it.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();

      if (network.chainId !== 56) {
        const switched = await switchToBSC();
        if (!switched) {
          alert("Failed to switch to BSC network. Please try manually.");
          return;
        }
      }

      await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
    } catch (error) {
      console.error("Error connecting", error);
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setAccount(null);
  };

  if (account) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-black text-md cursor-pointer border rounded-full px-6 py-2 hover:text-white hover:bg-primary h-[44px]">
              {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{account}</p>
            <Button onClick={handleDisconnect} type="button">
              Disconnect
            </Button>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else if (connecting) {
    return (
      <Button disabled className="py-5">
        <BarLoader color="#fff" />
      </Button>
    );
  } else {
    return <Button onClick={handleConnect}>Connect MetaMask</Button>;
  }
};
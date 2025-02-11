import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePublicClient } from "wagmi";
import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { TOKEN_ABI } from "~~/generated/abis/token.abi";
import contracts from "~~/generated/deployedContracts";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const publicClient = usePublicClient();
  const [tokenAddress, setTokenAddress] = useState("");
  const [identityAddress, setIdentityAddress] = useState("");
  const [vaultAddress, setVaultAddress] = useState("");
  async function handleLoadToken() {
    if (tokenAddress !== "") {
      const mc = await publicClient.readContract({
        abi: TOKEN_ABI,
        address: tokenAddress,
        functionName: "compliance",
      });
      contracts[11155111][0].contracts.Token.address = tokenAddress;
      contracts[11155111][0].contracts.ModularCompliance.address = mc;
    }
  }
  async function handleLoadIdentity() {
    if (identityAddress !== "") {
      contracts[11155111][0].contracts.Identity.address = identityAddress;
    }
  }
  async function handleLoadVault() {
    if (vaultAddress !== "") {
      contracts[11155111][0].contracts.Vault.address = vaultAddress;
    }
  }

  const navLinks = (
    <>
      <li>
        <NavLink href="/debug">
          <MagnifyingGlassIcon className="h-4 w-4" />
          TREX Explorer
        </NavLink>
      </li>
      <li>
        <NavLink href="/example-ui">
          <SparklesIcon className="h-4 w-4" />
          Tuple Builder
        </NavLink>
      </li>
      <li>
        <NavLink href="/vault-tuple">
          <SparklesIcon className="h-4 w-4" />
          Vault Tuple
        </NavLink>
      </li>
      <li>
        <NavLink href="/claim-data">
          <SparklesIcon className="h-4 w-4" />
          Sign
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Dapp</span>
            <span className="text-xs">ERC-3643</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4 w-9/12">
        <div className="flex items-center gap-2 mr-4">
          <input
            type="text"
            placeholder="Id Addr"
            value={identityAddress}
            onChange={e => setIdentityAddress(e.target.value)}
            className="input input-bordered w-28"
          />
          <button onClick={handleLoadIdentity} className="btn btn-warning btn-sm">
            Load Id
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Token Addr"
            value={tokenAddress}
            onChange={e => setTokenAddress(e.target.value)}
            className="input input-bordered w-28"
          />
          <button onClick={handleLoadToken} className="btn btn-warning btn-sm">
            Token
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Vault Addr"
            value={vaultAddress}
            onChange={e => setVaultAddress(e.target.value)}
            className="input input-bordered w-28"
          />
          <button onClick={handleLoadVault} className="btn btn-warning btn-sm">
            Vault
          </button>
        </div>
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};

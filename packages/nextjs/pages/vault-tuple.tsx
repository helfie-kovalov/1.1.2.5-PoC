import React, { ChangeEvent, useState } from "react";
import { parseEther, zeroAddress } from "viem";

enum VaultType {
  STABLE,
  RWA,
  BOTH,
}

interface VaultDetails {
  name: string;
  symbol: string;
  maxStableCapacity: number;
  maxAssetsCapacity: number;
  vaultType: VaultType;
  ONCHAINID: string;
}

interface Errors {
  [key: string]: string;
}

const VaultDetailsInput = () => {
  const [vaultDetails, setVaultDetails] = useState<VaultDetails>({
    name: "Vault_test",
    symbol: "VT",
    maxStableCapacity: 10000000,
    maxAssetsCapacity: 10000000,
    vaultType: VaultType.BOTH,
    ONCHAINID: zeroAddress,
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVaultDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required.";
      } else if (value.length > 100) {
        // Assuming a max length of 100 for vault name
        error = "Name is too long.";
      } else if (!/^[a-zA-Z0-9\s\-_]+$/.test(value)) {
        error =
          "Name contains invalid characters. Only alphanumeric characters, spaces, hyphens, and underscores are allowed.";
      }
    } else if (name === "decimals") {
      if (Number(value) < 1 || Number(value) > 18) {
        error = "Decimals should be >= 1 && <= 18.";
      }
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleCopy = () => {
    if (Object.values(errors).some(error => error)) {
      alert("Please fix the errors before copying the tuple.");
      return;
    }

    const tupleString =
      `["${vaultDetails.name}", "${vaultDetails.symbol}", ${parseEther(
        vaultDetails.maxStableCapacity.toString(),
      ).toString()}, ` +
      `${parseEther(vaultDetails.maxAssetsCapacity.toString()).toString()}, ${vaultDetails.vaultType}, "${
        vaultDetails.ONCHAINID
      }"]`;
    navigator.clipboard
      .writeText(tupleString)
      .then(() => {
        setTimeout(() => {
          alert("Tuple copied to clipboard!");
        }, 100);
      })
      .catch(err => {
        alert("Failed to copy tuple: " + err);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Vault Details Input</h2>
      <form className="space-y-4">
        <div title="Name of the vault">
          <label className="block text-sm font-medium">Name (String):</label>
          <input
            type="text"
            name="name"
            value={vaultDetails.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="VaultName"
            maxLength={100} // Assuming a max length of 100 for vault name
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div title="Symbol / ticker of the vault">
          <label className="block text-sm font-medium">Symbol (String):</label>
          <input
            type="text"
            name="symbol"
            value={vaultDetails.symbol}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="TKN"
          />
          {errors.symbol && <p className="text-red-500 text-xs">{errors.symbol}</p>}
        </div>
        <div title="Max stable capacity">
          <label className="block text-sm font-medium">Max stable capacity:</label>
          <input
            type="number"
            name="maxStableCapacity"
            value={vaultDetails.maxStableCapacity}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="1000000"
          />
          {errors.symbol && <p className="text-red-500 text-xs">{errors.maxStableCapacity}</p>}
        </div>
        <div title="Max assets capacity">
          <label className="block text-sm font-medium">Max assets capacity:</label>
          <input
            type="number"
            name="maxAssetsCapacity"
            value={vaultDetails.maxAssetsCapacity}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="1000000"
          />
          {errors.symbol && <p className="text-red-500 text-xs">{errors.maxAssetsCapacity}</p>}
        </div>
        <div title="Vault Type">
          <select
            name="vaultType"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={e => {
              let value = VaultType.BOTH;
              if (e.target.value === "0") {
                value = VaultType.STABLE;
              } else if (e.target.value === "1") {
                value = VaultType.RWA;
              } else if (e.target.value === "2") {
                value = VaultType.BOTH;
              }
              vaultDetails.vaultType = value;
            }}
          >
            <option value="">Vault Type</option>
            <option value="0">Stable</option>
            <option value="1">RWA</option>
            <option value="2">Both</option>
          </select>
          {errors.symbol && <p className="text-red-500 text-xs">{errors.vaultType}</p>}
        </div>
        <div title="ONCHAINID of the vault">
          <label className="block text-sm font-medium">ONCHAINID (Address):</label>
          <input
            type="text"
            name="ONCHAINID"
            value={vaultDetails.ONCHAINID}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="0x1234...5678"
          />
          {errors.ONCHAINID && <p className="text-red-500 text-xs">{errors.ONCHAINID}</p>}
        </div>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleCopy}
            className={`bg-blue-500 text-white p-2 rounded-md ${
              Object.values(errors).some(error => error) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={Object.values(errors).some(error => error)}
          >
            Copy Generated Tuple
          </button>
        </div>
      </form>
    </div>
  );
};

export default VaultDetailsInput;

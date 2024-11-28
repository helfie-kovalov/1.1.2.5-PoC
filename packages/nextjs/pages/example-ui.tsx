import React, { ChangeEvent, useState } from "react";
import { Hex, encodeFunctionData, parseUnits, zeroAddress } from "viem";
import { useAccount, usePublicClient } from "wagmi";
import { IR_ABI } from "~~/generated/abis/ir.abi";
import { COUNTRY_ALLOW_ABI } from "~~/generated/abis/modules/country-allow.abi";
import { TIME_TRANSFER_LIMIT_ABI } from "~~/generated/abis/modules/transfer-limit.abi";
import contracts from "~~/generated/deployedContracts";

interface TokenDetails {
  name: string;
  symbol: string;
  decimals: string;
  ONCHAINID: string;
  complianceModules: string;
  complianceSettings: string;
}

interface Errors {
  [key: string]: string;
}

const TokenDetailsInput = () => {
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const [tokenDetails, setTokenDetails] = useState<TokenDetails>({
    name: "Gold_test",
    symbol: "GT",
    decimals: "18",
    ONCHAINID: zeroAddress,
    complianceModules: `${contracts[11155111][0].contracts.CountryAllowModule.address},${contracts[11155111][0].contracts.TimeTransferModule.address}`,
    complianceSettings: ``,
  });
  const [country, setCountry] = useState("267");
  const [time, setTime] = useState("86400");
  const [amount, setAmount] = useState("1000");
  const [errors, setErrors] = useState<Errors>({});

  const getSenderCountry = async () => {
    const country = await publicClient.readContract({
      abi: IR_ABI,
      address: contracts[11155111][0].contracts.IdentityRegistry.address,
      functionName: "investorCountry",
      args: [address as Hex],
    });
    console.warn(country);
    return country;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTokenDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
    validateField(name, value);
  };

  const createModuleForCountry = (value: number) => {
    const resEncoded = encodeFunctionData({
      abi: COUNTRY_ALLOW_ABI,
      functionName: "batchAllowCountries",
      args: [[Number(country), value]],
    });
    return resEncoded;
  };

  const createModuleForTime = () => {
    const resEncoded = encodeFunctionData({
      abi: TIME_TRANSFER_LIMIT_ABI,
      functionName: "setTimeTransferLimit",
      args: [{ limitTime: Number(time), limitValue: parseUnits(amount, Number(tokenDetails.decimals)) }],
    });
    return resEncoded;
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required.";
      } else if (value.length > 100) {
        // Assuming a max length of 100 for token name
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
    if (tokenDetails.complianceModules.split(",").length !== tokenDetails.complianceSettings.split(",").length) {
      alert("complianceModules lenght must be equal to complianceSettings length");
      return;
    }

    if (Object.values(errors).some(error => error)) {
      alert("Please fix the errors before copying the tuple.");
      return;
    }
    const complianceModulesArray = tokenDetails.complianceModules.split(",").filter(Boolean);
    const complianceSettingsArray = tokenDetails.complianceSettings.split(",").filter(Boolean);

    const complianceModulesString =
      complianceModulesArray.length > 0 ? `["${complianceModulesArray.join('","')}"]` : "[]";
    const complianceSettingsString =
      complianceSettingsArray.length > 0 ? `["${complianceSettingsArray.join('","')}"]` : "[]";

    const tupleString = `["${tokenDetails.name}", "${tokenDetails.symbol}", ${tokenDetails.decimals}, "${tokenDetails.ONCHAINID}", ${complianceModulesString}, ${complianceSettingsString}]`;

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
      <h2 className="text-2xl mb-4">Token Details Input</h2>
      <form className="space-y-4">
        <div title="Name of the token">
          <label className="block text-sm font-medium">Name (String):</label>
          <input
            type="text"
            name="name"
            value={tokenDetails.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="TokenName"
            maxLength={100} // Assuming a max length of 100 for token name
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div title="Symbol / ticker of the token">
          <label className="block text-sm font-medium">Symbol (String):</label>
          <input
            type="text"
            name="symbol"
            value={tokenDetails.symbol}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="TKN"
          />
          {errors.symbol && <p className="text-red-500 text-xs">{errors.symbol}</p>}
        </div>
        <div title="Decimals of the token (can be between 0 and 18)">
          <label className="block text-sm font-medium">Decimals (Uint8):</label>
          <input
            type="number"
            name="decimals"
            max={"18"}
            min={"1"}
            value={tokenDetails.decimals}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="18"
          />
          {errors.decimals && <p className="text-red-500 text-xs">{errors.decimals}</p>}
        </div>
        <div title="ONCHAINID of the token">
          <label className="block text-sm font-medium">ONCHAINID (Address):</label>
          <input
            type="text"
            name="ONCHAINID"
            value={tokenDetails.ONCHAINID}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="0x1234...5678"
          />
          {errors.ONCHAINID && <p className="text-red-500 text-xs">{errors.ONCHAINID}</p>}
        </div>
        <div title="Modules to bind to the compliance">
          <label className="block text-sm font-medium">Compliance Modules (Address[] - comma separated):</label>
          <textarea
            name="complianceModules"
            value={tokenDetails.complianceModules}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="0x1234...5678,0x1234...5678"
          ></textarea>
          {errors.complianceModules && <p className="text-red-500 text-xs">{errors.complianceModules}</p>}
        </div>
        <div title="Settings calls for compliance modules">
          <div className="flex row items-center">
            <div className="flex row items-center p-2 w-full">
              <label className="block text-sm font-medium m-1 p-2">Country:</label>
              <input
                type="text"
                name="Country"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="267"
              />
            </div>
            <button
              type="button"
              onClick={async () => {
                const app = await getSenderCountry();
                navigator.clipboard
                  .writeText(createModuleForCountry(app))
                  .then(() => {
                    setTimeout(() => {
                      alert("Country copied to clipboard!");
                    }, 100);
                  })
                  .catch(err => {
                    alert("Failed to copy Country: " + err);
                  });
              }}
              className={`bg-blue-500 text-white p-2 rounded-md ${
                Object.values(errors).some(error => error) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Copy
            </button>
          </div>
          <div className="flex column items-center">
            <div className="flex row items-center w-2/4 p-2">
              <label className="block text-sm font-medium m-1 p-1">Time:</label>
              <input
                type="text"
                name="Time is secs"
                value={time}
                onChange={e => setTime(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="0x1234...5678"
              />
            </div>
            <div className="flex row items-center w-2/4 p-2">
              <label className="block text-sm font-medium m-1">Limit Amount:</label>
              <input
                type="text"
                name="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="0x1234...5678"
              />
            </div>
            <button
              type="button"
              onClick={() =>
                navigator.clipboard
                  .writeText(createModuleForTime())
                  .then(() => {
                    setTimeout(() => {
                      alert("Time limit copied to clipboard!");
                    }, 100);
                  })
                  .catch(err => {
                    alert("Failed to copy Time limit: " + err);
                  })
              }
              className={`bg-blue-500 text-white p-2 rounded-md ${
                Object.values(errors).some(error => error) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Copy
            </button>
          </div>
          <label className="block text-sm font-medium">Compliance Settings (Bytes[] - comma separated):</label>
          <textarea
            name="complianceSettings"
            value={tokenDetails.complianceSettings}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="0x1234...5678,0x1234...5678"
          ></textarea>
          {errors.complianceSettings && <p className="text-red-500 text-xs">{errors.complianceSettings}</p>}
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

export default TokenDetailsInput;

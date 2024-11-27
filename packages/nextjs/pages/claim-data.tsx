import React, { ChangeEvent, useState } from "react";
import { Hex } from "viem";
import { Address, useSignMessage } from "wagmi";
import { claimSignature } from "~~/services/functions";

interface SignatureData {
  identityAddress: string;
  claimTopic: string;
  data: string;
}

interface Errors {
  [key: string]: string;
}

const SignatureInput = () => {
  const { signMessageAsync } = useSignMessage();
  const [sigData, setSigData] = useState<SignatureData>({
    identityAddress: "",
    claimTopic: "1",
    data: "0xcc9c9d3152dfde3a20d686133ac95c58bdd254b7c4df8763800abe6ab669e19c",
  });
  const [sign, setSign] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSigData(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
    validateField(name, value);
  };

  const createSig = async () => {
    const mess = claimSignature(sigData.identityAddress as Address, BigInt(sigData.claimTopic), sigData.data as Hex);
    const signature = await signMessageAsync({ message: { raw: mess } as any });
    setSign(signature);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "identityAddress") {
      if (!value.trim()) {
        error = "Identity is required.";
      }
    } else if (name === "claimTopic") {
      if (Number(value) < 1 || Number(value) > 7) {
        error = "Claim topic  should be >= 1 && <= 7.";
      }
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Signature Input</h2>
      <form className="space-y-4">
        <div title="Identity Address">
          <label className="block text-sm font-medium">Identity Address (String):</label>
          <input
            type="text"
            name="identityAddress"
            value={sigData.identityAddress}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Identity Address"
            maxLength={43} // Assuming a max length of 100 for token name
            required
          />
          {errors.identityAddress && <p className="text-red-500 text-xs">{errors.identityAddress}</p>}
        </div>
        <div title="Claim topic">
          <label className="block text-sm font-medium">Claim topic (Uint8):</label>
          <input
            type="number"
            name="claimTopic"
            max={"7"}
            min={"1"}
            value={sigData.claimTopic}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.claimTopic && <p className="text-red-500 text-xs">{errors.claimTopic}</p>}
        </div>
        <div title="Claim data(hashed via keccak256)">
          <label className="block text-sm font-medium">Data (Bytes32):</label>
          <input
            type="text"
            name="Data"
            value={sigData.data}
            onChange={handleChange}
            maxLength={66}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.data && <p className="text-red-500 text-xs">{errors.data}</p>}
        </div>
        {sign !== "" && (
          <div title="Signature">
            <label className="block text-sm font-medium">Signature: {sign}</label>
          </div>
        )}
        <div className="mt-4">
          <button
            type="button"
            onClick={async () => {
              if (sigData.identityAddress !== "") {
                await createSig();
              }
            }}
            className={`bg-blue-500 text-white p-2 rounded-md ${
              Object.values(errors).some(error => error) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={Object.values(errors).some(error => error)}
          >
            Sign
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignatureInput;

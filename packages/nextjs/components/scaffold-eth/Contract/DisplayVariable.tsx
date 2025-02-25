import { useEffect } from "react";
import { Abi, AbiFunction } from "abitype";
import { Address } from "viem";
import { useContractRead } from "wagmi";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { displayTxResult } from "~~/components/scaffold-eth";
import { useAnimationConfig } from "~~/hooks/scaffold-eth";
import { getClaimTopicName, getTokenClaimTopicName } from "~~/services/functions";
import { notification } from "~~/utils/scaffold-eth";

type DisplayVariableProps = {
  contractAddress: Address;
  abiFunction: AbiFunction;
  refreshDisplayVariables: boolean;
};

export const DisplayVariable = ({ contractAddress, abiFunction, refreshDisplayVariables }: DisplayVariableProps) => {
  const {
    data: result,
    isFetching,
    refetch,
  } = useContractRead({
    address: contractAddress,
    functionName: abiFunction.name,
    abi: [abiFunction] as Abi,
    onError: error => {
      notification.error(error.message);
    },
  });
  console.log(result);

  const { showAnimation } = useAnimationConfig(result);

  useEffect(() => {
    refetch();
  }, [refetch, refreshDisplayVariables]);

  return (
    <div className="space-y-1 pb-2">
      <div className="flex items-center gap-2">
        <h3 className="font-medium text-lg mb-0 break-all">{abiFunction.name}</h3>
        <button className="btn btn-ghost btn-xs" onClick={async () => await refetch()}>
          {isFetching ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <ArrowPathIcon className="h-3 w-3 cursor-pointer" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="text-gray-500 font-medium flex flex-col items-start">
        <div>
          <div
            className={`break-all block transition bg-transparent ${
              showAnimation ? "bg-warning rounded-sm animate-pulse-fast" : ""
            }`}
          >
            {abiFunction.name === "getClaimTopics" && Array.isArray(result)
              ? (result as Array<bigint>)?.map(el => `${el} = ${getClaimTopicName(el)}`).toString()
              : abiFunction.name === "getGeneralTokenClaimTopics"
              ? (result as Array<bigint>)?.map(el => `${el} = ${getTokenClaimTopicName(el)}`).toString()
              : abiFunction.name === "totalSupply"
              ? result?.toString()
              : displayTxResult(result)}
          </div>
        </div>
      </div>
    </div>
  );
};

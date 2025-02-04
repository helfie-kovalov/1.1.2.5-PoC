export const VAULT_FACTORY_ABI = [
  {
    inputs: [],
    name: "IsNotFalse",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ModuleAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotTrustedIssuer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_idFactory",
        type: "address",
      },
    ],
    name: "IdFactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "diamond",
        type: "address",
      },
    ],
    name: "SetDiamond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum IVaultStorage.VaultType",
        name: "vaultType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "VaultDeployed",
    type: "event",
  },
  {
    inputs: [],
    name: "VAULT_FACTORY_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maxStableCapacity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAssetsCapacity",
            type: "uint256",
          },
          {
            internalType: "enum IVaultStorage.VaultType",
            name: "vaultType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "ONCHAINID",
            type: "address",
          },
        ],
        internalType: "struct IVaultFactoryFacet.VaultDetails",
        name: "_vaultDetails",
        type: "tuple",
      },
    ],
    name: "deployVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "getVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "enum IVaultStorage.VaultType",
        name: "vaultType",
        type: "uint8",
      },
    ],
    name: "getVaultSalt",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementationAuthorityVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vffDiamond",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "diamond",
        type: "address",
      },
      {
        internalType: "address",
        name: "iaVault",
        type: "address",
      },
    ],
    name: "vffInitialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "vffSetDiamond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

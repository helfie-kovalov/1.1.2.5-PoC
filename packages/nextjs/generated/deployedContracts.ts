const contracts = {
    11155111: [
        {
            chainId: "11155111",
            name: "sepolia",
            contracts: {
                Admin: {
                    address: "0x83191eC8a93fF13BaB94a83a2C85334414a37207",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "management",
                                    "type": "address"
                                }
                            ],
                            "name": "SetBalanceManagement",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "feeReceiver",
                                    "type": "address"
                                }
                            ],
                            "name": "SetFeeReceiver",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "registry",
                                    "type": "address"
                                }
                            ],
                            "name": "SetIdentityRegistry",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "management",
                                    "type": "address"
                                }
                            ],
                            "name": "SetOperatorManagement",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "registry",
                                    "type": "address"
                                }
                            ],
                            "name": "SetTrustedIssuerRegistry",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "ADMIN_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_claimTopics",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "addTrustedIssuer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getBalanceManagement",
                            "outputs": [
                                {
                                    "internalType": "contract IBalanceManagement",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getFeeReceiver",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getIdentityRegistry",
                            "outputs": [
                                {
                                    "internalType": "contract IIdentityRegistry",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getOperatorManagement",
                            "outputs": [
                                {
                                    "internalType": "contract IOperatorManagement",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeReceiver",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                }
                            ],
                            "name": "removeTrustedIssuer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "setBalanceManagement",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "setFeeReceiver",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "setIdentityRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "setOperatorManagement",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "setTrustedIssuersRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_claimTopics",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "updateIssuerClaimTopics",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                TrustedIssuersRegistry: {
                    address: "0x643c922CCd051d5b2eCbE7441ecF2cCEF10Ea19c",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [],
                            "name": "EmptyArray",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "length",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "limit",
                                    "type": "uint8"
                                }
                            ],
                            "name": "MaxClaimTopics",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "length",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "limit",
                                    "type": "uint8"
                                }
                            ],
                            "name": "MaxTrustedIssuers",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "issuer",
                                    "type": "address"
                                }
                            ],
                            "name": "NotTrustedIssuer",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "issuer",
                                    "type": "address"
                                }
                            ],
                            "name": "TrustedIssuerExists",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "contract IClaimIssuer",
                                    "name": "trustedIssuer",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256[]",
                                    "name": "claimTopics",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "ClaimTopicsUpdated",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "contract IClaimIssuer",
                                    "name": "trustedIssuer",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256[]",
                                    "name": "claimTopics",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "TrustedIssuerAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "contract IClaimIssuer",
                                    "name": "trustedIssuer",
                                    "type": "address"
                                }
                            ],
                            "name": "TrustedIssuerRemoved",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "TIR_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "operator",
                                    "type": "address"
                                }
                            ],
                            "name": "addOperator",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_claimTopics",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "addTrustedIssuer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getOperatorManagement",
                            "outputs": [
                                {
                                    "internalType": "contract IOperatorManagement",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                }
                            ],
                            "name": "getTrustedIssuerClaimTopics",
                            "outputs": [
                                {
                                    "internalType": "uint256[]",
                                    "name": "",
                                    "type": "uint256[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getTrustedIssuers",
                            "outputs": [
                                {
                                    "internalType": "contract IClaimIssuer[]",
                                    "name": "",
                                    "type": "address[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getTrustedIssuersForClaimTopic",
                            "outputs": [
                                {
                                    "internalType": "contract IClaimIssuer[]",
                                    "name": "",
                                    "type": "address[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_issuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "hasClaimTopic",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "admin",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_issuer",
                                    "type": "address"
                                }
                            ],
                            "name": "isTrustedIssuer",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_issuer",
                                    "type": "address"
                                }
                            ],
                            "name": "onlyTrustedIssuer",
                            "outputs": [],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "operator",
                                    "type": "address"
                                }
                            ],
                            "name": "removeOperator",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                }
                            ],
                            "name": "removeTrustedIssuer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IOperatorManagement",
                                    "name": "operatorManagement",
                                    "type": "address"
                                }
                            ],
                            "name": "setOperatorManagement",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IClaimIssuer",
                                    "name": "_trustedIssuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_claimTopics",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "updateIssuerClaimTopics",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                ClaimTopicsRegistry: {
                    address: "0xB764167746ad147Ef68375ce4E294b2AD10565Aa",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "i",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "topic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ClaimTopicAlreadyExists",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "length",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "limit",
                                    "type": "uint256"
                                }
                            ],
                            "name": "MaxClaimTopic",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                }
                            ],
                            "name": "NotOperator",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ClaimTopicAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ClaimTopicRemoved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TokenClaimTopicAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TokenClaimTopicRemoved",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "CTR_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "addClaimTopic",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "addTokenClaimTopic",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getClaimTopics",
                            "outputs": [
                                {
                                    "internalType": "uint256[]",
                                    "name": "",
                                    "type": "uint256[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getTokenClaimTopics",
                            "outputs": [
                                {
                                    "internalType": "uint256[]",
                                    "name": "",
                                    "type": "uint256[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "admin",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "removeClaimTopic",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_claimTopic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "removeTokenClaimTopic",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                IdentityRegistryStorage: {
                    address: "0x1cD0D14d8499F67b6eC9DB35aeb8082080D6f4ae",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityAlreadyExists",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityNotExist",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "length",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "limit",
                                    "type": "uint256"
                                }
                            ],
                            "name": "MaxIdentityRegistries",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                }
                            ],
                            "name": "NotOperator",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "investorAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint16",
                                    "name": "country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryModified",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "oldIdentity",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "newIdentity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityModified",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "identityRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityRegistryBound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "identityRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityRegistryUnbound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "investorAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityStored",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "investorAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityUnstored",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "IRS_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "_identity",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "addIdentityToStorage",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identityRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "bindIdentityRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserClaimTopics",
                            "outputs": [
                                {
                                    "internalType": "uint256[]",
                                    "name": "",
                                    "type": "uint256[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "admin",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "linkedIdentityRegistries",
                            "outputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "",
                                    "type": "address[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "_identity",
                                    "type": "address"
                                }
                            ],
                            "name": "modifyStoredIdentity",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "modifyStoredInvestorCountry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "removeIdentityFromStorage",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "storedIdentity",
                            "outputs": [
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "storedInvestorCountry",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identityRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "unbindIdentityRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                IdentityRegistry: {
                    address: "0xC8315c7C6210a24054210E44b828B107E83A5E32",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                }
                            ],
                            "name": "NotOperator",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "claimTopicsRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "ClaimTopicsRegistrySet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "investorAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint16",
                                    "name": "country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryUpdated",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "investorAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityRegistered",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "investorAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityRemoved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "identityStorage",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityStorageSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "oldIdentity",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "contract IIdentity",
                                    "name": "newIdentity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityUpdated",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "trustedIssuersRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "TrustedIssuersRegistrySet",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "IR_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_userAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "contract IIdentity[]",
                                    "name": "_identities",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint16[]",
                                    "name": "_countries",
                                    "type": "uint16[]"
                                }
                            ],
                            "name": "batchRegisterIdentity",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "contains",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "deleteIdentity",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "identity",
                            "outputs": [
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "identityStorage",
                            "outputs": [
                                {
                                    "internalType": "contract IIdentityRegistryStorage",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_trustedIssuersRegistry",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_claimTopicsRegistry",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_identityStorage",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "admin",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "investorCountry",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isToken",
                                    "type": "bool"
                                }
                            ],
                            "name": "isVerified",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "issuersRegistry",
                            "outputs": [
                                {
                                    "internalType": "contract ITrustedIssuersRegistry",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "_identity",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "registerIdentity",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_claimTopicsRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "setClaimTopicsRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identityRegistryStorage",
                                    "type": "address"
                                }
                            ],
                            "name": "setIdentityRegistryStorage",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_trustedIssuersRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "setTrustedIssuersRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "topicsRegistry",
                            "outputs": [
                                {
                                    "internalType": "contract IClaimTopicsRegistry",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "updateCountry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "_identity",
                                    "type": "address"
                                }
                            ],
                            "name": "updateIdentity",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                OperatorManagement: {
                    address: "0xDC75b9963013D42365E7D846fD22c6c774015BB6",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "AccountAlreadyExists",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "AccountNotExist",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "AccountAutorised",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "AccountRevoked",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "OM_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_operator",
                                    "type": "address"
                                }
                            ],
                            "name": "addOperator",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract ITrustedIssuersRegistry",
                                    "name": "adminContract",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_operator",
                                    "type": "address"
                                }
                            ],
                            "name": "isOperator",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_operator",
                                    "type": "address"
                                }
                            ],
                            "name": "removeOperator",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                BalanceManagement: {
                    address: "0x9C3321eE15ECf4CaE72089Bc087823665124068D",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                }
                            ],
                            "name": "NotToken",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "oldBalance",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "balance",
                                    "type": "uint256"
                                }
                            ],
                            "name": "UpdateUserHolding",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "BM_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IToken",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_user",
                                    "type": "address"
                                }
                            ],
                            "name": "getFrozenTokens",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IToken",
                                    "name": "token",
                                    "type": "address"
                                }
                            ],
                            "name": "getTokenDistribution",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_user",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserHoldings",
                            "outputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "address",
                                            "name": "token",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "balance",
                                            "type": "uint256"
                                        }
                                    ],
                                    "internalType": "struct IBalanceManagement.UserHolding[]",
                                    "name": "",
                                    "type": "tuple[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IToken",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_user",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserTokenBalance",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_user",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IToken",
                                    "name": "token",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserTokenDistribution",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "result",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "adminContract",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IToken",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_user",
                                    "type": "address"
                                }
                            ],
                            "name": "isUserFrozen",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IToken",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_user",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isSubstract",
                                    "type": "bool"
                                }
                            ],
                            "name": "updateUserHolding",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                IdFactory: {
                    address: "0x6BA6bF62D28E81cfE4760611853E2AEB58178c9d",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "factory",
                                    "type": "address"
                                }
                            ],
                            "name": "AlreadyTokenFactory",
                            "type": "error"
                        },
                        {
                            "inputs": [],
                            "name": "EmptyArray",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "str",
                                    "type": "string"
                                }
                            ],
                            "name": "EmptyString",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "IsZeroAddress",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "length",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "limit",
                                    "type": "uint8"
                                }
                            ],
                            "name": "MaxLinkedWallets",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "NonMsgSender",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "NotLinkedWallet",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "factory",
                                    "type": "address"
                                }
                            ],
                            "name": "NotTokenFactory",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "NotTrustedIssuer",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "OnlyFactoryOrOwner",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "salt",
                                    "type": "string"
                                }
                            ],
                            "name": "SaltTaken",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "wallet",
                                    "type": "address"
                                }
                            ],
                            "name": "WalletAlreadyListed",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_addr",
                                    "type": "address"
                                }
                            ],
                            "name": "Deployed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "factory",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenFactoryAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "factory",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenFactoryRemoved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenLinked",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "wallet",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "WalletLinked",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "wallet",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "WalletUnlinked",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "IDFACTORY_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_factory",
                                    "type": "address"
                                }
                            ],
                            "name": "addTokenFactory",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_wallet",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_salt",
                                    "type": "string"
                                }
                            ],
                            "name": "createIdentity",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_wallet",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_salt",
                                    "type": "string"
                                },
                                {
                                    "internalType": "bytes32[]",
                                    "name": "_managementKeys",
                                    "type": "bytes32[]"
                                }
                            ],
                            "name": "createIdentityWithManagementKeys",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_tokenOwner",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_salt",
                                    "type": "string"
                                }
                            ],
                            "name": "createTokenIdentity",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_wallet",
                                    "type": "address"
                                }
                            ],
                            "name": "getIdentity",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identity",
                                    "type": "address"
                                }
                            ],
                            "name": "getToken",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identity",
                                    "type": "address"
                                }
                            ],
                            "name": "getWallets",
                            "outputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "",
                                    "type": "address[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "implementationAuthority",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "ia",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "_salt",
                                    "type": "string"
                                }
                            ],
                            "name": "isSaltTaken",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_factory",
                                    "type": "address"
                                }
                            ],
                            "name": "isTokenFactory",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_newWallet",
                                    "type": "address"
                                }
                            ],
                            "name": "linkWallet",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_factory",
                                    "type": "address"
                                }
                            ],
                            "name": "removeTokenFactory",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_oldWallet",
                                    "type": "address"
                                }
                            ],
                            "name": "unlinkWallet",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                ModularCompliance: {
                    address: "0x7994536EE10901AcD6e7005000cd08a3b56bAA3d",
                    abi: [
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "admin",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "module",
                                    "type": "address"
                                }
                            ],
                            "name": "CanComplianceBind",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "InvalidValue",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "module",
                                    "type": "address"
                                }
                            ],
                            "name": "ModuleIsBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "module",
                                    "type": "address"
                                }
                            ],
                            "name": "ModuleNotBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "count",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "limit",
                                    "type": "uint8"
                                }
                            ],
                            "name": "ModulesConnected",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                }
                            ],
                            "name": "NotOperatorOrToken",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "boundToken",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenIsNotBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ZeroUint",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "ModuleAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes4",
                                    "name": "selector",
                                    "type": "bytes4"
                                }
                            ],
                            "name": "ModuleInteraction",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "ModuleRemoved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_tokenFactory",
                                    "type": "address"
                                }
                            ],
                            "name": "SetTokenFactory",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_token",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenBound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_token",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenUnbound",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MC_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "addModule",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_token",
                                    "type": "address"
                                }
                            ],
                            "name": "bindToken",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "callModuleFunction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "canTransfer",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "created",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "destroyed",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "tokenAction",
                                    "type": "uint8"
                                }
                            ],
                            "name": "getComplianceTokenData",
                            "outputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "blockNumber",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "timestamp",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "amount",
                                            "type": "uint256"
                                        }
                                    ],
                                    "internalType": "struct IMCStorage.TokenData[]",
                                    "name": "",
                                    "type": "tuple[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getModules",
                            "outputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "",
                                    "type": "address[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getTokenBound",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getTokenFactory",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IAdminContractUpgradeable",
                                    "name": "admin",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "isModuleBound",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "removeModule",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "tokenFactory",
                                    "type": "address"
                                }
                            ],
                            "name": "setTokenFactory",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "transferred",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_token",
                                    "type": "address"
                                }
                            ],
                            "name": "unbindToken",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                Token: {
                    address: "0x62a69a2dE8C871D4165EA522e3E143EF091213e9",
                    abi: [
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "admin",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_identityRegistry",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_symbol",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "_decimals",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_onchainID",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ComplianceNotFollowed",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "str",
                                    "type": "string"
                                }
                            ],
                            "name": "EmptyString",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "identity",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityNotVerified",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "balance",
                                    "type": "uint256"
                                }
                            ],
                            "name": "InsufficientBalance",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                }
                            ],
                            "name": "NotOperator",
                            "type": "error"
                        },
                        {
                            "inputs": [],
                            "name": "NotVerifiedToken",
                            "type": "error"
                        },
                        {
                            "inputs": [],
                            "name": "RecoveryNotPossible",
                            "type": "error"
                        },
                        {
                            "inputs": [],
                            "name": "TransferNotPossible",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "wallet",
                                    "type": "address"
                                }
                            ],
                            "name": "WalletIsFrozen",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ZeroUint",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "bool",
                                    "name": "_isFrozen",
                                    "type": "bool"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_owner",
                                    "type": "address"
                                }
                            ],
                            "name": "AddressFrozen",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "spender",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "Approval",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_identityRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "IdentityRegistryAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "Paused",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_lostWallet",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_newWallet",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_investorOnchainID",
                                    "type": "address"
                                }
                            ],
                            "name": "RecoverySuccess",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TokensFrozen",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TokensUnfrozen",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "from",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "to",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "Transfer",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "Unpaused",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "string",
                                    "name": "_newName",
                                    "type": "string"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "string",
                                    "name": "_newSymbol",
                                    "type": "string"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "_newDecimals",
                                    "type": "uint8"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "string",
                                    "name": "_newVersion",
                                    "type": "string"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_newOnchainID",
                                    "type": "address"
                                }
                            ],
                            "name": "UpdatedTokenInformation",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "TOKEN_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_owner",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_spender",
                                    "type": "address"
                                }
                            ],
                            "name": "allowance",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_spender",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "approve",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "balanceOf",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_userAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_amounts",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "batchBurn",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_fromList",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "_toList",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_amounts",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isManual",
                                    "type": "bool"
                                }
                            ],
                            "name": "batchForcedTransfer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_userAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_amounts",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "batchFreezePartialTokens",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_toList",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_amounts",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isManual",
                                    "type": "bool"
                                }
                            ],
                            "name": "batchMint",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_userAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "bool[]",
                                    "name": "_freeze",
                                    "type": "bool[]"
                                }
                            ],
                            "name": "batchSetAddressFrozen",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_toList",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_amounts",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "batchTransfer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address[]",
                                    "name": "_userAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "_amounts",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "batchUnfreezePartialTokens",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "burn",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "compliance",
                            "outputs": [
                                {
                                    "internalType": "contract IModularCompliance",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "decimals",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_spender",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_subtractedValue",
                                    "type": "uint256"
                                }
                            ],
                            "name": "decreaseAllowance",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isManual",
                                    "type": "bool"
                                }
                            ],
                            "name": "forcedTransfer",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "freezePartialTokens",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getFrozenTokens",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "identityRegistry",
                            "outputs": [
                                {
                                    "internalType": "contract IIdentityRegistry",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_spender",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_addedValue",
                                    "type": "uint256"
                                }
                            ],
                            "name": "increaseAllowance",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "admin",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_identityRegistry",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_symbol",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "_decimals",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_onchainID",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "isFrozen",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isManual",
                                    "type": "bool"
                                }
                            ],
                            "name": "mint",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "name",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "onchainID",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "pause",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "paused",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_lostWallet",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_newWallet",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_investorOnchainID",
                                    "type": "address"
                                }
                            ],
                            "name": "recoveryAddress",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "_freeze",
                                    "type": "bool"
                                }
                            ],
                            "name": "setAddressFrozen",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "setCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identityRegistry",
                                    "type": "address"
                                }
                            ],
                            "name": "setIdentityRegistry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "_name",
                                    "type": "string"
                                }
                            ],
                            "name": "setName",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_onchainID",
                                    "type": "address"
                                }
                            ],
                            "name": "setOnchainID",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "string",
                                    "name": "_symbol",
                                    "type": "string"
                                }
                            ],
                            "name": "setSymbol",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "symbol",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "totalSupply",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "transfer",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "transferFrom",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "unfreezePartialTokens",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "unpause",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                Identity: {
                    address: "0x151EcDB923fCb43a7375e7fd1FC765Ec2f56f68E",
                    abi: [
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "initialManagementKey",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "_isLibrary",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "executionId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bool",
                                    "name": "approved",
                                    "type": "bool"
                                }
                            ],
                            "name": "Approved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "claimId",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "topic",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "scheme",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "issuer",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "signature",
                                    "type": "bytes"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "string",
                                    "name": "uri",
                                    "type": "string"
                                }
                            ],
                            "name": "ClaimAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "claimId",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "topic",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "scheme",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "issuer",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "signature",
                                    "type": "bytes"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "string",
                                    "name": "uri",
                                    "type": "string"
                                }
                            ],
                            "name": "ClaimChanged",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "claimId",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "topic",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "scheme",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "issuer",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "signature",
                                    "type": "bytes"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "string",
                                    "name": "uri",
                                    "type": "string"
                                }
                            ],
                            "name": "ClaimRemoved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "executionId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "to",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "Executed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "executionId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "to",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "ExecutionFailed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "executionId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "to",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "ExecutionRequested",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "key",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "purpose",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "keyType",
                                    "type": "uint256"
                                }
                            ],
                            "name": "KeyAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "key",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "purpose",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "keyType",
                                    "type": "uint256"
                                }
                            ],
                            "name": "KeyRemoved",
                            "type": "event"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_topic",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_scheme",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_issuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "_signature",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "_data",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "string",
                                    "name": "_uri",
                                    "type": "string"
                                }
                            ],
                            "name": "addClaim",
                            "outputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "claimRequestId",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_key",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_purpose",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_type",
                                    "type": "uint256"
                                }
                            ],
                            "name": "addKey",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "_approve",
                                    "type": "bool"
                                }
                            ],
                            "name": "approve",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "_data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "execute",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "executionId",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "payable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_claimId",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getClaim",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "topic",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "scheme",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "issuer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "signature",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "string",
                                    "name": "uri",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_topic",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getClaimIdsByTopic",
                            "outputs": [
                                {
                                    "internalType": "bytes32[]",
                                    "name": "claimIds",
                                    "type": "bytes32[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_identity",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "getDataHash",
                            "outputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "dataHash",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_key",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getKey",
                            "outputs": [
                                {
                                    "internalType": "uint256[]",
                                    "name": "purposes",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "keyType",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "key",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_key",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getKeyPurposes",
                            "outputs": [
                                {
                                    "internalType": "uint256[]",
                                    "name": "_purposes",
                                    "type": "uint256[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_purpose",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getKeysByPurpose",
                            "outputs": [
                                {
                                    "internalType": "bytes32[]",
                                    "name": "keys",
                                    "type": "bytes32[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes",
                                    "name": "dataHash",
                                    "type": "bytes"
                                }
                            ],
                            "name": "getPrefixData",
                            "outputs": [
                                {
                                    "internalType": "bytes",
                                    "name": "",
                                    "type": "bytes"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "getPrefixedHash",
                            "outputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes",
                                    "name": "sig",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "dataHash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getRecoveredAddress",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "addr",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "initialManagementKey",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "contract IIdentity",
                                    "name": "_identity",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "claimTopic",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "sig",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "isClaimValid",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "claimValid",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_key",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_purpose",
                                    "type": "uint256"
                                }
                            ],
                            "name": "keyHasPurpose",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "result",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_claimId",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "removeClaim",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_key",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_purpose",
                                    "type": "uint256"
                                }
                            ],
                            "name": "removeKey",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "version",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        }
                    ],
                },
                CountryAllowModule: {
                    address: "0x1fcB67E30400880e69aE976EEA00f6AE4a27D817",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceAlreadyBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceNotBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryAlreadyAllowed",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryNotAllowed",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "OnlyComplianceCaller",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "previousAdmin",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "newAdmin",
                                    "type": "address"
                                }
                            ],
                            "name": "AdminChanged",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "beacon",
                                    "type": "address"
                                }
                            ],
                            "name": "BeaconUpgraded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceBound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceUnbound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryAllowed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryUnallowed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "implementation",
                                    "type": "address"
                                }
                            ],
                            "name": "Upgraded",
                            "type": "event"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "addAllowedCountry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16[]",
                                    "name": "_countries",
                                    "type": "uint16[]"
                                }
                            ],
                            "name": "batchAllowCountries",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16[]",
                                    "name": "_countries",
                                    "type": "uint16[]"
                                }
                            ],
                            "name": "batchDisallowCountries",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "bindCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "name": "canComplianceBind",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "isComplianceBound",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "isCountryAllowed",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "isPlugAndPlay",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleBurnAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "moduleCheck",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleMintAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleTransferAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "name",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "_name",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "removeAllowedCountry",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "unbindCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newImplementation",
                                    "type": "address"
                                }
                            ],
                            "name": "upgradeTo",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newImplementation",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "upgradeToAndCall",
                            "outputs": [],
                            "stateMutability": "payable",
                            "type": "function"
                        }
                    ],
                },
                CountryRestrictModule: {
                    address: "0xbefBe42F57678836de16960b243f5739642FD9cb",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceAlreadyBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceNotBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryAlreadyRestricted",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "CountryNotRestricted",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "batch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "limit",
                                    "type": "uint16"
                                }
                            ],
                            "name": "MaxCountriesInOneBatch",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "OnlyComplianceCaller",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "AddedRestrictedCountry",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "previousAdmin",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "newAdmin",
                                    "type": "address"
                                }
                            ],
                            "name": "AdminChanged",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "beacon",
                                    "type": "address"
                                }
                            ],
                            "name": "BeaconUpgraded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceBound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceUnbound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "RemovedRestrictedCountry",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "implementation",
                                    "type": "address"
                                }
                            ],
                            "name": "Upgraded",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_CLAIM_TOPICS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_COUNTRY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_IDENTITY_REGISTRIES",
                            "outputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "",
                                    "type": "uint16"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_LINKED_WALLETS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_MODULE_COMPLIANCE",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "MAX_TRUSTED_ISSUERS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "PERCENT_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "addCountryRestriction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16[]",
                                    "name": "_countries",
                                    "type": "uint16[]"
                                }
                            ],
                            "name": "batchRestrictCountries",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16[]",
                                    "name": "_countries",
                                    "type": "uint16[]"
                                }
                            ],
                            "name": "batchUnrestrictCountries",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "bindCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "name": "canComplianceBind",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "isComplianceBound",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "isCountryRestricted",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "isPlugAndPlay",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleBurnAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "moduleCheck",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleMintAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleTransferAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "name",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "_name",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint16",
                                    "name": "_country",
                                    "type": "uint16"
                                }
                            ],
                            "name": "removeCountryRestriction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "unbindCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newImplementation",
                                    "type": "address"
                                }
                            ],
                            "name": "upgradeTo",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newImplementation",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "upgradeToAndCall",
                            "outputs": [],
                            "stateMutability": "payable",
                            "type": "function"
                        }
                    ],
                },
                TimeTransferModule: {
                    address: "0xEdaB9f264d589405f1ACCF5e197e3E9F811d8811",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceAlreadyBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceNotBound",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "compliance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "arraySize",
                                    "type": "uint8"
                                }
                            ],
                            "name": "LimitsArraySizeExceeded",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "caller",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "OnlyComplianceCaller",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "previousAdmin",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "newAdmin",
                                    "type": "address"
                                }
                            ],
                            "name": "AdminChanged",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "beacon",
                                    "type": "address"
                                }
                            ],
                            "name": "BeaconUpgraded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceBound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "ComplianceUnbound",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "compliance",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint32",
                                    "name": "limitTime",
                                    "type": "uint32"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "limitValue",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TimeTransferLimitUpdated",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "implementation",
                                    "type": "address"
                                }
                            ],
                            "name": "Upgraded",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "TIME_LIMIT_COUNTER",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "bindCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "name": "canComplianceBind",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "getTimeTransferLimits",
                            "outputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "uint32",
                                            "name": "limitTime",
                                            "type": "uint32"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "limitValue",
                                            "type": "uint256"
                                        }
                                    ],
                                    "internalType": "struct ITimeTransfersLimitsModule.Limit[]",
                                    "name": "limits",
                                    "type": "tuple[]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "isComplianceBound",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "isPlugAndPlay",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint32",
                                    "name": "",
                                    "type": "uint32"
                                }
                            ],
                            "name": "limitValues",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "attributedLimit",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "limitIndex",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleBurnAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "moduleCheck",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_to",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleMintAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_from",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "moduleTransferAction",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "name",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "_name",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "uint32",
                                            "name": "limitTime",
                                            "type": "uint32"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "limitValue",
                                            "type": "uint256"
                                        }
                                    ],
                                    "internalType": "struct ITimeTransfersLimitsModule.Limit",
                                    "name": "_limit",
                                    "type": "tuple"
                                }
                            ],
                            "name": "setTimeTransferLimit",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "transferLimits",
                            "outputs": [
                                {
                                    "internalType": "uint32",
                                    "name": "limitTime",
                                    "type": "uint32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "limitValue",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_compliance",
                                    "type": "address"
                                }
                            ],
                            "name": "unbindCompliance",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newImplementation",
                                    "type": "address"
                                }
                            ],
                            "name": "upgradeTo",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newImplementation",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                }
                            ],
                            "name": "upgradeToAndCall",
                            "outputs": [],
                            "stateMutability": "payable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint32",
                                    "name": "",
                                    "type": "uint32"
                                }
                            ],
                            "name": "usersCounters",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timer",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        }
                    ],
                },
                TokenFactory: {
                    address: "0x6bEd8cf3dB0985Fe0f4C09A209EF59aAa2D6641b",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "module",
                                    "type": "address"
                                }
                            ],
                            "name": "ModuleAlreadyExists",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "NotOperator",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "NotTrustedIssuer",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_module",
                                    "type": "address"
                                }
                            ],
                            "name": "AddedModule",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_addr",
                                    "type": "address"
                                }
                            ],
                            "name": "Deployed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_idFactory",
                                    "type": "address"
                                }
                            ],
                            "name": "IdFactorySet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "_token",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_ir",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "_mc",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "_salt",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "TokenDeployed",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "TOKEN_FACTORY_VERSION",
                            "outputs": [
                                {
                                    "internalType": "string",
                                    "name": "",
                                    "type": "string"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "string",
                                            "name": "name",
                                            "type": "string"
                                        },
                                        {
                                            "internalType": "string",
                                            "name": "symbol",
                                            "type": "string"
                                        },
                                        {
                                            "internalType": "uint8",
                                            "name": "decimals",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address",
                                            "name": "ONCHAINID",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "complianceModules",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "bytes[]",
                                            "name": "complianceSettings",
                                            "type": "bytes[]"
                                        }
                                    ],
                                    "internalType": "struct ITokenFactory.TokenDetails",
                                    "name": "_tokenDetails",
                                    "type": "tuple"
                                }
                            ],
                            "name": "deployToken",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getIdFactory",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_salt",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getToken",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "symbol",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "decimals",
                                    "type": "uint8"
                                }
                            ],
                            "name": "getTokenSalt",
                            "outputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "implementationAuthorityModularCompliance",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "implementationAuthorityToken",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "admin",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "idFactory_",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "iaToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "iaMc",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "idFactory_",
                                    "type": "address"
                                }
                            ],
                            "name": "setIdFactory",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
                DVDTransferManager: {
                    address: "0xa6bf127901e21f6CD490dABC3a9d38Ae74023E57",
                    abi: [
                        {
                            "inputs": [],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "CantCancel",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_transferID",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "enum IDVDTransferManager.IsExecuted",
                                    "name": "isExecuted",
                                    "type": "uint8"
                                }
                            ],
                            "name": "CantExecuteOrder",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "CantTakeTransfer",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "validPrice",
                                    "type": "uint256"
                                }
                            ],
                            "name": "InvalidBuyPrice",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "tokenAmount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "NotEnoughAllowance",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "balance",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "tokenAmount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "NotEnoughBalance",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                }
                            ],
                            "name": "NotTrustedIssuer",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_address",
                                    "type": "address"
                                }
                            ],
                            "name": "ZeroAddress",
                            "type": "error"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ZeroUint",
                            "type": "error"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "transferID",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "DVDTransferCancelled",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "transferID",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "DVDTransferExecuted",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "transferID",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "maker",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "token1",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "token1Amount",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "taker",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "token2",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "token2Amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "DVDTransferInitiated",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "bytes32",
                                    "name": "parity",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "token1",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "token2",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "fee1",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "fee2",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "feeBase",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "fee1Wallet",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "fee2Wallet",
                                    "type": "address"
                                }
                            ],
                            "name": "FeeModified",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "version",
                                    "type": "uint8"
                                }
                            ],
                            "name": "Initialized",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "fee",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "timestamp",
                                    "type": "uint256"
                                }
                            ],
                            "name": "SetCommonFee",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "feed",
                                    "type": "address"
                                }
                            ],
                            "name": "SetDataFeed",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "fee",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "timestamp",
                                    "type": "uint256"
                                }
                            ],
                            "name": "SetTokenFee",
                            "type": "event"
                        },
                        {
                            "inputs": [],
                            "name": "FEE_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "TOKEN_DECIMALS",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "",
                                    "type": "uint8"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "tokenAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "calculateFee",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "fee",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_token1",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_token2",
                                    "type": "address"
                                }
                            ],
                            "name": "calculateParity",
                            "outputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_nonce",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_maker",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_token1",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_token1Amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_taker",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_token2",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_token2Amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "calculateTransferID",
                            "outputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "",
                                    "type": "bytes32"
                                }
                            ],
                            "stateMutability": "pure",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_transferID",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "cancelDVDTransfer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "sellAmount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "evaluateBuyerPrice",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getChainlinkDataFeedLatestAnswer",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getCommonFee",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getDataFeed",
                            "outputs": [
                                {
                                    "internalType": "contract AggregatorV3Interface",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "transferId",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getToken1ToDelivery",
                            "outputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "address",
                                            "name": "counterpart",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "address",
                                            "name": "token",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "amount",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "enum IDVDTransferManager.IsExecuted",
                                            "name": "isExecuted",
                                            "type": "uint8"
                                        }
                                    ],
                                    "internalType": "struct IDVDTransferManager.Delivery",
                                    "name": "",
                                    "type": "tuple"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "transferId",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getToken2ToDelivery",
                            "outputs": [
                                {
                                    "components": [
                                        {
                                            "internalType": "address",
                                            "name": "counterpart",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "address",
                                            "name": "token",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "amount",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "enum IDVDTransferManager.IsExecuted",
                                            "name": "isExecuted",
                                            "type": "uint8"
                                        }
                                    ],
                                    "internalType": "struct IDVDTransferManager.Delivery",
                                    "name": "",
                                    "type": "tuple"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "tokenAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getTokenFee",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "getTxNonce",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "admin",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "commonFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feed",
                                    "type": "address"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_token1",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_token1Amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_counterpart",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_token2",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_token2Amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "initiateDVDTransfer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "fee",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setCommonFee",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "feed",
                                    "type": "address"
                                }
                            ],
                            "name": "setDataFeed",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "tokenAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fee",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setTokenFee",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "bytes32",
                                    "name": "_transferID",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "takeDVDTransfer",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }
                    ],
                },
            },
        },
    ],
};

export default contracts;

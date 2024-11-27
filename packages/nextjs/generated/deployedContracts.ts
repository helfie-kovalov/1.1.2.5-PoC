import { ADMIN_ABI } from "./abis/admin.abi";
import { BM_ABI } from "./abis/bm.abi";
import { CTR_ABI } from "./abis/ctr.abi";
import { DVD_ABI } from "./abis/dvd.abi";
import { ID_FACTORY_ABI } from "./abis/identity-factory.abi";
import { IDENTITY_ABI } from "./abis/identity.abi";
import { IR_ABI } from "./abis/ir.abi";
import { IRS_ABI } from "./abis/irs.abi";
import { MODULAR_COMPLIANCE_ABI } from "./abis/modular-compliance.abi";
import { COUNTRY_ALLOW_ABI } from "./abis/modules/country-allow.abi";
import { COUNTRY_RESTRICT_ABI } from "./abis/modules/country-restrict.abi";
import { TIME_TRANSFER_LIMIT_ABI } from "./abis/modules/transfer-limit.abi";
import { OM_ABI } from "./abis/om.abi";
import { TIR_ABI } from "./abis/tir.abi";
import { TOKEN_FACTORY_ABI } from "./abis/token-factory.abi";
import { TOKEN_ABI } from "./abis/token.abi";

const contracts = {
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Admin: {
          address: "0x83191eC8a93fF13BaB94a83a2C85334414a37207",
          abi: ADMIN_ABI,
        },
        TrustedIssuersRegistry: {
          address: "0x643c922CCd051d5b2eCbE7441ecF2cCEF10Ea19c",
          abi: TIR_ABI,
        },
        ClaimTopicsRegistry: {
          address: "0xB764167746ad147Ef68375ce4E294b2AD10565Aa",
          abi: CTR_ABI,
        },
        IdentityRegistryStorage: {
          address: "0x1cD0D14d8499F67b6eC9DB35aeb8082080D6f4ae",
          abi: IRS_ABI,
        },
        IdentityRegistry: {
          address: "0xC8315c7C6210a24054210E44b828B107E83A5E32",
          abi: IR_ABI,
        },
        OperatorManagement: {
          address: "0xDC75b9963013D42365E7D846fD22c6c774015BB6",
          abi: OM_ABI,
        },
        BalanceManagement: {
          address: "0x9C3321eE15ECf4CaE72089Bc087823665124068D",
          abi: BM_ABI,
        },
        IdFactory: {
          address: "0x6BA6bF62D28E81cfE4760611853E2AEB58178c9d",
          abi: ID_FACTORY_ABI,
        },
        ModularCompliance: {
          address: "0x7994536EE10901AcD6e7005000cd08a3b56bAA3d",
          abi: MODULAR_COMPLIANCE_ABI,
        },
        Token: {
          address: "0x62a69a2dE8C871D4165EA522e3E143EF091213e9",
          abi: TOKEN_ABI,
        },
        Identity: {
          address: "0x151EcDB923fCb43a7375e7fd1FC765Ec2f56f68E",
          abi: IDENTITY_ABI,
        },
        CountryAllowModule: {
          address: "0x1fcB67E30400880e69aE976EEA00f6AE4a27D817",
          abi: COUNTRY_ALLOW_ABI,
        },
        CountryRestrictModule: {
          address: "0xbefBe42F57678836de16960b243f5739642FD9cb",
          abi: COUNTRY_RESTRICT_ABI,
        },
        TimeTransferModule: {
          address: "0xEdaB9f264d589405f1ACCF5e197e3E9F811d8811",
          abi: TIME_TRANSFER_LIMIT_ABI,
        },
        TokenFactory: {
          address: "0x6bEd8cf3dB0985Fe0f4C09A209EF59aAa2D6641b",
          abi: TOKEN_FACTORY_ABI,
        },
        DVDTransferManager: {
          address: "0xa6bf127901e21f6CD490dABC3a9d38Ae74023E57",
          abi: DVD_ABI,
        },
      },
    },
  ],
};

export default contracts;

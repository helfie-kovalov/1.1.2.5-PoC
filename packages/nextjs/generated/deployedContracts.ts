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
import { USDT_ABI } from "./abis/usdt.abi";

const contracts = {
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Admin: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: ADMIN_ABI,
        },
        TrustedIssuersRegistry: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: TIR_ABI,
        },
        ClaimTopicsRegistry: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: CTR_ABI,
        },
        IdentityRegistryStorage: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: IRS_ABI,
        },
        IdentityRegistry: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: IR_ABI,
        },
        OperatorManagement: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: OM_ABI,
        },
        BalanceManagement: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: BM_ABI,
        },
        IdFactory: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: ID_FACTORY_ABI,
        },
        ModularCompliance: {
          address: "0x390AB078171c81878e926D3b06C27E4878e969EB",
          abi: MODULAR_COMPLIANCE_ABI,
        },
        Token: {
          address: "0x050E3D0e794c49F030B2894aeBDba6fB894C0262",
          abi: TOKEN_ABI,
        },
        Identity: {
          address: "0xA3B221B86b66E473b5d9c92062e44863EaD61671",
          abi: IDENTITY_ABI,
        },
        CountryAllowModule: {
          address: "0x411178be519cd438Fad80AF22f515aA718b22bBA",
          abi: COUNTRY_ALLOW_ABI,
        },
        CountryRestrictModule: {
          address: "0xB922c47Ed24CB62e8578683589919336ECC990d9",
          abi: COUNTRY_RESTRICT_ABI,
        },
        TimeTransferModule: {
          address: "0x657bB38560c482BF8F4e9fAACd59905EE678e48f",
          abi: TIME_TRANSFER_LIMIT_ABI,
        },
        TokenFactory: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: TOKEN_FACTORY_ABI,
        },
        DVDTransferManager: {
          address: "0xdc8d310adB5fC4ceF45ec4Fa9bdB7d9E3CEA6CEe",
          abi: DVD_ABI,
        },
        USDT: {
          address: "0x7C1b58de844a2974852A9F6bb672e9Fde3031265",
          abi: USDT_ABI,
        },
      },
    },
  ],
};

export default contracts;

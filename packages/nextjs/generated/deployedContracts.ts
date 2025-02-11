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
import { VAULT_FACTORY_ABI } from "./abis/vault-factory.abi";
import { VAULT_ABI } from "./abis/vault.abi";

const contracts = {
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Admin: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: ADMIN_ABI,
        },
        TrustedIssuersRegistry: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: TIR_ABI,
        },
        ClaimTopicsRegistry: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: CTR_ABI,
        },
        IdentityRegistryStorage: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: IRS_ABI,
        },
        IdentityRegistry: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: IR_ABI,
        },
        OperatorManagement: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: OM_ABI,
        },
        BalanceManagement: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: BM_ABI,
        },
        IdFactory: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: ID_FACTORY_ABI,
        },
        ModularCompliance: {
          address: "0xA46CE6a7e0947426C8Bd7338D14D16234b5f4c5B",
          abi: MODULAR_COMPLIANCE_ABI,
        },
        Token: {
          address: "0x8Bf856912Cf88EC9150399f6534ADf049410Bf32",
          abi: TOKEN_ABI,
        },
        Identity: {
          address: "0x7a1Ca37f48113b92e79D8EF05Cb756678b5E7171",
          abi: IDENTITY_ABI,
        },
        CountryAllowModule: {
          address: "0x6736dF96d918B173Ca4cEb47B4e06ADeda8cb8E5",
          abi: COUNTRY_ALLOW_ABI,
        },
        CountryRestrictModule: {
          address: "0x1Ce43F8628FD967c58B7C7e84c839B4b59d5CE77",
          abi: COUNTRY_RESTRICT_ABI,
        },
        TimeTransferModule: {
          address: "0xde350340E01F3aA042d88f64f02b6166a88D7730",
          abi: TIME_TRANSFER_LIMIT_ABI,
        },
        TokenFactory: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: TOKEN_FACTORY_ABI,
        },
        Vault: {
          address: "0xCEdfA090925BB2216F675e1417086Ef8E2a8412c",
          abi: VAULT_ABI,
        },
        VaultFactory: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
          abi: VAULT_FACTORY_ABI,
        },
        DVDTransferManager: {
          address: "0xB0E7aeAC38222257c21E4F2E4f5b04CdB9d83330",
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

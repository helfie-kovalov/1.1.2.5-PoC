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
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: ADMIN_ABI,
        },
        TrustedIssuersRegistry: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: TIR_ABI,
        },
        ClaimTopicsRegistry: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: CTR_ABI,
        },
        IdentityRegistryStorage: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: IRS_ABI,
        },
        IdentityRegistry: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: IR_ABI,
        },
        OperatorManagement: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: OM_ABI,
        },
        BalanceManagement: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: BM_ABI,
        },
        IdFactory: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: ID_FACTORY_ABI,
        },
        ModularCompliance: {
          address: "0x4e203DDe594b9Ba94fa001E6dD3AfeA47D623094",
          abi: MODULAR_COMPLIANCE_ABI,
        },
        Token: {
          address: "0x108e9fFacca75fb7ec56D5fCC38c5e46883faCa2",
          abi: TOKEN_ABI,
        },
        Identity: {
          address: "0xB3441E4b362F2578870163e9C9b0c58Af9bd1AE7",
          abi: IDENTITY_ABI,
        },
        CountryAllowModule: {
          address: "0x5ebc85bbb279dF5d40E2f1563A0621A472a8EBC5",
          abi: COUNTRY_ALLOW_ABI,
        },
        CountryRestrictModule: {
          address: "0xF856116c787E760606B6ed8285aE4c914E415B62",
          abi: COUNTRY_RESTRICT_ABI,
        },
        TimeTransferModule: {
          address: "0xA7b61FAE94a0935BD52A725D7c74CbeFeC4c0978",
          abi: TIME_TRANSFER_LIMIT_ABI,
        },
        TokenFactory: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: TOKEN_FACTORY_ABI,
        },
        Vault: {
          address: "0x3CcEc1ebC2f654392aC709383Ab18a3129Ce148F",
          abi: VAULT_ABI,
        },
        VaultFactory: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
          abi: VAULT_FACTORY_ABI,
        },
        DVDTransferManager: {
          address: "0x3aBcC74126978188353e740006E0CF788205594B",
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

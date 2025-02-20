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
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: ADMIN_ABI,
        },
        TrustedIssuersRegistry: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: TIR_ABI,
        },
        ClaimTopicsRegistry: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: CTR_ABI,
        },
        IdentityRegistryStorage: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: IRS_ABI,
        },
        IdentityRegistry: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: IR_ABI,
        },
        OperatorManagement: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: OM_ABI,
        },
        BalanceManagement: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: BM_ABI,
        },
        IdFactory: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: ID_FACTORY_ABI,
        },
        ModularCompliance: {
          address: "0x84d53843B0D7C573D58C08f2d4CBe88dc8088B98",
          abi: MODULAR_COMPLIANCE_ABI,
        },
        Token: {
          address: "0x8B8bBc39271E6B0a58387E8F07DEFCb6efEEb9fC",
          abi: TOKEN_ABI,
        },
        Identity: {
          address: "0x28D899FEdd69a84688f68f7ADc5601adAB64b06B",
          abi: IDENTITY_ABI,
        },
        CountryAllowModule: {
          address: "0x3F74FD45c8f5a4231935A577B154C13c9F0a3dFA",
          abi: COUNTRY_ALLOW_ABI,
        },
        CountryRestrictModule: {
          address: "0x07B60af04aeE5d3A3013a4834DB16601cfAF72b5",
          abi: COUNTRY_RESTRICT_ABI,
        },
        TimeTransferModule: {
          address: "0x7A541f14e0F6526Df77Ac820159957B42DD699b3",
          abi: TIME_TRANSFER_LIMIT_ABI,
        },
        TokenFactory: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: TOKEN_FACTORY_ABI,
        },
        Vault: {
          address: "0x2aCD9F2a157b3A69ee8944786D376c1563599d81",
          abi: VAULT_ABI,
        },
        VaultFactory: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
          abi: VAULT_FACTORY_ABI,
        },
        DVDTransferManager: {
          address: "0x5703b761766250D1585891dBf6fD002f5f9D131d",
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

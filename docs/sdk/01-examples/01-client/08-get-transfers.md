---
title: Get DAO Transfers
---

## Get Transfers from DAO's Activity

Gets the list of asset transfers to and from DAOs.
If passed a `daoAddressOrEns`, will only retrieve transfers for that DAO. Otherwise, it returns for all DAOs.

By default, retrieves ETH, DAI, USDC and USDT, on Mainnet).

```ts
import {
  Client,
  Transfer,
  TransferQueryParams,
  TransferSortBy,
  TransferType,
} from "@aragon/sdk-client";
import { SortDirection } from "@aragon/sdk-client-common";
import { context } from "../index";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

const params: TransferQueryParams = {
  daoAddressOrEns: "0x1234567890123456789012345678901234567890", // optional
  sortBy: TransferSortBy.CREATED_AT, // optional
  limit: 10, // optional
  skip: 0, // optional
  direction: SortDirection.ASC, // optional, options: DESC or ASC
  type: TransferType.DEPOSIT, // optional, options: DEPOSIT or WITHDRAW
};

// Get a list of DAO transfers based on params set.
const daoTransfers: Transfer[] | null = await client.methods.getDaoTransfers(
  params,
);
console.log(daoTransfers);
```


Returns:

```json
[
  {
    type: "withdraw",
    tokenType: "erc20",
    token: {
      address: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
      name: "Dai Stablecoin",
      symbol: "DAI",
      decimals: 18,
    },
    amount: 1000000000000000n,
    creationDate: <Date>
    transactionId: "0xdb0f9422b5c3199021481c98a655741ca16119ff8a59571854a94a6f31dad7ba",
    to: "0xc8541aae19c5069482239735ad64fac3dcc52ca2",
    proposalId: "0x1234567890123456789012345678901234567890_0x0"
  },
  {
    type: "deposit",
    tokenType: "native",
    amount: 1000000000000000n,
    creationDate: <Date>
    transactionId: "0xc18b310b2f8cf427d95fa905dc842df2cf999075f18579afbcbdce19f8db0a30",
    from: "0xc8541aae19c5069482239735ad64fac3dcc52ca2",
  },
  {
    type: "deposit",
    tokenType: "erc20",
    token: {
      address: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
      name: "Dai Stablecoin",
      symbol: "DAI",
      decimals: 18,
    },
    amount: 1000000000000000n,
    creationDate: <Date>
    transactionId: "0xdd8fff77c1f3e819d4224f8d02a00583c7e5d55475b8a9d70867aee0d6d16f07",
    from: "0xc8541aae19c5069482239735ad64fac3dcc52ca2",
  }
]
```
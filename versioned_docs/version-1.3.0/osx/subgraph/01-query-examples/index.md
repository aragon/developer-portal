---
title: Query Examples
sidebar_label: Query Examples
---

## Querying in Subgraph

This section contains useful queries for interacting with Aragon subgraphs.

Use these examples as templates to build your own queries and gain insights from the indexed blockchain data.

## DAO Query

The following query retrieves details about a specific DAO and its associated plugins.

```ts
import {gql} from 'graphql-request';

export const QueryDao = gql`
  query Dao($address: ID!) {
    dao(id: $address) {
      id
      subdomain
      metadata
      createdAt
      plugins {
        appliedPreparation {
          pluginAddress
        }
        appliedPluginRepo {
          subdomain
        }
        appliedVersion {
          build
          release {
            release
          }
        }
      }
    }
  }
`;
```

The return

```json
{
  "data": {
    "dao": {
      "id": "0x02bbc496bebc9a06c239670cea663c43cead899f",
      "subdomain": "test",
      "metadata": "ipfs://QmVGCibCLPgqA8eszxQJMzQFcmQAdrkyhTGH6EB5ERivsR",
      "createdAt": "1677584087",
      "plugins": [
        {
          "appliedPreparation": {
            "pluginAddress": "0x404f4bbd06e3a42c70297633e440b11bb083d482"
          },
          "appliedPluginRepo": {
            "subdomain": "multisig"
          },
          "appliedVersion": {
            "build": 1,
            "release": {
              "release": 1
            }
          }
        }
      ]
    }
  }
}
```

## Balances Query

The following query retrieves token balances, including ERC20, ERC721, ERC1155, and native balances.

```ts
import {gql} from 'graphql-request';

export const QueryTokenBalances = gql`
  query TokenBalances(
    $where: TokenBalance_filter!
    $limit: Int!
    $skip: Int!
    $direction: OrderDirection!
    $sortBy: TokenBalance_orderBy!
  ) {
    tokenBalances(
      where: $where
      first: $limit
      skip: $skip
      orderDirection: $direction
      orderBy: $sortBy
    ) {
      lastUpdated
      __typename
      ... on ERC20Balance {
        balance
        token {
          name
          decimals
          symbol
          id
        }
      }
      ... on ERC721Balance {
        token {
          name
          symbol
          id
        }
        tokenIds
      }
      ... on NativeBalance {
        balance
      }
      ... on ERC1155Balance {
        metadataUri
        token {
          id
        }
        balances {
          amount
          id
          tokenId
        }
      }
    }
  }
`;
```

The return

```json
{
  "data": {
    "tokenBalances": [
      {
        "lastUpdated": "1682856167",
        "__typename": "ERC20Balance",
        "balance": "308999000000000004456448",
        "token": {
          "name": "VEGAHVB",
          "decimals": 18,
          "symbol": "VGH",
          "id": "0x63677b9f25431e361f15019637533b4228cdc3ef"
        }
      },
      {
        "lastUpdated": "1682856587",
        "__typename": "ERC20Balance",
        "balance": "499999999999999991611392",
        "token": {
          "name": "42K",
          "decimals": 18,
          "symbol": "42K",
          "id": "0x7604fb940b31c988405847cc2db7a90938b529fc"
        }
      },
      {
        "lastUpdated": "1697108195",
        "__typename": "NativeBalance",
        "balance": "2010000000000000"
      }
    ]
  }
}
```

To learn more about Aragon Subgraph entities and fields, visit the next section, [Reference Guide](../reference-guide/index.md).

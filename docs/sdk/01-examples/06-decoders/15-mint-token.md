---
title: Mint Token
---

## Decode Mint Token Action

Decodes the parameters of a mint token action from the TokenVoting plugin.

```ts
import {
  ContextPlugin,
  IMintTokenParams,
  TokenVotingClient
} from "@aragon/sdk-client";
import { context } from "../index";

// Instantiate a plugin context from the Aragon OSx SDK context.
const contextPlugin: ContextPlugin = ContextPlugin.fromContext(context);
// Instantiate a TokenVoting plugin client.
const tokenVotingClient = new TokenVotingClient(contextPlugin);

const data: Uint8Array = new Uint8Array([12, 56]);

// Decodes the parameters of a mint token action.
const decodeMintTokenParams: IMintTokenParams = tokenVotingClient.decoding.mintTokenAction(data);
console.log({ decodeMintTokenParams });
```


Returns:

```json
{
  address: "0x12345...",
  amount: 10n
}
```
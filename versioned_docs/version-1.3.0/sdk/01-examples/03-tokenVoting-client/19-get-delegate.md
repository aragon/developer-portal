---
title: Get Delegatee
---

## Get the address of the signer delegatee of a specific token

Get the address of the signer delegatee.If the signer has not delegated their voting power, it will return null.

```ts
import { TokenVotingClient } from "@aragon/sdk-client";
import { context } from "../index";

// Instantiate the general purpose client from the Aragon OSx SDK context.

// Create a TokenVoting client.
const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
  context,
);

const tokenAddress = "0x1234567890123456789012345678901234567890"; // token contract adddress

const delegatee = tokenVotingClient.methods.getDelegatee(tokenAddress);

console.log(delegatee);
```


Returns:
  ```ts
    "0x1234567890123456789012345678901234567890" // null if the signer has not delegated their voting power
  ```
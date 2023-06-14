---
title: Addresslist Voting
---

## Actions of the Addresslist Voting Plugin

With an instance of the `AddresslistVotingClient`

```ts
import { AddresslistVotingClient } from "@aragon/sdk-client";
import { context } from "../../index";

// Instantiate a plugin context from the Aragon OSx SDK context

// Instantiates an AddresslistVoting client.
export const addresslistVotingClient = new AddresslistVotingClient(
  context,
);
```


actions can encoded and decoded as demonstrated in the following examples.
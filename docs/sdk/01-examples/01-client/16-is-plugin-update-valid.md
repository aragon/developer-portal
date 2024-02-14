---
title: Check plugin update proposal
---

### Check if a plugin update proposal is valid

Goes though the actions of an `IProposal` compatible proposal and checks that the actions are valid for updating a plugin

```ts
import { Client } from "@aragon/sdk-client";
import { context } from "../index";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

// The Id of the proposal. This is the address of the governance plugin and the proposal number in hexadecimal
// you can find it at the last part of the URL to the proposal for example 
// https://app.aragon.org/#/daos/polygon/0x6c30c1a36ac486456932b2f106053c42443514b2/governance/proposals/0x0cff359a7455de5bb50aa0567517536d3dfe002d_0x10
const proposalId = "0x0cff359a7455de5bb50aa0567517536d3dfe002d_0x10"


// check if a plugin update proposal is valid
const isValid = client.methods.isPluginUpdateProposalValid(proposalId);

console.log(isValid);
```


Returns:
  ```tsx
  {
    isValid: false,
    causes: [
      "invalidRevokePermission",
      "invalidGrantPermission",
    ]
  }
  ```
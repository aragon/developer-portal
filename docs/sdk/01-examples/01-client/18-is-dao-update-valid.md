---
title: Check dao update proposal
---

### Check if a dap update proposal is valid

Goes though the actions of an `IProposal` compatible proposal and checks that the actions are valid for updating a dao

```ts
import { Client } from "@aragon/sdk-client";
import { context } from "../index";
import { DaoAction } from "@aragon/sdk-client-common";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

const actions: DaoAction[] = [
  // your actions
];

// check if a dap update proposal is valid
const isValid = client.methods.isDaoUpdateProposalValid({
  daoAddress: "0x1234567890123456789012345678901234567890",
  actions,
});

console.log(isValid);
```


Returns:
  ```tsx
  {
    isValid: false,
    causes: [
      "invalidImplementation",
    ]
  }
  ```
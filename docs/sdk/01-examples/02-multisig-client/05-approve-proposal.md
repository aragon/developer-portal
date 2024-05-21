---
title: Approve Proposal
---

## Approve a Multisig Proposal

A member of a Multisig plugin is an address that is able to give their approval for a transaction to go through.
This function enables Multisig members to approve a proposal.

```ts
import {
  ApproveMultisigProposalParams,
  ApproveProposalStep,
  MultisigClient,
} from "@aragon/sdk-client";
import { context } from "../index";

// Insantiate a plugin context from the Aragon OSx SDK context.

// Instantiate a Multisig client
const multisigClient = new MultisigClient(context);

const approveParams: ApproveMultisigProposalParams = {
  proposalId: "0x1234567890123456789012345678901234567890_0x0",
  tryExecution: true,
};

const steps = multisigClient.methods.approveProposal(approveParams);

for await (const step of steps) {
  try {
    switch (step.key) {
      case ApproveProposalStep.APPROVING:
        console.log({ txHash: step.txHash });
        break;
      case ApproveProposalStep.DONE:
        break;
    }
  } catch (err) {
    console.error(err);
  }
}
```


Returns:
```tsx
{
  txHash: "0xb1c14a49...3e8620b0f5832d61c"
}
```
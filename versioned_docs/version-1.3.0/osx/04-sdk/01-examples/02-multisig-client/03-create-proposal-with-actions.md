---
title: Create a Proposal with Actions
---

## Create a Multisig Proposal

Creates a proposal with actions whose governance mechanism is the Multisig plugin and its defined configuration.
The actions are what will get executed once the proposal passes.

```ts
import {
  Client,
  CreateMultisigProposalParams,
  MultisigClient,
  ProposalCreationSteps,
  WithdrawParams,
} from "@aragon/sdk-client";
import { ProposalMetadata, TokenType } from "@aragon/sdk-client-common";
import { context } from "../index";

// Instantiate an Aragon OSx SDK client.
const client: Client = new Client(context);

// Insantiate a Multisig plugin client.
const multisigClient: MultisigClient = new MultisigClient(context);

const proposalMetadata: ProposalMetadata = {
  title: "Test Proposal",
  summary: "This is a short description",
  description: "This is a long description",
  resources: [
    {
      name: "Discord",
      url: "https://discord.com/...",
    },
    {
      name: "Website",
      url: "https://website...",
    },
  ],
  media: {
    logo: "https://...",
    header: "https://...",
  },
};

// Pins the metadata to IPFS and gets back an IPFS URI.
const metadataUri: string = await multisigClient.methods.pinMetadata(
  proposalMetadata,
);

// An action the proposal could take. This is only an example of an action. You can find all encoded actions within our encoders section.
const withdrawParams: WithdrawParams = {
  amount: BigInt(10), // amount in wei
  tokenAddress: "0x1234567890123456789012345678901234567890", // ERC20 token's contract address to withdraw
  type: TokenType.ERC20,
  recipientAddressOrEns: "0x1234567890123456789012345678901234567890", // address or ENS name to send the assets to
};

// Encodes the action of withdrawing assets from a given DAO's vault and transfers them over to the recipient address.
const withdrawAction = await client.encoding.withdrawAction(withdrawParams);

const proposalParams: CreateMultisigProposalParams = {
  pluginAddress: "0x1234567890123456789012345678901234567890",
  metadataUri,
  actions: [withdrawAction], // optional - if left as an empty array, no action will be set for the proposal. the action needs to be encoded and will be executed once a proposal passes.
};

// Generates a proposal with the withdraw action as passed in the proposalParams.
const steps = multisigClient.methods.createProposal(proposalParams);

for await (const step of steps) {
  try {
    switch (step.key) {
      case ProposalCreationSteps.CREATING:
        console.log({ txHash: step.txHash });
        break;
      case ProposalCreationSteps.DONE:
        console.log({ proposalId: step.proposalId });
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
{
  proposalId: "0xb1c14a49...3e862_0x0",
}
```
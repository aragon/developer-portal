---
title: Check Voting Rights
---

## Check if an Address Can Vote in a Addresslist Voting proposal

Checks whether an address is able to participate in a DAO proposal created using the Addresslist Voting plugin.

```ts
import {
  AddresslistVotingClient,
  CanVoteParams,
  VoteValues,
} from "@aragon/sdk-client";
import { context } from "../index";

// Instantiate a plugin context from the Aragon OSx SDK context

// Create an AddresslistVoting client
const addresslistVotingClient = new AddresslistVotingClient(context);

const canVoteParams: CanVoteParams = {
  voterAddressOrEns: "0x1234567890123456789012345678901234567890", // the address who's potential to vote you want to check
  proposalId: "0x1234567890123456789012345678901234567890_0x0",
  vote: VoteValues.YES, // this doesn't execute the vote itself, simply checks whether that address can execute that vote. VoteValues can be NO, YES, or ABSTAIN
};

const canVote = await addresslistVotingClient.methods.canVote(canVoteParams);
console.log(canVote);
```


Returns:

```json
true
```
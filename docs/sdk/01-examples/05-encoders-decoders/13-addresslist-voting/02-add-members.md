---
title: Add Members
---

## Add Members from the Addresslist Voting Plugin

Adds a list of addresses to the AddressList plugin so that these new addresses are able to vote in AddresslistVoting proposals.

### Encoding

```ts
import { DaoAction } from "@aragon/sdk-client-common";
import { addresslistVotingClient } from "./index";

const members: string[] = [
  "0x1357924680135792468013579246801357924680",
  "0x2468013579246801357924680135792468013579",
  "0x0987654321098765432109876543210987654321",
];

const pluginAddress = "0x0987654321098765432109876543210987654321"; // the address of the AddresslistVoting plugin contract installed in the DAO

const action: DaoAction = addresslistVotingClient.encoding.addMembersAction(
  pluginAddress,
  members,
);
console.log({ action });
```


Returns:

```json
{ action:
  {
    to: "0x1234567890...",
    value: 0n,
    data: Uint8Array[12,34,45...]
  }
}
```
### Decoding

```ts
const decodedParams: string[] = addresslistVotingClient.decoding
  .addMembersAction(action.data);
console.log({ decodedParams });
```


Returns:

```
{ decodedParams:
  [
    "0x12345...",
    "0x56789...",
    "0x13579..."
  ]
}
```
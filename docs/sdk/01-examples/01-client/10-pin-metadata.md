---
title: Pin Metadata to IPFS
---

## Pins Metadata for a DAO within IPFS

Adds a pin data set into the specified IPFS nodes.
Return an IPFS CID preceded by "ipfs://".

```ts
import { Client, DaoMetadata } from "@aragon/sdk-client";
import { context } from "../index";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

// The Metadata object containing the details of the DAO.
const metadata: DaoMetadata = {
  name: "My DAO",
  description: "This is a description",
  avatar: "",
  links: [{
    name: "Web site",
    url: "https://...",
  }],
};

// Pin the metadata in IPFS.
const metadataUri = await client.methods.pinMetadata(metadata);
console.log(metadataUri);
```


Returns:

```json
  "ipfs://Qm..."
```
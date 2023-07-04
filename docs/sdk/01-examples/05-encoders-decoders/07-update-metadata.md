---
title: Update DAO Metadata
---

## Update a DAO's Metadata

Updates the metadata of a given DAO.

### Encoding

```ts
import { Client, DaoMetadata } from "@aragon/sdk-client";
import { DaoAction } from "@aragon/sdk-client-common";
import { context } from "../index";

// Instantiates an Aragon OSx SDK client.
const client: Client = new Client(context);

const metadataParams: DaoMetadata = {
  name: "New Name",
  description: "New description",
  avatar: "https://theavatar.com/image.jpg",
  links: [
    {
      url: "https://discord.com/...",
      name: "Discord"
    },
    {
      url: "https://twitter.com/...",
      name: "Twitter"
    }
  ]
};

const daoAddressOrEns: string = "0x123458235832745982839878932332423"; // or my-dao.dao.eth

// Pins the metadata in IPFS and returns the IPFS URI.
const ipfsUri: string = await client.methods.pinMetadata(metadataParams);

// Update the metadata of a given DAO.
const action: DaoAction = await client.encoding.updateDaoMetadataAction(
  daoAddressOrEns,
  ipfsUri
);
console.log({ action });
```


Returns:

```json
{ action:
  {
    to: "0x123123123...",
    value: 0n,
    data: Uint8Array[12,34,45...]
  }
}
```

### Decoding

```ts
// Decodes the update metadata action.
const decodedParams: DaoMetadata = await client.decoding.updateDaoMetadataAction(
  action.data
);
console.log({ decodedParams });
```


Returns:

```json
{
  "name":"New Name",
  "description":"New description",
  "avatar":"https://theavatar.com/image.jpg",
  "links":[
    {
      "url":"https://discord.com/...",
      "name":"Discord"
    },
    {
      "url":"https://twitter.com/...",
      "name":"Twitter"
    }
  ]
}
```

```ts

```


#### Raw Action

Decode an update metadata action and expect an IPFS URI containing the CID of the metadata.

```ts
// Decodes the parameters of an update metadata raw action.
const decodedParamsRaw: string = client.decoding.updateDaoMetadataRawAction(
  action.data
);
console.log({ decodedParamsRaw });
```


Returns:

```
  { decodedParamsRaw: "ipfs://Qm..." }
```
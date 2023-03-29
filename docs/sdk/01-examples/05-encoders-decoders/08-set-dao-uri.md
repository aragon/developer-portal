---
title: Set DAO URI
---

## Set the DAO URI

Encodes the action of setting the DAO's URI.

### Encoding

```ts
import { Client, DaoAction } from "@aragon/sdk-client";
import { context } from "../index";

// Instantiates an Aragon OSx SDK client.
const client: Client = new Client(context);

const daoAddressOrEns: string = "0x123123123123123123123123123123123123";

const daoUri: string = "https://the.dao/uri"; // the URI to be defined for the DAO.

const action: DaoAction = client.encoding.setDaoUriAction(
  daoAddressOrEns,
  daoUri
);
console.log({ action });
```


Returns:

```json
  {
    to: "0x123123123...",
    value: 0n,
    data: Uint8Array[12,34,45...]
  }
```

### Decoding

Decodes the action of setting a DAO's URI

```ts
const decodedParams: string = client.decoding.setDaoUriAction(action.data);
console.log({ decodedParams });
```


Returns:

```
  { decodedParams: "https://the.dao.uri" }
```
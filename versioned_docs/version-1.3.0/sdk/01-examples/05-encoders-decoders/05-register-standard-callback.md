---
title: Register Callback
---

## Register a New Standard Callback

Register a new standard callback for the DAO.

### Encoding

```ts
import { Client, RegisterStandardCallbackParams } from "@aragon/sdk-client";
import { DaoAction } from "@aragon/sdk-client-common";
import { context } from "../index";

// Instantiates a general purpose Client from the Aragon OSx SDK context.
const client: Client = new Client(context);

const params = {
  interfaceId: "0x3134r1er213740123741207831238410972347",
  callbackSelector: "0x382741239807410892375182734892",
  magicNumber: "0x12192304781237401321329450123321",
};

const dao: string = "0x123123123123123123123123123123123123";

const action: DaoAction = client.encoding.registerStandardCallbackAction(
  dao,
  params,
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

```ts

```


### Decoding

```ts
const decodedParams: RegisterStandardCallbackParams = client.decoding
  .registerStandardCallbackAction(action.data);
console.log({ decodedParams });
```


Returns:

```
{ decodedParams:
  {
    interfaceId: "0x12345678",
    callbackSelector: "0x23456789",
    magicNumber: "0x34567890"
  }
}
```
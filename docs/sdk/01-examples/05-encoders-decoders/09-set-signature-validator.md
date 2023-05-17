---
title: Set Signature Validator
---

## Set the Signature Validator

Encodes the action of setting the signatura validator of the DAO.

### Encoding

```ts
import { Client, DaoAction } from "@aragon/sdk-client";
import { context } from "../index";

// Instantiates an Aragon OSx SDK client.
const client: Client = new Client(context);

const daoAddressOrEns: string = "0x123123123123123123123123123123123123";
const signatureValidator: string = "0x1234567890123456789012345678901234567890";

const action: DaoAction = client.encoding.setSignatureValidatorAction(
  daoAddressOrEns,
  signatureValidator,
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
const decodedParams: string = client.decoding.setSignatureValidatorAction(
  action.data,
);
console.log({ decodedParams });
```


Returns:

```
  { decodedParams: "0x1234567890123456789012345678901234567890" }
```
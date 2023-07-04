---
title: Grant Permissions
---

## Grant a Permission

Grants permission with the name (`permission`) to an address (`who`) to perform on a target contract (`where`).

### Encoding

```ts
import {
  Client,
  GrantPermissionDecodedParams,
  GrantPermissionParams,
  Permissions,
} from "@aragon/sdk-client";
import { DaoAction } from "@aragon/sdk-client-common";
import { context } from "../index";

// Instantiates an Aragon OSx SDK client.
const client: Client = new Client(context);

const params: GrantPermissionParams = {
  who: "0x1234567890123456789012345678901234567890",
  where: "0x1234567890123456789012345678901234567890",
  permission: Permissions.UPGRADE_PERMISSION,
};

const daoAddress: string = "0x1234567890123456789012345678901234567890";

const action: DaoAction = await client.encoding.grantAction(daoAddress, params);
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
// Decodes the data of a grant permission action.
const decodedParams: GrantPermissionDecodedParams = client.decoding
  .grantAction(
    action.data,
  );
console.log({ decodedParams });
```


Returns:

```json
{ decodedParams:
  {
    who: "0x1234567890...",
    where: "0x1234567890...",
    permission: "UPGRADE_PERMISSION",
    permissionId: "0x12345..."
  }
}
```
---
title: Revoke Permissions
---

## Revoke a Permission

Revokes a permission to a given address (`who`) to perform an action on a contract (`where`).

### Encoding

```ts
import {
  Client,
  RevokePermissionDecodedParams,
  RevokePermissionParams,
  Permissions,
} from "@aragon/sdk-client";
import { DaoAction } from "@aragon/sdk-client-common";
import { context } from "../index";

// Instantiates an Aragon OSx SDK client.
const client: Client = new Client(context);

const params: RevokePermissionParams = {
  who: "0x1234567890123456789012345678901234567890",
  where: "0x1234567890123456789012345678901234567890",
  permission: Permissions.UPGRADE_PERMISSION, // other options: SET_METADATA_PERMISSION, EXECUTE_PERMISSION, WITHDRAW_PERMISSION, SET_SIGNATURE_VALIDATOR_PERMISSION, SET_TRUSTED_FORWARDER_PERMISSION, ROOT_PERMISSION, CREATE_VERSION_PERMISSION, REGISTER_PERMISSION, REGISTER_DAO_PERMISSION, REGISTER_ENS_SUBDOMAIN_PERMISSION, MINT_PERMISSION, MERKLE_MINT_PERMISSION, MODIFY_ALLOWLIST_PERMISSION, SET_CONFIGURATION_PERMISSION
};

const daoAddress: string = "0x1234567890123456789012345678901234567890";

// Revokes a permission to a given address to perform an action on a contract.
const action: DaoAction = await client.encoding.revokeAction(
  daoAddress,
  params,
);
console.log({ action });
```


Returns:

```json
{ action:
  {
    to: "0x1234567890...",
    value: 0n;
    data: Uint8Array[12,34,45...]
  }
}
```

### Decoding

```ts
// Decodes the action of a revoke permission transaction.
const decodedParams: RevokePermissionDecodedParams = client.decoding
  .revokeAction(
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
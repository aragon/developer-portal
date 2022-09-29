## Aragon Core

###  contract `BulkPermissionsLib`

A library containing objects for bulk permission processing.

####  enum `Operation`

```solidity
enum Operation {
  Grant,
  Revoke,
  MakeImmutable
}
```

#### public struct `Item`

```solidity
struct Item {
  enum BulkPermissionsLib.Operation operation;
  bytes32 permissionID;
  address who;
}
```


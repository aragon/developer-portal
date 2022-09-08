## Aragon Core

###  contract `BulkPermissionsLib`

A library containing objects for bulk permission processing.

####  enum `Operation`

```solidity
enum Operation {
  Grant,
  Revoke,
  Freeze,
  GrantWithOracle
}
```

#### public struct `ItemSingleTarget`

```solidity
struct ItemSingleTarget {
  enum BulkPermissionsLib.Operation operation;
  address who;
  bytes32 permissionId;
}
```

#### public struct `ItemMultiTarget`

```solidity
struct ItemMultiTarget {
  enum BulkPermissionsLib.Operation operation;
  address where;
  address who;
  address oracle;
  bytes32 permissionId;
}
```


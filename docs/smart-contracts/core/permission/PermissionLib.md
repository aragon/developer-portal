## Aragon Core

###  contract `PermissionLib`

A library containing objects for permission processing.

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
  enum PermissionLib.Operation operation;
  address who;
  bytes32 permissionId;
}
```

#### public struct `ItemMultiTarget`

```solidity
struct ItemMultiTarget {
  enum PermissionLib.Operation operation;
  address where;
  address who;
  address oracle;
  bytes32 permissionId;
}
```


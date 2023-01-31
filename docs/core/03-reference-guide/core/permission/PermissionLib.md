## Aragon Core

###  contract `PermissionLib`

A library containing objects for permission processing.

####  enum `Operation`

```solidity
enum Operation {
  Grant,
  Revoke,
  GrantWithCondition
}
```

#### public struct `SingleTargetPermission`

```solidity
struct SingleTargetPermission {
  enum PermissionLib.Operation operation;
  address who;
  bytes32 permissionId;
}
```

#### public struct `MultiTargetPermission`

```solidity
struct MultiTargetPermission {
  enum PermissionLib.Operation operation;
  address where;
  address who;
  address condition;
  bytes32 permissionId;
}
```


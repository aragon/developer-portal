## Aragon Core

###  contract `AragonPlugin`

An abstract contract to inherit from when creating a non-upgradable plugin.

#### internal modifier `auth`

```solidity
modifier auth(bytes32 _permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _permissionId | bytes32 | The hash of the permission identifier |

*Auth modifier used in all components of a DAO to check the permissions.*


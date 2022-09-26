## Aragon Core

###  contract `IPermissionOracle`

This interface can be implemented to support more customary permissions depending on on- or off-chain state, e.g., by querying token ownershop or a secondary oracle, respectively.

#### external function `isGranted`

This method is used to check if a call is permitted.

```solidity
function isGranted(address _where, address _who, bytes32 _permissionId, bytes _data) external view returns (bool allowed) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract. |
| _who | address | The address (EOA or contract) for which the permission are checked. |
| _permissionId | bytes32 | The permission identifier. |
| _data | bytes | Optional data passed to the `PermissionOracle` implementation. |
| **Output** | |
| allowed | bool | Returns true if the call is permitted. |


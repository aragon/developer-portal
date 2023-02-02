## Aragon Core

###  error `DaoUnauthorized`

Thrown if a call is unauthorized in the associated DAO.

```solidity
error DaoUnauthorized(address dao, address here, address where, address who, bytes32 permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The associated DAO. |
| here | address | The context in which the authorization reverted. |
| where | address | The contract requiring the permission. |
| who | address | The address (EOA or contract) missing the permission. |
| permissionId | bytes32 | The permission identifier. |

### internal function `freeFunction`

Free function to to be used by the auth modifier to check permissions on a target contract via the associated DAO.

```solidity
freeFunction _auth(contract IDAO _dao, address addressThis, address _msgSender, bytes32 _permissionId, bytes _msgData) internal view 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO |  |
| addressThis | address |  |
| _msgSender | address |  |
| _permissionId | bytes32 | The permission identifier. |
| _msgData | bytes |  |


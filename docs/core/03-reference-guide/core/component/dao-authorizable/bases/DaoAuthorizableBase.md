## Aragon Core

###  contract `DaoAuthorizableBase`

An abstract contract providing a meta transaction compatible modifier to authorize function calls through an associated DAO.

#### internal variable `dao`

The associated DAO managing the permissions of inheriting contracts.

```solidity
contract IDAO dao 
```

#### external function `getDAO`

Returns the DAO contract.

```solidity
function getDAO() external view returns (contract IDAO) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | contract IDAO | IDAO The DAO contract. |

#### internal modifier `auth`

A modifier to be used to check permissions on a target contract via the associated DAO.

```solidity
modifier auth(bytes32 _permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _permissionId | bytes32 | The permission identifier required to call the method this modifier is applied to. |


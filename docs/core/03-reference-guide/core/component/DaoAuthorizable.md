## Aragon Core

###  contract `DaoAuthorizable`

An abstract contract providing a meta transaction compatible modifier to authorize function calls through an associated DAO.
This contract provides an `auth` modifier that can be applied to functions in inheriting contracts. The permission to call these functions is managed by the associated DAO.

*Make sure to call `__DaoAuthorizable_init` during initialization of the inheriting contract.
     This contract is compatible with meta transactions through OZ's `ContextUpgradable`.*

#### internal variable `dao`

The associated DAO managing the permissions of inheriting contracts.

```solidity
contract IDAO dao 
```

####  error `DaoUnauthorized`

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

#### internal function `__DaoAuthorizable_init`

Initializes the contract by setting the associated DAO.

```solidity
function __DaoAuthorizable_init(contract IDAO _dao) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The associated DAO address. |

#### internal modifier `auth`

A modifier to be used to check permissions on a target contract via the associated DAO.

```solidity
modifier auth(bytes32 _permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _permissionId | bytes32 | The permission identifier required to call the method this modifier is applied to. |


## Aragon Core

### contract `DAOPermissioned`

An abstract contract providing a meta transaction compatible modifier to make functions permissioned through an associated DAO.
This contract provides an `auth` modifier that can be applied to functions in inheriting contracts. The permission to call these functions is managed by the associated DAO.

_Make sure to call `__DAOPermissioned_init` during initialization of the inheriting contract.
This contract is compatible with meta transactions through OZ's `ContextUpgradeable`._

#### internal variable `dao`

The associated DAO managing the permissions of inheriting contracts.

```solidity
contract IDAO dao
```

#### error `DAOPermissionMissing`

Thrown if a permission is missing.

```solidity
error DAOPermissionMissing(address dao, address here, address where, address who, bytes32 permissionID)
```

| Input        | Type    | Description                                           |
| :----------- | ------- | ----------------------------------------------------- |
| dao          | address | The associated DAO.                                   |
| here         | address | The context in which the authorization reverted.      |
| where        | address | The contract requiring the permission.                |
| who          | address | The address (EOA or contract) missing the permission. |
| permissionID | bytes32 | The permission identifier.                            |

#### internal function `__DAOPermissioned_init`

Initializes the contract by setting the associated DAO.

```solidity
function __DAOPermissioned_init(contract IDAO _dao) internal virtual
```

| Input | Type          | Description                 |
| :---- | ------------- | --------------------------- |
| \_dao | contract IDAO | The associated DAO address. |

#### internal modifier `auth`

A modifier to be used to check permissions on a target contract via the associated DAO.

```solidity
modifier auth(bytes32 _permissionID)
```

| Input          | Type    | Description                                                                        |
| :------------- | ------- | ---------------------------------------------------------------------------------- |
| \_permissionID | bytes32 | The permission identifier required to call the method this modifier is applied to. |

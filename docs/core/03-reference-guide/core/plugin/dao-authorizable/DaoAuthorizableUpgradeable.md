## Aragon Core

###  contract `DaoAuthorizableUpgradeable`

An abstract contract providing a meta-transaction compatible modifier for upgradeable contracts to authorize function calls through an associated DAO.

*Make sure to call `__DaoAuthorizableUpgradeable_init` during initialization of the inheriting contract.*

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

#### internal function `__DaoAuthorizableUpgradeable_init`

Initializes the contract by setting the associated DAO.

```solidity
function __DaoAuthorizableUpgradeable_init(contract IDAO _dao) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The associated DAO address. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


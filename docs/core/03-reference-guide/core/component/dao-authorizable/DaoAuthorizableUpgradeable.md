## Aragon Core

###  contract `DaoAuthorizableUpgradeable`

An abstract contract providing a meta-transaction compatible modifier for upgradeable contracts to authorize function calls through an associated DAO.

*Make sure to call `__DaoAuthorizableUpgradeable_init` during initialization of the inheriting contract.*

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
uint256[50] __gap 
```


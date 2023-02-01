## Aragon Core

###  contract `DaoAuthorizableCloneable`

An abstract contract providing a meta-transaction compatible modifier for clonable contracts to authorize function calls through an associated DAO.

*Make sure to call `__DaoAuthorizableCloneable_init` during initialization of the inheriting contract.
     This contract is compatible with meta transactions through OZ's `Context`.*

#### internal function `__DaoAuthorizableCloneable_init`

Initializes the contract by setting the associated DAO.

```solidity
function __DaoAuthorizableCloneable_init(contract IDAO _dao) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The associated DAO address. |


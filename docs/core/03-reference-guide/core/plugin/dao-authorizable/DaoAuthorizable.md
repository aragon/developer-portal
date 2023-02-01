## Aragon Core

###  contract `DaoAuthorizable`

An abstract contract providing a meta transaction compatible modifier for constructable contracts instantiated via the `new` keyword to authorize function calls through an associated DAO.

#### internal function `constructor`

Constructs the contract by setting the associated DAO.

```solidity
constructor(contract IDAO _dao) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The associated DAO address. |


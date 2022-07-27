## Aragon Core

###  contract `DAORegistry`

This contract provides the possiblity to register a DAO.

#### public variable `REGISTER_DAO_PERMISSION_ID`

```solidity
bytes32 REGISTER_DAO_PERMISSION_ID 
```

####  event `DAORegistered`

Emitted when a new DAO is registered

```solidity
event DAORegistered(contract IDAO dao, address creator, string name) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | contract IDAO | The address of the DAO contract |
| creator | address | The address of the creator |
| name | string | The name of the DAO |

#### public function `initialize`

Initializes the contract

```solidity
function initialize(contract IDAO _managingDao) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _managingDao | contract IDAO | the managing DAO address |

#### external function `register`

Registers a DAO by its address

```solidity
function register(string name, contract IDAO dao, address creator) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| name | string | The name of the DAO |
| dao | contract IDAO | The address of the DAO contract |
| creator | address | The address of the creator |

*A name is unique within the Aragon DAO framework and can get stored here*


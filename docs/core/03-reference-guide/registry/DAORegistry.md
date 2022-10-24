## Aragon Core

###  contract `DAORegistry`

This contract provides the possiblity to register a DAO.

#### public variable `REGISTER_DAO_PERMISSION_ID`

The ID of the permission required to call the `register` function.

```solidity
bytes32 REGISTER_DAO_PERMISSION_ID 
```

#### private variable `subdomainRegistrar`

The ENS subdomain registrar registering the DAO names.

```solidity
contract ENSSubdomainRegistrar subdomainRegistrar 
```

####  error `EmptyDaoName`

```solidity
error EmptyDaoName() 
```

####  event `DAORegistered`

Emitted when a new DAO is registered.

```solidity
event DAORegistered(address dao, address creator, string name) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The address of the DAO contract. |
| creator | address | The address of the creator. |
| name | string | The DAO name. |

#### public function `initialize`

Initializes the contract.

```solidity
function initialize(contract IDAO _managingDao, contract ENSSubdomainRegistrar _subdomainRegistrar) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _managingDao | contract IDAO | the managing DAO address. |
| _subdomainRegistrar | contract ENSSubdomainRegistrar |  |

#### external function `register`

Registers a DAO by its address.

```solidity
function register(contract IDAO _dao, address _creator, string _name) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The address of the DAO contract. |
| _creator | address | The address of the creator. |
| _name | string | The DAO name. |

*A name is unique within the Aragon DAO framework and can get stored here.*

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


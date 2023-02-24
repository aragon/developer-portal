## Aragon OSx

###  contract `DAORegistry`

This contract provides the possiblity to register a DAO.

#### public variable `REGISTER_DAO_PERMISSION_ID`

The ID of the permission required to call the `register` function.

```solidity
bytes32 REGISTER_DAO_PERMISSION_ID 
```

#### public variable `subdomainRegistrar`

The ENS subdomain registrar registering the DAO subdomains.

```solidity
contract ENSSubdomainRegistrar subdomainRegistrar 
```

####  error `InvalidDaoSubdomain`

Thrown if the DAO subdomain doesn't match the regex `[0-9a-z\-]`

```solidity
error InvalidDaoSubdomain(string subdomain) 
```

####  event `DAORegistered`

Emitted when a new DAO is registered.

```solidity
event DAORegistered(address dao, address creator, string subdomain) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The address of the DAO contract. |
| creator | address | The address of the creator. |
| subdomain | string | The DAO subdomain. |

#### public function `constructor`

```solidity
constructor() public 
```

*Used to disallow initializing the implementation contract by an attacker for extra safety.*

#### external function `initialize`

Initializes the contract.

```solidity
function initialize(contract IDAO _managingDao, contract ENSSubdomainRegistrar _subdomainRegistrar) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _managingDao | contract IDAO | the managing DAO address. |
| _subdomainRegistrar | contract ENSSubdomainRegistrar | The `ENSSubdomainRegistrar` where `ENS` subdomain will be registered. |

#### external function `register`

Registers a DAO by its address.

```solidity
function register(contract IDAO dao, address creator, string subdomain) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | contract IDAO | The address of the DAO contract. |
| creator | address | The address of the creator. |
| subdomain | string | The DAO subdomain. |

*A subdomain is unique within the Aragon DAO framework and can get stored here.*

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


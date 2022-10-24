## Aragon Core

###  contract `PluginRepoRegistry`

This contract maintains an address-based registery of plugin repositories in the Aragon App DAO framework.

#### public variable `REGISTER_PLUGIN_REPO_PERMISSION_ID`

The ID of the permission required to call the `register` function.

```solidity
bytes32 REGISTER_PLUGIN_REPO_PERMISSION_ID 
```

#### public variable `subdomainRegistrar`

The ENS subdomain registrar registering the PluginRepo names.

```solidity
contract ENSSubdomainRegistrar subdomainRegistrar 
```

####  event `PluginRepoRegistered`

Emitted if a new plugin repository is registered.

```solidity
event PluginRepoRegistered(string name, address pluginRepo) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| name | string | The name of the plugin repository. |
| pluginRepo | address | The address of the plugin repository. |

#### public function `initialize`

Initializes the contract by setting calling the `InterfaceBasedRegistry` base class initialize method.

```solidity
function initialize(contract IDAO _dao, contract ENSSubdomainRegistrar _subdomainRegistrar) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The address of the managing DAO. |
| _subdomainRegistrar | contract ENSSubdomainRegistrar |  |

#### external function `registerPluginRepo`

Registers a plugin repository with a name and address.

```solidity
function registerPluginRepo(string name, address registrant) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| name | string | The name of the PluginRepo. |
| registrant | address | The address of the PluginRepo contract. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


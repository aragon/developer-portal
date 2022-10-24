## Aragon Core

###  contract `AragonPluginRegistry`

This contract maintains an address-based registery of plugin repositories in the Aragon App DAO framework.

#### public variable `REGISTER_PERMISSION_ID`

The ID of the permission required to call the `register` function.

```solidity
bytes32 REGISTER_PERMISSION_ID 
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
function initialize(contract IDAO _dao) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The address of the managing DAO. |

#### external function `register`

Registers a plugin repository with a name and address.

```solidity
function register(string name, address registrant) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| name | string | The name of the PluginRepo. |
| registrant | address | The address of the PluginRepo contract. |


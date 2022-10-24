## Aragon Core

###  contract `DAOFactory`

This contract is used to create a DAO.

#### public variable `daoBase`

The DAO base contract, to be used for creating new `DAO`s via `createERC1967Proxy` function.

```solidity
address daoBase 
```

#### public variable `daoRegistry`

The DAO registry listing the `DAO` contracts created via this contract.

```solidity
contract DAORegistry daoRegistry 
```

#### public variable `pluginSetupProcessor`

The plugin setup processor for installing plugins on the newly created `DAO`s.

```solidity
contract PluginSetupProcessor pluginSetupProcessor 
```

#### public struct `DAOSettings`

```solidity
struct DAOSettings {
  address trustedForwarder;
  string name;
  bytes metadata;
}
```

#### public struct `PluginSettings`

```solidity
struct PluginSettings {
  address pluginSetup;
  contract PluginRepo pluginSetupRepo;
  bytes data;
}
```

####  error `NoPluginProvided`

Thrown if `PluginSettings` array is empty, and no plugin is provided.

```solidity
error NoPluginProvided() 
```

#### public function `constructor`

The constructor setting the registry and plugin setup processor and creating the base contracts for the factory.

```solidity
constructor(contract DAORegistry _registry, contract PluginSetupProcessor _pluginSetupProcessor) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _registry | contract DAORegistry | The DAO registry to register the DAO by its name. |
| _pluginSetupProcessor | contract PluginSetupProcessor | The addres of PluginSetupProcessor. |

#### external function `createDao`

Creates a new DAO and setup a number of plugins.

```solidity
function createDao(struct DAOFactory.DAOSettings _daoSettings, struct DAOFactory.PluginSettings[] _pluginSettings) external returns (contract DAO createdDao) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _daoSettings | struct DAOFactory.DAOSettings | The DAO settings containing `trustedForwarder`, `name` and `metadata`. |
| _pluginSettings | struct DAOFactory.PluginSettings[] | The list of plugin settings that will be installed after the DAO creation, containing `pluginSetup`, `pluginSetupRepo`, and `data`. |

#### internal function `_createDAO`

Creates a new DAO, and initialize it with this contract as intial owner.

```solidity
function _createDAO(struct DAOFactory.DAOSettings _daoSettings) internal returns (contract DAO dao) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _daoSettings | struct DAOFactory.DAOSettings | The trusted forwarder, name and metadata hash of the DAO it creates. |

#### internal function `_setDAOPermissions`

Sets the required permissions for the new DAO.

```solidity
function _setDAOPermissions(contract DAO _dao) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract DAO | The DAO instance just created. |


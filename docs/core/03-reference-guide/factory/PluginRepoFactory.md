## Aragon Core

###  contract `PluginRepoFactory`

This contract creates `PluginRepo` proxies and registers them on an `AragonPluginRegistry` contract.

#### public variable `aragonPluginRegistry`

The Aragon plugin registry contract.

```solidity
contract AragonPluginRegistry aragonPluginRegistry 
```

#### public variable `pluginRepoBase`

The address of the `PluginRepo` base contract.

```solidity
address pluginRepoBase 
```

####  error `EmptyPluginRepoName`

```solidity
error EmptyPluginRepoName() 
```

#### public function `constructor`

Initializes the addresses of the Aragon plugin registry and `PluginRepo` base contract to proxy to.

```solidity
constructor(contract AragonPluginRegistry _aragonPluginRegistry) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _aragonPluginRegistry | contract AragonPluginRegistry | The aragon plugin registry address. |

#### external function `createPluginRepo`

Creates a plugin repository proxy pointing to the `pluginRepoBase` implementation and registers it in the Aragon plugin registry.

```solidity
function createPluginRepo(string _name, address _initialOwner) external returns (contract PluginRepo) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _name | string | The plugin repository name. |
| _initialOwner | address | The plugin maintainer address. TODO: Rethink if it needs permission to prevent it from getting polluted, same for `createPluginRepoWithVersion`. |

#### external function `createPluginRepoWithVersion`

Creates and registers a named `PluginRepo` and publishes an initial version.

```solidity
function createPluginRepoWithVersion(string _name, uint16[3] _initialSemanticVersion, address _pluginFactory, bytes _contentURI, address _maintainer) external returns (contract PluginRepo pluginRepo) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _name | string | The plugin repository name. |
| _initialSemanticVersion | uint16[3] | The semantic version for the new plugin repository version. |
| _pluginFactory | address | The plugin factory contract associated with the plugin version. |
| _contentURI | bytes | The external URI for fetching the new version's content. |
| _maintainer | address | The plugin maintainer address. |

*The initial owner of the new PluginRepo is `address(this)`, afterward ownership will be transferred to the address `_maintainer`.*

#### internal function `setPluginRepoPermissions`

Set the final permissions for the published plugin repository maintainer. All permissions are revoked from the plugin factory and granted to the specified plugin maintainer.

```solidity
function setPluginRepoPermissions(contract PluginRepo pluginRepo, address maintainer) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| pluginRepo | contract PluginRepo | The plugin repository instance just created. |
| maintainer | address | The plugin maintainer address. |

*The plugin maintainer is granted the `CREATE_VERSION_PERMISSION_ID`, `UPGRADE_PERMISSION_ID`, and `ROOT_PERMISSION_ID`.*

#### internal function `_createPluginRepo`

Internal method creating a `PluginRepo` via the [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) proxy pattern from the provided base contract and registering it in the Aragon plugin registry.

```solidity
function _createPluginRepo(string _name, address _initialOwner) internal returns (contract PluginRepo pluginRepo) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _name | string | The plugin repository name. |
| _initialOwner | address | The initial owner address. |


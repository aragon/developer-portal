## Description

This contract creates `PluginRepo` proxies and registers them on an `PluginRepoRegistry` contract.

## Implementation

### public variable pluginRepoRegistry

The Aragon plugin registry contract.

```solidity
contract PluginRepoRegistry pluginRepoRegistry
```

### public variable pluginRepoBase

The address of the `PluginRepo` base contract.

```solidity
address pluginRepoBase
```

### public function constructor

Initializes the addresses of the Aragon plugin registry and `PluginRepo` base contract to proxy to.

```solidity
constructor(contract PluginRepoRegistry _pluginRepoRegistry) public
```

| Input                 | Type                          | Description                         |
| :-------------------- | ----------------------------- | ----------------------------------- |
| `_pluginRepoRegistry` | `contract PluginRepoRegistry` | The aragon plugin registry address. |

### external function createPluginRepo

Creates a plugin repository proxy pointing to the `pluginRepoBase` implementation and registers it in the Aragon plugin registry.

```solidity
function createPluginRepo(string _subdomain, address _initialOwner) external returns (contract PluginRepo)
```

| Input           | Type      | Description                      |
| :-------------- | --------- | -------------------------------- |
| `_subdomain`    | `string`  | The plugin repository subdomain. |
| `_initialOwner` | `address` | The plugin maintainer address.   |

### external function createPluginRepoWithFirstVersion

Creates and registers a `PluginRepo` with an ENS subdomain and publishes an initial version `1.0`.

```solidity
function createPluginRepoWithFirstVersion(string _subdomain, address _pluginSetup, address _maintainer, bytes _releaseMetadata, bytes _buildMetadata) external returns (contract PluginRepo pluginRepo)
```

| Input              | Type      | Description                                                                                                                                 |
| :----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `_subdomain`       | `string`  | The plugin repository subdomain.                                                                                                            |
| `_pluginSetup`     | `address` | The plugin factory contract associated with the plugin version.                                                                             |
| `_maintainer`      | `address` | The maintainer of the plugin repo. This address has permission to update metadata, upgrade the repo logic, and manage the repo permissions. |
| `_releaseMetadata` | `bytes`   | The release metadata URI.                                                                                                                   |
| `_buildMetadata`   | `bytes`   | The build metadata URI.                                                                                                                     |

_After the creation of the `PluginRepo` and release of the first version by the factory, ownership is transferred to the `_maintainer` address._

### internal function \_setPluginRepoPermissions

Set the final permissions for the published plugin repository maintainer. All permissions are revoked from the plugin factory and granted to the specified plugin maintainer.

```solidity
function _setPluginRepoPermissions(contract PluginRepo pluginRepo, address maintainer) internal
```

| Input        | Type                  | Description                                  |
| :----------- | --------------------- | -------------------------------------------- |
| `pluginRepo` | `contract PluginRepo` | The plugin repository instance just created. |
| `maintainer` | `address`             | The plugin maintainer address.               |

_The plugin maintainer is granted the `MAINTAINER_PERMISSION_ID`, `UPGRADE_REPO_PERMISSION_ID`, and `ROOT_PERMISSION_ID`._

### internal function \_createPluginRepo

Internal method creating a `PluginRepo` via the [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) proxy pattern from the provided base contract and registering it in the Aragon plugin registry.

```solidity
function _createPluginRepo(string _subdomain, address _initialOwner) internal returns (contract PluginRepo pluginRepo)
```

| Input           | Type      | Description                      |
| :-------------- | --------- | -------------------------------- |
| `_subdomain`    | `string`  | The plugin repository subdomain. |
| `_initialOwner` | `address` | The initial owner address.       |

_Passing an empty `_subdomain` will cause the transaction to revert._

<!--CONTRACT_END-->

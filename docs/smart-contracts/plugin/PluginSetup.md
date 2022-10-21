## Aragon Core

###  contract `PluginSetup`

An abstract contract that developers have to inherit from to write the setup of a plugin.

#### external function `prepareUpdateDataABI`

The ABI required to decode the `bytes` data in `prepareUpdate()`.

```solidity
function prepareUpdateDataABI() external view virtual returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

*The empty implemention is provided here so that this doesn't need to be overriden and implemented. This is relevant, for example, for the initial version of a plugin for which no update exists.*

#### external function `prepareUpdate`

Prepares the update of a plugin.

```solidity
function prepareUpdate(address _dao, address _plugin, address[] _currentHelpers, uint16[3] _oldVersion, bytes _data) external virtual returns (address[] updatedHelpers, bytes initData, struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the updating DAO. |
| _plugin | address | The address of the `Plugin` contract to update from. |
| _currentHelpers | address[] | The address array of all current helpers (contracts or EOAs) associated with the plugin to update from. |
| _oldVersion | uint16[3] | The semantic version of the plugin to update from. |
| _data | bytes | The `bytes` encoded data containing the input parameters for the update as specified in the `prepareUpdateDataABI()` function. |
| **Output** | |
| updatedHelpers | address[] | The address array of helpers (contracts or EOAs) associated with the plugin after the update. |
| **Output** | |
| initData | bytes | The initialization data to be passed to upgradeable contracts when the update is applied in the `PluginSetupProcessor`. |
| **Output** | |
| permissions | struct PermissionLib.ItemMultiTarget[] | The array of multi-targeted permission operations to be applied by the `PluginSetupProcessor` to the updating DAO. |

*The array of `_currentHelpers` has to be specified in the same order as they were returned from previous setups preparation steps (the latest `prepareInstallation` or `prepareUpdate` step that has happend) on which this update is prepared for.*

#### internal function `createERC1967Proxy`

A convenience function to create an [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) proxy contract pointing to an implementation and being associated to a DAO.

```solidity
function createERC1967Proxy(address _implementation, bytes _data) internal returns (address payable proxy) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _implementation | address | The address of the implementation contract to which the proxy is pointing to. |
| _data | bytes | The data to initialize the storage of the proxy contract. |
| **Output** | |
| proxy | address payable | The address of the created proxy contract. |

#### public function `supportsInterface`

Checks if this or the parent contract supports an interface by its ID.

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| interfaceId | bytes4 | The ID of the interace. |
| **Output** | |
| [0] | bool | bool Returns true if the interface is supported. |


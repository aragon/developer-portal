## Aragon Core

###  contract `IPluginSetup`

#### external function `prepareInstallationDataABI`

The ABI required to decode the `bytes` data in `prepareInstallation()`.

```solidity
function prepareInstallationDataABI() external view returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

#### external function `prepareInstallation`

Prepares the installation of a plugin.

```solidity
function prepareInstallation(address _dao, bytes _data) external returns (address plugin, address[] helpers, struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the installing DAO. |
| _data | bytes | The `bytes` encoded data containing the input parameters for the installation as specified in the `prepareInstallationDataABI()` function. |
| **Output** | |
| plugin | address | The address of the `Plugin` contract being prepared for installation. |
| **Output** | |
| helpers | address[] | The address array of all helpers (contracts or EOAs) associated with the plugin after the installation. |
| **Output** | |
| permissions | struct PermissionLib.ItemMultiTarget[] | The array of multi-targeted permission operations to be applied by the `PluginSetupProcessor` to the installing DAO. |

#### external function `prepareUpdateDataABI`

The ABI required to decode the `bytes` data in `prepareUpdate()`.

```solidity
function prepareUpdateDataABI() external view returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

*The empty implemention is provided here so that this doesn't need to be overriden and implemented. This is relevant, for example, for the initial version of a plugin for which no update exists.*

#### external function `prepareUpdate`

Prepares the update of a plugin.

```solidity
function prepareUpdate(address _dao, address _plugin, address[] _currentHelpers, uint16[3] _oldVersion, bytes _data) external returns (address[] updatedHelpers, bytes initData, struct PermissionLib.ItemMultiTarget[] permissions) 
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

#### external function `prepareUninstallationDataABI`

The ABI required to decode the `bytes` data in `prepareUninstallation()`.

```solidity
function prepareUninstallationDataABI() external view returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

#### external function `prepareUninstallation`

Prepares the uninstallation of a plugin.

```solidity
function prepareUninstallation(address _dao, address _plugin, address[] _currentHelpers, bytes _data) external returns (struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the uninstalling DAO. |
| _plugin | address | The address of the `Plugin` contract to update from. |
| _currentHelpers | address[] | The address array of all current helpers (contracts or EOAs) associated with the plugin to update from. |
| _data | bytes | The `bytes` encoded data containing the input parameters for the uninstalltion as specified in the `prepareUninstallationDataABI()` function. |
| **Output** | |
| permissions | struct PermissionLib.ItemMultiTarget[] | The array of multi-targeted permission operations to be applied by the `PluginSetupProcessor` to the uninstalling DAO. |

*The array of `_currentHelpers` has to be specified in the same order as they were returned from previous setups preparation steps (the latest `prepareInstallation` or `prepareUpdate` step that has happend) on which this update is prepared for.*

#### external function `getImplementationAddress`

Returns the plugin's base implementation.

```solidity
function getImplementationAddress() external view returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | address The address of the plugin implementation contract. |

*The implementation can be instantiated via the `new` keyword, cloned via the minimal clones pattern (see [ERC-1167](https://eips.ethereum.org/EIPS/eip-1167)), or proxied via the UUPS pattern (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).*


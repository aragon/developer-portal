## Aragon Core

###  contract `CounterV1PluginSetup`

The setup contract of the `CounterV1` plugin.

#### public variable `multiplyHelperBase`

```solidity
contract MultiplyHelper multiplyHelperBase 
```

#### public variable `counterBase`

```solidity
contract CounterV1 counterBase 
```

#### private variable `NO_ORACLE`

```solidity
address NO_ORACLE 
```

#### public function `constructor`

```solidity
constructor() public 
```

#### external function `prepareInstallationDataABI`

The ABI required to decode the `bytes` data in `prepareInstallation()`.

```solidity
function prepareInstallationDataABI() external view virtual returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

#### external function `prepareInstallation`

Prepares the installation of a plugin.

```solidity
function prepareInstallation(address _dao, bytes _data) external virtual returns (address plugin, address[] helpers, struct PermissionLib.ItemMultiTarget[] permissions) 
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

#### external function `prepareUninstallationDataABI`

The ABI required to decode the `bytes` data in `prepareUninstallation()`.

```solidity
function prepareUninstallationDataABI() external view virtual returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

#### external function `prepareUninstallation`

Prepares the uninstallation of a plugin.

```solidity
function prepareUninstallation(address _dao, address _plugin, address[] _activeHelpers, bytes) external virtual returns (struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the uninstalling DAO. |
| _plugin | address | The address of the `Plugin` contract to update from. |
| _activeHelpers | address[] |  |
|  | bytes |  |
| **Output** | |
| permissions | struct PermissionLib.ItemMultiTarget[] | The array of multi-targeted permission operations to be applied by the `PluginSetupProcessor` to the uninstalling DAO. |

*The array of `_currentHelpers` has to be specified in the same order as they were returned from previous setups preparation steps (the latest `prepareInstallation` or `prepareUpdate` step that has happend) on which this update is prepared for.*

#### external function `getImplementationAddress`

Returns the plugin's base implementation.

```solidity
function getImplementationAddress() external view virtual returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | address The address of the plugin implementation contract. |

*The implementation can be instantiated via the `new` keyword, cloned via the minimal clones pattern (see [ERC-1167](https://eips.ethereum.org/EIPS/eip-1167)), or proxied via the UUPS pattern (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).*


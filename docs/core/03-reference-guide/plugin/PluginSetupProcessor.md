## Aragon Core

###  contract `PluginSetupProcessor`

This contract processes the preparation and application of plugin setups (installation, update, uninstallation) on behalf of a requesting DAO.

*This contract is temporarily granted the `ROOT_PERMISSION_ID` permission on the applying DAO and therefore is highly security critical.*

#### public variable `APPLY_INSTALLATION_PERMISSION_ID`

The ID of the permission required to call the `applyInstallation` function.

```solidity
bytes32 APPLY_INSTALLATION_PERMISSION_ID 
```

#### public variable `APPLY_UPDATE_PERMISSION_ID`

The ID of the permission required to call the `applyUpdate` function.

```solidity
bytes32 APPLY_UPDATE_PERMISSION_ID 
```

#### public variable `APPLY_UNINSTALLATION_PERMISSION_ID`

The ID of the permission required to call the `applyUninstallation` function.

```solidity
bytes32 APPLY_UNINSTALLATION_PERMISSION_ID 
```

#### public struct `PluginUpdateParams`

```solidity
struct PluginUpdateParams {
  address plugin;
  contract PluginRepo pluginSetupRepo;
  address currentPluginSetup;
  address newPluginSetup;
}
```

#### private variable `isInstallationApplied`

A mapping between a plugin's installations `appliedId` (see [`getAppliedId`](#private-function-`getAppliedId`)) and a boolean expressing if it has been applied. This is used to guarantees that a plugin can only be installed once.

```solidity
mapping(bytes32 => bool) isInstallationApplied 
```

#### private variable `installPermissionHashes`

A mapping between a plugin's [`setupId`](#private-function-`getSetupId`) and the hashed, multi-targeted permission operation list obtained from the [`prepareInstallation`](#external-function-`prepareInstallation`) function.

```solidity
mapping(bytes32 => bytes32) installPermissionHashes 
```

#### private variable `updatePermissionHashes`

A mapping between a plugin's [`setupId`](#private-function-`getSetupId`) and the hashed, multi-targeted permission operation list obtained from the [`prepareUpdate`](#external-function-`prepareUpdate`) function.

```solidity
mapping(bytes32 => bytes32) updatePermissionHashes 
```

#### private variable `uninstallPermissionHashes`

A mapping between a plugin's [`setupId`](#private-function-`getSetupId`) and the hashed, multi-targeted permission operation list obtained from the [`prepareUninstallation`](#external-function-`prepareUninstallation`) function.

```solidity
mapping(bytes32 => bytes32) uninstallPermissionHashes 
```

#### private variable `helpersHashes`

A mapping between a plugin's [`setupId`](#private-function-`getSetupId`) and the array of helper addresses hashed via [`getHelpersHash`](#private-function-`getHelpersHash`).

```solidity
mapping(bytes32 => bytes32) helpersHashes 
```

#### public variable `repoRegistry`

The plugin repo registry listing the `PluginRepo` contracts versioning the `PluginSetup` contracts.

```solidity
contract PluginRepoRegistry repoRegistry 
```

####  error `SetupApplicationUnauthorized`

Thrown if a setup is unauthorized for the associated DAO.

```solidity
error SetupApplicationUnauthorized(address dao, address caller, bytes32 permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The address of the dao to which the plugin belongs. |
| caller | address | The address (EOA or contract) that requested the application of a setup on the associated DAO. |
| permissionId | bytes32 | The permission identifier. |

####  error `PluginNonupgradeable`

Thrown if a plugin is not upgradeable.

```solidity
error PluginNonupgradeable(address plugin) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| plugin | address | The address of the plugin contract. |

####  error `PluginProxyUpgradeFailed`

Thrown if the upgrade of a plugin proxy failed.

```solidity
error PluginProxyUpgradeFailed(address proxy, address implementation, bytes initData) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| proxy | address | The address of the UUPSUpgradeable proxy. |
| implementation | address | The address of the implementation contract. |
| initData | bytes | The initialization data to be passed to the upgradeable plugin contract via `upgradeToAndCall`. |

####  error `IPluginNotSupported`

Thrown if a contract does not support the `IPlugin` interface.

```solidity
error IPluginNotSupported(address plugin) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| plugin | address | The address of the contract. |

####  error `PermissionsHashMismatch`

Thrown if two permissions hashes obtained via [`getPermissionsHash`](#private-function-`getPermissionsHash`) don't match.

```solidity
error PermissionsHashMismatch() 
```

####  error `HelpersHashMismatch`

Thrown if two helpers hashes obtained via  [`getHelpersHash`](#private-function-`getHelpersHash`) don't match.

```solidity
error HelpersHashMismatch() 
```

####  error `PluginRepoNonexistent`

Thrown if a plugin repository does not exist on the plugin repo registry.

```solidity
error PluginRepoNonexistent() 
```

####  error `SetupNotPrepared`

Thrown if a plugin setup is not prepared.

```solidity
error SetupNotPrepared() 
```

####  error `SetupAlreadyPrepared`

Thrown if a plugin setup was already prepared.

```solidity
error SetupAlreadyPrepared() 
```

####  error `SetupNotApplied`

Thrown if a plugin setup is not applied.

```solidity
error SetupNotApplied() 
```

####  error `SetupAlreadyApplied`

Thrown if a plugin setup was already prepared. This is done in case the `PluginSetup` contract is malicios and always/sometime returns the same addresss.

```solidity
error SetupAlreadyApplied() 
```

####  event `InstallationPrepared`

Emitted with a prepared plugin installation to store data relevant for the application step.

```solidity
event InstallationPrepared(address sender, address dao, address pluginSetup, bytes data, address plugin, address[] helpers, struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| sender | address | The sender that prepared the plugin installation. |
| dao | address | The address of the dao to which the plugin belongs. |
| pluginSetup | address | The address of the `PluginSetup` contract used for the installation. |
| data | bytes | The `bytes` encoded data containing the input parameters for the installation as specified in the `prepareInstallationDataABI()` function in the `pluginSetup` setup contract. |
| plugin | address | The address of the plugin contract. |
| helpers | address[] | The address array of all helpers (contracts or EOAs) that were prepared for the plugin to be installed. |
| permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to be applied to the installing DAO. |

####  event `InstallationApplied`

Emitted after a plugin installation was applied.

```solidity
event InstallationApplied(address dao, address plugin) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The address of the dao to which the plugin belongs. |
| plugin | address | The address of the plugin contract. |

####  event `UpdatePrepared`

Emitted with a prepared plugin update to store data relevant for the application step.

```solidity
event UpdatePrepared(address sender, address dao, address pluginSetup, bytes data, address plugin, address[] updatedHelpers, struct PermissionLib.ItemMultiTarget[] permissions, bytes initData) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| sender | address | The sender that prepared the plugin installation. |
| dao | address | The address of the dao to which the plugin belongs. |
| pluginSetup | address | The address of the `PluginSetup` contract used for the update. |
| data | bytes | The `bytes` encoded data containing the input parameters for the installation as specified in the `prepareInstallationDataABI()` function in the `pluginSetup` setup contract. |
| plugin | address | The address of the plugin contract. |
| updatedHelpers | address[] | The address array of all helpers (contracts or EOAs) that were prepared for the plugin update. |
| permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to be applied to the installing DAO. |
| initData | bytes | The initialization data to be passed to the upgradeable plugin contract. |

####  event `UpdateApplied`

Emitted after a plugin update was applied.

```solidity
event UpdateApplied(address dao, address plugin) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The address of the dao to which the plugin belongs. |
| plugin | address | The address of the plugin contract. |

####  event `UninstallationPrepared`

Emitted with a prepared plugin uninstallation to store data relevant for the application step.

```solidity
event UninstallationPrepared(address sender, address dao, address pluginSetup, bytes data, address plugin, address[] currentHelpers, struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| sender | address | The sender that prepared the plugin uninstallation. |
| dao | address | The address of the dao to which the plugin belongs. |
| pluginSetup | address | The address of the `PluginSetup` contract used for the uninstallation. |
| data | bytes | The `bytes` encoded data containing the input parameters for the uninstallation as specified in the `prepareUninstallationDataABI()` function in the `pluginSetup` setup contract. |
| plugin | address | The address of the plugin contract. |
| currentHelpers | address[] | The address array of all helpers (contracts or EOAs) that were prepared for the plugin to be installed. |
| permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to be applied to the installing DAO. |

####  event `UninstallationApplied`

Emitted after a plugin installation was applied.

```solidity
event UninstallationApplied(address dao, address plugin) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | The address of the dao to which the plugin belongs. |
| plugin | address | The address of the plugin contract. |

#### internal modifier `canApply`

A modifier to check if a caller has the permission to apply a prepared setup.

```solidity
modifier canApply(address _dao, bytes32 _permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the DAO. |
| _permissionId | bytes32 | The permission identifier. |

#### public function `constructor`

Constructs the plugin setup processor by setting the managing DAO and the associated plugin repo registry.

```solidity
constructor(contract IDAO _managingDao, contract PluginRepoRegistry _repoRegistry) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _managingDao | contract IDAO | The DAO managing the plugin setup processors permissions. |
| _repoRegistry | contract PluginRepoRegistry | The plugin repo registry contract. |

#### external function `prepareInstallation`

Prepares the installation of a plugin.

```solidity
function prepareInstallation(address _dao, address _pluginSetup, contract PluginRepo _pluginSetupRepo, bytes _data) external returns (address plugin, address[] helpers, struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the installing DAO. |
| _pluginSetup | address | The address of the `PluginSetup` contract. |
| _pluginSetupRepo | contract PluginRepo | The repository storing the `PluginSetup` contracts of all versions of a plugin. |
| _data | bytes | The `bytes` encoded data containing the input parameters for the installation as specified in the `prepareInstallationDataABI()` function in the `pluginSetup` setup contract. |
| **Output** | |
| plugin | address | The prepared plugin contract address. |
| **Output** | |
| helpers | address[] | The prepared list of helper contract addresses, that a plugin might require to operate. |
| **Output** | |
| permissions | struct PermissionLib.ItemMultiTarget[] | The prepared list of multi-targeted permission operations to be applied to the installing DAO. |

#### external function `applyInstallation`

Applies the permissions of a prepared installation to a DAO.

```solidity
function applyInstallation(address _dao, address _pluginSetup, contract PluginRepo _pluginSetupRepo, address _plugin, struct PermissionLib.ItemMultiTarget[] _permissions) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the installing DAO. |
| _pluginSetup | address | The address of the `PluginSetup` contract. |
| _pluginSetupRepo | contract PluginRepo | The repository storing the `PluginSetup` contracts of all versions of a plugin. |
| _plugin | address | The address of the `Plugin` contract. |
| _permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to apply to the installing DAO. |

#### external function `prepareUpdate`

Prepares the update of an UUPS upgradeable plugin.

```solidity
function prepareUpdate(address _dao, struct PluginSetupProcessor.PluginUpdateParams _updateParams, address[] _currentHelpers, bytes _data) external returns (struct PermissionLib.ItemMultiTarget[], bytes) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the installing DAO. |
| _updateParams | struct PluginSetupProcessor.PluginUpdateParams | The parameters of the update. |
| _currentHelpers | address[] | The address array of all current helpers (contracts or EOAs) associated with the plugin that is prepared to be updated. |
| _data | bytes | The `bytes` encoded data containing the input parameters for the update as specified in the `prepareUpdateDataABI()` function in the `newPluginSetup` setup contract inside `_updateParams`. |
| **Output** | |
| [0] | struct PermissionLib.ItemMultiTarget[] | permissions The list of multi-targeted permission operations to be applied to the updating DAO. |
| **Output** | |
| [1] | bytes | initData The initialization data to be passed to upgradeable contracts when the update is applied |

*The list of `_currentHelpers` has to be specified in the same order as they were returned from previous setups preparation steps (the latest `prepareInstallation` or `prepareUpdate` step that has happend) on which the update is prepared for.*

#### external function `applyUpdate`

Applies the permissions of a prepared update of an UUPS upgradeable contract to a DAO.

```solidity
function applyUpdate(address _dao, address _plugin, address _pluginSetup, contract PluginRepo _pluginSetupRepo, bytes _initData, struct PermissionLib.ItemMultiTarget[] _permissions) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the updating DAO. |
| _plugin | address | The address of the `PluginUUPSUpgradeable` proxy contract. |
| _pluginSetup | address | The address of the `PluginSetup` contract. |
| _pluginSetupRepo | contract PluginRepo | The repository storing the `PluginSetup` contracts of all versions of a plugin. |
| _initData | bytes | The initialization data to be passed to the upgradeable plugin contract via `upgradeToAndCall`. // revisit |
| _permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to apply to the updating DAO. |

#### external function `prepareUninstallation`

Prepares the uninstallation of a plugin.

```solidity
function prepareUninstallation(address _dao, address _plugin, address _pluginSetup, contract PluginRepo _pluginSetupRepo, address[] _currentHelpers, bytes _data) external returns (struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the installing DAO. |
| _plugin | address | The address of the `Plugin` contract. |
| _pluginSetup | address | The address of the `PluginSetup` contract. |
| _pluginSetupRepo | contract PluginRepo | The repository storing the `PluginSetup` contracts of all versions of a plugin. |
| _currentHelpers | address[] | The address array of all current helpers (contracts or EOAs) associated with the plugin that is prepared to be uninstalled. |
| _data | bytes | The `bytes` encoded data containing the input parameters for the uninstallation as specified in the `prepareUninstallationDataABI()` function in the `pluginSetup` setup contract. |
| **Output** | |
| permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to be applied to the uninstalling DAO. |

*The list of `_currentHelpers` has to be specified in the same order as they were returned from previous setups preparation steps (the latest `prepareInstallation` or `prepareUpdate` step that has happend) on which the uninstallation was prepared for.*

#### external function `applyUninstallation`

Applies the permissions of a prepared uninstallation to a DAO.

```solidity
function applyUninstallation(address _dao, address _plugin, address _pluginSetup, contract PluginRepo _pluginSetupRepo, address[] _currentHelpers, struct PermissionLib.ItemMultiTarget[] _permissions) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the DAO. |
| _plugin | address | The address of the `Plugin` contract. |
| _pluginSetup | address | The address of the `PluginSetup` contract. |
| _pluginSetupRepo | contract PluginRepo | The repository storing the `PluginSetup` contracts of all versions of a plugin. |
| _currentHelpers | address[] | The address array of all current helpers (contracts or EOAs) associated with the plugin that is uninstalled. |
| _permissions | struct PermissionLib.ItemMultiTarget[] | The list of multi-targeted permission operations to apply to the uninstalling DAO. |

*The list of `_currentHelpers` has to be specified in the same order as they were returned from previous setups preparation steps (the latest `prepareInstallation` or `prepareUpdate` step that has happend) on which the uninstallation was prepared for.*

#### private function `_getAppliedId`

Returns an identifier for applied installations by hashing the DAO and plugin address.

```solidity
function _getAppliedId(address _dao, address _plugin) private pure returns (bytes32 appliedId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the DAO conducting the setup. |
| _plugin | address | The address of the `Plugin` contract associated with the setup. |

#### private function `_getSetupId`

Returns an identifier for prepared installations by hashing the DAO and plugin address.

```solidity
function _getSetupId(address _dao, address _pluginSetup, address _pluginSetupRepo, address _plugin) private pure returns (bytes32 setupId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the DAO conducting the setup. |
| _pluginSetup | address | The address of the plugin setup. |
| _pluginSetupRepo | address | The address of plugin setup repo. |
| _plugin | address | The address of the `Plugin` contract associated with the setup. |

#### private function `_getHelpersHash`

Returns a hash of an array of helper addresses (contracts or EOAs).

```solidity
function _getHelpersHash(address[] _helpers) private pure returns (bytes32 helpersHash) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _helpers | address[] | The array of helper addresses (contracts or EOAs) to be hashed. |

#### private function `_getPermissionsHash`

Returns a hash of an array of multi-targeted permission operations.

```solidity
function _getPermissionsHash(struct PermissionLib.ItemMultiTarget[] _permissions) private pure returns (bytes32) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _permissions | struct PermissionLib.ItemMultiTarget[] | The array of of multi-targeted permission operations. |
| **Output** | |
| [0] | bytes32 | bytes The hash of the array of permission operations. |

#### private function `_upgradeProxy`

Upgrades an UUPSUpgradeable proxy contract (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).

```solidity
function _upgradeProxy(address _proxy, address _implementation, bytes _initData) private 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _proxy | address | The address of the UUPSUpgradeable proxy. |
| _implementation | address | The address of the implementation contract. |
| _initData | bytes | The initialization data to be passed to the upgradeable plugin contract via `upgradeToAndCall`. |

#### private function `_canApply`

Internal function to check if a caller has the permission to apply a prepared setup.

```solidity
function _canApply(address _dao, bytes32 _permissionId) private view 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the DAO conducting the setup. |
| _permissionId | bytes32 | The permission identifier. |


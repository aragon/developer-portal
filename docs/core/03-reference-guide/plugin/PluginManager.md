## Aragon Core

###  contract `PluginManager`

NOTE: This is an untested code and should NOT be used in production.
Abstract Plugin Factory that dev's have to inherit from for their factories.

#### public variable `PLUGIN_MANAGER_INTERFACE_ID`

```solidity
bytes4 PLUGIN_MANAGER_INTERFACE_ID 
```

#### public struct `RequestedPermission`

```solidity
struct RequestedPermission {
  enum BulkPermissionsLib.Operation op;
  uint256 where;
  bool isWhereAddress;
  uint256 who;
  bool isWhoAddress;
  address oracle;
  bytes32 permissionId;
}
```

#### internal function `buildPermission`

creates Permission struct

```solidity
function buildPermission(enum BulkPermissionsLib.Operation op, uint256 where, uint256 who, address oracle, bytes32 permissionId) internal pure returns (struct PluginManager.RequestedPermission) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| op | enum BulkPermissionsLib.Operation | Whether grants, revokes, freezes... |
| where | uint256 | index from the dev's deployed addresses array where permission will be set. |
| who | uint256 | index from the dev's deployed addresses array |
| oracle | address |  |
| permissionId | bytes32 | permissionId that will be set |
| **Output** | |
| [0] | struct PluginManager.RequestedPermission | Permission The final permission struct |

#### internal function `buildPermission`

creates Permission struct

```solidity
function buildPermission(enum BulkPermissionsLib.Operation op, address where, address who, address oracle, bytes32 permissionId) internal pure returns (struct PluginManager.RequestedPermission) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| op | enum BulkPermissionsLib.Operation | Whether grants, revokes, freezes... |
| where | address | Address where permission will be granted. |
| who | address | Address who will have the permission. |
| oracle | address |  |
| permissionId | bytes32 | permissionId that will be set |
| **Output** | |
| [0] | struct PluginManager.RequestedPermission | Permission The final permission struct |

#### internal function `buildPermission`

creates Permission struct

```solidity
function buildPermission(enum BulkPermissionsLib.Operation op, uint256 where, address who, address oracle, bytes32 permissionId) internal pure returns (struct PluginManager.RequestedPermission) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| op | enum BulkPermissionsLib.Operation | Whether grants, revokes, freezes... |
| where | uint256 | index from the dev's deployed addresses array where permission will be set. |
| who | address | Address who will have the permission. |
| oracle | address |  |
| permissionId | bytes32 | permissionId that will be set |
| **Output** | |
| [0] | struct PluginManager.RequestedPermission | Permission The final permission struct |

#### internal function `buildPermission`

creates Permission struct

```solidity
function buildPermission(enum BulkPermissionsLib.Operation op, address where, uint256 who, address oracle, bytes32 permissionId) internal pure returns (struct PluginManager.RequestedPermission) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| op | enum BulkPermissionsLib.Operation | Whether grants, revokes, freezes... |
| where | address | Address who will have the permission. |
| who | uint256 | index from the dev's deployed addresses array that will have permission. |
| oracle | address |  |
| permissionId | bytes32 | permissionId that will be set |
| **Output** | |
| [0] | struct PluginManager.RequestedPermission | Permission The final permission struct |

#### internal function `createProxy`

helper function to deploy Custom ERC1967Proxy that includes dao slot on it.

```solidity
function createProxy(address dao, address logic, bytes init) internal returns (address) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | dao address |
| logic | address | the base contract address proxy has to delegate calls to. |
| init | bytes | the initialization data(function selector + encoded data) |
| **Output** | |
| [0] | address | address of the proxy. |

#### internal function `upgrade`

helper function to deploy Custom ERC1967Proxy that includes dao slot on it.

```solidity
function upgrade(address proxy, address logic, bytes init) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| proxy | address | proxy address |
| logic | address | the base contract address proxy has to delegate calls to. |
| init | bytes | the initialization data(function selector + encoded data) |

#### external function `deploy`

the function dev has to override/implement for the plugin deployment.

```solidity
function deploy(address dao, bytes data) external virtual returns (address plugin, address[] relatedContracts) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| dao | address | dao address where plugin will be installed to in the end. |
| data | bytes | the ABI encoded data that deploy needs for its work. |
| **Output** | |
| plugin | address | the plugin address |
| **Output** | |
| relatedContracts | address[] | array of helper contract addresses that dev deploys beforehand the plugin. |

#### external function `update`

the function dev has to override/implement for the plugin update.

```solidity
function update(address proxy, uint16[3] oldVersion, bytes data) external virtual returns (address[] relatedContracts) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| proxy | address | proxy address |
| oldVersion | uint16[3] | the version plugin is updating from. |
| data | bytes | the other data that deploy needs. |
| **Output** | |
| relatedContracts | address[] | array of helper contract addresses that dev deploys to do some work before plugin update. |

#### public function `getImplementationAddress`

the plugin's base implementation address proxies need to delegate calls.

```solidity
function getImplementationAddress() public view virtual returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | address of the base contract address. |

#### external function `deployABI`

the ABI in string format that deploy function needs to use.

```solidity
function deployABI() external view virtual returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | ABI in string format. |

#### external function `updateABI`

The ABI in string format that update function needs to use.

```solidity
function updateABI() external view virtual returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | ABI in string format. |

*Not required to be overriden as there might be no update at all by dev.*

#### external function `getInstallPermissions`

the view function called by UI to detect the permissions that will be applied before installing the plugin.

```solidity
function getInstallPermissions(bytes data) external view virtual returns (struct PluginManager.RequestedPermission[], string[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| data | bytes | the exact same data that is passed to the deploy function. |
| **Output** | |
| [0] | struct PluginManager.RequestedPermission[] | Permissions the permission struct array that contain all the permissions that should be set. |
| **Output** | |
| [1] | string[] | array of strings(names of helper contracts). This corresponds to the relatedContracts. |

*This corresponds to the permissions for installing the plugin.*

#### external function `getUpdatePermissions`

the view function called by UI to detect the permissions that will be applied before updating the plugin.

```solidity
function getUpdatePermissions(uint16[3] oldVersion, bytes data) external virtual returns (struct PluginManager.RequestedPermission[], string[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| oldVersion | uint16[3] | the version plugin is updating from. |
| data | bytes | the exact same data that is passed to the update function. |
| **Output** | |
| [0] | struct PluginManager.RequestedPermission[] | Permissions the permissions struct array that contain all the permissions that should be set. |
| **Output** | |
| [1] | string[] | array of strings(names of helper contracts). This corresponds to the relatedContracts. |

*This corresponds to the permissions for updating the plugin.*


## Aragon Core

###  contract `CounterV2PluginManager`

#### private variable `multiplyHelperBase`

```solidity
contract MultiplyHelper multiplyHelperBase 
```

#### private variable `counterBase`

```solidity
contract CounterV2 counterBase 
```

#### private variable `NO_ORACLE`

```solidity
address NO_ORACLE 
```

#### public function `constructor`

```solidity
constructor(contract MultiplyHelper _helper) public 
```

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

#### external function `getInstallPermissions`

the view function called by UI to detect the permissions that will be applied before installing the plugin.

```solidity
function getInstallPermissions(bytes data) external view virtual returns (struct PluginManager.RequestedPermission[] permissions, string[] helperNames) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| data | bytes | the exact same data that is passed to the deploy function. |
| **Output** | |
| permissions | struct PluginManager.RequestedPermission[] | Permissions the permission struct array that contain all the permissions that should be set. |
| **Output** | |
| helperNames | string[] | array of strings(names of helper contracts). This corresponds to the relatedContracts. |

*This corresponds to the permissions for installing the plugin.*

#### external function `getUpdatePermissions`

the view function called by UI to detect the permissions that will be applied before updating the plugin.

```solidity
function getUpdatePermissions(uint16[3] oldVersion, bytes data) external view virtual returns (struct PluginManager.RequestedPermission[] permissions, string[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| oldVersion | uint16[3] | the version plugin is updating from. |
| data | bytes | the exact same data that is passed to the update function. |
| **Output** | |
| permissions | struct PluginManager.RequestedPermission[] | Permissions the permissions struct array that contain all the permissions that should be set. |
| **Output** | |
| [1] | string[] | array of strings(names of helper contracts). This corresponds to the relatedContracts. |

*This corresponds to the permissions for updating the plugin.*

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


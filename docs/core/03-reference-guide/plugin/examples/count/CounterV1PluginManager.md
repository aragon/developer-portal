## Aragon Core

###  contract `CounterV1PluginManager`

#### private variable `multiplyHelperBase`

```solidity
contract MultiplyHelper multiplyHelperBase 
```

#### private variable `counterBase`

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


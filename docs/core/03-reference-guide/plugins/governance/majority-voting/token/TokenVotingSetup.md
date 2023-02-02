## Aragon Core

###  contract `TokenVotingSetup`

The setup contract of the `TokenVoting` plugin.

#### private variable `tokenVotingBase`

The address of the `TokenVoting` base contract.

```solidity
contract TokenVoting tokenVotingBase 
```

#### private variable `NO_CONDITION`

The address zero to be used as condition address for permissions.

```solidity
address NO_CONDITION 
```

#### public variable `governanceERC20Base`

The address of the `GovernanceERC20` base contract.

```solidity
address governanceERC20Base 
```

#### public variable `governanceWrappedERC20Base`

The address of the `GovernanceWrappedERC20` base contract.

```solidity
address governanceWrappedERC20Base 
```

#### public struct `TokenSettings`

```solidity
struct TokenSettings {
  address addr;
  string name;
  string symbol;
}
```

####  error `TokenNotContract`

Thrown if token address is passed which is not a token.

```solidity
error TokenNotContract(address token) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | The token address |

####  error `TokenNotERC20`

Thrown if token address is not ERC20.

```solidity
error TokenNotERC20(address token) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | The token address |

####  error `WrongHelpersArrayLength`

Thrown if passed helpers array is of worng length.

```solidity
error WrongHelpersArrayLength(uint256 length) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| length | uint256 | The array length of passed helpers. |

#### public function `constructor`

The contract constructor, that deployes the bases.

```solidity
constructor() public 
```

#### external function `prepareInstallation`

Prepares the installation of a plugin.

```solidity
function prepareInstallation(address _dao, bytes _data) external returns (address plugin, struct IPluginSetup.PreparedSetupData preparedSetupData) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the installing DAO. |
| _data | bytes | The bytes-encoded data containing the input parameters for the installation as specified in the plugin's build metadata JSON file. |
| **Output** | |
| plugin | address | The address of the `Plugin` contract being prepared for installation. |
| **Output** | |
| preparedSetupData | struct IPluginSetup.PreparedSetupData | The deployed plugin's relevant data which consists of helpers and permissions. |

#### external function `prepareUninstallation`

Prepares the uninstallation of a plugin.

```solidity
function prepareUninstallation(address _dao, struct IPluginSetup.SetupPayload _payload) external view returns (struct PermissionLib.MultiTargetPermission[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the uninstalling DAO. |
| _payload | struct IPluginSetup.SetupPayload | The relevant data necessary for the `prepareUninstallation`. see above. |
| **Output** | |
| permissions | struct PermissionLib.MultiTargetPermission[] | The array of multi-targeted permission operations to be applied by the `PluginSetupProcessor` to the uninstalling DAO. |

#### external function `getImplementationAddress`

Returns the plugin's base implementation.

```solidity
function getImplementationAddress() external view virtual returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | address The address of the plugin implementation contract. |

*The implementation can be instantiated via the `new` keyword, cloned via the minimal clones pattern (see [ERC-1167](https://eips.ethereum.org/EIPS/eip-1167)), or proxied via the UUPS pattern (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).*

#### private function `_getTokenInterfaceIds`

Retrieves the interface identifiers supported by the token contract.

```solidity
function _getTokenInterfaceIds(address token) private view returns (bool[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | The token address |

*It is crucial to verify if the provided token address represents a valid contract before using the below.*

#### private function `_isERC20`

Unsatisfiably determines if the contract is an ERC20 token.

```solidity
function _isERC20(address token) private view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | The token address |

*It's important to first check whether token is a contract prior to this call.*


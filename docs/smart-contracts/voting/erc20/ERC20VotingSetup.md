## Aragon Core

###  contract `ERC20VotingSetup`

The setup contract of the `ERC20Voting` plugin.

#### private variable `erc20VotingBase`

The address of the `ERC20Voting` base contract.

```solidity
contract ERC20Voting erc20VotingBase 
```

#### private variable `NO_ORACLE`

The address zero to be used as oracle address for permissions.

```solidity
address NO_ORACLE 
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

#### public variable `merkleMinterBase`

The address of the `MerkleMinter` base contract.

```solidity
address merkleMinterBase 
```

#### public variable `distributorBase`

The `MerkleDistributor` base contract used to initialize the `MerkleMinter`.

```solidity
address distributorBase 
```

#### public struct `TokenSettings`

```solidity
struct TokenSettings {
  address addr;
  string name;
  string symbol;
}
```

#### public struct `MintSettings`

```solidity
struct MintSettings {
  address[] receivers;
  uint256[] amounts;
}
```

####  error `MintArrayLengthMismatch`

Thrown if `MintSettings`'s params are not of the same length.

```solidity
error MintArrayLengthMismatch(uint256 receiversArrayLength, uint256 amountsArrayLength) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| receiversArrayLength | uint256 | The array length of `receivers`. |
| amountsArrayLength | uint256 | The array length of `amounts`. |

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

#### external function `prepareInstallationDataABI`

The ABI required to decode the `bytes` data in `prepareInstallation()`.

```solidity
function prepareInstallationDataABI() external pure returns (string) 
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

#### external function `prepareUninstallationDataABI`

The ABI required to decode the `bytes` data in `prepareUninstallation()`.

```solidity
function prepareUninstallationDataABI() external pure returns (string) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | string | The ABI in string format. |

#### external function `prepareUninstallation`

Prepares the uninstallation of a plugin.

```solidity
function prepareUninstallation(address _dao, address _plugin, address[] _helpers, bytes) external view returns (struct PermissionLib.ItemMultiTarget[] permissions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the uninstalling DAO. |
| _plugin | address | The address of the `Plugin` contract to update from. |
| _helpers | address[] |  |
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

#### private function `_getTokenInterfaceIds`

gets the information which interface ids token supports.

```solidity
function _getTokenInterfaceIds(address token) private view returns (bool[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | address |

*it's important to check first whether token is a contract.*

#### private function `_isERC20`

unsatisfiably determines if contract is ERC20..

```solidity
function _isERC20(address token) private view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | address |

*it's important to check first whether token is a contract.*


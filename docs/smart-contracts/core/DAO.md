## Aragon Core

###  contract `DAO`

This contract is the entry point to the Aragon DAO framework and provides our users a simple and easy to use public interface.

*Public API of the Aragon DAO framework.*

#### public variable `UPGRADE_PERMISSION_ID`

The ID of the permission required to call the `_authorizeUpgrade` function.

```solidity
bytes32 UPGRADE_PERMISSION_ID 
```

#### public variable `SET_METADATA_PERMISSION_ID`

The ID of the permission required to call the `setMetadata` function.

```solidity
bytes32 SET_METADATA_PERMISSION_ID 
```

#### public variable `EXECUTE_PERMISSION_ID`

The ID of the permission required to call the `execute` function.

```solidity
bytes32 EXECUTE_PERMISSION_ID 
```

#### public variable `WITHDRAW_PERMISSION_ID`

The ID of the permission required to call the `withdraw` function.

```solidity
bytes32 WITHDRAW_PERMISSION_ID 
```

#### public variable `SET_SIGNATURE_VALIDATOR_PERMISSION_ID`

The ID of the permission required to call the `setSignatureValidator` function.

```solidity
bytes32 SET_SIGNATURE_VALIDATOR_PERMISSION_ID 
```

#### public variable `SET_TRUSTED_FORWARDER_PERMISSION_ID`

The ID of the permission required to call the `setTrustedForwarder` function.

```solidity
bytes32 SET_TRUSTED_FORWARDER_PERMISSION_ID 
```

#### public variable `REGISTER_STANDARD_CALLBACK_PERMISSION_ID`

The ID of the permission required to call the `registerStandardCallback` function.

```solidity
bytes32 REGISTER_STANDARD_CALLBACK_PERMISSION_ID 
```

#### public variable `signatureValidator`

The [ERC-1271](https://eips.ethereum.org/EIPS/eip-1271) signature validator contract.

```solidity
contract IERC1271 signatureValidator 
```

#### private variable `trustedForwarder`

The address of the trusted forwarder verifying meta transactions.

```solidity
address trustedForwarder 
```

####  error `ActionFailed`

Thrown if action execution has failed.

```solidity
error ActionFailed() 
```

####  error `ZeroAmount`

Thrown if the deposit or withdraw amount is zero.

```solidity
error ZeroAmount() 
```

####  error `NativeTokenDepositAmountMismatch`

Thrown if there is a mismatch between the expected and actually deposited amount of native tokens.

```solidity
error NativeTokenDepositAmountMismatch(uint256 expected, uint256 actual) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| expected | uint256 | The expected native token amount. |
| actual | uint256 | The actual native token amount deposited. |

####  error `NativeTokenWithdrawFailed`

Thrown if a native token withdraw fails.

```solidity
error NativeTokenWithdrawFailed() 
```

#### external function `initialize`

Initializes the DAO by
- registering the [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID
- setting the trusted forwarder for meta transactions
- giving the `ROOT_PERMISSION_ID` permission to the initial owner (that should be revoked and transferred to the DAO after setup).

```solidity
function initialize(bytes _metadata, address _initialOwner, address _trustedForwarder) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _metadata | bytes | IPFS hash that points to all the metadata (logo, description, tags, etc.) of a DAO. |
| _initialOwner | address | The initial owner of the DAO having the `ROOT_PERMISSION_ID` permission. |
| _trustedForwarder | address | The trusted forwarder responsible for verifying meta transactions. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### internal function `_authorizeUpgrade`

Internal method authorizing the upgrade of the contract via the [upgradeabilty mechanism for UUPS proxies](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable) (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).

```solidity
function _authorizeUpgrade(address) internal virtual 
```

*The caller must have the `UPGRADE_PERMISSION_ID` permission.*

#### external function `setTrustedForwarder`

Setter for the trusted forwarder verifying the meta transaction.

```solidity
function setTrustedForwarder(address _newTrustedForwarder) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _newTrustedForwarder | address |  |

#### public function `getTrustedForwarder`

Getter for the trusted forwarder verifying the meta transaction.

```solidity
function getTrustedForwarder() public view virtual returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | The trusted forwarder address. |

#### external function `hasPermission`

Checks if an address has permission on a contract via a permission identifier and considers if `ANY_ADDRESS` was used in the granting process.

```solidity
function hasPermission(address _where, address _who, bytes32 _permissionId, bytes _data) external view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the contract. |
| _who | address | The address of a EOA or contract to give the permissions. |
| _permissionId | bytes32 | The permission identifier. |
| _data | bytes | The optional data passed to the `PermissionOracle` registered. |
| **Output** | |
| [0] | bool | bool Returns true if the address has permission, false if not. |

#### external function `setMetadata`

Updates the DAO metadata (e.g., an IPFS hash).

```solidity
function setMetadata(bytes _metadata) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _metadata | bytes | The IPFS hash of the new metadata object. |

#### external function `execute`

Executes a list of actions.

```solidity
function execute(uint256 callId, struct IDAO.Action[] _actions) external returns (bytes[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| callId | uint256 | The id of the call. The definition of the value of callId is up to the calling contract and can be used, e.g., as a nonce. |
| _actions | struct IDAO.Action[] | The array of actions. |
| **Output** | |
| [0] | bytes[] | bytes[] The array of results obtained from the executed actions in `bytes`. |

*Runs a loop through the array of actions and executes them one by one. If one action fails, all will be reverted.*

#### external function `deposit`

Deposits (native) tokens to the DAO contract with a reference string.

```solidity
function deposit(address _token, uint256 _amount, string _reference) external payable 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | address | The address of the token or address(0) in case of the native token. |
| _amount | uint256 | The amount of tokens to deposit. |
| _reference | string | The reference describing the deposit reason. |

#### external function `withdraw`

Withdraw (native) tokens from the DAO with a withdraw reference string.

```solidity
function withdraw(address _token, address _to, uint256 _amount, string _reference) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | address | The address of the token and address(0) in case of the native token. |
| _to | address | The target address to send (native) tokens to. |
| _amount | uint256 | The amount of (native) tokens to withdraw. |
| _reference | string | The reference describing the withdrawal reason. |

#### external function `setSignatureValidator`

Setter for the [ERC-1271](https://eips.ethereum.org/EIPS/eip-1271) signature validator contract.

```solidity
function setSignatureValidator(address _signatureValidator) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _signatureValidator | address | The address of the signature validator. |

#### external function `isValidSignature`

Checks whether a signature is valid for the provided data.

```solidity
function isValidSignature(bytes32 _hash, bytes _signature) external view returns (bytes4) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _hash | bytes32 | The keccak256 hash of arbitrary length data signed on the behalf of `address(this)`. |
| _signature | bytes | Signature byte array associated with _data. |
| **Output** | |
| [0] | bytes4 | magicValue Returns the `bytes4` magic value `0x1626ba7e` if the signature is valid. |

#### external function `receive`

Emits the `NativeTokenDeposited` event to track native token deposits that weren't made via the deposit method.

```solidity
receive() external payable 
```

*This call is bound by the gas limitations for `send`/`transfer` calls introduced by EIP-2929.
Gas cost increases in future hard forks might break this function. As an alternative, EIP-2930-type transactions using access lists can be employed.*

#### external function `fallback`

Fallback to handle future versions of the [ERC-165](https://eips.ethereum.org/EIPS/eip-165) standard.

```solidity
fallback() external 
```

#### internal function `_setMetadata`

Emits the MetadataSet event if new metadata is set.

```solidity
function _setMetadata(bytes _metadata) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _metadata | bytes | Hash of the IPFS metadata object. |

#### internal function `_setTrustedForwarder`

Sets the trusted forwarder on the DAO and emits the associated event.

```solidity
function _setTrustedForwarder(address _trustedForwarder) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _trustedForwarder | address | The trusted forwarder address. |

#### external function `registerStandardCallback`

Registers an ERC standard having a callback by registering its [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID and callback function signature.

```solidity
function registerStandardCallback(bytes4 _interfaceId, bytes4 _callbackSelector, bytes4 _magicNumber) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The ID of the interface. |
| _callbackSelector | bytes4 | The selector of the callback function. |
| _magicNumber | bytes4 | The magic number to be registered for the function signature. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[48] __gap 
```


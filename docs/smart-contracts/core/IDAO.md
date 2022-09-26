## Aragon Core

###  contract `IDAO`

The interface required for DAOs within the Aragon App DAO framework.

#### internal variable `DAO_INTERFACE_ID`

The `IDAO` interface ID.

```solidity
bytes4 DAO_INTERFACE_ID 
```

#### public struct `Action`

```solidity
struct Action {
  address to;
  uint256 value;
  bytes data;
}
```

#### external function `hasPermission`

Checks if an address has permission on a contract via a permission identifier and considers if `ANY_ADDRESS` was used in the granting process.

```solidity
function hasPermission(address _where, address _who, bytes32 _permissionId, bytes _data) external view virtual returns (bool) 
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
function setMetadata(bytes _metadata) external virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _metadata | bytes | The IPFS hash of the new metadata object. |

####  event `MetadataSet`

Emitted when the DAO metadata is updated.

```solidity
event MetadataSet(bytes metadata) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| metadata | bytes | The IPFS hash of the new metadata object. |

#### external function `execute`

Executes a list of actions.

```solidity
function execute(uint256 callId, struct IDAO.Action[] _actions) external virtual returns (bytes[]) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| callId | uint256 | The id of the call. The definition of the value of callId is up to the calling contract and can be used, e.g., as a nonce. |
| _actions | struct IDAO.Action[] | The array of actions. |
| **Output** | |
| [0] | bytes[] | bytes[] The array of results obtained from the executed actions in `bytes`. |

*Runs a loop through the array of actions and executes them one by one. If one action fails, all will be reverted.*

####  event `Executed`

Emitted when a proposal is executed.

```solidity
event Executed(address actor, uint256 callId, struct IDAO.Action[] actions, bytes[] execResults) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| actor | address | The address of the caller. |
| callId | uint256 | The id of the call. |
| actions | struct IDAO.Action[] | Array of actions executed. |
| execResults | bytes[] | Array with the results of the executed actions. |

*The value of callId is defined by the component/contract calling the execute function.
     A Component implementation can use it, for example, as a nonce.*

#### external function `deposit`

Deposits (native) tokens to the DAO contract with a reference string.

```solidity
function deposit(address _token, uint256 _amount, string _reference) external payable virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | address | The address of the token or address(0) in case of the native token. |
| _amount | uint256 | The amount of tokens to deposit. |
| _reference | string | The reference describing the deposit reason. |

####  event `Deposited`

Emitted when a token deposit has been made to the DAO.

```solidity
event Deposited(address sender, address token, uint256 amount, string _reference) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| sender | address | The address of the sender. |
| token | address | The address of the deposited token. |
| amount | uint256 | The amount of tokens deposited. |
| _reference | string | The reference describing the deposit reason. |

####  event `NativeTokenDeposited`

Emitted when a native token deposit has been made to the DAO.

```solidity
event NativeTokenDeposited(address sender, uint256 amount) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| sender | address | The address of the sender. |
| amount | uint256 | The amount of native tokens deposited. |

*This event is intended to be emitted in the `receive` function and is therefore bound by the gas limitations for `send`/`transfer` calls introduced by EIP-2929.*

#### external function `withdraw`

Withdraw (native) tokens from the DAO with a withdraw reference string.

```solidity
function withdraw(address _token, address _to, uint256 _amount, string _reference) external virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | address | The address of the token and address(0) in case of the native token. |
| _to | address | The target address to send (native) tokens to. |
| _amount | uint256 | The amount of (native) tokens to withdraw. |
| _reference | string | The reference describing the withdrawal reason. |

####  event `Withdrawn`

Emitted when a (native) token withdrawal has been made from the DAO.

```solidity
event Withdrawn(address token, address to, uint256 amount, string _reference) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | address | The address of the withdrawn token or address(0) in case of the native token. |
| to | address | The address of the withdrawer. |
| amount | uint256 | The amount of tokens withdrawn. |
| _reference | string | The reference describing the withdrawal reason. |

#### external function `setTrustedForwarder`

Setter for the trusted forwarder verifying the meta transaction.

```solidity
function setTrustedForwarder(address _trustedForwarder) external virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _trustedForwarder | address | The trusted forwarder address. |

#### external function `getTrustedForwarder`

Getter for the trusted forwarder verifying the meta transaction.

```solidity
function getTrustedForwarder() external virtual returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | The trusted forwarder address. |

####  event `TrustedForwarderSet`

Emitted when a new TrustedForwarder is set on the DAO.

```solidity
event TrustedForwarderSet(address forwarder) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| forwarder | address | the new forwarder address. |

#### external function `setSignatureValidator`

Setter for the ERC1271 signature validator contract.

```solidity
function setSignatureValidator(address _signatureValidator) external virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _signatureValidator | address | ERC1271 SignatureValidator. |

#### external function `isValidSignature`

Checks whether a signature is valid for the provided data.

```solidity
function isValidSignature(bytes32 _hash, bytes _signature) external virtual returns (bytes4) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _hash | bytes32 | The keccak256 hash of arbitrary length data signed on the behalf of `address(this)`. |
| _signature | bytes | Signature byte array associated with _data. |
| **Output** | |
| [0] | bytes4 | magicValue Returns the `bytes4` magic value `0x1626ba7e` if the signature is valid. |


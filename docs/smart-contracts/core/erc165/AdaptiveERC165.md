## Aragon Core

###  contract `AdaptiveERC165`

#### internal variable `standardSupported`

ERC165 interface ID -> whether it is supported

```solidity
mapping(bytes4 => bool) standardSupported 
```

#### internal variable `callbackMagicNumbers`

Callback function signature -> magic number to return

```solidity
mapping(bytes4 => bytes32) callbackMagicNumbers 
```

#### internal variable `UNREGISTERED_CALLBACK`

```solidity
bytes32 UNREGISTERED_CALLBACK 
```

####  error `AdapERC165UnkownCallback`

```solidity
error AdapERC165UnkownCallback(bytes32 magicNumber) 
```

####  event `StandardRegistered`

Emmitted when a new standard is registred and assigned to `interfaceId`

```solidity
event StandardRegistered(bytes4 interfaceId) 
```

####  event `CallbackRegistered`

Emmitted when a callback is registered

```solidity
event CallbackRegistered(bytes4 sig, bytes4 magicNumber) 
```

####  event `CallbackReceived`

Emmitted when a callback is received

```solidity
event CallbackReceived(bytes4 sig, bytes data) 
```

#### public function `supportsInterface`

Checks if the contract supports a specific interface or not

```solidity
function supportsInterface(bytes4 _interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The identifier of the interface to check for |

#### internal function `_handleCallback`

Handles callbacks to support future versions of the ERC165 or similar without upgrading the contracts.

```solidity
function _handleCallback(bytes4 _sig, bytes _data) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _sig | bytes4 | The function signature of the called method (msg.sig) |
| _data | bytes | The data resp. arguments passed to the method |

#### internal function `_registerStandardAndCallback`

Registers a standard and also callback

```solidity
function _registerStandardAndCallback(bytes4 _interfaceId, bytes4 _callbackSig, bytes4 _magicNumber) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The identifier of the interface to check for |
| _callbackSig | bytes4 | The function signature of the called method (msg.sig) |
| _magicNumber | bytes4 | The magic number to be registered for the function signature |

#### internal function `_registerStandard`

Registers a standard resp. interface type

```solidity
function _registerStandard(bytes4 _interfaceId) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The identifier of the interface to check for |

#### internal function `_registerCallback`

Registers a callback

```solidity
function _registerCallback(bytes4 _callbackSig, bytes4 _magicNumber) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _callbackSig | bytes4 | The function signature of the called method (msg.sig) |
| _magicNumber | bytes4 | The magic number to be registered for the function signature |


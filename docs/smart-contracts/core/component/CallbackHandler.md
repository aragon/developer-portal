## Aragon Core

###  contract `CallbackHandler`

This contract handles callbacks by registering a magic number together with the callback function's selector. It provides the `_handleCallback` function that inherting have to call inside their `fallback()` function  (`_handleCallback(msg.callbackSelector, msg.data)`).  This allows to adaptively register ERC standards (e.g., [ERC-721](https://eips.ethereum.org/EIPS/eip-721), [ERC-1115](https://eips.ethereum.org/EIPS/eip-1155), or future versions of [ERC-165](https://eips.ethereum.org/EIPS/eip-165)) and returning the required magic numbers for the associated callback functions for the inheriting contract so that it doesn't need to be upgraded.

*This callback handling functionality is intented to be used by executor contracts (i.e., `DAO.sol`).*

#### internal variable `callbackMagicNumbers`

A mapping between callback function selectors and magic return numbers.

```solidity
mapping(bytes4 => bytes32) callbackMagicNumbers 
```

#### internal variable `UNREGISTERED_CALLBACK`

The magic number refering to unregistered callbacks.

```solidity
bytes32 UNREGISTERED_CALLBACK 
```

####  error `UnkownCallback`

Thrown if the callback function is not registered.

```solidity
error UnkownCallback(bytes4 callbackSelector, bytes32 magicNumber) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| callbackSelector | bytes4 | The selector of the callback function. |
| magicNumber | bytes32 | The magic number to be registered for the callback function selector. |

#### internal function `_handleCallback`

Handles callbacks to adaptively support ERC standards.

```solidity
function _handleCallback(bytes4 _callbackSelector) internal view 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _callbackSelector | bytes4 | The selector of the callback function. |

*This function is supposed to be called via `_handleCallback(msg.sig, msg.data)` in the `fallback()` function of the inheriting contract.*

#### internal function `_registerCallback`

Registers a magic number for a callback function selector.

```solidity
function _registerCallback(bytes4 _callbackSelector, bytes4 _magicNumber) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _callbackSelector | bytes4 | The selector of the callback function. |
| _magicNumber | bytes4 | The magic number to be registered for the callback function selector. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


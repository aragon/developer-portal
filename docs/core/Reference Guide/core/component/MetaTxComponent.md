## Aragon Core

###  contract `MetaTxComponent`

Specialized base component in the Aragon App DAO framework supporting meta transactions.

#### public variable `SET_TRUSTED_FORWARDER_PERMISSION_ID`

The ID of the permission required to call the `setTrustedForwarder` function.

```solidity
bytes32 SET_TRUSTED_FORWARDER_PERMISSION_ID 
```

####  event `TrustedForwarderSet`

Emitted when the trusted forwarder is set.

```solidity
event TrustedForwarderSet(address trustedForwarder) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| trustedForwarder | address | The trusted forwarder address. |

#### internal function `__MetaTxComponent_init`

Initializes the contract by initializing the underlying `Component`, registering the contract's [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID and setting the trusted forwarder.

```solidity
function __MetaTxComponent_init(contract IDAO _dao, address _trustedForwarder) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The associated DAO address. |
| _trustedForwarder | address | The address of the trusted forwarder verifying the meta transactions. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### internal function `_msgSender`

Overrides '_msgSender()' from 'Component'->'ContextUpgradeable' with that of 'BaseRelayRecipient'.

```solidity
function _msgSender() internal view returns (address) 
```

#### internal function `_msgData`

Overrides '_msgData()' from 'Component'->'ContextUpgradeable' with that of 'BaseRelayRecipient'.

```solidity
function _msgData() internal view returns (bytes) 
```

#### public function `setTrustedForwarder`

Setter for the trusted forwarder verifying the meta transaction.

```solidity
function setTrustedForwarder(address _trustedForwarder) public virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _trustedForwarder | address | The trusted forwarder address. |


## Aragon Core

###  contract `Component`

The base component in the Aragon App DAO framework.

#### public variable `UPGRADE_PERMISSION_ID`

The ID of the permission required to call the `_authorizeUpgrade` function.

```solidity
bytes32 UPGRADE_PERMISSION_ID 
```

#### internal function `__Component_init`

Initializes the DAO by storing the associated DAO and registering the contract's [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID.

```solidity
function __Component_init(contract IDAO _dao) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The associated DAO address. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### internal function `_authorizeUpgrade`

Internal method authorizing the upgrade of the contract via the [upgradeabilty mechanism for UUPS proxies](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable) (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).

```solidity
function _authorizeUpgrade(address) internal virtual 
```

*The caller must have the `UPGRADE_PERMISSION_ID` permission.*

#### external function `fallback`

```solidity
fallback() external 
```

*Fallback to handle future versions of the [ERC-165](https://eips.ethereum.org/EIPS/eip-165) standard.*


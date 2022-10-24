## Aragon Core

###  contract `PluginUUPSUpgradeable`

An abstract, upgradeable contract to inherit from when creating a plugin being deployed via the UUPS pattern (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).

#### public function `pluginType`

returns the plugin's type

```solidity
function pluginType() public pure returns (enum IPlugin.PluginType) 
```

#### public variable `UPGRADE_PLUGIN_PERMISSION_ID`

The ID of the permission required to call the `_authorizeUpgrade` function.

```solidity
bytes32 UPGRADE_PLUGIN_PERMISSION_ID 
```

#### internal function `__PluginUUPSUpgradeable_init`

Initializes the plugin by storing the associated DAO.

```solidity
function __PluginUUPSUpgradeable_init(contract IDAO _dao) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The DAO contract. |

#### public function `supportsInterface`

Checks if an interface is supported by this or its parent contract.

```solidity
function supportsInterface(bytes4 _interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The ID of the interace. |
| **Output** | |
| [0] | bool | bool Returns true if the interface is supported. |

#### public function `getImplementationAddress`

Returns the address of the implementation contract in the [proxy storage slot](https://eips.ethereum.org/EIPS/eip-1967) slot the [UUPS proxy](https://eips.ethereum.org/EIPS/eip-1822) is pointing to.

```solidity
function getImplementationAddress() public view returns (address implementation) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| implementation | address | The address of the implementation contract. |

#### internal function `_authorizeUpgrade`

Internal method authorizing the upgrade of the contract via the [upgradeabilty mechanism for UUPS proxies](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable) (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).

```solidity
function _authorizeUpgrade(address) internal virtual 
```

*The caller must have the `UPGRADE_PLUGIN_PERMISSION_ID` permission.*

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[50] __gap 
```


## Aragon Core

###  contract `PluginCloneable`

An abstract, non-upgradeable contract to inherit from when creating a plugin being deployed via the minimal clones pattern (see [ERC-1167](https://eips.ethereum.org/EIPS/eip-1167)).

#### internal function `__PluginCloneable_init`

Initializes the plugin by storing the associated DAO.

```solidity
function __PluginCloneable_init(contract IDAO _dao) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The DAO contract. |

#### public function `pluginType`

returns the plugin's type

```solidity
function pluginType() public pure returns (enum IPlugin.PluginType) 
```

#### public function `supportsInterface`

Checks if this or the parent contract supports an interface by its ID.

```solidity
function supportsInterface(bytes4 _interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The ID of the interace. |
| **Output** | |
| [0] | bool | bool Returns true if the interface is supported. |


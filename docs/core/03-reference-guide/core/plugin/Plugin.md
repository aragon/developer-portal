## Aragon Core

###  contract `Plugin`

An abstract, non-upgradeable inherit from when creating a plugin being deployed via the `new` keyword.

#### internal function `constructor`

Constructs the plugin by storing the associated DAO.

```solidity
constructor(contract IDAO _dao) internal 
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
| _interfaceId | bytes4 | The ID of the interface. |
| **Output** | |
| [0] | bool | bool Returns `true` if the interface is supported. |


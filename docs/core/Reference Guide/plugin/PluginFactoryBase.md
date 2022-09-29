## Aragon Core

###  contract `PluginFactoryIDs`

A library to share the interface ID of the abstract `PluginFactoryBase` contract.

#### public variable `PLUGIN_FACTORY_INTERFACE_ID`

The interface ID of the `PluginFactoryBase` contract.

```solidity
bytes4 PLUGIN_FACTORY_INTERFACE_ID 
```

###  contract `PluginFactoryBase`

The abstract base contract for plugin factories to inherit from.

#### internal variable `basePluginAddress`

The base plugin address to clone from.

```solidity
address basePluginAddress 
```

#### internal function `constructor`

Initializes the plugin factory by registering its [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID.

```solidity
constructor() internal 
```

#### external function `deploy`

Deploys a plugin.

```solidity
function deploy(address _dao, bytes _params) external virtual returns (address pluginAddress) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the DAO where the plugin will be installed. |
| _params | bytes | The encoded paramaters needed for the plugin deployment. |
| **Output** | |
| pluginAddress | address | The the address of the deployed plugin. |

#### external function `getBasePluginAddress`

Retruns the address of the base plugin.

```solidity
function getBasePluginAddress() external view returns (address) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | address | address The the address of the base plugin. |


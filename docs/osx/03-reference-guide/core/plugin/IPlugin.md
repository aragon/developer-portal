## Aragon OSx

###  contract `IPlugin`

An interface defining the traits of a plugin.

####  enum `PluginType`

```solidity
enum PluginType {
  UUPS,
  Cloneable,
  Constructable
}
```

#### external function `pluginType`

returns the plugin's type

```solidity
function pluginType() external view returns (enum IPlugin.PluginType) 
```


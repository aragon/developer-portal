## Aragon Core

###  contract `IPluginRepo`

The interface required for a plugin repository.

#### external function `createVersion`

Creates a new version with contract `_pluginSetupAddress` and content `@fromHex(_contentURI)`.

```solidity
function createVersion(uint16[3] _semanticVersion, address _pluginSetupAddress, bytes _contentURI) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _semanticVersion | uint16[3] | The semantic version number for the version to be created. |
| _pluginSetupAddress | address | The address of the plugin setup contract. |
| _contentURI | bytes | External URI where the plugin metadata and subsequent resources can be fetched from |


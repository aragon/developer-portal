## Aragon Core

###  contract `IPluginRepo`

#### external function `createVersion`

Create new version with contract `_pluginManagerAddress` and content `@fromHex(_contentURI)`

```solidity
function createVersion(uint16[3] _newSemanticVersion, address _pluginManagerAddress, bytes _contentURI) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _newSemanticVersion | uint16[3] | Semantic version for new pluginRepo version |
| _pluginManagerAddress | address | Address for smart contract logic for version (if set to 0, it uses last versions' pluginManagerAddress) |
| _contentURI | bytes | External URI where the plugin metadata and subsequent resources can be fetched from |


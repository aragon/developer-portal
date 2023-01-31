## Aragon Core

###  contract `IPluginRepo`

The interface required for a plugin repository.

#### external function `updateReleaseMetadata`

Update the metadata for release with content `@fromHex(_releaseMetadata)`.

```solidity
function updateReleaseMetadata(uint8 _release, bytes _releaseMetadata) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _release | uint8 | The release number. |
| _releaseMetadata | bytes | The release metadata URI. |

#### external function `createVersion`

Creates a new version with contract `_pluginSetupAddress` and content `@fromHex(_buildMetadata)`.

```solidity
function createVersion(uint8 _release, address _pluginSetupAddress, bytes _buildMetadata, bytes _releaseMetadata) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _release | uint8 | The release number. |
| _pluginSetupAddress | address | The address of the plugin setup contract. |
| _buildMetadata | bytes | The build metadata URI. |
| _releaseMetadata | bytes | The release metadata URI. |


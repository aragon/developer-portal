## Description

The interface required for a plugin repository.

## Implementation

### external function updateReleaseMetadata

Updates the metadata for release with content `@fromHex(_releaseMetadata)`.

```solidity
function updateReleaseMetadata(uint8 _release, bytes _releaseMetadata) external
```

| Input              | Type    | Description               |
| :----------------- | ------- | ------------------------- |
| `_release`         | `uint8` | The release number.       |
| `_releaseMetadata` | `bytes` | The release metadata URI. |

### external function createVersion

Creates a new plugin version as the latest build for an existing release number or the first build for a new release number for the provided `PluginSetup` contract address and metadata.

```solidity
function createVersion(uint8 _release, address _pluginSetupAddress, bytes _buildMetadata, bytes _releaseMetadata) external
```

| Input                 | Type      | Description                               |
| :-------------------- | --------- | ----------------------------------------- |
| `_release`            | `uint8`   | The release number.                       |
| `_pluginSetupAddress` | `address` | The address of the plugin setup contract. |
| `_buildMetadata`      | `bytes`   | The build metadata URI.                   |
| `_releaseMetadata`    | `bytes`   | The release metadata URI.                 |

### event VersionCreated

Emitted if the same plugin setup exists in previous releases.

```solidity
event VersionCreated(uint8 release, uint16 build, address pluginSetup, bytes buildMetadata)
```

| Input           | Type      | Description                               |
| :-------------- | --------- | ----------------------------------------- |
| `release`       | `uint8`   | The release number.                       |
| `build`         | `uint16`  | The build number.                         |
| `pluginSetup`   | `address` | The address of the plugin setup contract. |
| `buildMetadata` | `bytes`   | The build metadata URI.                   |

### event ReleaseMetadataUpdated

Emitted when a release's metadata was updated.

```solidity
event ReleaseMetadataUpdated(uint8 release, bytes releaseMetadata)
```

| Input             | Type    | Description               |
| :---------------- | ------- | ------------------------- |
| `release`         | `uint8` | The release number.       |
| `releaseMetadata` | `bytes` | The release metadata URI. |

<!--CONTRACT_END-->

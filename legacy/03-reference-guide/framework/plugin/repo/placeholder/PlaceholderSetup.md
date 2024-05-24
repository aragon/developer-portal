## Description

A placeholder setup contract for outdated plugin builds. When moving plugin repos to new chains or layers, where only the latest release and build should be available, this placeholder can be used to populate previous builds.

## Implementation

### error PlaceholderSetupCannotBeUsed

Thrown if the dummy is used.

```solidity
error PlaceholderSetupCannotBeUsed()
```

### public function constructor

```solidity
constructor() public
```

### external function prepareInstallation

Prepares the installation of a plugin.

```solidity
function prepareInstallation(address, bytes) external pure returns (address, struct IPluginSetup.PreparedSetupData)
```

| Input      | Type                                    | Description |
| :--------- | --------------------------------------- | ----------- |
| ``         | `address`                               |             |
| ``         | `bytes`                                 |             |
| **Output** |                                         |
| `0`        | `address`                               |             |
| `1`        | `struct IPluginSetup.PreparedSetupData` |             |

### external function prepareUninstallation

Prepares the uninstallation of a plugin.

```solidity
function prepareUninstallation(address, struct IPluginSetup.SetupPayload) external pure returns (struct PermissionLib.MultiTargetPermission[])
```

| Input      | Type                                           | Description |
| :--------- | ---------------------------------------------- | ----------- |
| ``         | `address`                                      |             |
| ``         | `struct IPluginSetup.SetupPayload`             |             |
| **Output** |                                                |
| `0`        | `struct PermissionLib.MultiTargetPermission[]` |             |

<!--CONTRACT_END-->

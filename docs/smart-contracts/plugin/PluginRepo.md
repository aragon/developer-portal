## Aragon Core

###  contract `PluginRepo`

The plugin repository contract required for managing and publishing different plugin versions within the Aragon DAO framework following the [Semantic Versioning 2.0.0](https://semver.org/) convention.

#### public struct `Version`

```solidity
struct Version {
  uint16[3] semanticVersion;
  address pluginSetup;
  bytes contentURI;
}
```

#### public variable `CREATE_VERSION_PERMISSION_ID`

The ID of the permission required to call the `createVersion` function.

```solidity
bytes32 CREATE_VERSION_PERMISSION_ID 
```

#### public variable `UPGRADE_PERMISSION_ID`

The ID of the permission required to call the `createVersion` function.

```solidity
bytes32 UPGRADE_PERMISSION_ID 
```

#### internal variable `nextVersionIndex`

The index of the next version to be created.

```solidity
uint256 nextVersionIndex 
```

#### internal variable `versions`

The mapping between version indices and version information.

```solidity
mapping(uint256 => struct PluginRepo.Version) versions 
```

#### internal variable `versionIndexForSemantic`

A mapping between the semantic version number hash and the version index.

```solidity
mapping(bytes32 => uint256) versionIndexForSemantic 
```

#### internal variable `versionIndexForPluginSetup`

A mapping between the `PluginSetup` contract addresses and the version index.

```solidity
mapping(address => uint256) versionIndexForPluginSetup 
```

####  error `InvalidBump`

Thrown if a semantic version number bump is invalid.

```solidity
error InvalidBump(uint16[3] currentVersion, uint16[3] nextVersion) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| currentVersion | uint16[3] | The current semantic version number. |
| nextVersion | uint16[3] | The next semantic version number. |

####  error `VersionIndexDoesNotExist`

Thrown if version does not exist.

```solidity
error VersionIndexDoesNotExist(uint256 versionIndex) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| versionIndex | uint256 | The index of the version. |

####  error `InvalidPluginSetupInterface`

Thrown if a contract does not inherit from `PluginSetup`.

```solidity
error InvalidPluginSetupInterface(address invalidPluginSetup) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| invalidPluginSetup | address | The address of the contract missing the `PluginSetup` interface. |

####  error `InvalidPluginSetupContract`

Thrown if a contract is not a `PluginSetup` contract.

```solidity
error InvalidPluginSetupContract(address invalidPluginSetup) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| invalidPluginSetup | address | The address of the contract not being a plugin factory. |

####  error `InvalidContractAddress`

Thrown if address is not a contract.

```solidity
error InvalidContractAddress(address invalidContract) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| invalidContract | address | The address not being a contract. |

####  event `VersionCreated`

Emitted when a new version is created.

```solidity
event VersionCreated(uint256 versionId, uint16[3] semanticVersion) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| versionId | uint256 | The version index. |
| semanticVersion | uint16[3] | The semantic version number. |

#### external function `initialize`

Initializes the contract by
- registering the [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID
- initializing the permission manager
- setting the next version index to 1 and
- giving the `CREATE_VERSION_PERMISSION_ID` permission to the initial owner.

```solidity
function initialize(address initialOwner) external 
```

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### external function `createVersion`

Creates a new version with contract `_pluginSetupAddress` and content `@fromHex(_contentURI)`.

```solidity
function createVersion(uint16[3] _newSemanticVersion, address _pluginSetup, bytes _contentURI) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _newSemanticVersion | uint16[3] |  |
| _pluginSetup | address |  |
| _contentURI | bytes | External URI where the plugin metadata and subsequent resources can be fetched from |

#### public function `getLatestVersion`

Gets the version information of the latest version.

```solidity
function getLatestVersion() public view returns (uint16[3] semanticVersion, address pluginSetup, bytes contentURI) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| semanticVersion | uint16[3] | The semantic version number. |
| pluginSetup | address | The address of the plugin factory associated with the version. |
| contentURI | bytes | The external URI pointing to the content of the version. |

#### public function `getVersionByPluginSetup`

Gets the version information associated with a plugin factory address.

```solidity
function getVersionByPluginSetup(address _pluginSetup) public view returns (uint16[3] semanticVersion, address pluginSetup, bytes contentURI) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| semanticVersion | uint16[3] | The semantic version number. |
| pluginSetup | address | The address of the plugin factory associated with the version. |
| contentURI | bytes | The external URI pointing to the content of the version. |

#### public function `getVersionBySemanticVersion`

Gets the version information associated with a semantic version number.

```solidity
function getVersionBySemanticVersion(uint16[3] _semanticVersion) public view returns (uint16[3] semanticVersion, address pluginSetup, bytes contentURI) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| semanticVersion | uint16[3] | The semantic version number. |
| pluginSetup | address | The address of the plugin factory associated with the version. |
| contentURI | bytes | The external URI pointing to the content of the version. |

#### public function `getVersionById`

Gets the version information associated with a version index.

```solidity
function getVersionById(uint256 _versionIndex) public view returns (uint16[3] semanticVersion, address pluginSetup, bytes contentURI) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| semanticVersion | uint16[3] | The semantic version number. |
| pluginSetup | address | The address of the plugin factory associated with the version. |
| contentURI | bytes | The external URI pointing to the content of the version. |

#### public function `getVersionCount`

Gets the total number of published versions.

```solidity
function getVersionCount() public view returns (uint256) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint256 | uint256 The number of published versions. |

#### public function `isValidBump`

Checks if a version bump is valid.

```solidity
function isValidBump(uint16[3] _oldVersion, uint16[3] _newVersion) public pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _oldVersion | uint16[3] | The old semantic version number. |
| _newVersion | uint16[3] | The new semantic version number. |
| **Output** | |
| [0] | bool | bool Returns true if the bump is valid. |

#### internal function `semanticVersionHash`

Generates a hash from a semantic version number.

```solidity
function semanticVersionHash(uint16[3] semanticVersion) internal pure returns (bytes32) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| semanticVersion | uint16[3] | The semantic version number. |
| **Output** | |
| [0] | bytes32 | bytes32 The hash of the semantic version number. |

#### internal function `_authorizeUpgrade`

Internal method authorizing the upgrade of the contract via the [upgradeabilty mechanism for UUPS proxies](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable) (see [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)).

```solidity
function _authorizeUpgrade(address) internal virtual 
```

*The caller must have the `UPGRADE_PERMISSION_ID` permission.*

#### public function `supportsInterface`

Checks if this or the parent contract supports an interface by its ID.

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| interfaceId | bytes4 | The ID of the interace. |
| **Output** | |
| [0] | bool | bool Returns true if the interface is supported. |


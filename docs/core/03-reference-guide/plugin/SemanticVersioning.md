## Aragon Core

###  error `BumpInvalid`

Thrown if a semantic version number bump is invalid.

```solidity
error BumpInvalid(uint16[3] currentVersion, uint16[3] nextVersion) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| currentVersion | uint16[3] | The current semantic version number. |
| nextVersion | uint16[3] | The next semantic version number. |

### internal function `freeFunction`

Checks if a semantic version bump is valid. The version elements (major, minor, and patch) are only allowed to be incremented by 1, respectively, and all subsequent numbers must be decremented to 0.

```solidity
freeFunction isValidBumpStrict(uint16[3] _oldVersion, uint16[3] _newVersion) internal pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _oldVersion | uint16[3] | The old semantic version number. |
| _newVersion | uint16[3] | The new semantic version number. |
| **Output** | |
| [0] | bool | bool Returns true if the bump is valid. |

### internal function `freeFunction`

Checks if a semantic version bump is valid. All version elements (major, minor, and patch) can increase by 1 or more.

```solidity
freeFunction isValidBumpLoose(uint16[3] _oldVersion, uint16[3] _newVersion) internal pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _oldVersion | uint16[3] | The old semantic version number. |
| _newVersion | uint16[3] | The new semantic version number. |
| **Output** | |
| [0] | bool | bool Returns true if the bump is valid. |


## Description

An interface defining the semantic Aragon OSx protocol version number.

## Implementation

### external function protocolVersion

Returns the semantic Aragon OSx protocol version number that the implementing contract is associated with.

```solidity
function protocolVersion() external view returns (uint8[3] _version)
```

| Output     | Type       | Description                                              |
| ---------- | ---------- | -------------------------------------------------------- |
| `_version` | `uint8[3]` | Returns the semantic Aragon OSx protocol version number. |

_This version number is not to be confused with the `release` and `build` numbers found in the `Version.Tag` struct inside the `PluginRepo` contract being used to version plugin setup and associated plugin implementation contracts._

<!--CONTRACT_END-->

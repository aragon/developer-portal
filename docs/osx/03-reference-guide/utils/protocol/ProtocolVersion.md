## Description

An abstract, stateless, non-upgradeable contract providing the current Aragon OSx protocol version number.

Do not add any new variables to this contract that would shift down storage in the inheritance chain.

## Implementation

### public function protocolVersion

Returns the semantic Aragon OSx protocol version number that the implementing contract is associated with.

```solidity
function protocolVersion() public pure returns (uint8[3])
```

| Output | Type       | Description |
| ------ | ---------- | ----------- |
| `0`    | `uint8[3]` |             |

_This version number is not to be confused with the `release` and `build` numbers found in the `Version.Tag` struct inside the `PluginRepo` contract being used to version plugin setup and associated plugin implementation contracts._

<!--CONTRACT_END-->

## Aragon Core

###  contract `Uint256Helpers`

#### private variable `MAX_UINT64`

```solidity
uint256 MAX_UINT64 
```

####  error `OutOfBounds`

Thrown if the checked value exceeds the a limit.

```solidity
error OutOfBounds(uint256 maxValue, uint256 value) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| maxValue | uint256 | The maximum value. |
| value | uint256 | The compared value. |

#### internal function `toUint64`

Casts a `uint256` safely to `uint64` making sure is not out of the bounds.

```solidity
function toUint64(uint256 a) internal pure returns (uint64) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| a | uint256 | The value to convert. |


## Aragon Core

### internal function `freeFunction`

```solidity
freeFunction hasBit(uint256 bitmap, uint8 index) internal pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| bitmap | uint256 | The `uint256` representation of bits. |
| index | uint8 | The index number to check whether 1 or 0 is set. |
| **Output** | |
| [0] | bool | bool Returns `true` whether the bit is set at `index` on `bitmap`. |

### internal function `freeFunction`

```solidity
freeFunction flipBit(uint256 bitmap, uint8 index) internal pure returns (uint256) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| bitmap | uint256 | The `uint256` representation of bits. |
| index | uint8 | The index number to set the bit. |
| **Output** | |
| [0] | uint256 | uint256 Returns a new number on which the bit is set at `index`. |


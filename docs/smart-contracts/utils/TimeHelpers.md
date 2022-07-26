## Aragon Core

###  contract `TimeHelpers`

#### internal function `getBlockNumber`

Gets the current block number.

```solidity
function getBlockNumber() internal view virtual returns (uint256) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint256 | The block number. |

*Using a function rather than `block.number` allows us to easily mock the block number in tests.*

#### internal function `getBlockNumber64`

Gets the current block number converted to `uint64`.

```solidity
function getBlockNumber64() internal view virtual returns (uint64) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint64 | The block number converted to `uint64`. |

*Using a function rather than `block.number` allows us to easily mock the block number in tests.*

#### internal function `getTimestamp`

Gets the current timestamp.

```solidity
function getTimestamp() internal view virtual returns (uint256) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint256 | The timestamp. |

*Using a function rather than `block.timestamp` allows us to easily mock it in tests.*

#### internal function `getTimestamp64`

Gets the current timestamp converted to `uint64`.

```solidity
function getTimestamp64() internal view virtual returns (uint64) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint64 | The timestamp converted to `uint64`. |

*Using a function rather than `block.timestamp` allows us to easily mock it in tests.*


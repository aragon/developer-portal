## Description

## Implementation

### internal function eq

Equality comparator for two semantic version numbers.

```solidity
function eq(uint8[3] lhs, uint8[3] rhs) internal pure returns (bool)
```

| Input      | Type       | Description                                  |
| :--------- | ---------- | -------------------------------------------- |
| `lhs`      | `uint8[3]` | The left-hand side semantic version number.  |
| `rhs`      | `uint8[3]` | The right-hand side semantic version number. |
| **Output** |            |
| `0`        | `bool`     | Whether the two numbers are equal or not.    |

### internal function neq

Inequality comparator for two semantic version numbers.

```solidity
function neq(uint8[3] lhs, uint8[3] rhs) internal pure returns (bool)
```

| Input      | Type       | Description                                  |
| :--------- | ---------- | -------------------------------------------- |
| `lhs`      | `uint8[3]` | The left-hand side semantic version number.  |
| `rhs`      | `uint8[3]` | The right-hand side semantic version number. |
| **Output** |            |
| `0`        | `bool`     | Whether the two numbers are inequal or not.  |

### internal function lt

Less than comparator for two semantic version numbers.

```solidity
function lt(uint8[3] lhs, uint8[3] rhs) internal pure returns (bool)
```

| Input      | Type       | Description                                                     |
| :--------- | ---------- | --------------------------------------------------------------- |
| `lhs`      | `uint8[3]` | The left-hand side semantic version number.                     |
| `rhs`      | `uint8[3]` | The right-hand side semantic version number.                    |
| **Output** |            |
| `0`        | `bool`     | Whether the first number is less than the second number or not. |

### internal function lte

Less than or equal to comparator for two semantic version numbers.

```solidity
function lte(uint8[3] lhs, uint8[3] rhs) internal pure returns (bool)
```

| Input      | Type       | Description                                                                 |
| :--------- | ---------- | --------------------------------------------------------------------------- |
| `lhs`      | `uint8[3]` | The left-hand side semantic version number.                                 |
| `rhs`      | `uint8[3]` | The right-hand side semantic version number.                                |
| **Output** |            |
| `0`        | `bool`     | Whether the first number is less than or equal to the second number or not. |

### internal function gt

Greater than comparator for two semantic version numbers.

```solidity
function gt(uint8[3] lhs, uint8[3] rhs) internal pure returns (bool)
```

| Input      | Type       | Description                                                        |
| :--------- | ---------- | ------------------------------------------------------------------ |
| `lhs`      | `uint8[3]` | The left-hand side semantic version number.                        |
| `rhs`      | `uint8[3]` | The right-hand side semantic version number.                       |
| **Output** |            |
| `0`        | `bool`     | Whether the first number is greater than the second number or not. |

### internal function gte

Greater than or equal to comparator for two semantic version numbers.

```solidity
function gte(uint8[3] lhs, uint8[3] rhs) internal pure returns (bool)
```

| Input      | Type       | Description                                                                    |
| :--------- | ---------- | ------------------------------------------------------------------------------ |
| `lhs`      | `uint8[3]` | The left-hand side semantic version number.                                    |
| `rhs`      | `uint8[3]` | The right-hand side semantic version number.                                   |
| **Output** |            |
| `0`        | `bool`     | Whether the first number is greater than or equal to the second number or not. |

<!--CONTRACT_END-->

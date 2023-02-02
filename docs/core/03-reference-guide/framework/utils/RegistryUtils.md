## Aragon Core

### internal function `freeFunction`

Checks if the name is either 0-9, a-z or a dash (-).

```solidity
freeFunction isSubdomainValid(string subDomain) internal pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| subDomain | string | The name of the DAO. |
| **Output** | |
| [0] | bool | `true` if the name is valid or `false` if at least one char is invalid. |

*Aborts on the first invalid char found.*


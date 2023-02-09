## Aragon Core

### internal function `freeFunction`

Validates that a subdomain name is composed only from characters in the allowed character set:
- the lowercase letters `a-z`
- the digits `0-9`
- the hyphen `-`

```solidity
freeFunction isSubdomainValid(string subDomain) internal pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| subDomain | string | The name of the DAO. |
| **Output** | |
| [0] | bool | `true` if the name is valid or `false` if at least one char is invalid. |

*Aborts on the first invalid char found.*


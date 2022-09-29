## Aragon Core

### internal function `freeFunction`

Free function to create a proxy contract based on the passed base contract address.

```solidity
freeFunction createProxy(address _logic, bytes _data) internal returns (address payable addr) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _logic | address | The base contract address. |
| _data | bytes | The constructor arguments for this contract. |
| **Output** | |
| addr | address payable | The address of the proxy contract created. |

*Initializes the upgradeable proxy with an initial implementation specified by _logic. If _data is non-empty, it’s used as data in a delegate call to _logic. This will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity constructor (see [OpenZepplin ERC1967Proxy-constructor](https://docs.openzeppelin.com/contracts/4.x/api/proxy#ERC1967Proxy-constructor-address-bytes-)).*


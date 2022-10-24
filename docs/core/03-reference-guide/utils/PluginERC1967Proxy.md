## Aragon Core

###  contract `PluginERC1967Proxy`

This contract provides an [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) compatible proxy contract delegating calls to the implementation address.

*This proxy doesn't include the upgradability logic and assumes that implementation contracts are `UUPSUpgradable`. 
If you want the proxy to contain upgrade logic, you have to use `TransparentUpgradableProxy`.*

#### public function `constructor`

The constructor initializing the [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) proxy and setting the `IDAO` address if specified.

```solidity
constructor(address _dao, address _logic, bytes _data) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The DAO address to be stored. |
| _logic | address | The address of the logic contract containing the proxy is pointing to. @ param _data The data being passed in a delegatecall to `_logic` to initialize the storage (see [OZs `ERC1967Proxy.sol` docs](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/ERC1967/ERC1967Proxy.sol)) |
| _data | bytes |  |


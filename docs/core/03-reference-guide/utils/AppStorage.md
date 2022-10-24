## Aragon Core

###  contract `AppStorage`

Core storage that stores information at very specific slots.

#### internal variable `DAO_POSITION`

The position in storage in which the contract address fulfilling the `IDAO` interface is stored

```solidity
bytes32 DAO_POSITION 
```

*bytes32 internal constant DAO_POSITION = keccak256("core.storage.dao");*

#### public function `dao`

Gets the`IDAO` contract being stored in the `DAO_POSITION` storage slot.

```solidity
function dao() public view returns (contract IDAO) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | contract IDAO | The `IDAO` contract. |

#### internal function `setDAO`

Stores the`IDAO` contract in the `DAO_POSITION` storage slot.

```solidity
function setDAO(address _dao) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | address | The address of the `IDAO` contract to be stored. |


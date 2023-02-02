## Aragon Core

###  contract `ProposalUpgradeable`

An abstract contract defining the traits and internal functionality to create and execute proposals for upgradeable contracts.

#### private variable `proposalCounter`

The incremental ID for proposals and executions.

```solidity
struct CountersUpgradeable.Counter proposalCounter 
```

#### public function `proposalCount`

Returns the proposal count determining the next proposal ID.

```solidity
function proposalCount() public view returns (uint256) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint256 | The proposal count. |

#### internal function `createProposalId`

Creates a proposal ID.

```solidity
function createProposalId() internal returns (uint256 proposalId) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| proposalId | uint256 | The proposal ID. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


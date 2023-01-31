## Aragon Core

###  contract `Proposal`

An abstract contract defining the traits and internal functionality to create and execute proposals for non-upgradeable contracts.

#### private variable `proposalCounter`

The incremental ID for proposals and executions.

```solidity
struct Counters.Counter proposalCounter 
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


## Aragon Core

###  contract `ProposalBase`

An abstract base contract defining the traits and internal functionality to create and execute proposals.

####  event `ProposalCreated`

Emitted when a proposal is created.

```solidity
event ProposalCreated(uint256 proposalId, address creator, uint64 startDate, uint64 endDate, bytes metadata, struct IDAO.Action[] actions, uint256 allowFailureMap) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| proposalId | uint256 | The ID of the proposal. |
| creator | address | The creator of the proposal. |
| startDate | uint64 | The start date of the proposal in seconds. |
| endDate | uint64 | The end date of the proposal in seconds. |
| metadata | bytes | The metadata of the proposal. |
| actions | struct IDAO.Action[] | The actions that will be executed if the proposal passes. |
| allowFailureMap | uint256 | A bitmap allowing the proposal to succeed, even if individual actions might revert. If the bit at index `i` is 1, the proposal succeeds even if the `i`th action reverts. A failure map value of 0 requires every action to not revert. |

####  event `ProposalExecuted`

Emitted when a proposal is executed.

```solidity
event ProposalExecuted(uint256 proposalId, bytes[] execResults) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| proposalId | uint256 | The ID of the proposal. |
| execResults | bytes[] | The bytes array resulting from the proposal execution in the associated DAO. |

#### public function `proposalCount`

Returns the proposal count determining the next proposal ID.

```solidity
function proposalCount() public view virtual returns (uint256) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint256 | The proposal count. |

#### internal function `createProposalId`

Creates a proposal ID.

```solidity
function createProposalId() internal virtual returns (uint256) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | uint256 | The proposal ID. |

#### internal function `_createProposal`

Internal function to create a proposal.

```solidity
function _createProposal(address _creator, bytes _metadata, uint64 _startDate, uint64 _endDate, struct IDAO.Action[] _actions, uint256 _allowFailureMap) internal virtual returns (uint256 proposalId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _creator | address |  |
| _metadata | bytes | The the proposal metadata. |
| _startDate | uint64 | The start date of the proposal in seconds. |
| _endDate | uint64 | The end date of the proposal in seconds. |
| _actions | struct IDAO.Action[] | The actions that will be executed after the proposal passes. |
| _allowFailureMap | uint256 | A bitmap allowing the proposal to succeed, even if individual actions might revert. If the bit at index `i` is 1, the proposal succeeds even if the `i`th action reverts. A failure map value of 0 requires every action to not revert. |
| **Output** | |
| proposalId | uint256 | The ID of the proposal. |

#### internal function `_executeProposal`

Internal function to execute a proposal.

```solidity
function _executeProposal(contract IDAO _dao, uint256 _proposalId, struct IDAO.Action[] _actions, uint256 _allowFailureMap) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO |  |
| _proposalId | uint256 | The ID of the proposal to be executed. |
| _actions | struct IDAO.Action[] | The array of actions to be executed. |
| _allowFailureMap | uint256 | A bitmap allowing the proposal to succeed, even if individual actions might revert. If the bit at index `i` is 1, the proposal succeeds even if the `i`th action reverts. A failure map value of 0 requires every action to not revert. |


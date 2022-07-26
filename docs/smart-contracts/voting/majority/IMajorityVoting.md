## Aragon Core

###  contract `IMajorityVoting`

The interface for majority voting contracts.

####  enum `VoteOption`

```solidity
enum VoteOption {
  None,
  Abstain,
  Yes,
  No
}
```

#### public struct `Vote`

```solidity
struct Vote {
  bool executed;
  uint64 startDate;
  uint64 endDate;
  uint64 snapshotBlock;
  uint64 supportRequiredPct;
  uint64 participationRequiredPct;
  uint256 yes;
  uint256 no;
  uint256 abstain;
  uint256 votingPower;
  mapping(address => enum IMajorityVoting.VoteOption) voters;
  struct IDAO.Action[] actions;
}
```

####  event `VoteStarted`

Emitted when a vote is started.

```solidity
event VoteStarted(uint256 voteId, address creator, bytes metadata) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| voteId | uint256 | The ID of the vote. |
| creator | address | The creator of the vote. |
| metadata | bytes | The IPFS hash pointing to the proposal metadata. |

####  event `VoteCast`

Emitted when a vote is casted by a voter.

```solidity
event VoteCast(uint256 voteId, address voter, uint8 choice, uint256 voteWeight) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| voteId | uint256 | The ID of the vote. |
| voter | address | The voter casting the vote. |
| choice | uint8 | The vote option chosen. |
| voteWeight | uint256 | The weight of the casted vote. |

####  event `VoteExecuted`

Emitted when a vote is executed.

```solidity
event VoteExecuted(uint256 voteId, bytes[] execResults) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| voteId | uint256 | The ID of the vote. |
| execResults | bytes[] | The bytes array resulting from the vote execution in the associated DAO. |

####  event `ConfigUpdated`

Emitted when the vote configuration is updated.

```solidity
event ConfigUpdated(uint64 participationRequiredPct, uint64 supportRequiredPct, uint64 minDuration) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| participationRequiredPct | uint64 | The required participation in percent. |
| supportRequiredPct | uint64 | The required support in percent. |
| minDuration | uint64 | The minimal duration of a vote. |

#### external function `changeVoteConfig`

Change required support and minQuorum.

```solidity
function changeVoteConfig(uint64 _participationRequiredPct, uint64 _supportRequiredPct, uint64 _minDuration) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _participationRequiredPct | uint64 | The required participation in percent. |
| _supportRequiredPct | uint64 | The required support in percent. |
| _minDuration | uint64 | The minimal duration of a vote. |

#### external function `createVote`

Create a new vote.

```solidity
function createVote(bytes _proposalMetadata, struct IDAO.Action[] _actions, uint64 _startDate, uint64 _endDate, bool _executeIfDecided, enum IMajorityVoting.VoteOption _choice) external returns (uint256 voteId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _proposalMetadata | bytes | The IPFS hash pointing to the proposal metadata. |
| _actions | struct IDAO.Action[] | The actions that will be executed after vote passes. |
| _startDate | uint64 | The start date of the vote. If 0, uses current timestamp. |
| _endDate | uint64 | The end date of the vote. If 0, uses `_start` + `minDuration`. |
| _executeIfDecided | bool | An option to enable automatic execution on the last required vote. |
| _choice | enum IMajorityVoting.VoteOption | The vote choice to cast on creation. |
| **Output** | |
| voteId | uint256 | The ID of the vote. |

#### external function `vote`

Votes for a vote option and optionally executes the vote.

```solidity
function vote(uint256 _voteId, enum IMajorityVoting.VoteOption _choice, bool _executesIfDecided) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _choice | enum IMajorityVoting.VoteOption | Whether voter abstains, supports or not supports to vote. |
| _executesIfDecided | bool | Whether the vote should execute its action if it becomes decided. |

*`[outcome = 1 = abstain], [outcome = 2 = supports], [outcome = 3 = not supports].*

#### external function `canVote`

Internal function to check if a voter can participate on a vote. It assumes the queried vote exists.

```solidity
function canVote(uint256 _voteId, address _voter) external view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | the vote Id. |
| _voter | address | the address of the voter to check. |
| **Output** | |
| [0] | bool | bool true if user is allowed to vote. |

#### external function `execute`

Method to execute a vote if allowed to.

```solidity
function execute(uint256 _voteId) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote to execute. |

#### external function `canExecute`

Checks if a vote is allowed to execute.

```solidity
function canExecute(uint256 _voteId) external view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote to execute. |

#### external function `getVoteOption`

Returns the state of a voter for a given vote by its ID.

```solidity
function getVoteOption(uint256 _voteId, address _voter) external view returns (enum IMajorityVoting.VoteOption) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _voter | address |  |
| **Output** | |
| [0] | enum IMajorityVoting.VoteOption | VoteOption of the requested voter for a certain vote. |

#### external function `getVote`

Returns all information for a vote by its ID.

```solidity
function getVote(uint256 _voteId) external view returns (bool open, bool executed, uint64 startDate, uint64 endDate, uint64 snapshotBlock, uint64 supportRequired, uint64 participationRequired, uint256 votingPower, uint256 yes, uint256 no, uint256 abstain, struct IDAO.Action[] actions) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| **Output** | |
| open | bool | Wheter the vote is open or not. |
| **Output** | |
| executed | bool | Wheter the vote is executed or not. |
| **Output** | |
| startDate | uint64 | The start date of the vote. |
| **Output** | |
| endDate | uint64 | The end date of the vote. |
| **Output** | |
| snapshotBlock | uint64 | The block number of the snapshot taken for this vote. |
| **Output** | |
| supportRequired | uint64 | The support required. |
| **Output** | |
| participationRequired | uint64 | The required participation. |
| **Output** | |
| votingPower | uint256 | The voting power participating in the vote. |
| **Output** | |
| yes | uint256 | The number of `yes` votes. |
| **Output** | |
| no | uint256 | The number of `no` votes. |
| **Output** | |
| abstain | uint256 | The number of `abstain` votes. |
| **Output** | |
| actions | struct IDAO.Action[] | The actions to be executed in the associated DAO after the vote has passed. |


## Aragon Core

###  contract `MajorityVotingBase`

The abstract implementation of majority voting components.

*This component implements the `IMajorityVoting` interface.*

#### internal variable `MAJORITY_VOTING_INTERFACE_ID`

The [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the contract.

```solidity
bytes4 MAJORITY_VOTING_INTERFACE_ID 
```

#### public variable `CHANGE_VOTE_CONFIG_PERMISSION_ID`

The ID of the permission required to call the `changeVoteConfig` function.

```solidity
bytes32 CHANGE_VOTE_CONFIG_PERMISSION_ID 
```

#### public variable `PCT_BASE`

The base value being defined to correspond to 100% to calculate and compare percentages despite the lack of floating point arithmetic.

```solidity
uint64 PCT_BASE 
```

#### internal variable `votes`

A mapping between vote IDs and vote information.

```solidity
mapping(uint256 => struct IMajorityVoting.Vote) votes 
```

#### public variable `supportRequiredPct`

```solidity
uint64 supportRequiredPct 
```

#### public variable `participationRequiredPct`

```solidity
uint64 participationRequiredPct 
```

#### public variable `minDuration`

```solidity
uint64 minDuration 
```

#### public variable `votesLength`

```solidity
uint256 votesLength 
```

####  error `VoteSupportExceeded`

Thrown if the maximal possible support is exceeded.

```solidity
error VoteSupportExceeded(uint64 limit, uint64 actual) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| limit | uint64 | The maximal value. |
| actual | uint64 | The actual value. |

####  error `VoteParticipationExceeded`

Thrown if the maximal possible participation is exceeded.

```solidity
error VoteParticipationExceeded(uint64 limit, uint64 actual) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| limit | uint64 | The maximal value. |
| actual | uint64 | The actual value. |

####  error `VoteTimesInvalid`

Thrown if the selected vote times are not allowed.

```solidity
error VoteTimesInvalid(uint64 current, uint64 start, uint64 end, uint64 minDuration) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| current | uint64 | The maximal value. |
| start | uint64 | The start date of the vote as a unix timestamp. |
| end | uint64 | The end date of the vote as a unix timestamp. |
| minDuration | uint64 | The minimal duration of the vote in seconds. |

####  error `VoteDurationZero`

Thrown if the selected vote duration is zero

```solidity
error VoteDurationZero() 
```

####  error `VoteCastingForbidden`

Thrown if a voter is not allowed to cast a vote.

```solidity
error VoteCastingForbidden(uint256 voteId, address sender) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| voteId | uint256 | The ID of the vote. |
| sender | address | The address of the voter. |

####  error `VoteExecutionForbidden`

Thrown if the vote execution is forbidden

```solidity
error VoteExecutionForbidden(uint256 voteId) 
```

#### internal function `__MajorityVotingBase_init`

Initializes the component to be used by inheriting contracts.

```solidity
function __MajorityVotingBase_init(contract IDAO _dao, address _trustedForwarder, uint64 _participationRequiredPct, uint64 _supportRequiredPct, uint64 _minDuration) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _trustedForwarder | address | The address of the trusted forwarder required for meta transactions. |
| _participationRequiredPct | uint64 | The minimal required participation in percent. |
| _supportRequiredPct | uint64 | The minimal required support in percent. |
| _minDuration | uint64 | The minimal duration of a vote |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

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
function createVote(bytes _proposalMetadata, struct IDAO.Action[] _actions, uint64 _startDate, uint64 _endDate, bool _executeIfDecided, enum IMajorityVoting.VoteOption _choice) external virtual returns (uint256 voteId) 
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

#### public function `execute`

Method to execute a vote if allowed to.

```solidity
function execute(uint256 _voteId) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote to execute. |

#### public function `getVoteOption`

Returns the state of a voter for a given vote by its ID.

```solidity
function getVoteOption(uint256 _voteId, address _voter) public view returns (enum IMajorityVoting.VoteOption) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _voter | address |  |
| **Output** | |
| [0] | enum IMajorityVoting.VoteOption | VoteOption of the requested voter for a certain vote. |

#### public function `canVote`

Internal function to check if a voter can participate on a vote. It assumes the queried vote exists.

```solidity
function canVote(uint256 _voteId, address _voter) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | the vote Id. |
| _voter | address | the address of the voter to check. |
| **Output** | |
| [0] | bool | bool true if user is allowed to vote. |

#### public function `canExecute`

Checks if a vote is allowed to execute.

```solidity
function canExecute(uint256 _voteId) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote to execute. |

#### public function `getVote`

Returns all information for a vote by its ID.

```solidity
function getVote(uint256 _voteId) public view returns (bool open, bool executed, uint64 startDate, uint64 endDate, uint64 snapshotBlock, uint64 supportRequired, uint64 participationRequired, uint256 votingPower, uint256 yes, uint256 no, uint256 abstain, struct IDAO.Action[] actions) 
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

#### internal function `_vote`

Internal function to cast a vote. It assumes the queried vote exists.

```solidity
function _vote(uint256 _voteId, enum IMajorityVoting.VoteOption _choice, address _voter, bool _executesIfDecided) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _choice | enum IMajorityVoting.VoteOption | Whether voter abstains, supports or not supports to vote. |
| _voter | address |  |
| _executesIfDecided | bool | if true, and it's the last vote required, immediately executes a vote. |

#### internal function `_execute`

Internal function to execute a vote. It assumes the queried vote exists.

```solidity
function _execute(uint256 _voteId) internal virtual 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |

#### internal function `_canVote`

Internal function to check if a voter can participate on a vote. It assumes the queried vote exists.

```solidity
function _canVote(uint256 _voteId, address _voter) internal view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _voter | address | the address of the voter to check. |
| **Output** | |
| [0] | bool | True if the given voter can participate a certain vote, false otherwise. |

#### internal function `_canExecute`

Internal function to check if a vote can be executed. It assumes the queried vote exists.

```solidity
function _canExecute(uint256 _voteId) internal view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| **Output** | |
| [0] | bool | True if the given vote can be executed, false otherwise. |

#### internal function `_isVoteOpen`

Internal function to check if a vote is still open.

```solidity
function _isVoteOpen(struct IMajorityVoting.Vote vote_) internal view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| vote_ | struct IMajorityVoting.Vote | the vote struct. |
| **Output** | |
| [0] | bool | True if the given vote is open, false otherwise. |

#### internal function `_isValuePct`

Calculates whether `_value` is more than a percentage `_pct` of `_total`.

```solidity
function _isValuePct(uint256 _value, uint256 _total, uint256 _pct) internal pure returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _value | uint256 | the current value. |
| _total | uint256 | the total value. |
| _pct | uint256 | the required support percentage. |
| **Output** | |
| [0] | bool | returns if the _value is _pct or more percentage of _total. |

#### internal function `_validateAndSetSettings`

```solidity
function _validateAndSetSettings(uint64 _participationRequiredPct, uint64 _supportRequiredPct, uint64 _minDuration) internal virtual 
```


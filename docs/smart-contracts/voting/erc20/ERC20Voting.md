## Aragon Core

###  contract `ERC20Voting`

The majority voting implementation using an ERC-20 token.

*This contract inherits from `MajorityVotingBase` and implements the `IMajorityVoting` interface.*

#### internal variable `ERC20_VOTING_INTERFACE_ID`

The [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the contract.

```solidity
bytes4 ERC20_VOTING_INTERFACE_ID 
```

#### private variable `votingToken`

An [ERC20Votes](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Votes) compatible contract referencing the token being used for voting.

```solidity
contract ERC20VotesUpgradeable votingToken 
```

####  error `NoVotingPower`

Thrown if the voting power is zero

```solidity
error NoVotingPower() 
```

#### public function `initialize`

Initializes the component.

```solidity
function initialize(contract IDAO _dao, address _trustedForwarder, uint64 _participationRequiredPct, uint64 _supportRequiredPct, uint64 _minDuration, contract ERC20VotesUpgradeable _token) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _trustedForwarder | address | The address of the trusted forwarder required for meta transactions. |
| _participationRequiredPct | uint64 | The minimal required participation in percent. |
| _supportRequiredPct | uint64 | The minimal required support in percent. |
| _minDuration | uint64 | The minimal duration of a vote. |
| _token | contract ERC20VotesUpgradeable | The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token used for voting. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### public function `supportsInterface`

adds a IERC165 to check whether contract supports ERC20_VOTING_INTERFACE_ID or not.

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | bool | bool whether it supports the IERC165 or ERC20_VOTING_INTERFACE_ID |

*See {ERC165Upgradeable-supportsInterface}.*

#### public function `getVotingToken`

getter function for the voting token.

```solidity
function getVotingToken() public view returns (contract ERC20VotesUpgradeable) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | contract ERC20VotesUpgradeable | ERC20VotesUpgradeable the token used for voting. |

*public function also useful for registering interfaceId and for distinguishing from majority voting interface.*

#### external function `createVote`

```solidity
function createVote(bytes _proposalMetadata, struct IDAO.Action[] _actions, uint64 _startDate, uint64 _endDate, bool _executeIfDecided, enum IMajorityVoting.VoteOption _choice) external returns (uint256 voteId) 
```

#### internal function `_vote`

Internal function to cast a vote. It assumes the queried vote exists.

```solidity
function _vote(uint256 _voteId, enum IMajorityVoting.VoteOption _choice, address _voter, bool _executesIfDecided) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _choice | enum IMajorityVoting.VoteOption | Whether voter abstains, supports or not supports to vote. |
| _voter | address |  |
| _executesIfDecided | bool | if true, and it's the last vote required, immediately executes a vote. |

#### internal function `_canVote`

Internal function to check if a voter can participate on a vote. It assumes the queried vote exists.

```solidity
function _canVote(uint256 _voteId, address _voter) internal view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _voteId | uint256 | The ID of the vote. |
| _voter | address | the address of the voter to check. |
| **Output** | |
| [0] | bool | True if the given voter can participate a certain vote, false otherwise. |

#### private variable `__gap`

```solidity
uint256[49] __gap 
```

*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


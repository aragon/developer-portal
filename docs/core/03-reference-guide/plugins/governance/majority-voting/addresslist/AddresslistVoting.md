## Aragon Core

###  contract `AddresslistVoting`

The majority voting implementation using an list of member addresses.

*This contract inherits from `MajorityVotingBase` and implements the `IMajorityVoting` interface.*

#### internal variable `ADDRESSLIST_VOTING_INTERFACE_ID`

The [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the contract.

```solidity
bytes4 ADDRESSLIST_VOTING_INTERFACE_ID 
```

#### public variable `UPDATE_ADDRESSES_PERMISSION_ID`

The ID of the permission required to call the `addAddresses` and `removeAddresses` functions.

```solidity
bytes32 UPDATE_ADDRESSES_PERMISSION_ID 
```

#### public function `constructor`

```solidity
constructor() public 
```

*Used to disallow initializing the implementation contract by an attacker for extra safety.*

#### external function `initialize`

Initializes the component.

```solidity
function initialize(contract IDAO _dao, struct MajorityVotingBase.VotingSettings _votingSettings, address[] _members) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _votingSettings | struct MajorityVotingBase.VotingSettings | The voting settings. |
| _members | address[] |  |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### public function `supportsInterface`

Checks if this or the parent contract supports an interface by its ID.

```solidity
function supportsInterface(bytes4 _interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _interfaceId | bytes4 | The ID of the interface. |
| **Output** | |
| [0] | bool | bool Returns `true` if the interface is supported. |

#### external function `addAddresses`

Adds new members to the address list.

```solidity
function addAddresses(address[] _members) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _members | address[] | The addresses of members to be added. |

*This function is used during the plugin initialization.*

#### external function `removeAddresses`

Removes existing members from the address list.

```solidity
function removeAddresses(address[] _members) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _members | address[] | The addresses of the members to be removed. |

#### public function `totalVotingPower`

Returns the total voting power checkpointed for a specific block number.

```solidity
function totalVotingPower(uint256 _blockNumber) public view returns (uint256) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _blockNumber | uint256 | The block number. |
| **Output** | |
| [0] | uint256 | The total voting power. |

#### external function `createProposal`

Creates a new majority voting proposal.

```solidity
function createProposal(bytes _metadata, struct IDAO.Action[] _actions, uint256 _allowFailureMap, uint64 _startDate, uint64 _endDate, enum IMajorityVoting.VoteOption _voteOption, bool _tryEarlyExecution) external returns (uint256 proposalId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _metadata | bytes | The metadata of the proposal. |
| _actions | struct IDAO.Action[] | The actions that will be executed after the proposal passes. |
| _allowFailureMap | uint256 | Allows proposal to succeed even if an action reverts. Uses bitmap representation. If the bit at index `x` is 1, the tx succeeds even if the action at `x` failed. Passing 0 will be treated as atomic execution. |
| _startDate | uint64 | The start date of the proposal vote. If 0, the current timestamp is used and the vote starts immediately. |
| _endDate | uint64 | The end date of the proposal vote. If 0, `_startDate + minDuration` is used. |
| _voteOption | enum IMajorityVoting.VoteOption | The chosen vote option to be casted on proposal creation. |
| _tryEarlyExecution | bool | If `true`,  early execution is tried after the vote cast. The call does not revert if early execution is not possible. |
| **Output** | |
| proposalId | uint256 | The ID of the proposal. |

#### internal function `_vote`

Internal function to cast a vote. It assumes the queried vote exists.

```solidity
function _vote(uint256 _proposalId, enum IMajorityVoting.VoteOption _voteOption, address _voter, bool _tryEarlyExecution) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _proposalId | uint256 | The ID of the proposal. |
| _voteOption | enum IMajorityVoting.VoteOption | The chosen vote option to be casted on the proposal vote. |
| _voter | address |  |
| _tryEarlyExecution | bool | If `true`,  early execution is tried after the vote cast. The call does not revert if early execution is not possible. |

#### internal function `_canVote`

Internal function to check if a voter can vote. It assumes the queried proposal exists.

```solidity
function _canVote(uint256 _proposalId, address _account, enum IMajorityVoting.VoteOption _voteOption) internal view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _proposalId | uint256 | The ID of the proposal. |
| _account | address |  |
| _voteOption | enum IMajorityVoting.VoteOption | Whether the voter abstains, supports or opposes the proposal. |
| **Output** | |
| [0] | bool | Returns `true` if the given voter can vote on a certain proposal and `false` otherwise. |

#### private variable `__gap`

```solidity
uint256[50] __gap 
```

*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


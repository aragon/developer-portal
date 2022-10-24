## Aragon Core

###  contract `AllowlistVoting`

The majority voting implementation using an list of allowed addresses.

*This contract inherits from `MajorityVotingBase` and implements the `IMajorityVoting` interface.*

#### internal variable `ALLOWLIST_VOTING_INTERFACE_ID`

The [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the contract.

```solidity
bytes4 ALLOWLIST_VOTING_INTERFACE_ID 
```

#### public variable `MODIFY_ALLOWLIST_PERMISSION_ID`

The ID of the permission required to call the `addAllowedUsers` and `removeAllowedUsers` function.

```solidity
bytes32 MODIFY_ALLOWLIST_PERMISSION_ID 
```

#### private variable `_allowedAddressesCheckpoints`

The mapping containing the checkpointed history of addresses being allowed.

```solidity
mapping(address => struct Checkpoints.History) _allowedAddressesCheckpoints 
```

#### private variable `_allowlistLengthCheckpoints`

The checkpointed history of the length of the allowlist.

```solidity
struct Checkpoints.History _allowlistLengthCheckpoints 
```

####  error `VoteCreationForbidden`

Thrown when a sender is not allowed to create a vote.

```solidity
error VoteCreationForbidden(address sender) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| sender | address | The sender address. |

####  event `UsersAdded`

Emitted when new users are added to the allowlist.

```solidity
event UsersAdded(address[] users) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| users | address[] | The array of user addresses to be added. |

####  event `UsersRemoved`

Emitted when users are removed from the allowlist.

```solidity
event UsersRemoved(address[] users) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| users | address[] | The array of user addresses to be removed. |

#### public function `initialize`

Initializes the component.

```solidity
function initialize(contract IDAO _dao, uint64 _participationRequiredPct, uint64 _supportRequiredPct, uint64 _minDuration, address[] _allowed) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _participationRequiredPct | uint64 | The minimal required participation in percent. |
| _supportRequiredPct | uint64 | The minimal required support in percent. |
| _minDuration | uint64 | The minimal duration of a vote. |
| _allowed | address[] | The allowed addresses. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### public function `supportsInterface`

adds a IERC165 to check whether contract supports ALLOWLIST_VOTING_INTERFACE_ID or not.

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) 
```

| Output | Type | Description |
| ------ | ---- | ----------- |
| [0] | bool | bool whether it supports the IERC165 or ALLOWLIST_VOTING_INTERFACE_ID |

*See {ERC165Upgradeable-supportsInterface}.*

#### external function `addAllowedUsers`

Adds new users to the allowlist.

```solidity
function addAllowedUsers(address[] _users) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _users | address[] | The addresses of the users to be added. |

#### internal function `_addAllowedUsers`

Internal function to add new users to the allowlist.

```solidity
function _addAllowedUsers(address[] _users) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _users | address[] | The addresses of users to be added. |

#### external function `removeAllowedUsers`

Removes users from the allowlist.

```solidity
function removeAllowedUsers(address[] _users) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _users | address[] | The addresses of the users to be removed. |

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

#### public function `isAllowed`

Checks if a user is allowed at given block number.

```solidity
function isAllowed(address account, uint256 blockNumber) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| account | address | The user address that is checked. |
| blockNumber | uint256 | The block number. |

#### public function `allowedUserCount`

Returns total count of users that are allowed at given block number.

```solidity
function allowedUserCount(uint256 blockNumber) public view returns (uint256) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| blockNumber | uint256 | The specific block to get the count from. |
| **Output** | |
| [0] | uint256 | The count of users that were allowed at the specified block number. |

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

#### internal function `_updateAllowedUsers`

Updates the allowlist by adding or removing users.

```solidity
function _updateAllowedUsers(address[] _users, bool _enabled) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _users | address[] | The user addresses. |
| _enabled | bool | Whether to add or remove users from the allowlist. |

#### private variable `__gap`

```solidity
uint256[48] __gap 
```

*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


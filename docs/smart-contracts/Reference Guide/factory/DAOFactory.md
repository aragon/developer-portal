## Aragon Core

###  contract `DAOFactory`

This contract is used to create a DAO.

####  error `MintArrayLengthMismatch`

```solidity
error MintArrayLengthMismatch(uint256 receiversArrayLength, uint256 amountsArrayLength) 
```

#### public variable `erc20VotingBase`

```solidity
address erc20VotingBase 
```

#### public variable `allowlistVotingBase`

```solidity
address allowlistVotingBase 
```

#### public variable `daoBase`

```solidity
address daoBase 
```

#### public variable `daoRegistry`

```solidity
contract DAORegistry daoRegistry 
```

#### public variable `tokenFactory`

```solidity
contract TokenFactory tokenFactory 
```

#### public struct `DAOConfig`

```solidity
struct DAOConfig {
  string name;
  bytes metadata;
}
```

#### public struct `VoteConfig`

```solidity
struct VoteConfig {
  uint64 participationRequiredPct;
  uint64 supportRequiredPct;
  uint64 minDuration;
}
```

####  event `DAOCreated`

Emitted when a new DAO is created.

```solidity
event DAOCreated(string name, address token, address voting) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| name | string | The DAO name. |
| token | address | The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) governance token address or `address(0)` if no token was created. |
| voting | address | The address of the voting component of the new DAO. |

#### public function `constructor`

The constructor setting the registry and token factory address and creating the base contracts for the factory to clone from.

```solidity
constructor(contract DAORegistry _registry, contract TokenFactory _tokenFactory) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _registry | contract DAORegistry | The DAO registry to register the DAO by its name. |
| _tokenFactory | contract TokenFactory | The token factory for optional governance token creation. |

#### external function `createERC20VotingDAO`

Creates a new DAO with the `ERC20Voting` component installed and deploys a new [ERC-20](https://eips.ethereum.org/EIPS/eip-20) governance token if the corresponding configuration is passed.

```solidity
function createERC20VotingDAO(struct DAOFactory.DAOConfig _daoConfig, struct DAOFactory.VoteConfig _voteConfig, struct TokenFactory.TokenConfig _tokenConfig, struct TokenFactory.MintConfig _mintConfig, address _trustedForwarder) external returns (contract DAO dao, contract ERC20Voting voting, contract ERC20VotesUpgradeable token, contract MerkleMinter minter) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _daoConfig | struct DAOFactory.DAOConfig | The name and metadata hash of the DAO. |
| _voteConfig | struct DAOFactory.VoteConfig | The configuration used to set up the the majority voting. |
| _tokenConfig | struct TokenFactory.TokenConfig | The configuration used to create a new token. |
| _mintConfig | struct TokenFactory.MintConfig | The configuration used to mint the newly created tokens. |
| _trustedForwarder | address | The address of the trusted forwarder required for meta transactions. |

#### external function `createAllowlistVotingDAO`

Creates a new DAO with the `AllowlistVoting` component installed.

```solidity
function createAllowlistVotingDAO(struct DAOFactory.DAOConfig _daoConfig, struct DAOFactory.VoteConfig _voteConfig, address[] _allowlistVoters, address _trustedForwarder) external returns (contract DAO dao, contract AllowlistVoting voting) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _daoConfig | struct DAOFactory.DAOConfig | The name and metadata hash of the DAO. |
| _voteConfig | struct DAOFactory.VoteConfig | The configuration used to set up the the majority voting. |
| _allowlistVoters | address[] | An array of addresses that are allowed to vote. |
| _trustedForwarder | address | The address of the trusted forwarder required for meta transactions. |

#### internal function `createDAO`

Creates a new DAO.

```solidity
function createDAO(struct DAOFactory.DAOConfig _daoConfig, address _trustedForwarder) internal returns (contract DAO dao) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _daoConfig | struct DAOFactory.DAOConfig | The name and metadata hash of the DAO it creates. |
| _trustedForwarder | address | The forwarder address for the OpenGSN meta tx solution. |

#### internal function `setDAOPermissions`

Sets the required permissions for the new DAO.

```solidity
function setDAOPermissions(contract DAO _dao, address _voting) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract DAO | The DAO instance just created. |
| _voting | address | The voting contract address (`AllowlistVoting` or `ERC20Voting`). |

#### internal function `createERC20Voting`

Internal helper method to create and setup an `ERC20Voting` contract for a DAO.

```solidity
function createERC20Voting(contract DAO _dao, contract ERC20VotesUpgradeable _token, struct DAOFactory.VoteConfig _voteConfig) internal returns (contract ERC20Voting erc20Voting) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract DAO | The associated DAO. |
| _token | contract ERC20VotesUpgradeable | The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token address. |
| _voteConfig | struct DAOFactory.VoteConfig | The vote configuration. |

#### internal function `createAllowlistVoting`

Internal helper method to create and setup an `AllowlistVoting` contract for a DAO.

```solidity
function createAllowlistVoting(contract DAO _dao, address[] _allowlistVoters, struct DAOFactory.VoteConfig _voteConfig) internal returns (contract AllowlistVoting allowlistVoting) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract DAO | The associated DAO. |
| _allowlistVoters | address[] | The array of the allowed voting addresses. |
| _voteConfig | struct DAOFactory.VoteConfig | The vote configuration. |

#### private function `setupBases`

Internal helper method to set up the required base contracts on `DAOFactory` deployment.

```solidity
function setupBases() private 
```


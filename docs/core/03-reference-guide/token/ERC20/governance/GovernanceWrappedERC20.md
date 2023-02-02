## Aragon Core

###  contract `GovernanceWrappedERC20`

Wraps an existing [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token by inheriting from `ERC20WrapperUpgradeable` and allows to use it for voting by inheriting from `ERC20VotesUpgradeable`. The latter is compatible with [OpenZepplin `Votes`](https://docs.openzeppelin.com/contracts/4.x/api/governance#Votes) interface.
The contract also supports meta transactions. To use an `amount` of underlying tokens for voting, the token owner has to
1. call `approve` for the tokens to be used by this contract
2. call `depositFor` to wrap them, which safely transfers the underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens to the contract and mints wrapped [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens.
To get the [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens back, the owner of the wrapped tokens can call `withdrawFor`, which  burns the wrapped tokens [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens and safely transfers the underlying tokens back to the owner.

*This contract intentionally has no public mint functionality because this is the responsibility of the underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token contract.*

#### public function `constructor`

Calls the initialize function.

```solidity
constructor(contract IERC20Upgradeable _token, string _name, string _symbol) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | contract IERC20Upgradeable | The underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _name | string | The name of the wrapped token. |
| _symbol | string | The symbol fo the wrapped token. |

#### public function `initialize`

Initializes the contract.

```solidity
function initialize(contract IERC20Upgradeable _token, string _name, string _symbol) public 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | contract IERC20Upgradeable | The underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _name | string | The name of the wrapped token. |
| _symbol | string | The symbol fo the wrapped token. |

#### public function `supportsInterface`

Checks if this or the parent contract supports an interface by its ID.

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| interfaceId | bytes4 | The ID of the interface. |
| **Output** | |
| [0] | bool | bool Returns `true` if the interface is supported. |

#### public function `decimals`

```solidity
function decimals() public view returns (uint8) 
```

*Uses the `decimals` of the underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token.*

#### public function `depositFor`

Deposits an amount of underlying token and mints the corresponding number of wrapped tokens for an receiving address.

```solidity
function depositFor(address account, uint256 amount) public returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| account | address | The address receiving the minted, wrapped tokens. |
| amount | uint256 | The amount of tokens to be  minted. |

#### public function `withdrawTo`

Withdraws an amount of underlying tokens to an receiving address and burns the corresponding number of wrapped tokens.

```solidity
function withdrawTo(address account, uint256 amount) public returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| account | address | The address receiving the withdrawn, underlying tokens. |
| amount | uint256 | The amount of underlying tokens to be withdrawn. |

#### internal function `_afterTokenTransfer`

```solidity
function _afterTokenTransfer(address from, address to, uint256 amount) internal 
```

*Move voting power when tokens are transferred.

Emits a {IVotes-DelegateVotesChanged} event.*

#### internal function `_mint`

```solidity
function _mint(address to, uint256 amount) internal 
```

*Snapshots the totalSupply after it has been increased.*

#### internal function `_burn`

```solidity
function _burn(address account, uint256 amount) internal 
```

*Snapshots the totalSupply after it has been decreased.*

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[50] __gap 
```


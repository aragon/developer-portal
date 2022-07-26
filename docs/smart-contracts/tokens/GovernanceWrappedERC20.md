## Aragon Core

###  contract `GovernanceWrappedERC20`

Wraps an existing [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token by inheriting from `ERC20WrapperUpgradeable` and allows to use it for voting by inheriting from `ERC20VotesUpgradeable`.
The contract also supports meta transactions. To use an `amount` of underlying tokens for voting, the token owner has to
1. call `approve` for the tokens to be used by this contract
2. call `depositFor` to wrap them, which safely transfers the underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens to the contract and mints wrapped [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens.
To get the [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens back, the owner of the wrapped tokens can call `withdrawFor`, which  burns the wrapped tokens [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens and safely transfers the underlying tokens back to the owner.

*This contract intentionally has no public mint functionality because this is the responsibility of the underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token contract.*

#### external function `versionRecipient`

Returns the version of the GSN relay recipient

```solidity
function versionRecipient() external view virtual returns (string) 
```

*Describes the version and contract for GSN compatibility*

#### internal function `__GovernanceWrappedERC20_init`

Internal initialization method.

```solidity
function __GovernanceWrappedERC20_init(contract IERC20Upgradeable _token, string _name, string _symbol) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | contract IERC20Upgradeable | The underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _name | string | The name of the wrapped token. |
| _symbol | string | The symbol fo the wrapped token. |

#### external function `initialize`

Initializes the component.

```solidity
function initialize(contract IERC20Upgradeable _token, string _name, string _symbol) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _token | contract IERC20Upgradeable | The underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _name | string | The name of the wrapped token. |
| _symbol | string | The symbol fo the wrapped token. |

#### public function `decimals`

```solidity
function decimals() public view returns (uint8) 
```

*Uses the `decimals` of the underlying [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token.*

#### internal function `_msgSender`

Uses the `BaseRelayRecipient` `_msgSender()` context.

```solidity
function _msgSender() internal view virtual returns (address) 
```

*`BaseRelayRecipient` is the first contract in the inheritance chain and is thus called by `super._msgSender()`.*

#### internal function `_msgData`

Uses the `BaseRelayRecipient` `_msgData()` context.

```solidity
function _msgData() internal view virtual returns (bytes) 
```

*`BaseRelayRecipient` is the first contract in the inheritance chain and is thus called by `super._msgData()`.*

#### internal function `_afterTokenTransfer`

```solidity
function _afterTokenTransfer(address from, address to, uint256 amount) internal 
```

*Hook that is called after any transfer of tokens. This includes
minting and burning.

Calling conditions:

- when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
has been transferred to `to`.
- when `from` is zero, `amount` tokens have been minted for `to`.
- when `to` is zero, `amount` of ``from``'s tokens have been burned.
- `from` and `to` are never both zero.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].*

#### internal function `_mint`

```solidity
function _mint(address to, uint256 amount) internal 
```

*Creates `amount` tokens and assigns them to `account`, increasing
the total supply.

Emits a {Transfer} event with `from` set to the zero address.

Requirements:

- `account` cannot be the zero address.*

#### internal function `_burn`

```solidity
function _burn(address account, uint256 amount) internal 
```

*Destroys `amount` tokens from `account`, reducing the
total supply.

Emits a {Transfer} event with `to` set to the zero address.

Requirements:

- `account` cannot be the zero address.
- `account` must have at least `amount` tokens.*


## Aragon Core

###  contract `GovernanceERC20`

An [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token that can be used for voting and is managed by a DAO.

#### public variable `MINT_PERMISSION_ID`

The permission identifier to mint new tokens

```solidity
bytes32 MINT_PERMISSION_ID 
```

#### internal function `__GovernanceERC20_init`

Internal initialization method.

```solidity
function __GovernanceERC20_init(contract IDAO _dao, string _name, string _symbol) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The managing DAO. |
| _name | string | The name of the wrapped token. |
| _symbol | string | The symbol fo the wrapped token. |

#### external function `initialize`

Initializes the component.

```solidity
function initialize(contract IDAO _dao, string _name, string _symbol) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The managing DAO. |
| _name | string | The name of the wrapped token. |
| _symbol | string | The symbol fo the wrapped token. |

#### external function `mint`

Mints tokens to an address.

```solidity
function mint(address to, uint256 amount) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| to | address | The address receiving the tokens. |
| amount | uint256 | The amount of tokens to be minted. |

#### internal function `_afterTokenTransfer`

```solidity
function _afterTokenTransfer(address from, address to, uint256 amount) internal 
```

*Move voting power when tokens are transferred.

Emits a {DelegateVotesChanged} event.*

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


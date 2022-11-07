## Aragon Core

###  contract `TokenFactory`

This contract creates [ERC-20](https://eips.ethereum.org/EIPS/eip-20) governance tokens.

#### public variable `governanceERC20Base`

The address of the `GovernanceERC20` base contract to clone from.

```solidity
address governanceERC20Base 
```

#### public variable `governanceWrappedERC20Base`

The address of the `GovernanceWrappedERC20` base contract to clone from.

```solidity
address governanceWrappedERC20Base 
```

#### public variable `merkleMinterBase`

The address of the `MerkleMinter` base contract to clone from.

```solidity
address merkleMinterBase 
```

#### public variable `distributorBase`

The `MerkleDistributor` base contract used to initialize the `MerkleMinter` clones.

```solidity
contract MerkleDistributor distributorBase 
```

####  event `TokenCreated`

Emitted when a new token is created.

```solidity
event TokenCreated(contract IERC20Upgradeable token, contract MerkleMinter minter, contract IMerkleDistributor distributor) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | contract IERC20Upgradeable | [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token address. |
| minter | contract MerkleMinter | The `MerkleMinter` contract minting the new token. |
| distributor | contract IMerkleDistributor | The `MerkleDistibutor` contract distributing the new token. |

####  event `WrappedToken`

Emitted when an existing token is passed and wrapped one is created.

```solidity
event WrappedToken(contract GovernanceWrappedERC20 token) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| token | contract GovernanceWrappedERC20 | GovernanceWrappedERC20 token address |

#### public struct `TokenConfig`

```solidity
struct TokenConfig {
  address addr;
  string name;
  string symbol;
}
```

#### public struct `MintConfig`

```solidity
struct MintConfig {
  address[] receivers;
  uint256[] amounts;
}
```

#### public function `constructor`

Initializes the different base contracts for the factory to clone from.

```solidity
constructor() public 
```

#### external function `createToken`

TODO: Worth considering the decimals ?
Creates a new `GovernanceERC20` token or a `GovernanceWrappedERC20` from an existing [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token depending on the address used in the `TokenConfig` provided.

```solidity
function createToken(contract DAO _managingDao, struct TokenFactory.TokenConfig _tokenConfig, struct GovernanceERC20.MintSettings _mintSettings) external returns (contract ERC20VotesUpgradeable, contract MerkleMinter) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _managingDao | contract DAO | The address of the DAO managing the token. |
| _tokenConfig | struct TokenFactory.TokenConfig | The token configuration struct containing the name, and symbol of the token to be create, but also an address. For `address(0)`, a new governance token is created. For any other address pointing to an [ERC-20](https://eips.ethereum.org/EIPS/eip-20)-compatible contract, a wrapped governance token is created. |
| _mintSettings | struct GovernanceERC20.MintSettings | The token mint settings struct containing the `receivers` and `amounts`. |
| **Output** | |
| [0] | contract ERC20VotesUpgradeable | ERC20VotesUpgradeable The address of the created token. |
| **Output** | |
| [1] | contract MerkleMinter | MerkleMinter The `MerkleMinter` contract address being used to mint token address(zero address in case passed token addr was not zero) |

#### private function `setupBases`

Private helper method to set up the required base contracts on TokenFactory deployment.

```solidity
function setupBases() private 
```


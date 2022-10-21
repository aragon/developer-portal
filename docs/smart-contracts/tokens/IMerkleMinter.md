## Aragon Core

###  contract `IMerkleMinter`

####  event `MerkleMinted`

Emitted when a token is minted.

```solidity
event MerkleMinted(address distributor, bytes32 merkleRoot, uint256 totalAmount, bytes tree, bytes context) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| distributor | address | The `MerkleDistributor` address via which the tokens can be claimed. |
| merkleRoot | bytes32 | The root of the merkle balance tree. |
| totalAmount | uint256 | The total amount of tokens that were minted. |
| tree | bytes | The link to the stored merkle tree. |
| context | bytes | Additional info related to the minting process. |

#### external function `token`

The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token to be distributed.

```solidity
function token() external returns (contract IERC20MintableUpgradeable) 
```

#### external function `distributorBase`

The address of the `MerkleDistributor` to clone from.

```solidity
function distributorBase() external returns (address) 
```

#### external function `initialize`

Initializes the MerkleMinter.

```solidity
function initialize(contract IDAO _dao, contract IERC20MintableUpgradeable _token, address _distributorBase) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _token | contract IERC20MintableUpgradeable | A mintable [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _distributorBase | address | A `MerkleDistributor` to be cloned. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### external function `changeDistributorBase`

changes the base distributor address

```solidity
function changeDistributorBase(address _distributorBase) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _distributorBase | address | the address of base distributor |

#### external function `merkleMint`

Mints [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens and distributes them using a `MerkleDistributor`.

```solidity
function merkleMint(bytes32 _merkleRoot, uint256 _totalAmount, bytes _tree, bytes _context) external returns (contract IMerkleDistributor distributor) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _merkleRoot | bytes32 | The root of the merkle balance tree. |
| _totalAmount | uint256 | The total amount of tokens to be minted. |
| _tree | bytes | The link to the stored merkle tree. |
| _context | bytes | Additional info related to the minting process. |
| **Output** | |
| distributor | contract IMerkleDistributor | The `MerkleDistributor` via which the tokens can be claimed. |


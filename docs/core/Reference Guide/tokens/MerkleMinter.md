## Aragon Core

###  contract `MerkleMinter`

A component minting [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens and distributing them on merkle trees using `MerkleDistributor` clones.

#### internal variable `MERKLE_MINTER_INTERFACE_ID`

The [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the contract.

```solidity
bytes4 MERKLE_MINTER_INTERFACE_ID 
```

#### public variable `MERKLE_MINT_PERMISSION_ID`

The ID of the permission required to call the `merkleMint` function.

```solidity
bytes32 MERKLE_MINT_PERMISSION_ID 
```

#### public variable `token`

The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token to be distributed.

```solidity
contract IERC20MintableUpgradeable token 
```

#### public variable `distributorBase`

The address of the `MerkleDistributor` to clone from.

```solidity
address distributorBase 
```

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

#### external function `initialize`

Initializes the component.

```solidity
function initialize(contract IDAO _dao, address _trustedForwarder, contract IERC20MintableUpgradeable _token, contract MerkleDistributor _distributorBase) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _trustedForwarder | address | The address of the trusted forwarder required for meta transactions. |
| _token | contract IERC20MintableUpgradeable | A mintable [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _distributorBase | contract MerkleDistributor | A `MerkleDistributor` to be cloned. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### external function `versionRecipient`

Returns the version of the GSN relay recipient.

```solidity
function versionRecipient() external view virtual returns (string) 
```

*Describes the version and contract for GSN compatibility.*

#### external function `merkleMint`

Mints [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens and distributes them using a `MerkleDistributor`.

```solidity
function merkleMint(bytes32 _merkleRoot, uint256 _totalAmount, bytes _tree, bytes _context) external returns (contract MerkleDistributor distributor) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _merkleRoot | bytes32 | The root of the merkle balance tree. |
| _totalAmount | uint256 | The total amount of tokens to be minted. |
| _tree | bytes | The link to the stored merkle tree. |
| _context | bytes | Additional info related to the minting process. |
| **Output** | |
| distributor | contract MerkleDistributor | The `MerkleDistributor` via which the tokens can be claimed. |


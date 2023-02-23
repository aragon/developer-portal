## Aragon Core

###  contract `MerkleDistributor`

A component distributing claimable [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens via a merkle tree.

#### public variable `token`

The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token to be distributed.

```solidity
contract IERC20Upgradeable token 
```

#### public variable `merkleRoot`

The merkle root of the balance tree storing the claims.

```solidity
bytes32 merkleRoot 
```

#### private variable `claimedBitMap`

A packed array of booleans containing the information who claimed.

```solidity
mapping(uint256 => uint256) claimedBitMap 
```

####  error `TokenAlreadyClaimed`

Thrown if tokens have been already claimed from the distributor.

```solidity
error TokenAlreadyClaimed(uint256 index) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| index | uint256 | The index in the balance tree that was claimed. |

####  error `TokenClaimInvalid`

Thrown if a claim is invalid.

```solidity
error TokenClaimInvalid(uint256 index, address to, uint256 amount) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| index | uint256 | The index in the balance tree to be claimed. |
| to | address | The address to which the tokens should be sent. |
| amount | uint256 | The amount to be claimed. |

#### public function `constructor`

```solidity
constructor() public 
```

*Used to disallow initializing the implementation contract by an attacker for extra safety.*

#### external function `initialize`

Initializes the plugin.

```solidity
function initialize(contract IDAO _dao, contract IERC20Upgradeable _token, bytes32 _merkleRoot) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _token | contract IERC20Upgradeable | A mintable [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _merkleRoot | bytes32 | The merkle root of the balance tree. |

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

#### external function `claim`

Claims tokens from the balance tree and sends it to an address.

```solidity
function claim(uint256 _index, address _to, uint256 _amount, bytes32[] _proof) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| _to | address | The receiving address. |
| _amount | uint256 | The amount of tokens. |
| _proof | bytes32[] | The merkle proof to be verified. |

#### public function `unclaimedBalance`

Returns the amount of unclaimed tokens.

```solidity
function unclaimedBalance(uint256 _index, address _to, uint256 _amount, bytes32[] _proof) public view returns (uint256) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| _to | address | The receiving address. |
| _amount | uint256 | The amount of tokens. |
| _proof | bytes32[] | The merkle proof to be verified. |
| **Output** | |
| [0] | uint256 | The unclaimed amount. |

#### internal function `_verifyBalanceOnTree`

Verifies a balance on a merkle tree.

```solidity
function _verifyBalanceOnTree(uint256 _index, address _to, uint256 _amount, bytes32[] _proof) internal view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| _to | address | The receiving address. |
| _amount | uint256 | The amount of tokens. |
| _proof | bytes32[] | The merkle proof to be verified. |
| **Output** | |
| [0] | bool | True if the given proof is correct. |

#### public function `isClaimed`

Checks if an index on the merkle tree is claimed.

```solidity
function isClaimed(uint256 _index) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| **Output** | |
| [0] | bool | True if the index is claimed. |

#### private function `_setClaimed`

Sets an index in the merkle tree to be claimed.

```solidity
function _setClaimed(uint256 _index) private 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[47] __gap 
```


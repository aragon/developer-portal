## Aragon Core

###  contract `ENSSubdomainRegistrar`

This contract registers ENS subdomains under a parent domain specified in the initialization process and maintains ownership of the subdomain since only the resolver address is set. This contract must either be the domain node owner or an approved operator of the node owner. The default resolver being used is the one specified in the parent domain.

#### internal variable `REGISTRY_INTERFACE_ID`

The [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the contract.

```solidity
bytes4 REGISTRY_INTERFACE_ID 
```

#### public variable `REGISTER_ENS_SUBDOMAIN_PERMISSION_ID`

The ID of the permission required to call the `registerSubnode` and `setDefaultResolver` function.

```solidity
bytes32 REGISTER_ENS_SUBDOMAIN_PERMISSION_ID 
```

#### private variable `ens`

The ENS registry contract

```solidity
contract ENS ens 
```

#### public variable `node`

The namehash of the domain on which subdomains are registered.

```solidity
bytes32 node 
```

#### public variable `resolver`

The address of the ENS resolver resolving the names to an address.

```solidity
address resolver 
```

####  error `UnauthorizedRegistrar`

Thrown if the registrar is not authorized and is neither the domain node owner nor an approved operator of the domain node owner.

```solidity
error UnauthorizedRegistrar(address nodeOwner, address here) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| nodeOwner | address | The node owner. |
| here | address | The address of this registry. |

####  error `AlreadyRegistered`

Thrown if the subnode is already registered.

```solidity
error AlreadyRegistered(bytes32 subnode, address nodeOwner) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| subnode | bytes32 | The subnode namehash. |
| nodeOwner | address | The node owner address. |

#### external function `initialize`

Initializes the component by
- checking that the contract is the domain node owner or an approved operator
- initializing the underlying component
- registering the [ERC-165](https://eips.ethereum.org/EIPS/eip-165) interface ID
- setting the ENS contract, the domain node hash, and resolver.

```solidity
function initialize(contract IDAO _managingDao, contract ENS _ens, bytes32 _node) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _managingDao | contract IDAO | The interface of the DAO managing the components permissions. |
| _ens | contract ENS | The interface of the ENS registry to be used. |
| _node | bytes32 | The ENS parent domain node under which the subdomains are to be registered. |

#### external function `registerSubnode`

Registers a new subdomain with this registrar as the owner and set the target address in the resolver.

```solidity
function registerSubnode(bytes32 _label, address _targetAddress) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _label | bytes32 | The labelhash of the subdomain name. |
| _targetAddress | address | The address to which the subdomain resolves. |

#### external function `setDefaultResolver`

Sets the default resolver contract address that the subdomains being registered will use.

```solidity
function setDefaultResolver(contract Resolver _resolver) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _resolver | contract Resolver | The resolver contract to be used. |


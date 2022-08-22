## Aragon Core

###  contract `PermissionManager`

The permission manager used in a DAO and its associated components.

#### public variable `ROOT_PERMISSION_ID`

The ID of the permission required to call the `grant`, `grantWithOracle`, `revoke`, `makeImmutable`, and `bulk` function.

```solidity
bytes32 ROOT_PERMISSION_ID 
```

#### internal variable `ANY_ADDR`

A special address encoding permissions that are valid for any address.

```solidity
address ANY_ADDR 
```

#### internal variable `UNSET_FLAG`

A special address encoding if a permissions is not set and therefore not allowed.

```solidity
address UNSET_FLAG 
```

#### internal variable `ALLOW_FLAG`

A special address encoding if a permission is allowed.

```solidity
address ALLOW_FLAG 
```

#### internal variable `permissionsHashed`

A mapping storing permissions as hashes (i.e., `permissionHash(where, who, permissionId)`) and their status (unset, allowed, or redirect to a `PermissionOracle`).

```solidity
mapping(bytes32 => address) permissionsHashed 
```

#### internal variable `immutablePermissionsHashed`

A mapping storing immutable permissions as hashes (i.e., `immutablePermissionHash(where, permissionId)`) and their status (`true` = immutable, `false` = mutable).

```solidity
mapping(bytes32 => bool) immutablePermissionsHashed 
```

####  error `PermissionMissing`

Thrown if a permission is missing.

```solidity
error PermissionMissing(address here, address where, address who, bytes32 permissionID) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| here | address | The context in which the authorization reverted. |
| where | address | The contract requiring the permission. |
| who | address | The address (EOA or contract) missing the permission. |
| permissionID | bytes32 | The permission identifier. |

####  error `PermissionAlreadyGranted`

Thrown if a permission has been already granted.

```solidity
error PermissionAlreadyGranted(address where, address who, bytes32 permissionID) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract to grant `who` permission to. |
| who | address | The address (EOA or contract) to which the permission has already been granted. |
| permissionID | bytes32 | The permission identifier. |

####  error `PermissionAlreadyRevoked`

Thrown if a permission has been already revoked.

```solidity
error PermissionAlreadyRevoked(address where, address who, bytes32 permissionID) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract to revoke `who`s permission from. |
| who | address | The address (EOA or contract) from which the permission has already been revoked. |
| permissionID | bytes32 | The permission identifier. |

####  error `PermissionImmutable`

Thrown if a permission is immutable.

```solidity
error PermissionImmutable(address where, bytes32 permissionID) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract for which the permission is immutable. |
| permissionID | bytes32 | The permission identifier. |

####  event `Granted`

Emitted when a permission `permission` is granted in the context `here` to the address `who` for the contract `where`.

```solidity
event Granted(bytes32 permissionID, address here, address who, address where, contract IPermissionOracle oracle) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionID | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is granted. |
| who | address | The address (EOA or contract) receiving the permission. |
| where | address | The address of the target contract for which `who` receives permission. |
| oracle | contract IPermissionOracle | The address `ALLOW_FLAG` for regular permissions or, alternatively, the `PermissionOracle` to be used. |

####  event `Revoked`

Emitted when a permission `permission` is revoked in the context `here` from the address `who` for the contract `where`.

```solidity
event Revoked(bytes32 permissionID, address here, address who, address where) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionID | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is revoked. |
| who | address | The address (EOA or contract) losing the permission. |
| where | address | The address of the target contract for which `who` loses permission |

####  event `MadeImmutable`

Emitted when a `permission` is made immutable to the address `here` by the contract `where`.

```solidity
event MadeImmutable(bytes32 permissionID, address here, address where) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionID | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is immutable. |
| where | address | The address of the target contract for which the permission is immutable. |

#### internal modifier `auth`

A modifier to be used to check permissions on a target contract.

```solidity
modifier auth(address _where, bytes32 _permissionID) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission is required. |
| _permissionID | bytes32 | The permission identifier required to call the method this modifier is applied to. |

#### internal function `__PermissionManager_init`

Initialization method to set the initial owner of the permission manager.

```solidity
function __PermissionManager_init(address _initialOwner) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _initialOwner | address | The initial owner of the permission manager. |

*The initial owner is granted the `ROOT_PERMISSION_ID` permission.*

#### external function `grant`

Grants permission to an address to call methods in a contract guarded by an auth modifier with the specified permission identifier.

```solidity
function grant(address _where, address _who, bytes32 _permissionID) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) receiving the permission. |
| _permissionID | bytes32 | The permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `grantWithOracle`

Grants permission to an address to call methods in a target contract guarded by an auth modifier with the specified permission identifier if the referenced oracle permits it.

```solidity
function grantWithOracle(address _where, address _who, bytes32 _permissionID, contract IPermissionOracle _oracle) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) receiving the permission. |
| _permissionID | bytes32 | The permission identifier. |
| _oracle | contract IPermissionOracle | The `PermissionOracle` that will be asked for authorization on calls connected to the specified permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission*

#### external function `revoke`

Revokes permission from an address to call methods in a target contract guarded by an auth modifier with the specified permission identifier.

```solidity
function revoke(address _where, address _who, bytes32 _permissionID) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` loses permission. |
| _who | address | The address (EOA or contract) losing the permission. |
| _permissionID | bytes32 | The permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `makeImmutable`

Makes the current permission settings of a target contract immutable. This is a permanent operation and permissions on the specified contract with the specified permission identifier can never be granted or revoked again.

```solidity
function makeImmutable(address _where, bytes32 _permissionID) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission are made immutable. |
| _permissionID | bytes32 | The permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `bulk`

Processes bulk items on the permission manager.

```solidity
function bulk(address _where, struct BulkPermissionsLib.Item[] items) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the contract. |
| items | struct BulkPermissionsLib.Item[] | The array of bulk items to process. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### public function `hasPermissions`

Checks if an address has permission on a contract via a permission identifier and considers if `ANY_ADDRESS` was used in the granting process.

```solidity
function hasPermissions(address _where, address _who, bytes32 _permissionID, bytes _data) public returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) for which the permission is checked. |
| _permissionID | bytes32 | The permission identifier. |
| _data | bytes | The optional data passed to the `PermissionOracle` registered. |
| **Output** | |
| [0] | bool | bool Returns true if `who` has the permissions on the target contract via the specified permission identifier. |

#### public function `isImmutable`

This method is used to check if permissions for a given permission identifier on a contract are immutable.

```solidity
function isImmutable(address _where, bytes32 _permissionID) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _permissionID | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bool | bool Returns true if the permission identifier is immutable for the contract address. |

#### internal function `_initializePermissionManager`

Grants the `ROOT_PERMISSION_ID` permission to the initial owner during initialization of the permission manager.

```solidity
function _initializePermissionManager(address _initialOwner) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _initialOwner | address | The initial owner of the permission manager. |

#### internal function `_grant`

This method is used in the public `grant` method of the permission manager.

```solidity
function _grant(address _where, address _who, bytes32 _permissionID) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionID | bytes32 | The permission identifier. |

#### internal function `_grantWithOracle`

This method is used in the internal `_grant` method of the permission manager.

```solidity
function _grantWithOracle(address _where, address _who, bytes32 _permissionID, contract IPermissionOracle _oracle) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionID | bytes32 | The permission identifier. |
| _oracle | contract IPermissionOracle | The PermissionOracle to be used or it is just the ALLOW_FLAG. |

#### internal function `_revoke`

This method is used in the public `revoke` method of the permission manager.

```solidity
function _revoke(address _where, address _who, bytes32 _permissionID) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionID | bytes32 | The permission identifier. |

#### internal function `_makeImmutable`

This method is used in the public `makeImmutable` method of the permission manager.

```solidity
function _makeImmutable(address _where, bytes32 _permissionID) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission is immutable. |
| _permissionID | bytes32 | The permission identifier. |

#### internal function `_hasPermission`

Checks if a caller has the permissions on a contract via a permission identifier and redirects the approval to an `PermissionOracle` if this was in the setup.

```solidity
function _hasPermission(address _where, address _who, bytes32 _permissionID, bytes _data) internal returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionID | bytes32 | The permission identifier. |
| _data | bytes | The optional data passed to the `PermissionOracle` registered.. |
| **Output** | |
| [0] | bool | bool Returns true if `who` has the permissions on the contract via the specified permissionID identifier. |

#### internal function `permissionHash`

Generates the hash for the `permissionsHashed` mapping obtained from the word "PERMISSION", the contract address, the address owning the permission, and the permission identifier.

```solidity
function permissionHash(address _where, address _who, bytes32 _permissionID) internal pure returns (bytes32) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionID | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bytes32 | bytes32 The permission hash. |

#### internal function `immutablePermissionHash`

Generates the hash for the `immutablePermissionsHashed` mapping obtained from the word "IMMUTABLE", the contract address, and the permission identifier.

```solidity
function immutablePermissionHash(address _where, bytes32 _permissionID) internal pure returns (bytes32) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _permissionID | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bytes32 | bytes32 The hash used in the `immutablePermissions` mapping. |


## Aragon Core

###  contract `PermissionManager`

The permission manager used in a DAO and its associated components.

#### public variable `ROOT_PERMISSION_ID`

The ID of the permission required to call the `grant`, `grantWithOracle`, `revoke`, `freeze`, and `bulk` function.

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

#### internal variable `frozenPermissionsHashed`

A mapping storing frozen permissions as hashes (i.e., `frozenPermissionHash(where, permissionId)`) and their status (`true` = frozen (immutable), `false` = not frozen (mutable)).

```solidity
mapping(bytes32 => bool) frozenPermissionsHashed 
```

####  error `Unauthorized`

Thrown if a call is unauthorized.

```solidity
error Unauthorized(address here, address where, address who, bytes32 permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| here | address | The context in which the authorization reverted. |
| where | address | The contract requiring the permission. |
| who | address | The address (EOA or contract) missing the permission. |
| permissionId | bytes32 | The permission identifier. |

####  error `PermissionAlreadyGranted`

Thrown if a permission has been already granted.

```solidity
error PermissionAlreadyGranted(address where, address who, bytes32 permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract to grant `who` permission to. |
| who | address | The address (EOA or contract) to which the permission has already been granted. |
| permissionId | bytes32 | The permission identifier. |

####  error `PermissionAlreadyRevoked`

Thrown if a permission has been already revoked.

```solidity
error PermissionAlreadyRevoked(address where, address who, bytes32 permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract to revoke `who`s permission from. |
| who | address | The address (EOA or contract) from which the permission has already been revoked. |
| permissionId | bytes32 | The permission identifier. |

####  error `PermissionFrozen`

Thrown if a permission is frozen.

```solidity
error PermissionFrozen(address where, bytes32 permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract for which the permission is frozen. |
| permissionId | bytes32 | The permission identifier. |

####  error `RootPermissionForAnyAddressDisallowed`

Thrown if a Root permission is set on ANY_ADDR.

```solidity
error RootPermissionForAnyAddressDisallowed() 
```

####  error `FreezeOnAnyAddressDisallowed`

Thrown if a freeze happens on ANY_ADDR.

```solidity
error FreezeOnAnyAddressDisallowed() 
```

####  event `Granted`

Emitted when a permission `permission` is granted in the context `here` to the address `who` for the contract `where`.

```solidity
event Granted(bytes32 permissionId, address here, address who, address where, contract IPermissionOracle oracle) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionId | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is granted. |
| who | address | The address (EOA or contract) receiving the permission. |
| where | address | The address of the target contract for which `who` receives permission. |
| oracle | contract IPermissionOracle | The address `ALLOW_FLAG` for regular permissions or, alternatively, the `PermissionOracle` to be used. |

####  event `Revoked`

Emitted when a permission `permission` is revoked in the context `here` from the address `who` for the contract `where`.

```solidity
event Revoked(bytes32 permissionId, address here, address who, address where) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionId | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is revoked. |
| who | address | The address (EOA or contract) losing the permission. |
| where | address | The address of the target contract for which `who` loses permission |

####  event `Frozen`

Emitted when a `permission` is made frozen to the address `here` by the contract `where`.

```solidity
event Frozen(bytes32 permissionId, address here, address where) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionId | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is frozen. |
| where | address | The address of the target contract for which the permission is frozen. |

#### internal modifier `auth`

A modifier to be used to check permissions on a target contract.

```solidity
modifier auth(address _where, bytes32 _permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission is required. |
| _permissionId | bytes32 | The permission identifier required to call the method this modifier is applied to. |

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
function grant(address _where, address _who, bytes32 _permissionId) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) receiving the permission. |
| _permissionId | bytes32 | The permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `grantWithOracle`

Grants permission to an address to call methods in a target contract guarded by an auth modifier with the specified permission identifier if the referenced oracle permits it.

```solidity
function grantWithOracle(address _where, address _who, bytes32 _permissionId, contract IPermissionOracle _oracle) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) receiving the permission. |
| _permissionId | bytes32 | The permission identifier. |
| _oracle | contract IPermissionOracle | The `PermissionOracle` that will be asked for authorization on calls connected to the specified permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission*

#### external function `revoke`

Revokes permission from an address to call methods in a target contract guarded by an auth modifier with the specified permission identifier.

```solidity
function revoke(address _where, address _who, bytes32 _permissionId) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` loses permission. |
| _who | address | The address (EOA or contract) losing the permission. |
| _permissionId | bytes32 | The permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `freeze`

Freezes the current permission settings of a target contract. This is a permanent operation and permissions on the specified contract with the specified permission identifier can never be granted or revoked again.

```solidity
function freeze(address _where, bytes32 _permissionId) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission are frozen. |
| _permissionId | bytes32 | The permission identifier. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `bulkOnSingleTarget`

Processes bulk items on the permission manager.

```solidity
function bulkOnSingleTarget(address _where, struct PermissionLib.ItemSingleTarget[] items) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the contract. |
| items | struct PermissionLib.ItemSingleTarget[] | The array of bulk items to process. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `bulkOnMultiTarget`

Processes bulk items on the permission manager.

```solidity
function bulkOnMultiTarget(struct PermissionLib.ItemMultiTarget[] items) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| items | struct PermissionLib.ItemMultiTarget[] | The array of bulk items to process. |

*Requires that msg.sender has each permissionId on the where.*

#### public function `isGranted`

Checks if an address has permission on a contract via a permission identifier and considers if `ANY_ADDRESS` was used in the granting process.

```solidity
function isGranted(address _where, address _who, bytes32 _permissionId, bytes _data) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) for which the permission is checked. |
| _permissionId | bytes32 | The permission identifier. |
| _data | bytes | The optional data passed to the `PermissionOracle` registered. |
| **Output** | |
| [0] | bool | bool Returns true if `who` has the permissions on the target contract via the specified permission identifier. |

#### public function `isFrozen`

This method is used to check if permissions for a given permission identifier on a contract are frozen.

```solidity
function isFrozen(address _where, bytes32 _permissionId) public view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _permissionId | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bool | bool Returns true if the permission identifier is frozen for the contract address. |

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
function _grant(address _where, address _who, bytes32 _permissionId) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |

#### internal function `_grantWithOracle`

This method is used in the internal `_grant` method of the permission manager.

```solidity
function _grantWithOracle(address _where, address _who, bytes32 _permissionId, contract IPermissionOracle _oracle) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |
| _oracle | contract IPermissionOracle | The PermissionOracle to be used or it is just the ALLOW_FLAG. |

#### internal function `_revoke`

This method is used in the public `revoke` method of the permission manager.

```solidity
function _revoke(address _where, address _who, bytes32 _permissionId) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |

#### internal function `_freeze`

This method is used in the public `freeze` method of the permission manager.

```solidity
function _freeze(address _where, bytes32 _permissionId) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission is frozen. |
| _permissionId | bytes32 | The permission identifier. |

#### internal function `_isGranted`

Checks if a caller is granted permissions on a contract via a permission identifier and redirects the approval to an `PermissionOracle` if this was specified in the setup.

```solidity
function _isGranted(address _where, address _who, bytes32 _permissionId, bytes _data) internal view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |
| _data | bytes | The optional data passed to the `PermissionOracle` registered.. |
| **Output** | |
| [0] | bool | bool Returns true if `who` has the permissions on the contract via the specified permissionId identifier. |

#### private function `_auth`

A private function to be used to check permissions on a target contract.

```solidity
function _auth(address _where, bytes32 _permissionId) private view 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which the permission is required. |
| _permissionId | bytes32 | The permission identifier required to call the method this modifier is applied to. |

#### internal function `permissionHash`

Generates the hash for the `permissionsHashed` mapping obtained from the word "PERMISSION", the contract address, the address owning the permission, and the permission identifier.

```solidity
function permissionHash(address _where, address _who, bytes32 _permissionId) internal pure returns (bytes32) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bytes32 | bytes32 The permission hash. |

#### internal function `frozenPermissionHash`

Generates the hash for the `frozenPermissionsHashed` mapping obtained from the word "IMMUTABLE", the contract address, and the permission identifier.

```solidity
function frozenPermissionHash(address _where, bytes32 _permissionId) internal pure returns (bytes32) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _permissionId | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bytes32 | bytes32 The hash used in the `frozenPermissions` mapping. |

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[48] __gap 
```


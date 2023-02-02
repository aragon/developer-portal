## Aragon Core

###  contract `PermissionManager`

The permission manager used in a DAO and its associated components.

#### public variable `ROOT_PERMISSION_ID`

The ID of the permission required to call the `grant`, `grantWithCondition`, `revoke`, and `bulk` function.

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

A mapping storing permissions as hashes (i.e., `permissionHash(where, who, permissionId)`) and their status (unset, allowed, or redirect to a `PermissionCondition`).

```solidity
mapping(bytes32 => address) permissionsHashed 
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

####  error `RootPermissionForAnyAddressDisallowed`

Thrown if a Root permission is set on ANY_ADDR.

```solidity
error RootPermissionForAnyAddressDisallowed() 
```

####  error `PermissionAlreadyGrantedForDifferentCondition`

Thrown if a permission has been already granted with a different condition.

```solidity
error PermissionAlreadyGrantedForDifferentCondition(address where, address who, bytes32 permissionId, address currentCondition, address newCondition) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| where | address | The address of the target contract to grant `who` permission to. |
| who | address | The address (EOA or contract) to which the permission has already been granted. |
| permissionId | bytes32 | The permission identifier. |
| currentCondition | address | The current condition set for permissionId |
| newCondition | address | The new condition it tries to set for permissionId |

*This makes sure that condition on the same permission can not be overwriten by a different condition.*

####  error `ConditionNotPresentForAnyAddress`

thrown when WHO or WHERE is ANY_ADDR, but condition is not present.

```solidity
error ConditionNotPresentForAnyAddress() 
```

####  error `PermissionsForAnyAddressDisallowed`

thrown when WHO or WHERE is ANY_ADDR and permissionId is ROOT/EXECUTE

```solidity
error PermissionsForAnyAddressDisallowed() 
```

####  error `AnyAddressDisallowedForWhoAndWhere`

thrown when WHO and WHERE are both ANY_ADDR

```solidity
error AnyAddressDisallowedForWhoAndWhere() 
```

####  event `Granted`

Emitted when a permission `permission` is granted in the context `here` to the address `who` for the contract `where`.

```solidity
event Granted(bytes32 permissionId, address here, address where, address who, contract IPermissionCondition condition) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionId | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is granted. |
| where | address | The address of the target contract for which `who` receives permission. |
| who | address | The address (EOA or contract) receiving the permission. |
| condition | contract IPermissionCondition | The address `ALLOW_FLAG` for regular permissions or, alternatively, the `PermissionCondition` to be used. |

####  event `Revoked`

Emitted when a permission `permission` is revoked in the context `here` from the address `who` for the contract `where`.

```solidity
event Revoked(bytes32 permissionId, address here, address where, address who) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| permissionId | bytes32 | The permission identifier. |
| here | address | The address of the context in which the permission is revoked. |
| where | address | The address of the target contract for which `who` loses permission |
| who | address | The address (EOA or contract) losing the permission. |

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

#### external function `grantWithCondition`

Grants permission to an address to call methods in a target contract guarded by an auth modifier with the specified permission identifier if the referenced condition permits it.

```solidity
function grantWithCondition(address _where, address _who, bytes32 _permissionId, contract IPermissionCondition _condition) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) receiving the permission. |
| _permissionId | bytes32 | The permission identifier. |
| _condition | contract IPermissionCondition | The `PermissionCondition` that will be asked for authorization on calls connected to the specified permission identifier. |

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

#### external function `applySingleTargetPermissions`

Processes bulk items on the permission manager.

```solidity
function applySingleTargetPermissions(address _where, struct PermissionLib.SingleTargetPermission[] items) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the contract. |
| items | struct PermissionLib.SingleTargetPermission[] | The array of bulk items to process. |

*Requires the `ROOT_PERMISSION_ID` permission.*

#### external function `applyMultiTargetPermissions`

Processes bulk items on the permission manager.

```solidity
function applyMultiTargetPermissions(struct PermissionLib.MultiTargetPermission[] items) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| items | struct PermissionLib.MultiTargetPermission[] | The array of bulk items to process. |

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
| _data | bytes | The optional data passed to the `PermissionCondition` registered. |
| **Output** | |
| [0] | bool | bool Returns true if `who` has the permissions on the target contract via the specified permission identifier. |

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

#### internal function `_grantWithCondition`

This method is used in the internal `_grant` method of the permission manager.

```solidity
function _grantWithCondition(address _where, address _who, bytes32 _permissionId, contract IPermissionCondition _condition) internal 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |
| _condition | contract IPermissionCondition | The PermissionCondition to be used or it is just the ALLOW_FLAG. |

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

#### internal function `_isGranted`

Checks if a caller is granted permissions on a contract via a permission identifier and redirects the approval to a `PermissionCondition` if this was specified in the setup.

```solidity
function _isGranted(address _where, address _who, bytes32 _permissionId, bytes _data) internal view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _where | address | The address of the target contract for which `who` recieves permission. |
| _who | address | The address (EOA or contract) owning the permission. |
| _permissionId | bytes32 | The permission identifier. |
| _data | bytes | The optional data passed to the `PermissionCondition` registered.. |
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

#### internal function `isPermissionRestrictedForAnyAddr`

Decides if the granting permissionId is restricted when `_who = ANY_ADDR` or `_where = ANY_ADDR`.

```solidity
function isPermissionRestrictedForAnyAddr(bytes32 _permissionId) internal view virtual returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _permissionId | bytes32 | The permission identifier. |
| **Output** | |
| [0] | bool | bool Whether ot not permissionId is restricted. |

*by default, every permission is unrestricted and it's the derived contract's responsibility to override it. NOTE: ROOT_PERMISSION_ID is included and not required to set it again.*

#### private variable `__gap`

This empty reserved space is put in place to allow future versions to add new variables without shifting down storage in the inheritance chain (see [OpenZepplins guide about storage gaps](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps)).

```solidity
uint256[49] __gap 
```


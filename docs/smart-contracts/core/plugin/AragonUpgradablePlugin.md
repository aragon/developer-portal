## Aragon Core

###  contract `AragonUpgradablePlugin`

An abstract contract to inherit from when creating an `UUPSUpgradable` plugin.

#### public variable `UPGRADE_PERMISSION_ID`

```solidity
bytes32 UPGRADE_PERMISSION_ID 
```

#### internal modifier `auth`

```solidity
modifier auth(bytes32 _permissionId) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _permissionId | bytes32 | The hash of the permission identifier |

*Auth modifier used in all components of a DAO to check the permissions.*

#### internal function `_authorizeUpgrade`

```solidity
function _authorizeUpgrade(address) internal virtual 
```

*Used to check the permissions within the upgradability pattern implementation of OZ*

#### private variable `__gap`

Used by `AragonUpgradablePlugin` to reserve storage space in case of state variable additions for this contract.

```solidity
uint256[50] __gap 
```

*After the addition of state variables, the number of storage slots including `_gap` size must add up to 50.*


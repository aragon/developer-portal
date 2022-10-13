---
title: Upgradeable Plugins
---

## Developing the Implementation Contract for Upgradeable Plugins

:::note
Work in progress
:::

<!--
```solidity title="SimpleStorageUpgradeable.sol"
contract SimpleStorageUpgradeable is PluginUpgradeable {
  bytes32 public constant SET_VALUE_PERMISSION_ID =
    keccak256('SET_VALUE_PERMISSION');
  uint256 public value;

  function initialize(uint256 _value) external initializer {
    value = _value;
  }

  /// @notice Only permitted addresses can set the value
  function setValue(uint256 _value) external auth(SET_VALUE_PERMISSION_ID) {
    value = _value;
  }

  // Leave a storage gap
  uint256[49] private __gap;
}

```

```solidity title="SimpleStorageUpgradeableV2.sol"
// Version 2
contract SimpleStorageUpgradeableV2 is PluginUpgradeable {
  bytes32 public constant SET_VALUE_PERMISSION_ID =
    keccak256('SET_VALUE_PERMISSION');
  uint256 public value;
  address public addr; // Added!

  function initialize(uint256 _value) external initializer {
    value = _value;
  }

  function initializeV2(uint256 _addr) external initializer {
    text = _text;
  }

  /// @notice Only permitted addresses can set the value
  function setValue(uint256 _value) external auth(SET_VALUE_PERMISSION_ID) {
    value = _value;
  }

  /// @notice Everyone can set the text
  function setText(address _addr) external {
    addr = _addr;
  }

  // Leave a storage gap
  uint256[48] private __gap; // Changed from `uint256[49]` to `uint256[48]` because `addr` was added!
}

```
-->

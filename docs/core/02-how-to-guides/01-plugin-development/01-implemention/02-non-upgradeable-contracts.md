---
title: Implementing Non-upgradeable Plugins
---

# Implementing Non-upgradeable Plugin Contracts

:::note
Work in progress
:::

<!-- To Do
- inherit from `Plugin`
- add the logic
  - require permissions on functions by using the auth modifier
- write the initialize method
  - remember to set the DAO when not deploying the contract via `createProxy` in `PluginSetup.sol`

To build your own, non-upgradeable plugin, you can inherit from

```solidity title="SimpleStorage.sol"
contract SimpleStorage is Plugin {
  bytes32 public constant SET_VALUE_PERMISSION_ID =
    keccak256('SET_VALUE_PERMISSION');
  uint256 public value;

  function initialize(address _dao, uint256 _value) external initializer {
    value = _value;
    // setDAO(); // Remember to add this if this is not an ERC1967 proxy
  }

  function setValue(uint256 _value) external auth(SET_VALUE_PERMISSION_ID) {
    value = _value;
  }
}

```
-->

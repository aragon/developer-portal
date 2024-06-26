---
title: Membership
---

## The `IMembership` Interface

The `IMembership` interface defines common functions and events for for plugins that keep track of membership in a DAO. This plugins can be used to define who can vote on proposals, who can create proposals, etc. The list of members can be defined in the plugin itself or by a contract that defines the membership like an ERC20 or ERC721 token.

The interface is defined as follows:

```solidity title=
/// @notice An interface to be implemented by DAO plugins that define membership.
interface IMembership {
  /// @notice Emitted when members are added to the DAO plugin.
  /// @param members The list of new members being added.
  event MembersAdded(address[] members);

  /// @notice Emitted when members are removed from the DAO plugin.
  /// @param members The list of existing members being removed.
  event MembersRemoved(address[] members);

  /// @notice Emitted to announce the membership being defined by a contract.
  /// @param definingContract The contract defining the membership.
  event MembershipContractAnnounced(address indexed definingContract);

  /// @notice Checks if an account is a member of the DAO.
  /// @param _account The address of the account to be checked.
  /// @return Whether the account is a member or not.
  /// @dev This function must be implemented in the plugin contract that introduces the members to the DAO.
  function isMember(address _account) external view returns (bool);
}
```

The interface contains three events and one function.

### `MembersAdded` event

The members added event should be emitted when members are added to the DAO plugin. It only contains one `address[] members` parameter that references the list of new members being added.

- `members`: The list of new members being added.

### `MembersRemoved` event

The members added event should be emitted when members are removed from the DAO plugin. It only contains one `address[] members` parameter that references the list of members being removed.

### `MembershipContractAnnounced` event

This event should be emitted during the initialization of the membership plugin to announce the membership being defined by a contract. It contains the defining contract as a parameter.

### `isMember` function

This is a simple function that should be implemented in the plugin contract that introduces the members to the DAO. It checks if an account is a member of the DAO and returns a boolean value.

## Usage

```solidity

contract MyPlugin is IMembership {
  address public membershipContract;

  constructor(address tokenAddress) {
    // Initialize the membership contract
    // ...
    membershipContract = tokenAddress;
    emit MembershipContractAnnounced(tokenAddress);
  }

  function isMember(address _account) external view returns (bool) {
    // Check if the account is a member of the DAO
    // ...
  }

  // Other plugin functions
  function addMembers(address[] memory _members) external {
    // Add members to the DAO
    // ...
    emit MembersAdded(_members);
  }

  function removeMembers(address[] memory _members) external {
    // Remove members from the DAO
    // ...
    emit MembersRemoved(_members);
  }
}

```

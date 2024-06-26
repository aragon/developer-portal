---
title: Proposals
---

## The `IProposal` Interface

The `IProposal` interface is used to create and execute proposals containing actions and a description.

The interface is defined as follows:

```solidity
interface IProposal {
  /// @notice Emitted when a proposal is created.
  /// @param proposalId The ID of the proposal.
  /// @param creator  The creator of the proposal.
  /// @param startDate The start date of the proposal in seconds.
  /// @param endDate The end date of the proposal in seconds.
  /// @param metadata The metadata of the proposal.
  /// @param actions The actions that will be executed if the proposal passes.
  /// @param allowFailureMap A bitmap allowing the proposal to succeed, even if individual actions might revert. If the bit at index `i` is 1, the proposal succeeds even if the `i`th action reverts. A failure map value of 0 requires every action to not revert.
  event ProposalCreated(
    uint256 indexed proposalId,
    address indexed creator,
    uint64 startDate,
    uint64 endDate,
    bytes metadata,
    IDAO.Action[] actions,
    uint256 allowFailureMap
  );

  /// @notice Emitted when a proposal is executed.
  /// @param proposalId The ID of the proposal.
  event ProposalExecuted(uint256 indexed proposalId);

  /// @notice Returns the proposal count determining the next proposal ID.
  /// @return The proposal count.
  function proposalCount() external view returns (uint256);
}
```

This interface contains two events and one function

### `ProposalCreated` event

This event should be emitted when a proposal is created. It contains the following parameters:

- `proposalId`: The ID of the proposal.
- `creator`: The creator of the proposal.
- `startDate`: The start block number of the proposal.
- `endDate`: The end block number of the proposal.
- `metadata`: This should contain a metadata ipfs hash or any other type of link to the metadata of the proposal.
- `actions`: The actions that will be executed if the proposal passes.
- `allowFailureMap`: A bitmap allowing the proposal to succeed, even if individual actions might revert. If the bit at index `i` is 1, the proposal succeeds even if the `i`th action reverts. A failure map value of 0 requires every action to not revert.

### `ProposalExecuted` event

This event should be emitted when a proposal is executed. It contains the proposal ID as a parameter.

### `proposalCount` function

This function should return the proposal count determining the next proposal ID.

## Usage

```solidity
contract MyPlugin is IProposal {
  uint256 public proposalCount;

  function createProposal(
    uint64 _startDate,
    uint64 _endDate,
    bytes calldata _metadata,
    IDAO.Action[] calldata _actions,
    uint256 _allowFailureMap
  ) external {
    proposalCount++;
    emit ProposalCreated(
      proposalCount,
      msg.sender,
      _startDate,
      _endDate,
      _metadata,
      _actions,
      _allowFailureMap
    );
  }

  function proposalCount() external view returns (uint256) {
    return proposalCount;
  }

  function executeProposal(uint256 _proposalId) external {
    // Execute the proposal
    emit ProposalExecuted(_proposalId);
  }
}
```

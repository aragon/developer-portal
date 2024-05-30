---
title: Introduction
sidebar_label: Introduction
sidebar_position: 0
---

## The DAO Contract: The Identity and Basis of Your Organization

In this section, you will learn about the core functionality of every Aragon OSx DAO.

The `DAO` contract is the identity and basis of your 
organization. It is the address carrying the DAO’s ENS name, metadata, 
and holding the funds. Furthermore, it has **six base functionalities** being commonly found in other DAO frameworks in the ecosystem.

### 1. Execution of Arbitrary Actions

The most important and basic functionality of your DAO is the **execution of arbitrary actions**,
 which allows you to execute the DAO's own functions as well as 
interacting with the rest of the world, i.e., calling methods in other 
contracts and sending assets to other addresses.

:::note

Typically, actions are scheduled in a proposal in a governance [plugin installed to your DAO](/docs/advanced/plugin/index.md).

Multiple `Action` structs can be put into one `Action[]` array and executed in a single transaction via the `execute` function. To learn more about actions and advanced features of the DAO executor, visit the [A Deep Dive Into Actions](/docs/1.4.0/osx/how-it-works/core/dao/actions) section.

### 2. Asset Management

The DAO provides basic **asset management** functionality to deposit, withdraw, and keep track of

- native
- [ERC-20 (Token Standard)](https://eips.ethereum.org/EIPS/eip-20),
- [ERC-721 (NFT Standard)](https://eips.ethereum.org/EIPS/eip-721), and
- [ERC-1155 (Multi Token Standard)](https://eips.ethereum.org/EIPS/eip-1155)

tokens in the treasury.
In the future, more advanced asset management and finance functionality can be added to your DAO in the form of [plugins](/docs/1.4.0/osx/how-it-works/core/plugins/).

### 3. Upgradeability

Your DAO contract has the ability to be upgraded to a newer version (see [Upgrade your DAO](/docs/1.4.0/osx/how-to-guides/dao/protocol-upgrades))
 if a new version of Aragon OSx is released in the future. These 
upgrades allow your DAO to smoothly transition to a new protocol version
 unlocking new features.

### 4. Callback Handling

To interact with the DAO, external contracts might require certain callback functions to be present.
Examples are the `onERC721Received` and `onERC1155Received` / `onERC1155BatchReceived` functions required by the [ERC-721 (NFT Standard)](https://eips.ethereum.org/EIPS/eip-721) and [ERC-1155 (Multi Token Standard)](https://eips.ethereum.org/EIPS/eip-1155) tokens.
Our `CallbackHandler` allows to register the required callback responses dynamically so that the DAO contract does not need to be upgraded.

### 5. Signature Validation

Currently,
 externally owned accounts (EOAs) can sign messages with their 
associated private keys, but contracts cannot.
An exemplary use case is a decentralized exchange with an off-chain 
order book, where buy/sell orders are signed messages.
To accept such a request, both, the external service provider and caller
 need to follow a standard with which the signed message of the caller 
can be validated.

By supporting the [ERC-1271](https://eips.ethereum.org/EIPS/eip-1271) standard, your DAO can validate signatures via its `isValidSignature` function that forwards the call to a signature validator contract.

### 6. Permission Management

Lastly,
 it is essential that only the right entities (e.g., the DAO itself or 
trusted addresses) have permission to use the above-mentioned 
functionalities. This is why Aragon OSx DAOs contain a flexible and 
battle-tested **permission manager** being able to assign 
permissions for the above functionalities to specific addresses.
Although possible, the permissions to execute arbitrary actions or 
upgrade the DAO should not be given to EOAs as this poses a security 
risk to the organization if the account is compromised or acts 
adversarial. Instead, the permissions for the above-mentioned 
functionalities are better restricted to the `DAO` contract itself and triggered through governance [plugins](/docs/1.4.0/osx/how-it-works/core/plugins/) that you can install on your DAO.

To learn more, visit the [permission manager](/docs/1.4.0/osx/how-it-works/core/permissions/) section.
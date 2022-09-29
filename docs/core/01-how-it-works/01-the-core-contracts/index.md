---
title: Core Contracts
---

# The Core Contracts

In a nutshell, your aragonOS DAO consists of three pieces:

1. **The DAO contract:** The DAO contract is where the **core functionality** of the protocol lies. It is in charge of:
   - Representing the identity of the DAO carrying an ENS name, and pointing to a logo, a description, and other metadata,
   - Managing the DAOs assets, and
   - Interacting with other contracts.
2. **The Permission Manager:** The permission manager is part of the DAO contract and the center of our protocol architecture. It **manages and governs the interactions between the DAO and other addresses**. These addresses can be wallets (EOAs) or smart contracts, such as other (sub-)DAOs, multi-sig wallets or Aragon plugins.
3. **Plugins:** Any custom functionality can be added or removed through plugins, allowing you to **fully customize your DAO**. We can imagine these to be governance plugins for collective decision making, like token voting, or other treasury functionalities like the streaming of tokens.

![Overview of the three core contract pieces and their interactions: The `DAO` and `PermissionManager` contract in blue and red as well as `Plugin` implementation contracts in green conducting function calls (black arrows) on the DAO contract that require permission checks (red, dashed arrows).](dao-plugin.drawio.svg)

Overview of the three core contract pieces and their interactions: The `DAO` and `PermissionManager` contract in blue and red as well as `Plugin` implementation contracts in green conducting function calls (black arrows) on the DAO contract that require permission checks (red, dashed arrows).

The underlying smart contracts constitute **the core contracts** of the aragonOS DAO framework.

In the next sections, you will learn about each of them in more depth.

- [The DAO Contract: The Identity and Basis of your Organization](01-the-dao-contract.md)
- [Permissions: Managing and Governing your DAO](02-permissions.md)
- [Plugins: Customizing your DAO]/03-plugins.md)

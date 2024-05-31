---
title: Aragon OSx
sidebar_label: Introduction
sidebar_position: 0
---

## The Contracts Behind the Protocol

The Aragon OSx protocol is the foundation layer of the new Aragon stack. It allows users to create, manage, and customize DAOs in a way that is lean, adaptable, and secure.

The Aragon OSx protocol provides **three primitives** for users to build their organization:

- **DAO contract:** the main body and identity of your organization containing the core functionality. It holds your assets, executes actions, and manages permissions.
- **Permissions**: define relationships between plugins, DAOs, and other addresses.
- **Plugins**: provide custom functionality for your organization and are managed in on-chain plugin repositories. They can be plugged in and out into your DAO without writing or deploying any contract code yourself.

Through permissions and plugins, DAO builders are able to build and customize their DAO to suit their needs.

Developers can implement their own plugin by inheriting from one of our **plugin base classes**, writing a **plugin setup** and publishing it in an on-chain **plugin repository**.

To facilitate this, Aragon OSx runs a set of **framework contracts**:

- **DAO Factory and registry contract:** create and curate DAOs.
- **Plugin repo factory and registry contract:** create and version plugin repositories.
- **Plugin Setup Processor contract:** sets up plugins from a plugin repository in a DAO (installation, update, uninstallation).

## Getting Started

Users interact with the Aragon OSx protocol through the [Aragon App](https://app.aragon.org), the [Aragon SDK](https://devs.aragon.org/docs/sdk), or directly calling on the [protocol contracts](https://github.com/aragon/osx) - as well as through any third-party projects built using our stack.

To **add the contracts to your project**, open a terminal in the root folder of your Solidity project and run:

```shell
yarn add @aragon/osx
```

Then, to use the contracts within your project, **import the contracts** through something like:

<!-- TODO: get simple example for creating a DAO or another use case -->

```solidity title="MyCoolPlugin.sol"
// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.21;

import {Plugin, IDAO} from '@aragon/osx/core/plugin/Plugin.sol';

contract MyCoolPlugin is Plugin {
  // ...
}
```

## Customize your DAO

DAO Plugins are the best way to customize your DAO. These are modular extendable pieces of software which you can install or uninstall from your DAO as it evolves and grows.

To learn more about plugins, check out our guide [here](./02-how-to-guides/02-plugin-development/index.md).

### Walkthrough

This documentation is divided into conceptual and practical sections as well as the reference guide.

- Conceptual [How It Works articles](01-how-it-works/index.md) explain the architecture behind our protocol.
- Practical [How-to Guides](02-how-to-guides/index.md) explain how to use and leverage our protocol.
- The [Reference Guide](03-reference-guide/index.md) generated from the NatSpec comments of the latest `@aragon/osx` release documents each individual Solidity contract, function, and variable.

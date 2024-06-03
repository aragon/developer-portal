---
title: How to build a DAO Plugin
sidebar_label: Developing a Plugin
---

## Plugin Development Quickstart Guide

Plugins are how we extend the functionality for DAOs. In Aragon OSx, everything a DAO can do is based on Plugin functionality enabled through permissions.

In this Quickstart guide, we will use the Aragon Hardhat template to set up a plugin.

## Setting up your environment

We recommend using our [hardhat template](https://github.com/aragon/osx-plugin-template-hardhat) to get started. If you don't have it installed, you can do so by running:

```bash
git clone github.com/aragon/osx-plugin-template-hardhat
```

Once you have cloned the repository the first step is to add a `.env` file with your `ALCHEMY_API_KEY`, there is a [`.env.example`](https://github.com/aragon/osx-plugin-template-hardhat/blob/main/.env.example) file you can use as a template.

This file contains more env variables that you may need throughout the development process, but to get started you only need to add the `ALCHEMY_API_KEY`.

```bash
# INCOMPLETE - PLEASE FILL IN THE MISSING VALUES
# GENERAL

## The network used for testing purposes
NETWORK_NAME="sepolia" #  ["mainnet", "sepolia", "polygon", "baseMainnet", "arbitrum"]

# CONTRACTS

## One or multiple hex encoded private keys separated by commas `,` replacing the hardhat default accounts.
PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Default hardhat account 0 private key. DON'T USE FOR DEPLOYMENTS

## Alchemy RPC endpoint credentials
ALCHEMY_API_KEY="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
```

Once the `.env` file is created, you can run the following command to install the dependencies:

```bash

yarn install && cd packages/contracts && yarn install && yarn build && yarn typechain
```

Now you are ready to start developing your plugin. You should have two files called `MyPlugin.sol` and `MyPluginSetup.sol` inside the `contracts` folder.

The template is already set up with a basic plugin and plugin setup contract. You can start by modifying these files to create your own plugin. The tests and deployment scripts are also set up for you to use.

## Next Steps

For more information on how to use the template, you can check the [README](https://github.com/aragon/osx-plugin-template-hardhat/blob/main/README.md) and the [USAGE GUIDE](https://github.com/aragon/osx-plugin-template-hardhat/blob/main/USAGE_GUIDE.md)

For more information on how to develop a plugin, you can our plugin development guides:

- [Best practices and patterns](./01-best-practices.md)
- [Different plugin types](./02-plugin-types.md)
- [Non-upgradeable plugin](./03-non-upgradeable-plugin/index.md)
- [Upgradeable plugin](./04-upgradeable-plugin/index.md)
- [Governance plugin](./05-governance-plugin/index.md)

:::danger
This plugin template uses version `1.4.0-alpha.5` of the Aragon OSx protocol. This version is still in development and is not audited yet.
:::

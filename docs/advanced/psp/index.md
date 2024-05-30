---
title: Introduction
sidebar_label: Introduction
sidebar_position: 0
---

## Introduction to Plugin Setup Processor (PSP)

The Plugin Setup Processor (PSP) is the component of the Aragon OSx framework which connects plugins and DAOs. Created and maintained by Aragon, the PSP is a non upgradeable smart contract and has undergone rigorous audits to ensure transparency and safety. This contracts governs how plugins are integrated into your DAO, handling the necessary permissions to install/uninstall/upgrade plugins into/from your DAO.

### Why is the PSP Important?

The PSP ensures that any changes made to the DAO’s functionality via plugins are secure and transparent. It uses a prepared setup from the `PluginSetup.sol` contract to manage the installation process, granting or revoking permissions as needed to incorporate/drop the new functionality into/from the DAO. This method guarantees that DAO members are aware of the changes being made and can trust the process.

## Interactions with the PSP

### During DAO Deployment

When you deploy your DAO using the `DAOFactory.sol` contract, the PSP is utilized to install the necessary plugins. A DAO requires at least one plugin to function, and the `DAOFactory` simplifies this process by handling the setup for you. You simply provide an array of settings, where each position corresponds to a different plugin, and the `DAOFactory` takes care of the rest.

### After DAO Deployment

Once your DAO is deployed, you might want to install additional plugins, or uninstall or upgrade existing ones. In these cases, the PSP comes into play again. Here, you need to have an approved proposal that includes actions for both the preparation and application phases of the installation process. Alternatively, you might need two separate proposals, one for each phase.

### Summary

The PSP is a foundational element of the Aragon DAO ecosystem, ensuring that plugins can be managed in a secure and transparent manner. By leveraging the PSP, you can confidently extend the functionality of your DAO, knowing that the process is robust and reliable.

For a detailed walkthrough of the plugin management process, including installation, uninstallation, and upgrades, please refer to the [Managing Plugins](./managing-plugins.md) section.

---
title: Plugin Setup Processor
sidebar_label: Introduction
sidebar_position: 0
---

## Introduction to Plugin Setup Processor (PSP)

The Plugin Setup Processor (PSP) is a crucial component of the Aragon OSx framework, facilitating the integration of plugins with DAOs. Created and maintained by Aragon, the PSP is a **non-upgradeable** smart contract that has undergone rigorous audits to ensure transparency and safety. This contract configures the plugins within your DAO, handling the necessary permissions to install, uninstall, or upgrade plugins.

### Why is the PSP Important?

Managing plugins is a delicate task that must be approached with utmost caution. The PSP ensures that any changes made to the DAO’s functionality via plugins are secure and transparent. It utilizes a prepared setup from a `PluginSetup` contract to prepare the installation process. Then proceeds to apply the prepared setup granting or revoking permissions as needed to incorporate or remove functionalities within the DAO.
This two step method guarantees that DAO members are aware of the changes being made and can trust the process.

## Interactions with the PSP

### During DAO Deployment

When you deploy your DAO using the `DAOFactory` contract, the PSP is utilized to install the necessary plugins. A DAO requires at least one plugin to function, and the `DAOFactory` expects you to install at least one plugin during the creation process.

During this process, the `ROOT_PERMISSION_ID` over the DAO is granted to the PSP to allow it to prepare and apply the installation of your requested plugin. Once the plugin is installed, the `ROOT_PERMISSION_ID` is revoked from the PSP.

### After DAO Deployment

Once your DAO is deployed, you might want to install additional plugins, or uninstall or upgrade existing ones. In these cases, the PSP comes into play again. Here, you need to prepare the plugin using the `PluginSetup` or calling it from the PSP `prepareInstallation` function, and then have an approved proposal in your DAO to apply the prepared process.

:::note
For the PSP to grant or revoke permissions within your DAO, it must have the `ROOT_PERMISSION_ID` permission. Therefore, the proposal for applying the plugin installation, uninstallation, or upgrade must include a first action granting `ROOT_PERMISSION_ID` to the PSP and a final action revoking this permission from it.
:::

For more details on how the two-step process works in Aragon OSx using PSP and `PluginSetup` visit the next section [Managing Plugins](/docs/advanced/psp/managing-plugins.md)

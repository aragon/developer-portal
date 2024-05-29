---
title: PluginSetup Contract
sidebar_label: PluginSetup Contract
sidebar_position: 2
---

## The PluginSetup Smart Contract

The `PluginSetup` contract is written by you, the plugin developer. It contains the instructions needed to install, update, and uninstall the plugin into the DAO. This is done through granting or revoking permissions, enabling plugins to perform actions within the scope of the DAO.

![Aragon OSx Plugins](/img/plugins/what_is_a_plugin.png)

Each `PluginSetup` contract is in charge of deploying its respective Plugin instance. These instances are tailored to the specific DAO they are deployed to, with unique parameters set during deployment.

### Security Considerations

The `PluginSetup` processing is **security critical** because the permissions it handles are granted to third-party contracts.

:::caution
Be careful if you decide to use `PluginSetup`s not hosted by the Aragon OSx protocol, as they may not be audited. They could grant `EXECUTE_PERMISSION_ID` to malicious entities, which would have fully control of your DAO.
:::

### Responsibilities of PluginSetup

The [`PluginSetup`](https://github.com/aragon/osx-commons/blob/main/contracts/src/plugin/setup/PluginSetup.sol) is responsible for:

- Deploying new contracts: Setting up the necessary contracts that the plugin will use.
- Initializing storage variables: Setting initial values for any required storage variables.
- Deprecating/decommissioning outdated contracts: Removing or disabling old helper contracts that are no longer needed.
- Configuring governance settings: Adjusting settings or attributes related to the DAO’s governance.

### PluginSetup Workflow

The typical workflow for a PluginSetup contract involves:

1. **Preparation for Installation**: Gathering and configuring all the necessary components and parameters for the plugin.
2. **Deployment**: Deploying the plugin with the specified parameters.
3. **Permission Handling**: Preparing the granting or revoking permissions as required to ensure the plugin can operate within the DAO.
4. **Update and Uninstallation**: Providing mechanisms to update the plugin to new versions or uninstall it when it’s no longer needed.

You can review how to build a `PluginSetup` contract [here](TODO).

---
title: DAO Creation
---

:::note
Work in Progress, needs revision once the code is finalized and frozen.
:::

## Creating Your DAO and Choosing Plugins

Creating a DAO with custom set of plugins on the frontend is simple.  
After picking an available subdomain name on the `dao.eth` domain, we select the plugins to be installed and configure them. The plugin contracts then gets deployed and prepared in
After confirmation, the `DAOFactory` contract creates the `DAO`.

To realize this **one-click creation process**, the `DAOFactory` executes multiple steps:

The `DAOFactory` contract does the following steps:

1. Call the `createProxy(address daoBase)` function , where `daoBase` is the current aragonOS (`UUPSUpgradeable`) `DAO` implementation contract
2. Call the `registerDao(string daoName, address daoAddress)` function in the `DAORegistry` contract
3. Call the `initialize(address initialOwner)` function with the caller's own address (EOA). As a result, `DAOfactory` now has the `ROOT_PERMISSION_ID` permission on the newly created DAO.
4. Use the `ROOT_PERMISSION_ID` permission to
   1. `grant` itself the `EXECUTE_PERMISSION_ID` permission
   2. `grant` the Aragon `PluginSetupProcessor` the `ROOT_PERMISSION_ID` permission for the `PluginSetupProcessor` to give permissions to the plugins being installed
5. Use the `EXECUTE_PERMISSION_ID` permission to call the `PluginSetupProcessor` to install the requested plugins (see [The Plugin Setup Process](../02-the-dao-framework/02-plugin-marketplace/04-plugin-setup.md))
   :::note
   The UI will make sure that the creator has selected at least one governance plugin having `EXECUTE_PERMISSION_ID` permission on the DAO as it will be revoked in the next step.
   :::
6. Use the `ROOT_PERMISSION_ID` permission to
   1. `revoke` the `EXECUTE_PERMISSION_ID` permission from itself
   2. `grant` the `ROOT_PERMISSION_ID` permission to the intended owner specified by the DAO creator
   3. `revoke` the `ROOT_PERMISSION_ID` permission from itself

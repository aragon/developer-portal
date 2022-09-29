# The DAO Creation Process

Creating a DAO with custom set of plugins on the frontend is simple.  
After picking an available subdomain name on the `dao.eth` domain, we select the plugins to be installed and configure them. The plugin contracts then get deployed and prepared in
After confirmation, the `DAOFactory` contract creates the `DAO`.

To realize this **one-click creation process**, the `DAOFactory` executes multiple steps:

The `DAOFactory` contract does the following steps:

1. call `createProxy(address daoBase)` , where `daoBase` is the current Aragon OS (`UUPSUpgradable`) `DAO` implementation contract
2. call `registerDao(string daoName, address daoAddress)` in the `DAORegistry` contract
3. call `initialize(address initialOwner)` with its own address. As a result, `DAOfactory` now has the `ROOT_PERMISSION_ID` permission on the newly created DAO.
4. use the `ROOT_PERMISSION_ID` to
   1. `grant` itself the `EXECUTE_PERMISSION_ID` permission
   2. `grant` the Aragon `PluginSetupProcessor` the `ROOT_PERMISSION_ID` permission for the `PluginSetupProcessor` to give permissions to the plugins being installed
5. use the `EXECUTE_PERMISSION_ID` permission to call the `PluginSetupProcessor` to install the requested plugins (see [The Plugin Setup Process](The%20Aragon%20Plugin%20Marketplace%20987d6cbbab534411a5bc766c28b24f9a/The%20Plugin%20Setup%20Process%205840be4e7b6a497f8d088fa8d40ad83d.md))
   :::note
   The UI will make sure that the creator has selected at least one governance plugin having `EXECUTE_PERMISSION_ID` permission on the DAO as it will be revoked in the next step.
   :::
6. use the `ROOT_PERMISSION_ID` permission to
   1. `revoke` the `EXECUTE_PERMISSION_ID` permission from itself
   2. `grant` the `ROOT_PERMISSION_ID` permission to the intended owner specified by the DAO creator
   3. `revoke` the `ROOT_PERMISSION_ID` permission from itself

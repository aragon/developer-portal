---
title: Setup
---

## The Plugin Setup Process

A DAO can be set up and customized by the **installation**, **update, and** **uninstallation** of plugins.
In this section you will learn how the plugin setup process in aragonOS works.

In order for a plugin to function, associated contracts need to be deployed and gathered and often require permissions from the DAO: A finance plugin might need the permission to withdraw assets from the treasury and a governance plugin needs permission to execute actions in the DAO.

The required setup logic is written and taken care off by the plugin developer in the `PluginSetup` contract associated with each `Plugin` contract version release (see [Developing a Plugin](docs/core/02-how-to-guides/01-plugin-development/index.md)) which interact with the aragonOS framework infrastructure so that installing, updating, and uninstalling a plugin to a DAO through the UI becomes very simple for the DAO end-user.

### Security Considerations

The plugin setup process is security critical because permissions are granted to third-party contracts. Safety was our top priority in the design and we wanted to make sure that the DAO knows exactly which contracts receive which permissions before processing and make sure that `PluginSetup` contracts being developed by third parties don’t obtain elevated permissions (i.e., the `ROOT_PERMISSION_ID` permission) on the installing DAO during the setup process.

This is why we split the **plugin setup in two steps**: a **preparation** and **processing** step and require both to run through a `PluginSetupProcessor` contract being part of the aragonOS DAO framework infrastructure.

:::note
Plugins can also be setup manually by calling `PluginSetup` contract and granting permissions directly through the `DAO` contract but won’t be displayed in the UI correctly.
:::

In the following, we describe the two steps in detail.

### 1. Preparation

The preparation of a plugin setup proceeds as follows:

1. A DAO user selects a plugin with a specific version from the marketplace UI to install it or from the DAO dashboard to update or uninstall it. Depending on the case, the `prepareInstallation`, `prepareUpdate`, or `prepareUninstallation` method in the `PluginSetup` contract associated with the version to set up is called through the `PluginSetupProcessor` (and creates a unique setup ID).
2. The `PluginSetup` contract deploys all the contracts

   and gathers addresses and other input arguments required for the plugin setup.
   This can include

   - deployment of new contracts
   - initialization of new storage variables
   - deprecating/decomissioning outdated (helper) contracts
   - ...

   Because the addresses of all associated contracts are now known, a static permission list can be emitted, hashed, and stored on-chain

3. The list containing the required permissions is then proposed as an `Action[]` array for processing in a proposal through a governance plugin of the installing DAO.

:::note
The governance plugin can be a simple majority vote, an optimistic process or an admin governance plugin that does not involve a waiting period.
:::

This gives the DAO time to see and check which permissions the `PluginSetup` contract request before processing them. Optionally, the proposer can also request refunds for the gas spent for the preparation of the plugin in the proposal.

### 2. Processing

After this initial transaction, all contracts and addresses related to the plugin as well as their permissions are known and the DAO can decide if the proposal should be accepted or denied.
Once the proposal has passed, the actions specified in the `Action[]` array get executed and the prepared plugin setup is processed as follows:

1. The DAO temporarily grants the `ROOT_PERMISSION_ID` permission to the `PluginSetupProcessor`.
2. The next `Action` calls the `processInstallation`, `processUpdate`, or `processUninstallation` method in the `PluginSetupProcessor` depending on the setup process and with the permission list as an argument. The permission hash is compared with the stored hash to make sure that the permission didn’t change.
   In addition to the above, the update process also upgrades the logic contract to which the proxy points too.
3. If the hash is valid, the list is processed and `PluginSetupProcessor` conducts the requested sequence of `grant`, `grantWithOracle`, `revoke`, and `freeze` calls on the owning DAO.
   Finally, the `PluginSetupProcessor` asks the DAO to revoke the `ROOT_PERMISSION_ID` permission from itself.

The two-step setup procedure in aragonOS is not limited to the setup of only one plugin — you can **setup multiple plugins at once** by first preparing them in a single proposal and then processing the entire setup sequence in one transaction. This is powerful and allows you to **transform your entire DAO in one proposal**, for example, to install a new governance plugin (e.g., a gasless ZK-vote) and finance plugin (e.g., to stream loans to your members), while uninstalling your old ERC20 token vote in one go.

In the next sections, you will learn about how plugins are curated on the marketplace.

:::note
To Do: put these graphics in a container with only one caption
:::

![Overview of the two-transaction plugin installation process with the involved contracts as rounded rectangles, interactions between them as arrows, and relations as dashed lines. The first and second transaction are distinguished by numbering as well as solid and dotted lines, respectively.](plugin-installation.drawio.svg)

![Overview of the two-transaction plugin update process with the involved contracts as rounded rectangles, interactions between them as arrows, and relations as dashed lines. The first and second transaction are distinguished by numbering as well as solid and dotted lines, respectively.](plugin-update.drawio.svg)

![Overview of the two-transaction plugin uninstallation process with the involved contracts as rounded rectangles, interactions between them as arrows, and relations as dashed lines. The first and second transaction are distinguished by numbering as well as solid and dotted lines, respectively.](plugin-uninstallation.drawio.svg)

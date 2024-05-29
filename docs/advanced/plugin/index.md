---
title: Overview
sidebar_label: Overview
sidebar_position: 0
---

## Aragon OSx Plugins

As mentioned earlier, plugins built by Aragon and third-party developers can be added and removed from your DAO to adapt it to your needs.

The management of these plugins is handled for you by the Aragon OSx protocol so that the process of

- Releasing new plugins as well as
- Installing, updating, and uninstalling them to your DAO

becomes as streamlined as possible.

### What Does a Plugin Consist Of?

An Aragon OSx Plugin consists of:

- The `Plugin` contract

  - contains the plugin's implementation logic

- The `PluginSetup` contract

  - referencing the `Plugin` implementation internally
  - containing the instructions needed to install, update, and uninstall the plugin into the DAO

- A metadata URI pointing to a `JSON` file containing the

  - AragonApp frontend information
  - Information needed for the setup ABI

- A version tag consisting of a

  - Release number
  - Build number

<div class="center-column">

![](/optimized-svg/plugins/plugin-version.drawio.svg)

<p class="caption">
  A schematic depiction of a plugin bundle consisting of a version tag, the plugin setup contract pointing to the plugin implementation contract, and a metadata URI.
</p>

</div>

### What Does the Plugin Framework Consist Of?

The Aragon OSx Plugin Framework consists of:

- The `PluginRepo` contract

  - versions the releases of a Plugin

- The `PluginRepoFactory` contract

  - creates a `PluginRepo` for a plugin

- The `PluginRepoRegistry` contract

  - listing all the plugins managed through the Aragon OSx protocol

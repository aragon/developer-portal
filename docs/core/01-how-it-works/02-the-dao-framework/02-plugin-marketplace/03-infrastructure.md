---
title: Infrastructure
---

# The Plugin Marketplace Infrastructure

In this section, we take a close look on the contracts constituting the plugin marketplace infrastructure.

A plugin published on the Aragon Plugin Marketplace consist of

- the plugin implementation contract
- a setup contract (internally referencing the implementation contract and used by the `PluginSetupProcessor`)
- the Aragon App frontend / UI

Each plugin has its own, unique ENS name and on-chain repository contract, the `PluginRepo`, in which different versions of the plugin are referenced.

The names and address of the `PluginRepo` contracts are stored in the `PluginRepoRegistry`. Both contracts are described in the following.

The `PluginSetupProcessor` contract taking care of installing, updating, and uninstalling is described in the context of [the plugin setup process](04-plugin-setup.md).

![Schema showing the`PluginRepoRegistry` maintaining a list the addresses of ENS named `PluginRepo` contracts shown on the left. Each `PluginRepo` contract maintains a list of semantic versions of the `PluginSetup` contract (internally referencing the `Plugin` logic) and the associated UI building blocks as a URI, examplarically shown on the right.](plugin-repo-overview.drawio.svg)

Schema showing the`PluginRepoRegistry` maintaining a list the addresses of ENS named `PluginRepo` contracts shown on the left. Each `PluginRepo` contract maintains a list of semantic versions of the `PluginSetup` contract (internally referencing the `Plugin` logic) and the associated UI building blocks as a URI, examplarically shown on the right.

We will introduce the contracts in the following.

## The `PuginRepo` Contract

The `PluginRepo` contract versions the releases of a `Plugin`. Each plugin starts as version `1.0.0`. Subsequent versions follow the [semantic versioning convention](https://semver.org/). For major, minor, and patch releases, the respective [version numbers are incremented](docs/core/02-how-to-guides/01-plugin-development/03-versioning.md).

Each semantic version released in the `PluginRepo` contract via the `createVersion` function (see code snippet)

```solidity
function createVersion(
    uint16[3] memory _newSemanticVersion,
    address _pluginManager,
    bytes calldata _contentURI
)
```

references two pieces of information:

1. The address of `PluginSetup` contract internally referencing the implementation contract (to copy, proxy, or clone from it) and taking care of [installing, updating to, and uninstalling](04-plugin-setup.md) this specific version.
2. An URI pointing to the contents defining the UI so that users on the Aragon DAO frontend can interact with it.

:::note
To do: The following is a draft.
:::
Additionally, each released version has a

- status
  - submitted
  - review pending
  - accepted
  - rejected
  - vulnerable
- description / release note
- audit / review document summary

## The `PluginRepoRegistry` Contract

The `PluginRepoRegistry` contract is the central contract listing the plugins that have been published on the Aragon Marketplace. Each plugin has its own ENS name (e.g. `my-cool.plugin.aragon.eth`) and own `PluginRepo` contract, in which the different plugin versions are referenced.

:::note
To do
:::

- describe details on the registration requirements for a `PluginRepo`
  - registration: a proposal to the DAO
- describe mechanisms/rational to prevent ENS name squatting / griefing

---
title: Creation
sidebar_label: Creation
sidebar_position: 1
---

# Dao Creation

Two framework contracts manage the `DAO` contract creation process:

- The [`DAOFactory`](docs/osx/reference-guide/framework/dao/DAOFactory)
- The [`DAORegistry`](docs/osx/reference-guide/framework/dao/DAORegistry).

## `DAOFactory`

The `DAOFactory` creates and sets up a `DAO` for you in four steps with the `createDao` function. The function requires the `DAOSettings` including:

- The trusted forwarder address for future [ERC-2771 (Meta Transaction)](https://eips.ethereum.org/EIPS/eip-2771) compatibility that is set to `address(0)` for now
- The ENS name (to be registered under the `dao.eth` domain)
- The [ERC-4824 (Common Interfaces for DAOs)](https://eips.ethereum.org/EIPS/eip-4824) `daoURI`
- Optional metadata

The DAO also requires an array of `PluginSettings` containing `PluginSetup` and its respective setup data for the plugins to be installed in the DAO.

When the `createDao` function is called in the `DAOFactory` this triggers a four step process for creating a DAO:

1. Creates a new DAO by deploying an [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) proxy pointing to the latest Aragon OSx `DAO` implementation and becomes the initial owner.
2. Registers the new contract in the [`DAORegistry`](docs/osx/how-it-works/framework/dao-creation/#daoregistry).
3. Installs the plugins using the `PluginSetupProcessor` (see also the section about [the plugin setup process](docs/osx/how-it-works/framework/plugin-management/plugin-setup/)).
4. Sets the [native permissions](docs/osx/how-it-works/core/permissions/#permissions-native-to-the-dao-contract) of the `DAO` and revokes its own ownership.


### Plugins

When calling `createDao` an array of `PluginSettings` are requested. A DAO cannot be created without at least one plugin. The DAO contract works as a permission manager system but it is agnostic to the type of governance that you want to use to manage the DAO. We currently provide two plugins that can be used for governing your DAO:

- [`Multisig`](https://link-to-more-info/)
- [`TokenVoting`](https://link-to-more-info/)

If none of this options meet your requirements you can also build your own governance plugin, check our tutorial on ["How to build a plugin?"](https://www.notion.so/Docs-9b7b0c1fdf894cdeb6413dcd255a8896?pvs=21) to get started.

## `DAORegistry`

The `DAORegistry` is used by the `DAOFactory` and contains the `register` function

@aragon/framework/dao/DAORegistry.sol

```solidity
function register(
  IDAO dao,
  address creator,
  string calldata subdomain
) external auth(REGISTER_DAO_PERMISSION_ID);

```

the `register` function requires the `REGISTER_DAO_PERMISSION_ID`, this permission currently held only by the `DAOFactory`. This implies that the only way of creating DAOs that get registered in our `DAORegistry` is via the `createDao` function in the `DaoFactory` contract.

If the requested ENS `subdomain` name [is valid](docs/osx/how-it-works/framework/ens-names) and not taken, the `DAORegistry` registers the subdomain and adds the `DAO` contract address to the `DAORegistry`.
If the `subdomain` parameter is non-empty (not `""`) and still available, the ENS name will be registered. If the registration was successful, an event a `DAORegistered` event is emmited. This event contains the DAO address, the creator address and the subdomain.

In case you want to verify that you DAO got registered in the `DAORegistry` you can call `entries(address)` and it will return `true` if the DAO is registered

For more details visit the [`DAORegistry` reference guide entry](docs/osx/reference-guide/framework/dao/DAORegistry).
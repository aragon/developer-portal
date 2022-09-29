# Choosing the right Plugin Types

In this section, we will learn about the interfaces or base contracts to inherit from when developing a plugin.

Depending on the use-case of your plugin, you might want it to be

- upgradable or non-upgradable
- deployed by a specific deployment method
- compatible with meta transactions

:::caution
Upgradeable plugin contracts (such as `PluginUpgradeable`, `PluginUUPSUpgradeable` implementations) must reserve storage slots by defining a storage gap. If this is not properly and/or variables are rearranged in the upgrade, the storage can become corrupted rendering it inaccessible and resulting in the loss of funds.
:::

## Upgradeability & Deployment

Upgradebility and the deployment method of a plugin contract go hand in hand.

The motivation to upgrade smart contracts is nicely summarized by OpenZepplin:

> Smart contracts in Ethereum are immutable by default. Once you create them there is no way to alter them, effectively acting as an unbreakable contract among participants.
>
> However, for some scenarios, it is desirable to be able to modify them […]
>
> - to fix a bug [...],
> - to add additional features, or simply to
> - change the rules enforced by it.
>
> Here’s what you’d need to do to fix a bug in a contract you cannot upgrade:
>
> 1. Deploy a new version of the contract
> 2. Manually migrate all state from the old one contract to the new one (which can be very expensive in terms of gas fees!)
> 3. Update all contracts that interacted with the old contract to use the address of the new one
> 4. Reach out to all your users and convince them to start using the new deployment (and handle both contracts being used simultaneously, as users are slow to migrate
>
> _source: [https://docs.openzeppelin.com/learn/upgrading-smart-contracts#whats-in-an-upgrade](https://docs.openzeppelin.com/learn/upgrading-smart-contracts#whats-in-an-upgrade)_

With upgradable smart contracts, you can modify their code while keep using or even extending the storage (see the guide [Writing Upgradable Contracts](https://docs.openzeppelin.com/upgrades-plugins/1.x/writing-upgradeable) by OpenZepplin).

To enable upgradeable smart contracts (as well as cheap contract clones), the proxy pattern is used.

Depending on your upgradeability requirements and the deployment method you choose, you can also greatly reduce the gas costs to distribute your plugin.

However, the upgradeability and deployment method can also introduce caveats during [The Plugin Setup Process](https://www.notion.so/The-Plugin-Setup-Process-5840be4e7b6a497f8d088fa8d40ad83d), especially for updating from an older version to a new one.

The following table presents an overview of the different deployment methods and their benefits and drawbacks:

| Deployment Method              | new Instantiation | Minimal Proxy (Clones) | Transparent Proxy | UUPS Proxy |
| ------------------------------ | ----------------- | ---------------------- | ----------------- | ---------- |
| upgradability                  | no                | no                     | yes               | yes        |
| gas costs                      | high              | very low               | moderate          | low        |
| complexity of implementation   | low               | low                    | moderate          | moderate   |
| complexity of `installation`   | easy              | easy                   | moderate          | moderate   |
| complexity of `uninstallation` | easy              | easy                   | easy              | easy       |
| complexity of `update`         | difficult/limited | difficult/limited      | easy              | easy       |

Accordingly, we recommend the UUPS proxy method for developing easily updatable Aragon Plugins and minimal clones for those, where the availability of the storage after the update is secondary / not needed.

To help you with developing and deploying the plugin within the Aragon infrastructure, we provide plugin interfaces and setup contracts for [the OpenZepplin Contracts Proxies](https://docs.openzeppelin.com/contracts/4.x/api/proxy) that you can inherit from besides the standard abstract `Plugin` contract

- `PluginClones`
- `PluginTransparentUpgradeable`
- `PluginUUPSUpgradable`

### Caveats of non-upgradable Plugins

Aragon plugins using non-upgradable smart contracts can be cheap to deploy (i.e., using clones) but are **limited when it comes to updating**.

Updating, in distinction from upgrading, we call the Aragon DAO Framework specific process of switching from an older plugin version to a newer one.

To switch from an older version of a non-upgradable contract to a newer one, the underlying contract has to be replaced. In consequence, the state of the older version is not available in the new version anymore, unless it is migrated or has been made publicly accessible in the old version through getter functions.

## Meta Transaction Compatibility

Another useful trait of a contract is the possibility to allow users to send gasless transactions, also known as meta transactions.

This works by signing a transaction and letting a relay service take care of sending and paying the gas for the transaction.
As a consequence, `msg.sender` and `msg.data` parameters are not referencing the correct context anymore. To be compatible with meta transactions, all our contracts use internal `_msgSender()` and `_msgData()` functions.

Beyond that, to enable plugins to operate with meta transactions, we provide the `MetaTxCompatible` contract.

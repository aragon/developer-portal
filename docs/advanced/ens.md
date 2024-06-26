---
title: ENS
sidebar_label: ENS
sidebar_position: 5
---

## Unique DAO and Plugin Repo Names

To make DAOs and plugin repositories easily identifiable in the Aragon OSx ecosystem, we assign unique ENS names to them upon registration during the [DAO creation](/docs/advanced/dao/01-creation.md) and [plugin publishing](./plugin/repositories/factory-and-registry.md) processes.

:::info
You can skip registering an ENS name for your DAO under the `dao.eth` by leaving the [`DAOSettings.subdomain` field](./technical-reference/framework/dao/DAOFactory.md#public-struct-daosettings) empty when calling the [`createDao`](./technical-reference/framework/dao/DAOFactory.md#external-function-createdao) function.
:::

### Allowed Character Set

We allow the following characters for the subdomain names:

- Lowercase letters `a-z`
- Digits `0-9`
- The hyphen `-`

This way, you can name and share the DAO or plugin repo you have created as `my-cool.dao.eth` or `my-handy.plugin.dao.eth` to make their addresses easily shareable and discoverable on ENS-supporting chains.

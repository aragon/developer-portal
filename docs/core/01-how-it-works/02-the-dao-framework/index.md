---
title: Framework
---

# The DAO Framework

The **core contracts** constituting the aragonOS DAOs and being customizable and extensible through Aragon and third-party plugins are the central part of the aragonOS DAO Framework.

To enable the creation of DAOs and setup of plugins, aragonOS provides the necessary **framework infrastructure**. This infrastructure consists of multiple smart contracts being related to the **creation of DAOs** and the **management of the Aragon Marketplace** - a curated list of plugins.

Together, the core and infrastructure related contracts constitute the **code layer** of our aragonOS DAO Framework that is built on top of **external dependencies**, most notably the OpenZepplin libraries.

To govern the framework infrastructure, a **Framework DAO** exists

- controlling the permissions of and between the infrastructure related contracts to
  - upgrade them
  - allow them to register ENS names for DAOs and plugins on the `dao.eth` and `plugin.aragon.eth`, respectively
- reviewing and verifying plugins submissions to the marketplace

The governance structure of the Framework DAO is initially run centrally by the Aragon team. In the future, we will progressively decentralize the DAO providing economic incentives for Aragon not to become the gatekeeper / censor of the Marketplace.
The strategy and roadmap of this decentralization process is decided by the stakeholders in the **Aragon Network (AN) Main DAO**.

Together, the Framework DAO and AN Main DAO present the **governance layer** of the aragonOS DAO Framework.

![Schematic overview of the governance layer, code layer and external dependencies of the Aragon DAO Framework and their responsibilities.](aragon-os-architecture-Overview.drawio.svg)

Schematic overview of the governance layer, code layer and external dependencies of the Aragon DAO Framework and their responsibilities.

In the following sections, the framework related parts are explained.

- [The DAO Creation Process](01-dao-creation-process.md)
- [The Aragon Plugin Marketplace](02-plugin-marketplace/index.md)

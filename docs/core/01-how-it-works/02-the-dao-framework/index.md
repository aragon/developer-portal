---
title: The DAO Framework
---

## The Infrastructure Behind the AraongOS DAO Framework

To enable the creation of DAOs and the setup of plugins, aragonOS provides the necessary **framework infrastructure**.
This infrastructure consists of multiple smart contracts being related to the **creation of DAOs** and the **management of the Aragon plugin repository** - a curated list of plugins.

<div class="center-column">

![](aragon-os-architecture-Overview.drawio.svg)

<p class="caption"> 
  Schematic overview of the Aragon DAO Framework with its components; the governance layer, code layer with external dependencies; and their responsibilities.
</p>

</div>

Together, the core and infrastructure related contracts constitute the **code layer** of our aragonOS DAO framework that is built on top of external dependencies, most notably the [OpenZepplin contracts](https://www.openzeppelin.com/contracts).
To govern the framework infrastructure, a **Framework DAO** exists to:

- control the permissions of and between the infrastructure related contracts to:
  - upgrade them
  - allow them to register ENS names for DAOs and plugins on the `dao.eth` and `dao-plugin.eth`, respectively
- verify plugin submissions to Aragon App

This Framework DAO constitutes the **governance layer** of the aragonOS DAO Framework.

In the following sections, [The DAO Creation Process](01-dao-creation-process.md) and the [The Aragon Plugin Repository](02-plugin-repository/index.md) are explained in more detail.

---
title: Plugin Versioning
sidebar_position: 4
---

## Aragon OSx versioning system

The Aragon OSx protocol has an on-chain versioning system built-in, which distinguishes between releases and builds.

- **Releases** contain breaking changes, which are incompatible with preexisting installations. Updates to a different release are not possible. Instead, you must install the new plugin release and uninstall the old one.
- **Builds** are minor/patch versions within a release, and they are meant for compatible upgrades only (adding a feature or fixing a bug without changing anything else).

Builds are particularly important for `UUPSUpgradeable` plugins, whereas a non-upgradeable plugin will work off of only releases.

Given a version tag `RELEASE.BUILD`, we can infer that:

1.  We are doing a `RELEASE` version when we apply breaking changes affecting the interaction with other contracts on the blockchain to:

    - The `Plugin` implementation contract such as the

      - change or removal of storage variables
      - removal of external functions
      - change of external function headers

2.  We are doing a `BUILD` version when we apply backward compatible changes not affecting the interaction with other contracts on the blockchain to:

    - The `Plugin` implementation contract such as the

      - addition of

        - storage variables
        - external functions

      - change of

        - external function bodies

      - addition, change, or removal of

        - internal functions
        - constants
        - immutables
        - events
        - errors

    - The `PluginSetup` contract such as

      - addition, change, or removal of

        - input parameters
        - helper contracts
        - requested permissions

    - The release and build `metadata` URIs such as the

      - change of

        - the plugin setup ABI
        - the plugin UI components
        - the plugin description

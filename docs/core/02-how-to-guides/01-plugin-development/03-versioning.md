# Versioning

:::note
Work in Progress
:::

Our plugin version numbering follows the common [semantic versioning](https://semver.org/) notation. Below, we define what a version bumps means in the context of the `Plugin` ecosystem.

Given a version number `MAJOR.MINOR.PATCH`, we can infer that:

1. We’re doing a `MAJOR` version when we make incompatible API changes.
    - In the example of contracts, these can be:
        - change of a function signature
        - repurposing of previous storage
        - etc.
2. We’re doing a `MINOR` version when we add functionality in a backwards compatible manner:
    - In the example of contracts, these can be:
        - addition of functions
        - addition of new storage variables
        - etc.
3. We’re doing a `PATCH` version when we make backwards compatible bug fixes
    - In the example of contracts, these can be:
        - a bug fix in the contract logic
        - a bug fix in the contract factory
        - etc.
    - In the example of UI, a minor change is also included as a patch.
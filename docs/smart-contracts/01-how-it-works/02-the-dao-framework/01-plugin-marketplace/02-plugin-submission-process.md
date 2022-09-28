# The Plugin Submission and Audit Process

:::note
To do: This is a draft.
:::

To be displayed on the Aragon Plugin Marketplace, Plugins have to be submitted. They can then be audited and approved through the Aragon Framework DAO to ensure their safety. Optionally, DAOs can allow the installation of unaudited plugins at their own risk.

Initially, only a small set of Aragon plugins will be audited and verified.

In the next phase, this process is opened to the public and developers can submit their own plugins to be audited and verified by the Aragon team.

In the future, the audit process will be fully decentralized by introducing economic incentives for all stakeholders involved. This will prevent Aragon becoming a gatekeeper of the marketplace.

The plugin audit process consist of X phases:

**Phase** / `status`:

1. **Submission** (`submitted`)
    
    Formal proposal to the Aragon Marketplace DAO
    
    - two scenarios
        1. new plugin (`v1.0.0`)
        2. update to existing plugin (e.g., `v1.2.0`) with options to upgrade from (multiple) previous versions
            - `v1.0.5` → `v1.2.0`
            - `v1.1.0` → `v1.2.0`
            - … (whatever update the developer wants to support)
    - proposal text contains description and explanation of
        - the public/user facing functions
        - permissions required during installation / upgrade
        
2. **Peer Review** (`in review`)

Reviewers review and comment on the different code pieces the developer provides

- contract logic
    - fee structure
- setup logic
- UI building blocks
1. **Acceptance** / **Revision** / **Rejection** (`accepted`, `revision requested`, `rejected`)
    - Accepted
        - the Plugin is listed as `verified` on the Marketplace
    - Revision
        - move to step 2
    - Rejected
        - the Plugin is listed as `rejected` on the Marketplace
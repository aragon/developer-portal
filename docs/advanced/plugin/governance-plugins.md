---
title: Governance Plugins
sidebar_label: Governance Plugins
sidebar_position: 1
---

A DAO can be understood as an arbitrary executor, a system or entity capable of performing a wide range of actions based on permissions it holds. Governance plugins are essential components of your DAO, allowing it to execute actions and manage its operations.

While a DAO can technically function without a governance plugin by granting the `EXECUTE_PERMISSION_ID` to an EOA, this practice is generally discouraged as it defeats the purpose of decentralized governance.

### Execute Permission

The `EXECUTE_PERMISSION_ID` is one of the most critical permissions within your DAO. It allows the entity holding this permission, whether an EOA or a smart contract, to call the DAO's `execute` function. This function is essential for carrying out decisions and actions within the DAO.

### Governance Plugin

Governance plugins are characterized by the **ability to execute actions in the DAO** they have been installed on. Accordingly, the `EXECUTE_PERMISSION_ID` is granted to the governance plugin contract upon installation in the DAO. If using Aragon OSx protocol (DAOFactory `createDao` function) at least one plugin installation is required when deploying the DAO.

```solidity
grant({
    where: installingDao,
    who: governancePlugin,
    permissionId: EXECUTE_PERMISSION_ID
});
```

Granting this permission to a governance plugin ensures that the plugin can execute proposals and manage operations effectively on behalf of the DAO, upholding the principles of decentralized governance.

More complex systems using more than one governance plugin are possible with Aragon OSx protocol by properly managing the permissions that relates the plugins and the DAO.

### Aragon Governance Plugins

Aragon offers several pre-developed governance plugins that you can use without needing to write your own:

- [A token-voting plugin](https://github.com/aragon/token-voting-plugin): Results are based on what the majority votes and the vote's weight is determined by how many tokens an account holds. Ex: Alice has 10 tokens, Bob 2, and Alice votes yes, the yes wins.
- [Multisig plugin](https://github.com/aragon/multisig-plugin): A determined set of addresses is able to approve. Once `x` amount of addresses approve (as determined by the plugin settings), then the proposal automatically succeeds.
- [Admin plugin](https://github.com/aragon/admin-plugin): One address can create and immediately execute proposals on the DAO (full control).

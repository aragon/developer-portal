## Aragon Core

###  contract `IMembership`

An interface to be used by DAO plugins that define membership by adding and removing individual addresses.

####  event `MembersAdded`

Emitted when members are added to the DAO plugin.

```solidity
event MembersAdded(address[] members) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| members | address[] | The list of new members being added. |

####  event `MembersRemoved`

Emitted when members are removed from the DAO plugin.

```solidity
event MembersRemoved(address[] members) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| members | address[] | The list of existing members being removed. |


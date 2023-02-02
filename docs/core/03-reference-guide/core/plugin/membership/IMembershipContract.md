## Aragon Core

###  contract `IMembershipContract`

An interface to be implemented by DAO plugins that define membership based on a contract. This can be
- a token contract (e.g., (Governance-) ERC-20 and ERC-721) defining membership based on ownership / delegation.
- a registry contract (e.g, `Addresslist`, the Proof of Humanity Registry) defining membership by curation of a list.

####  event `MembershipContractAnnounced`

Emitted to announce the membership being defined by a contract.

```solidity
event MembershipContractAnnounced(address definingContract) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| definingContract | address | The contract defining the membership. |

#### external function `isMember`

Checks if an account is a member of the DAO.

```solidity
function isMember(address _account) external view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _account | address | The address of the account to be checked. |
| **Output** | |
| [0] | bool | Whether the account is a member or not. |

*This function must be implemented in the plugin contract that introduces the members to the DAO.*


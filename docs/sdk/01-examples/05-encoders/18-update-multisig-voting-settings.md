### Multisig Encoders

#### Update Multisig voting confuguration

Allows you to update the voting configuration of a Multisig plugin installed in a DAO.

```ts
import {
  ContextPlugin,
  DaoAction,
  MultisigClient,
  UpdateMultisigVotingSettingsParams
} from "@aragon/sdk-client";
import { context } from "../01-client/01-getting-started";

// Instantiate a plugin context from the Aragon OSx SDK context.
const contextPlugin: ContextPlugin = ContextPlugin.fromContext(context);
// Instantiate a Multisig client.
const multisigClient = new MultisigClient(contextPlugin);

const updateMinApprovals: UpdateMultisigVotingSettingsParams = {
  votingSettings: {
    minApprovals: 2,
    onlyListed: false
  },
  pluginAddress: "0x0987654321098765432109876543210987654321" // the address of the Multisig plugin contract installed in the DAO
};

// Updates the voting configuration of a Multisig plugin installed in a DAO.
const updateMultisigConfig: DaoAction = multisigClient.encoding.updateMultisigVotingSettings(updateMinApprovals);
console.log({ updateMultisigConfig });
```


Returns:

```
{
  to: "0x1234567890...",
  value: 0n,
  data: Uint8Array[12,34,45...]
}
```
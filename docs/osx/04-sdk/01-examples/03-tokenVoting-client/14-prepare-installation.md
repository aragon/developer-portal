---
title: Prepare Installation
---

## Prepare the Installation of a Token Voting Plugin

```ts
import {
  TokenVotingClient,
  TokenVotingPluginPrepareInstallationParams,
  VotingMode,
} from "@aragon/sdk-client";
import { PrepareInstallationStep } from "@aragon/sdk-client-common";
import { context } from "../index";

// Create an TokenVoting client.
const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
  context,
);

const installationParams: TokenVotingPluginPrepareInstallationParams = {
  settings: {
    votingSettings: {
      supportThreshold: 0.5,
      minParticipation: 0.5,
      minDuration: 7200,
      minProposerVotingPower: BigInt(1),
      votingMode: VotingMode.STANDARD,
    },
    newToken: {
      name: "test",
      decimals: 18,
      symbol: "TST",
      balances: [
        {
          address: "0x1234567890123456789012345678901234567890",
          balance: BigInt(10),
        },
      ],
    },
  },
  daoAddressOrEns: "0x1234567890123456789012345678901234567890",
};
const steps = tokenVotingClient.methods.prepareInstallation(installationParams);
for await (const step of steps) {
  switch (step.key) {
    case PrepareInstallationStep.PREPARING:
      console.log(step.txHash);
      break;
    case PrepareInstallationStep.DONE:
      console.log({ step });
      break;
  }
}
```


Returns:
```tsx
{
  txHash: "0xb1c14a49...3e8620b0f5832d61c"
}
{
  step: {
    helpers: ["0x12345...", "0x12345..."]
    pluginRepo: "0x12345...",
    pluginAdddres: "0x12345...",
    versionTag: {
      build: 1,
      release: 1
    },
    permissions: [
      {
        condition: "0x12345...",
        who: "0x12345...",
        where: "0x12345...",
        operation: 1, // GRANT
      permissionId: "0x1234567890..."
      }
    ]
  }
}
```
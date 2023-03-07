### Create an AddresslistVoting client

Creates an AddresslistVoting client allowing you to access the AddresslistVoting plugin functionality.

```ts
import { AddresslistVotingClient, ContextPlugin } from "@aragon/sdk-client";
import { context } from "../01-client/01-getting-started";

// Instantiate a plugin context from the Aragon OSx SDK context.
const contextPlugin: ContextPlugin = ContextPlugin.fromContext(context);

// Instantiate an AddresslistVoting client from the Aragon OSx SDK context.
const addresslistVotingClient: AddresslistVotingClient = new AddresslistVotingClient(contextPlugin);
console.log({ addresslistVotingClient });
```


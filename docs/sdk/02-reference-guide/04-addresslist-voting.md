## Classes

<dl>
<dt><a href="#AddresslistVotingClient">AddresslistVotingClient</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p></dd>
<dt><a href="#AddresslistVotingClientDecoding">AddresslistVotingClientDecoding</a></dt>
<dd><p>Decoding module for the SDK AddressList Client</p></dd>
<dt><a href="#AddresslistVotingClientEncoding">AddresslistVotingClientEncoding</a></dt>
<dd><p>Encoding module for the SDK AddressList Client</p></dd>
<dt><a href="#AddresslistVotingClientEstimation">AddresslistVotingClientEstimation</a></dt>
<dd><p>Estimation module the SDK Address List Client</p></dd>
<dt><a href="#AddresslistVotingClientMethods">AddresslistVotingClientMethods</a></dt>
<dd><p>Methods module the SDK Address List Client</p></dd>
</dl>

<a name="AddresslistVotingClient"></a>

## AddresslistVotingClient
<p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p>

**Kind**: global class  
<a name="AddresslistVotingClient.getPluginInstallItem"></a>

### AddresslistVotingClient.getPluginInstallItem(params, [network]) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>AddresslistVotingClient</code>](#AddresslistVotingClient)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>AddresslistVotingPluginInstall</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="AddresslistVotingClientDecoding"></a>

## AddresslistVotingClientDecoding
<p>Decoding module for the SDK AddressList Client</p>

**Kind**: global class  

* [AddresslistVotingClientDecoding](#AddresslistVotingClientDecoding)
    * [.updatePluginSettingsAction(data)](#AddresslistVotingClientDecoding+updatePluginSettingsAction) ⇒ <code>VotingSettings</code>
    * [.addMembersAction(data)](#AddresslistVotingClientDecoding+addMembersAction) ⇒ <code>Array.&lt;string&gt;</code>
    * [.removeMembersAction(data)](#AddresslistVotingClientDecoding+removeMembersAction) ⇒ <code>Array.&lt;string&gt;</code>
    * [.findInterface(data)](#AddresslistVotingClientDecoding+findInterface) ⇒ <code>InterfaceParams</code> \| <code>null</code>

<a name="AddresslistVotingClientDecoding+updatePluginSettingsAction"></a>

### addresslistVotingClientDecoding.updatePluginSettingsAction(data) ⇒ <code>VotingSettings</code>
<p>Decodes a dao metadata from an encoded update metadata action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#AddresslistVotingClientDecoding)  
**Returns**: <code>VotingSettings</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="AddresslistVotingClientDecoding+addMembersAction"></a>

### addresslistVotingClientDecoding.addMembersAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded add members action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#AddresslistVotingClientDecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="AddresslistVotingClientDecoding+removeMembersAction"></a>

### addresslistVotingClientDecoding.removeMembersAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded remove members action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#AddresslistVotingClientDecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="AddresslistVotingClientDecoding+findInterface"></a>

### addresslistVotingClientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#AddresslistVotingClientDecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="AddresslistVotingClientEncoding"></a>

## AddresslistVotingClientEncoding
<p>Encoding module for the SDK AddressList Client</p>

**Kind**: global class  

* [AddresslistVotingClientEncoding](#AddresslistVotingClientEncoding)
    * _instance_
        * [.updatePluginSettingsAction(pluginAddress, params)](#AddresslistVotingClientEncoding+updatePluginSettingsAction) ⇒ <code>DaoAction</code>
        * [.addMembersAction(pluginAddress, members)](#AddresslistVotingClientEncoding+addMembersAction) ⇒ <code>DaoAction</code>
        * [.removeMembersAction(pluginAddress, members)](#AddresslistVotingClientEncoding+removeMembersAction) ⇒ <code>DaoAction</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#AddresslistVotingClientEncoding.getPluginInstallItem) ⇒ <code>PluginInstallItem</code>

<a name="AddresslistVotingClientEncoding+updatePluginSettingsAction"></a>

### addresslistVotingClientEncoding.updatePluginSettingsAction(pluginAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>AddresslistVotingClientEncoding</code>](#AddresslistVotingClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| params | <code>VotingSettings</code> | 

<a name="AddresslistVotingClientEncoding+addMembersAction"></a>

### addresslistVotingClientEncoding.addMembersAction(pluginAddress, members) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that adds addresses to address list</p>

**Kind**: instance method of [<code>AddresslistVotingClientEncoding</code>](#AddresslistVotingClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| members | <code>Array.&lt;string&gt;</code> | 

<a name="AddresslistVotingClientEncoding+removeMembersAction"></a>

### addresslistVotingClientEncoding.removeMembersAction(pluginAddress, members) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that removes addresses from the address list</p>

**Kind**: instance method of [<code>AddresslistVotingClientEncoding</code>](#AddresslistVotingClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| members | <code>Array.&lt;string&gt;</code> | 

<a name="AddresslistVotingClientEncoding.getPluginInstallItem"></a>

### AddresslistVotingClientEncoding.getPluginInstallItem(params, network) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>AddresslistVotingClientEncoding</code>](#AddresslistVotingClientEncoding)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type |
| --- | --- |
| params | <code>AddresslistVotingPluginInstall</code> | 
| network | <code>Networkish</code> | 

<a name="AddresslistVotingClientEstimation"></a>

## AddresslistVotingClientEstimation
<p>Estimation module the SDK Address List Client</p>

**Kind**: global class  

* [AddresslistVotingClientEstimation](#AddresslistVotingClientEstimation)
    * [.createProposal(params)](#AddresslistVotingClientEstimation+createProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.voteProposal(params)](#AddresslistVotingClientEstimation+voteProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.executeProposal(proposalId)](#AddresslistVotingClientEstimation+executeProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#AddresslistVotingClientEstimation+prepareUpdate) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="AddresslistVotingClientEstimation+createProposal"></a>

### addresslistVotingClientEstimation.createProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#AddresslistVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="AddresslistVotingClientEstimation+voteProposal"></a>

### addresslistVotingClientEstimation.voteProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of casting a vote on a proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#AddresslistVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="AddresslistVotingClientEstimation+executeProposal"></a>

### addresslistVotingClientEstimation.executeProposal(proposalId) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of executing an AddressList proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#AddresslistVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="AddresslistVotingClientEstimation+prepareUpdate"></a>

### addresslistVotingClientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#AddresslistVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>AddresslistVotingPluginPrepareUpdateParams</code> | 

<a name="AddresslistVotingClientMethods"></a>

## AddresslistVotingClientMethods
<p>Methods module the SDK Address List Client</p>

**Kind**: global class  

* [AddresslistVotingClientMethods](#AddresslistVotingClientMethods)
    * [.createProposal(params)](#AddresslistVotingClientMethods+createProposal) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
    * [.voteProposal(params)](#AddresslistVotingClientMethods+voteProposal) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
    * [.executeProposal(proposalId)](#AddresslistVotingClientMethods+executeProposal) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
    * [.prepareUpdate(params)](#AddresslistVotingClientMethods+prepareUpdate) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.canVote(params)](#AddresslistVotingClientMethods+canVote) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.canExecute(proposalId)](#AddresslistVotingClientMethods+canExecute) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getMembers(params)](#AddresslistVotingClientMethods+getMembers) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.getProposal(proposalId)](#AddresslistVotingClientMethods+getProposal) ⇒ <code>Promise.&lt;(AddresslistVotingProposal\|null)&gt;</code>
    * [.getProposals(params)](#AddresslistVotingClientMethods+getProposals) ⇒ <code>Promise.&lt;Array.&lt;AddresslistVotingProposalListItem&gt;&gt;</code>
    * [.getVotingSettings(pluginAddress, blockNumber)](#AddresslistVotingClientMethods+getVotingSettings) ⇒ <code>Promise.&lt;(VotingSettings\|null)&gt;</code>
    * [.isMember(params)](#AddresslistVotingClientMethods+isMember) ⇒

<a name="AddresslistVotingClientMethods+createProposal"></a>

### addresslistVotingClientMethods.createProposal(params) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
<p>Creates a new proposal on the given AddressList plugin contract</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="AddresslistVotingClientMethods+voteProposal"></a>

### addresslistVotingClientMethods.voteProposal(params) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
<p>Cast a vote on the given proposal using the client's wallet. Depending on the proposal settings, an affirmative vote may execute the proposal's actions on the DAO.</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="AddresslistVotingClientMethods+executeProposal"></a>

### addresslistVotingClientMethods.executeProposal(proposalId) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
<p>Executes the given proposal, provided that it has already passed</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="AddresslistVotingClientMethods+prepareUpdate"></a>

### addresslistVotingClientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepares the update of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>AddresslistVotingPluginPrepareUpdateParams</code> | 

<a name="AddresslistVotingClientMethods+canVote"></a>

### addresslistVotingClientMethods.canVote(params) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks if an user can vote in a proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CanVoteParams</code> | 

<a name="AddresslistVotingClientMethods+canExecute"></a>

### addresslistVotingClientMethods.canExecute(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="AddresslistVotingClientMethods+getMembers"></a>

### addresslistVotingClientMethods.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
<p>Returns the list of wallet addresses with signing capabilities on the plugin</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>MembersQueryParams</code> | <ul> <li>pluginAddress <ul> <li>blockNumber</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = MembersSortBy.ADDRESS</li> </ul> </li> </ul> |

<a name="AddresslistVotingClientMethods+getProposal"></a>

### addresslistVotingClientMethods.getProposal(proposalId) ⇒ <code>Promise.&lt;(AddresslistVotingProposal\|null)&gt;</code>
<p>Returns the details of the given proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>Promise.&lt;(AddresslistVotingProposal\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="AddresslistVotingClientMethods+getProposals"></a>

### addresslistVotingClientMethods.getProposals(params) ⇒ <code>Promise.&lt;Array.&lt;AddresslistVotingProposalListItem&gt;&gt;</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;AddresslistVotingProposalListItem&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>ProposalQueryParams</code> | <ul> <li>daoAddressOrEns - limit = 10 - status - skip = 0 - direction = SortDirection.ASC - sortBy = ProposalSortBy.CREATED_AT</li> </ul> |

<a name="AddresslistVotingClientMethods+getVotingSettings"></a>

### addresslistVotingClientMethods.getVotingSettings(pluginAddress, blockNumber) ⇒ <code>Promise.&lt;(VotingSettings\|null)&gt;</code>
<p>Returns the settings of a plugin given the address of the plugin instance</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <code>Promise.&lt;(VotingSettings\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="AddresslistVotingClientMethods+isMember"></a>

### addresslistVotingClientMethods.isMember(params) ⇒
<p>Checks if a given address is a member of the AddresslistVoting contract.</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#AddresslistVotingClientMethods)  
**Returns**: <p>A boolean indicating whether the address is a member or not.</p>  

| Param | Description |
| --- | --- |
| params | <p>The parameters for the isMember method.</p> |
| params.pluginAddress | <p>The address of the plugin.</p> |
| params.address | <p>The address to check.</p> |
| params.blockNumber | <p>The block number for specifying a specific block.</p> |


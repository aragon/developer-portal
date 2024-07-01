## Classes

<dl>
<dt><a href="#addresslistvotingclient">AddresslistVotingClient</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p></dd>
<dt><a href="#addresslistvotingclientdecoding">AddresslistVotingClientDecoding</a></dt>
<dd><p>Decoding module for the SDK AddressList Client</p></dd>
<dt><a href="#addresslistvotingclientencoding">AddresslistVotingClientEncoding</a></dt>
<dd><p>Encoding module for the SDK AddressList Client</p></dd>
<dt><a href="#addresslistvotingclientestimation">AddresslistVotingClientEstimation</a></dt>
<dd><p>Estimation module the SDK Address List Client</p></dd>
<dt><a href="#addresslistvotingclientmethods">AddresslistVotingClientMethods</a></dt>
<dd><p>Methods module the SDK Address List Client</p></dd>
</dl>

<a name="addresslistvotingclient"></a>

## AddresslistVotingClient
<p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p>

**Kind**: global class  
<a name="addresslistvotingclientgetplugininstallitem"></a>

### AddresslistVotingClient.getPluginInstallItem(params, [network]) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>AddresslistVotingClient</code>](#addresslistvotingclient)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>AddresslistVotingPluginInstall</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="addresslistvotingclientdecoding"></a>

## AddresslistVotingClientDecoding
<p>Decoding module for the SDK AddressList Client</p>

**Kind**: global class  

* [AddresslistVotingClientDecoding](#addresslistvotingclientdecoding)
    * [.updatePluginSettingsAction(data)](#addresslistvotingclientdecodingupdatepluginsettingsactiondata--votingsettings) ⇒ <code>VotingSettings</code>
    * [.addMembersAction(data)](#addresslistvotingclientdecodingaddmembersactiondata--arraystring) ⇒ <code>Array.&lt;string&gt;</code>
    * [.removeMembersAction(data)](#addresslistvotingclientdecodingremovemembersactiondata--arraystring) ⇒ <code>Array.&lt;string&gt;</code>
    * [.findInterface(data)](#addresslistvotingclientdecodingfindinterfacedata--interfaceparams--null) ⇒ <code>InterfaceParams</code> \| <code>null</code>

<a name="addresslistvotingclientdecodingupdatepluginsettingsaction"></a>

### addresslistVotingClientDecoding.updatePluginSettingsAction(data) ⇒ <code>VotingSettings</code>
<p>Decodes a dao metadata from an encoded update metadata action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#addresslistvotingclientdecoding)  
**Returns**: <code>VotingSettings</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="addresslistvotingclientdecodingaddmembersaction"></a>

### addresslistVotingClientDecoding.addMembersAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded add members action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#addresslistvotingclientdecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="addresslistvotingclientdecodingremovemembersaction"></a>

### addresslistVotingClientDecoding.removeMembersAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded remove members action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#addresslistvotingclientdecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="addresslistvotingclientdecodingfindinterface"></a>

### addresslistVotingClientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>AddresslistVotingClientDecoding</code>](#addresslistvotingclientdecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="addresslistvotingclientencoding"></a>

## AddresslistVotingClientEncoding
<p>Encoding module for the SDK AddressList Client</p>

**Kind**: global class  

* [AddresslistVotingClientEncoding](#addresslistvotingclientencoding)
    * _instance_
        * [.updatePluginSettingsAction(pluginAddress, params)](#addresslistvotingclientencodingupdatepluginsettingsactionpluginaddress-params--daoaction) ⇒ <code>DaoAction</code>
        * [.addMembersAction(pluginAddress, members)](#addresslistvotingclientencodingaddmembersactionpluginaddress-members--daoaction) ⇒ <code>DaoAction</code>
        * [.removeMembersAction(pluginAddress, members)](#addresslistvotingclientencodingremovemembersactionpluginaddress-members--daoaction) ⇒ <code>DaoAction</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#addresslistvotingclientencodinggetplugininstallitemparams-network--plugininstallitem) ⇒ <code>PluginInstallItem</code>

<a name="addresslistvotingclientencodingupdatepluginsettingsaction"></a>

### addresslistVotingClientEncoding.updatePluginSettingsAction(pluginAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>AddresslistVotingClientEncoding</code>](#addresslistvotingclientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| params | <code>VotingSettings</code> | 

<a name="addresslistvotingclientencodingaddmembersaction"></a>

### addresslistVotingClientEncoding.addMembersAction(pluginAddress, members) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that adds addresses to address list</p>

**Kind**: instance method of [<code>AddresslistVotingClientEncoding</code>](#addresslistvotingclientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| members | <code>Array.&lt;string&gt;</code> | 

<a name="addresslistvotingclientencodingremovemembersaction"></a>

### addresslistVotingClientEncoding.removeMembersAction(pluginAddress, members) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that removes addresses from the address list</p>

**Kind**: instance method of [<code>AddresslistVotingClientEncoding</code>](#addresslistvotingclientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| members | <code>Array.&lt;string&gt;</code> | 

<a name="addresslistvotingclientencodinggetplugininstallitem"></a>

### AddresslistVotingClientEncoding.getPluginInstallItem(params, network) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>AddresslistVotingClientEncoding</code>](#addresslistvotingclientencoding)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type |
| --- | --- |
| params | <code>AddresslistVotingPluginInstall</code> | 
| network | <code>Networkish</code> | 

<a name="addresslistvotingclientestimation"></a>

## AddresslistVotingClientEstimation
<p>Estimation module the SDK Address List Client</p>

**Kind**: global class  

* [AddresslistVotingClientEstimation](#addresslistvotingclientestimation)
    * [.createProposal(params)](#addresslistvotingclientestimationcreateproposalparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.voteProposal(params)](#addresslistvotingclientestimationvoteproposalparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.executeProposal(proposalId)](#addresslistvotingclientestimationexecuteproposalproposalid--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#addresslistvotingclientestimationprepareupdateparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="addresslistvotingclientestimationcreateproposal"></a>

### addresslistVotingClientEstimation.createProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#addresslistvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="addresslistvotingclientestimationvoteproposal"></a>

### addresslistVotingClientEstimation.voteProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of casting a vote on a proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#addresslistvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="addresslistvotingclientestimationexecuteproposal"></a>

### addresslistVotingClientEstimation.executeProposal(proposalId) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of executing an AddressList proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#addresslistvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="addresslistvotingclientestimationprepareupdate"></a>

### addresslistVotingClientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>AddresslistVotingClientEstimation</code>](#addresslistvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>AddresslistVotingPluginPrepareUpdateParams</code> | 

<a name="addresslistvotingclientmethods"></a>

## AddresslistVotingClientMethods
<p>Methods module the SDK Address List Client</p>

**Kind**: global class  

* [AddresslistVotingClientMethods](#addresslistvotingclientmethods)
    * [.createProposal(params)](#addresslistvotingclientmethodscreateproposalparams--asyncgeneratorproposalcreationstepvalue) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
    * [.voteProposal(params)](#addresslistvotingclientmethodsvoteproposalparams--asyncgeneratorvoteproposalstepvalue) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
    * [.executeProposal(proposalId)](#addresslistvotingclientmethodsexecuteproposalproposalid--asyncgeneratorexecuteproposalstepvalue) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
    * [.prepareUpdate(params)](#addresslistvotingclientmethodsprepareupdateparams--asyncgeneratorprepareupdatestepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.canVote(params)](#addresslistvotingclientmethodscanvoteparams--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.canExecute(proposalId)](#addresslistvotingclientmethodscanexecuteproposalid--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getMembers(params)](#addresslistvotingclientmethodsgetmembersparams--promisearraystring) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.getProposal(proposalId)](#addresslistvotingclientmethodsgetproposalproposalid--promiseaddresslistvotingproposalnull) ⇒ <code>Promise.&lt;(AddresslistVotingProposal\|null)&gt;</code>
    * [.getProposals(params)](#addresslistvotingclientmethodsgetproposalsparams--promisearrayaddresslistvotingproposallistitem) ⇒ <code>Promise.&lt;Array.&lt;AddresslistVotingProposalListItem&gt;&gt;</code>
    * [.getVotingSettings(pluginAddress, blockNumber)](#addresslistvotingclientmethodsgetvotingsettingspluginaddress-blocknumber--promisevotingsettingsnull) ⇒ <code>Promise.&lt;(VotingSettings\|null)&gt;</code>
    * [.isMember(params)](#addresslistvotingclientmethodsismemberparams--boolean) ⇒ <code>boolean</code>

<a name="addresslistvotingclientmethodscreateproposal"></a>

### addresslistVotingClientMethods.createProposal(params) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
<p>Creates a new proposal on the given AddressList plugin contract</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="addresslistvotingclientmethodsvoteproposal"></a>

### addresslistVotingClientMethods.voteProposal(params) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
<p>Cast a vote on the given proposal using the client's wallet. Depending on the proposal settings, an affirmative vote may execute the proposal's actions on the DAO.</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="addresslistvotingclientmethodsexecuteproposal"></a>

### addresslistVotingClientMethods.executeProposal(proposalId) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
<p>Executes the given proposal, provided that it has already passed</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="addresslistvotingclientmethodsprepareupdate"></a>

### addresslistVotingClientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepares the update of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>AddresslistVotingPluginPrepareUpdateParams</code> | 

<a name="addresslistvotingclientmethodscanvote"></a>

### addresslistVotingClientMethods.canVote(params) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks if an user can vote in a proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CanVoteParams</code> | 

<a name="addresslistvotingclientmethodscanexecute"></a>

### addresslistVotingClientMethods.canExecute(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="addresslistvotingclientmethodsgetmembers"></a>

### addresslistVotingClientMethods.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
<p>Returns the list of wallet addresses with signing capabilities on the plugin</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>MembersQueryParams</code> | <ul> <li>pluginAddress <ul> <li>blockNumber</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = MembersSortBy.ADDRESS</li> </ul> </li> </ul> |

<a name="addresslistvotingclientmethodsgetproposal"></a>

### addresslistVotingClientMethods.getProposal(proposalId) ⇒ <code>Promise.&lt;(AddresslistVotingProposal\|null)&gt;</code>
<p>Returns the details of the given proposal</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>Promise.&lt;(AddresslistVotingProposal\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="addresslistvotingclientmethodsgetproposals"></a>

### addresslistVotingClientMethods.getProposals(params) ⇒ <code>Promise.&lt;Array.&lt;AddresslistVotingProposalListItem&gt;&gt;</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;AddresslistVotingProposalListItem&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>ProposalQueryParams</code> | <ul> <li>daoAddressOrEns - limit = 10 - status - skip = 0 - direction = SortDirection.ASC - sortBy = ProposalSortBy.CREATED_AT</li> </ul> |

<a name="addresslistvotingclientmethodsgetvotingsettings"></a>

### addresslistVotingClientMethods.getVotingSettings(pluginAddress, blockNumber) ⇒ <code>Promise.&lt;(VotingSettings\|null)&gt;</code>
<p>Returns the settings of a plugin given the address of the plugin instance</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>Promise.&lt;(VotingSettings\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="addresslistvotingclientmethodsismember"></a>

### addresslistVotingClientMethods.isMember(params) ⇒ <code>boolean</code>
<p>Checks if a given address is a member of the AddresslistVoting contract.</p>

**Kind**: instance method of [<code>AddresslistVotingClientMethods</code>](#addresslistvotingclientmethods)  
**Returns**: <code>boolean</code> - A boolean indicating whether the address is a member or not.  

| Param | Description |
| --- | --- |
| params | <p>The parameters for the isMember method.</p> |
| params.pluginAddress | <p>The address of the plugin.</p> |
| params.address | <p>The address to check.</p> |
| params.blockNumber | <p>The block number for specifying a specific block.</p> |


## Classes

<dl>
<dt><a href="#multisigclient">MultisigClient</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p></dd>
<dt><a href="#multisigclientdecoding">MultisigClientDecoding</a></dt>
<dd><p>Decoding module for the SDK AddressList Client</p></dd>
<dt><a href="#multisigclientencoding">MultisigClientEncoding</a></dt>
<dd><p>Encoding module for the SDK Multisig Client</p></dd>
<dt><a href="#multisigclientestimation">MultisigClientEstimation</a></dt>
<dd><p>Estimation module the SDK Address List Client</p></dd>
<dt><a href="#multisigclientmethods">MultisigClientMethods</a></dt>
<dd><p>Methods module the SDK Address List Client</p></dd>
</dl>

<a name="multisigclient"></a>

## MultisigClient
<p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p>

**Kind**: global class  
<a name="multisigclientgetplugininstallitem"></a>

### MultisigClient.getPluginInstallItem(params, [network]) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>MultisigClient</code>](#multisigclient)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>MultisigPluginInstallParams</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="multisigclientdecoding"></a>

## MultisigClientDecoding
<p>Decoding module for the SDK AddressList Client</p>

**Kind**: global class  

* [MultisigClientDecoding](#multisigclientdecoding)
    * [.addAddressesAction(data)](#multisigclientdecodingaddaddressesactiondata--arraystring) ⇒ <code>Array.&lt;string&gt;</code>
    * [.removeAddressesAction(data)](#multisigclientdecodingremoveaddressesactiondata--arraystring) ⇒ <code>Array.&lt;string&gt;</code>
    * [.updateMultisigVotingSettings(data)](#multisigclientdecodingupdatemultisigvotingsettingsdata--multisigvotingsettings) ⇒ <code>MultisigVotingSettings</code>
    * [.findInterface(data)](#multisigclientdecodingfindinterfacedata--interfaceparams--null) ⇒ <code>InterfaceParams</code> \| <code>null</code>

<a name="multisigclientdecodingaddaddressesaction"></a>

### multisigClientDecoding.addAddressesAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded add members action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#multisigclientdecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="multisigclientdecodingremoveaddressesaction"></a>

### multisigClientDecoding.removeAddressesAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded remove members action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#multisigclientdecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="multisigclientdecodingupdatemultisigvotingsettings"></a>

### multisigClientDecoding.updateMultisigVotingSettings(data) ⇒ <code>MultisigVotingSettings</code>
<p>Decodes a list of min approvals from an encoded update min approval action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#multisigclientdecoding)  
**Returns**: <code>MultisigVotingSettings</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="multisigclientdecodingfindinterface"></a>

### multisigClientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#multisigclientdecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="multisigclientencoding"></a>

## MultisigClientEncoding
<p>Encoding module for the SDK Multisig Client</p>

**Kind**: global class  

* [MultisigClientEncoding](#multisigclientencoding)
    * _instance_
        * [.addAddressesAction(params)](#multisigclientencodingaddaddressesactionparams--arraydaoaction) ⇒ <code>Array.&lt;DaoAction&gt;</code>
        * [.removeAddressesAction(params)](#multisigclientencodingremoveaddressesactionparams--arraydaoaction) ⇒ <code>Array.&lt;DaoAction&gt;</code>
        * [.updateMultisigVotingSettings(params)](#multisigclientencodingupdatemultisigvotingsettingsparams--daoaction) ⇒ <code>DaoAction</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#multisigclientencodinggetplugininstallitemparams-network--plugininstallitem) ⇒ <code>PluginInstallItem</code>

<a name="multisigclientencodingaddaddressesaction"></a>

### multisigClientEncoding.addAddressesAction(params) ⇒ <code>Array.&lt;DaoAction&gt;</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>MultisigClientEncoding</code>](#multisigclientencoding)  
**Returns**: <code>Array.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>AddAddressesParams</code> | 

<a name="multisigclientencodingremoveaddressesaction"></a>

### multisigClientEncoding.removeAddressesAction(params) ⇒ <code>Array.&lt;DaoAction&gt;</code>
<p>Computes the parameters to be given when creating a proposal that adds addresses to address list</p>

**Kind**: instance method of [<code>MultisigClientEncoding</code>](#multisigclientencoding)  
**Returns**: <code>Array.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>RemoveAddressesParams</code> | 

<a name="multisigclientencodingupdatemultisigvotingsettings"></a>

### multisigClientEncoding.updateMultisigVotingSettings(params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal updates multisig settings</p>

**Kind**: instance method of [<code>MultisigClientEncoding</code>](#multisigclientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| params | <code>UpdateMultisigVotingSettingsParams</code> | 

<a name="multisigclientencodinggetplugininstallitem"></a>

### MultisigClientEncoding.getPluginInstallItem(params, network) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>MultisigClientEncoding</code>](#multisigclientencoding)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginInstallParams</code> | 
| network | <code>Networkish</code> | 

<a name="multisigclientestimation"></a>

## MultisigClientEstimation
<p>Estimation module the SDK Address List Client</p>

**Kind**: global class  

* [MultisigClientEstimation](#multisigclientestimation)
    * [.createProposal(params)](#multisigclientestimationcreateproposalparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.approveProposal(params)](#multisigclientestimationapproveproposalparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.executeProposal(proposalId)](#multisigclientestimationexecuteproposalproposalid--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#multisigclientestimationprepareupdateparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="multisigclientestimationcreateproposal"></a>

### multisigClientEstimation.createProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#multisigclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMultisigProposalParams</code> | 

<a name="multisigclientestimationapproveproposal"></a>

### multisigClientEstimation.approveProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of approving a proposal</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#multisigclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ApproveMultisigProposalParams</code> | 

<a name="multisigclientestimationexecuteproposal"></a>

### multisigClientEstimation.executeProposal(proposalId) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of executing a proposal</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#multisigclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="multisigclientestimationprepareupdate"></a>

### multisigClientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#multisigclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginPrepareUpdateParams</code> | 

<a name="multisigclientmethods"></a>

## MultisigClientMethods
<p>Methods module the SDK Address List Client</p>

**Kind**: global class  

* [MultisigClientMethods](#multisigclientmethods)
    * [.createProposal(params)](#multisigclientmethodscreateproposalparams--asyncgeneratorproposalcreationstepvalue) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
    * [.pinMetadata(params)](#multisigclientmethodspinmetadataparams--promisestring) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.approveProposal(params)](#multisigclientmethodsapproveproposalparams--asyncgeneratorapproveproposalstepvalue) ⇒ <code>AsyncGenerator.&lt;ApproveProposalStepValue&gt;</code>
    * [.executeProposal(proposalId)](#multisigclientmethodsexecuteproposalproposalid--asyncgeneratorexecutemultisigproposalstepvalue) ⇒ <code>AsyncGenerator.&lt;ExecuteMultisigProposalStepValue&gt;</code>
    * [.prepareInstallation(params)](#multisigclientmethodsprepareinstallationparams--asyncgeneratorprepareinstallationstepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
    * [.prepareUpdate(params)](#multisigclientmethodsprepareupdateparams--asyncgeneratorprepareupdatestepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.canApprove(addressOrEns)](#multisigclientmethodscanapproveaddressorens--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.canExecute(proposalId)](#multisigclientmethodscanexecuteproposalid--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getVotingSettings(addressOrEns, blockNumber)](#multisigclientmethodsgetvotingsettingsaddressorens-blocknumber--promisemultisigvotingsettings) ⇒ <code>Promise.&lt;MultisigVotingSettings&gt;</code>
    * [.getMembers(params)](#multisigclientmethodsgetmembersparams--promisearraystring) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.getProposal(proposalId)](#multisigclientmethodsgetproposalproposalid--promisemultisigproposalnull) ⇒ <code>Promise.&lt;(MultisigProposal\|null)&gt;</code>
    * [.getProposals(params)](#multisigclientmethodsgetproposalsparams--promisearraymultisigproposallistitem) ⇒ <code>Promise.&lt;Array.&lt;MultisigProposalListItem&gt;&gt;</code>
    * [.isMember(params)](#multisigclientmethodsismemberparams--boolean) ⇒ <code>boolean</code>

<a name="multisigclientmethodscreateproposal"></a>

### multisigClientMethods.createProposal(params) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
<p>Creates a new proposal on the given multisig plugin contract</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMultisigProposalParams</code> | 

<a name="multisigclientmethodspinmetadata"></a>

### multisigClientMethods.pinMetadata(params) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Pins a metadata object into IPFS and retruns the generated hash</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ProposalMetadata</code> | 

<a name="multisigclientmethodsapproveproposal"></a>

### multisigClientMethods.approveProposal(params) ⇒ <code>AsyncGenerator.&lt;ApproveProposalStepValue&gt;</code>
<p>Allow a wallet in the multisig give approval to a proposal</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;ApproveProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ApproveMultisigProposalParams</code> | 

<a name="multisigclientmethodsexecuteproposal"></a>

### multisigClientMethods.executeProposal(proposalId) ⇒ <code>AsyncGenerator.&lt;ExecuteMultisigProposalStepValue&gt;</code>
<p>Allow a wallet in the multisig give approval to a proposal</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;ExecuteMultisigProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="multisigclientmethodsprepareinstallation"></a>

### multisigClientMethods.prepareInstallation(params) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
<p>Prepares the installation of a multisig plugin in a given dao</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginPrepareInstallationParams</code> | 

<a name="multisigclientmethodsprepareupdate"></a>

### multisigClientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepares the update of a multisig plugin in a given dao</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginPrepareUpdateParams</code> | 

<a name="multisigclientmethodscanapprove"></a>

### multisigClientMethods.canApprove(addressOrEns) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be approved by the given address</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| addressOrEns | <code>string</code> | 

<a name="multisigclientmethodscanexecute"></a>

### multisigClientMethods.canExecute(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="multisigclientmethodsgetvotingsettings"></a>

### multisigClientMethods.getVotingSettings(addressOrEns, blockNumber) ⇒ <code>Promise.&lt;MultisigVotingSettings&gt;</code>
<p>Returns the voting settings</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;MultisigVotingSettings&gt;</code>  

| Param | Type |
| --- | --- |
| addressOrEns | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="multisigclientmethodsgetmembers"></a>

### multisigClientMethods.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
<p>returns the members of the multisig</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>MembersQueryParams</code> | <ul> <li>pluginAddress <ul> <li>blockNumber</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = MembersSortBy.ADDRESS</li> </ul> </li> </ul> |

<a name="multisigclientmethodsgetproposal"></a>

### multisigClientMethods.getProposal(proposalId) ⇒ <code>Promise.&lt;(MultisigProposal\|null)&gt;</code>
<p>Returns the details of the given proposal</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;(MultisigProposal\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="multisigclientmethodsgetproposals"></a>

### multisigClientMethods.getProposals(params) ⇒ <code>Promise.&lt;Array.&lt;MultisigProposalListItem&gt;&gt;</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;MultisigProposalListItem&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>ProposalQueryParams</code> | <ul> <li>daoAddressOrEns - limit = 10 - status - skip = 0 - direction = SortDirection.ASC - sortBy = ProposalSortBy.CREATED_AT</li> </ul> |

<a name="multisigclientmethodsismember"></a>

### multisigClientMethods.isMember(params) ⇒ <code>boolean</code>
<p>Checks if a given address is a member of the tokenVoting contract.</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#multisigclientmethods)  
**Returns**: <code>boolean</code> - A boolean indicating whether the address is a member or not.  

| Param | Description |
| --- | --- |
| params | <p>The parameters for the isMember method.</p> |
| params.pluginAddress | <p>The address of the plugin.</p> |
| params.address | <p>The address to check.</p> |
| params.blockNumber | <p>The block number for specifying a specific block.</p> |


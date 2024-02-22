## Classes

<dl>
<dt><a href="#MultisigClient">MultisigClient</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p></dd>
<dt><a href="#MultisigClientDecoding">MultisigClientDecoding</a></dt>
<dd><p>Decoding module for the SDK AddressList Client</p></dd>
<dt><a href="#MultisigClientEncoding">MultisigClientEncoding</a></dt>
<dd><p>Encoding module for the SDK Multisig Client</p></dd>
<dt><a href="#MultisigClientEstimation">MultisigClientEstimation</a></dt>
<dd><p>Estimation module the SDK Address List Client</p></dd>
<dt><a href="#MultisigClientMethods">MultisigClientMethods</a></dt>
<dd><p>Methods module the SDK Address List Client</p></dd>
</dl>

<a name="MultisigClient"></a>

## MultisigClient
<p>Provider a generic client with high level methods to manage and interact an Address List Voting plugin installed in a DAO</p>

**Kind**: global class  
<a name="MultisigClient.getPluginInstallItem"></a>

### MultisigClient.getPluginInstallItem(params, [network]) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>MultisigClient</code>](#MultisigClient)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>MultisigPluginInstallParams</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="MultisigClientDecoding"></a>

## MultisigClientDecoding
<p>Decoding module for the SDK AddressList Client</p>

**Kind**: global class  

* [MultisigClientDecoding](#MultisigClientDecoding)
    * [.addAddressesAction(data)](#MultisigClientDecoding+addAddressesAction) ⇒ <code>Array.&lt;string&gt;</code>
    * [.removeAddressesAction(data)](#MultisigClientDecoding+removeAddressesAction) ⇒ <code>Array.&lt;string&gt;</code>
    * [.updateMultisigVotingSettings(data)](#MultisigClientDecoding+updateMultisigVotingSettings) ⇒ <code>MultisigVotingSettings</code>
    * [.findInterface(data)](#MultisigClientDecoding+findInterface) ⇒ <code>InterfaceParams</code> \| <code>null</code>

<a name="MultisigClientDecoding+addAddressesAction"></a>

### multisigClientDecoding.addAddressesAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded add members action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#MultisigClientDecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="MultisigClientDecoding+removeAddressesAction"></a>

### multisigClientDecoding.removeAddressesAction(data) ⇒ <code>Array.&lt;string&gt;</code>
<p>Decodes a list of addresses from an encoded remove members action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#MultisigClientDecoding)  
**Returns**: <code>Array.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="MultisigClientDecoding+updateMultisigVotingSettings"></a>

### multisigClientDecoding.updateMultisigVotingSettings(data) ⇒ <code>MultisigVotingSettings</code>
<p>Decodes a list of min approvals from an encoded update min approval action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#MultisigClientDecoding)  
**Returns**: <code>MultisigVotingSettings</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="MultisigClientDecoding+findInterface"></a>

### multisigClientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>MultisigClientDecoding</code>](#MultisigClientDecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="MultisigClientEncoding"></a>

## MultisigClientEncoding
<p>Encoding module for the SDK Multisig Client</p>

**Kind**: global class  

* [MultisigClientEncoding](#MultisigClientEncoding)
    * _instance_
        * [.addAddressesAction(params)](#MultisigClientEncoding+addAddressesAction) ⇒ <code>Array.&lt;DaoAction&gt;</code>
        * [.removeAddressesAction(params)](#MultisigClientEncoding+removeAddressesAction) ⇒ <code>Array.&lt;DaoAction&gt;</code>
        * [.updateMultisigVotingSettings(params)](#MultisigClientEncoding+updateMultisigVotingSettings) ⇒ <code>DaoAction</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#MultisigClientEncoding.getPluginInstallItem) ⇒ <code>PluginInstallItem</code>

<a name="MultisigClientEncoding+addAddressesAction"></a>

### multisigClientEncoding.addAddressesAction(params) ⇒ <code>Array.&lt;DaoAction&gt;</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>MultisigClientEncoding</code>](#MultisigClientEncoding)  
**Returns**: <code>Array.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>AddAddressesParams</code> | 

<a name="MultisigClientEncoding+removeAddressesAction"></a>

### multisigClientEncoding.removeAddressesAction(params) ⇒ <code>Array.&lt;DaoAction&gt;</code>
<p>Computes the parameters to be given when creating a proposal that adds addresses to address list</p>

**Kind**: instance method of [<code>MultisigClientEncoding</code>](#MultisigClientEncoding)  
**Returns**: <code>Array.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>RemoveAddressesParams</code> | 

<a name="MultisigClientEncoding+updateMultisigVotingSettings"></a>

### multisigClientEncoding.updateMultisigVotingSettings(params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal updates multisig settings</p>

**Kind**: instance method of [<code>MultisigClientEncoding</code>](#MultisigClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| params | <code>UpdateMultisigVotingSettingsParams</code> | 

<a name="MultisigClientEncoding.getPluginInstallItem"></a>

### MultisigClientEncoding.getPluginInstallItem(params, network) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>MultisigClientEncoding</code>](#MultisigClientEncoding)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginInstallParams</code> | 
| network | <code>Networkish</code> | 

<a name="MultisigClientEstimation"></a>

## MultisigClientEstimation
<p>Estimation module the SDK Address List Client</p>

**Kind**: global class  

* [MultisigClientEstimation](#MultisigClientEstimation)
    * [.createProposal(params)](#MultisigClientEstimation+createProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.approveProposal(params)](#MultisigClientEstimation+approveProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.executeProposal(proposalId)](#MultisigClientEstimation+executeProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#MultisigClientEstimation+prepareUpdate) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="MultisigClientEstimation+createProposal"></a>

### multisigClientEstimation.createProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#MultisigClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMultisigProposalParams</code> | 

<a name="MultisigClientEstimation+approveProposal"></a>

### multisigClientEstimation.approveProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of approving a proposal</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#MultisigClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ApproveMultisigProposalParams</code> | 

<a name="MultisigClientEstimation+executeProposal"></a>

### multisigClientEstimation.executeProposal(proposalId) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of executing a proposal</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#MultisigClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="MultisigClientEstimation+prepareUpdate"></a>

### multisigClientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>MultisigClientEstimation</code>](#MultisigClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginPrepareUpdateParams</code> | 

<a name="MultisigClientMethods"></a>

## MultisigClientMethods
<p>Methods module the SDK Address List Client</p>

**Kind**: global class  

* [MultisigClientMethods](#MultisigClientMethods)
    * [.createProposal(params)](#MultisigClientMethods+createProposal) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
    * [.pinMetadata(params)](#MultisigClientMethods+pinMetadata) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.approveProposal(params)](#MultisigClientMethods+approveProposal) ⇒ <code>AsyncGenerator.&lt;ApproveProposalStepValue&gt;</code>
    * [.executeProposal(proposalId)](#MultisigClientMethods+executeProposal) ⇒ <code>AsyncGenerator.&lt;ExecuteMultisigProposalStepValue&gt;</code>
    * [.prepareInstallation(params)](#MultisigClientMethods+prepareInstallation) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
    * [.prepareUpdate(params)](#MultisigClientMethods+prepareUpdate) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.canApprove(addressOrEns)](#MultisigClientMethods+canApprove) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.canExecute(proposalId)](#MultisigClientMethods+canExecute) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getVotingSettings(addressOrEns, blockNumber)](#MultisigClientMethods+getVotingSettings) ⇒ <code>Promise.&lt;MultisigVotingSettings&gt;</code>
    * [.getMembers(params)](#MultisigClientMethods+getMembers) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.getProposal(proposalId)](#MultisigClientMethods+getProposal) ⇒ <code>Promise.&lt;(MultisigProposal\|null)&gt;</code>
    * [.getProposals(params)](#MultisigClientMethods+getProposals) ⇒ <code>Promise.&lt;Array.&lt;MultisigProposalListItem&gt;&gt;</code>
    * [.isMember(params)](#MultisigClientMethods+isMember) ⇒

<a name="MultisigClientMethods+createProposal"></a>

### multisigClientMethods.createProposal(params) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
<p>Creates a new proposal on the given multisig plugin contract</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMultisigProposalParams</code> | 

<a name="MultisigClientMethods+pinMetadata"></a>

### multisigClientMethods.pinMetadata(params) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Pins a metadata object into IPFS and retruns the generated hash</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ProposalMetadata</code> | 

<a name="MultisigClientMethods+approveProposal"></a>

### multisigClientMethods.approveProposal(params) ⇒ <code>AsyncGenerator.&lt;ApproveProposalStepValue&gt;</code>
<p>Allow a wallet in the multisig give approval to a proposal</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;ApproveProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ApproveMultisigProposalParams</code> | 

<a name="MultisigClientMethods+executeProposal"></a>

### multisigClientMethods.executeProposal(proposalId) ⇒ <code>AsyncGenerator.&lt;ExecuteMultisigProposalStepValue&gt;</code>
<p>Allow a wallet in the multisig give approval to a proposal</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;ExecuteMultisigProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="MultisigClientMethods+prepareInstallation"></a>

### multisigClientMethods.prepareInstallation(params) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
<p>Prepares the installation of a multisig plugin in a given dao</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginPrepareInstallationParams</code> | 

<a name="MultisigClientMethods+prepareUpdate"></a>

### multisigClientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepares the update of a multisig plugin in a given dao</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>MultisigPluginPrepareUpdateParams</code> | 

<a name="MultisigClientMethods+canApprove"></a>

### multisigClientMethods.canApprove(addressOrEns) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be approved by the given address</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| addressOrEns | <code>string</code> | 

<a name="MultisigClientMethods+canExecute"></a>

### multisigClientMethods.canExecute(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="MultisigClientMethods+getVotingSettings"></a>

### multisigClientMethods.getVotingSettings(addressOrEns, blockNumber) ⇒ <code>Promise.&lt;MultisigVotingSettings&gt;</code>
<p>Returns the voting settings</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;MultisigVotingSettings&gt;</code>  

| Param | Type |
| --- | --- |
| addressOrEns | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="MultisigClientMethods+getMembers"></a>

### multisigClientMethods.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
<p>returns the members of the multisig</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>MembersQueryParams</code> | <ul> <li>pluginAddress <ul> <li>blockNumber</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = MembersSortBy.ADDRESS</li> </ul> </li> </ul> |

<a name="MultisigClientMethods+getProposal"></a>

### multisigClientMethods.getProposal(proposalId) ⇒ <code>Promise.&lt;(MultisigProposal\|null)&gt;</code>
<p>Returns the details of the given proposal</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;(MultisigProposal\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="MultisigClientMethods+getProposals"></a>

### multisigClientMethods.getProposals(params) ⇒ <code>Promise.&lt;Array.&lt;MultisigProposalListItem&gt;&gt;</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;MultisigProposalListItem&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>ProposalQueryParams</code> | <ul> <li>daoAddressOrEns - limit = 10 - status - skip = 0 - direction = SortDirection.ASC - sortBy = ProposalSortBy.CREATED_AT</li> </ul> |

<a name="MultisigClientMethods+isMember"></a>

### multisigClientMethods.isMember(params) ⇒
<p>Checks if a given address is a member of the tokenVoting contract.</p>

**Kind**: instance method of [<code>MultisigClientMethods</code>](#MultisigClientMethods)  
**Returns**: <p>A boolean indicating whether the address is a member or not.</p>  

| Param | Description |
| --- | --- |
| params | <p>The parameters for the isMember method.</p> |
| params.pluginAddress | <p>The address of the plugin.</p> |
| params.address | <p>The address to check.</p> |
| params.blockNumber | <p>The block number for specifying a specific block.</p> |


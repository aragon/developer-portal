## Classes

<dl>
<dt><a href="#tokenvotingclient">TokenVotingClient</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact a Token Voting plugin installed in a DAO</p></dd>
<dt><a href="#tokenvotingclientdecoding">TokenVotingClientDecoding</a></dt>
<dd><p>Decoding module the SDK TokenVoting Client</p></dd>
<dt><a href="#tokenvotingclientencoding">TokenVotingClientEncoding</a></dt>
<dd><p>Encoding module the SDK TokenVoting Client</p></dd>
<dt><a href="#tokenvotingclientestimation">TokenVotingClientEstimation</a></dt>
<dd><p>Estimation module the SDK TokenVoting Client</p></dd>
<dt><a href="#tokenvotingclientmethods">TokenVotingClientMethods</a></dt>
<dd><p>Methods module the SDK TokenVoting Client</p></dd>
</dl>

<a name="tokenvotingclient"></a>

## TokenVotingClient
<p>Provider a generic client with high level methods to manage and interact a Token Voting plugin installed in a DAO</p>

**Kind**: global class  

* [TokenVotingClient](#tokenvotingclient)
    * [.getPluginInstallItem(params, [network])](#tokenvotingclientgetplugininstallitemparams-network--plugininstallitem) ⇒ <code>PluginInstallItem</code>
    * [.TokenVotingClientMethods#createProposal(params)](#tokenvotingclienttokenvotingclientmethodscreateproposalparams--asyncgeneratorproposalcreationstepvalue) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
    * [.TokenVotingClientMethods#voteProposal(params, vote)](#tokenvotingclienttokenvotingclientmethodsvoteproposalparams-vote--asyncgeneratorvoteproposalstepvalue) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
    * [.TokenVotingClientMethods#executeProposal(proposalId)](#tokenvotingclienttokenvotingclientmethodsexecuteproposalproposalid--asyncgeneratorexecuteproposalstepvalue) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
    * [.TokenVotingClientMethods#getProposal(proposalId)](#tokenvotingclienttokenvotingclientmethodsgetproposalproposalid--promisetokenvotingproposal) ⇒ <code>Promise.&lt;TokenVotingProposal&gt;</code>
    * [.TokenVotingClientMethods#getProposals(params)](#tokenvotingclienttokenvotingclientmethodsgetproposalsparams--promisearraytokenvotingproposallistitem) ⇒ <code>Promise.&lt;Array.&lt;TokenVotingProposalListItem&gt;&gt;</code>
    * [.TokenVotingClientMethods#getVotingSettings(pluginAddress, blockNumber)](#tokenvotingclienttokenvotingclientmethodsgetvotingsettingspluginaddress-blocknumber--promisevotingsettings) ⇒ <code>Promise.&lt;VotingSettings&gt;</code>
    * [.TokenVotingClientMethods#getToken(pluginAddress)](#tokenvotingclienttokenvotingclientmethodsgettokenpluginaddress--promiseerc20tokendetailsnull) ⇒ <code>Promise.&lt;(Erc20TokenDetails\|null)&gt;</code>

<a name="tokenvotingclientgetplugininstallitem"></a>

### TokenVotingClient.getPluginInstallItem(params, [network]) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>TokenVotingPluginInstall</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="tokenvotingclienttokenvotingclientmethodscreateproposal"></a>

### TokenVotingClient.TokenVotingClientMethods#createProposal(params) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
<p>Creates a new proposal on the given TokenVoting plugin contract</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="tokenvotingclienttokenvotingclientmethodsvoteproposal"></a>

### TokenVotingClient.TokenVotingClientMethods#voteProposal(params, vote) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
<p>Cast a vote on the given proposal using the client's wallet. Depending on the proposal settings, an affirmative vote may execute the proposal's actions on the DAO.</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 
| vote | <code>VoteValues</code> | 

<a name="tokenvotingclienttokenvotingclientmethodsexecuteproposal"></a>

### TokenVotingClient.TokenVotingClientMethods#executeProposal(proposalId) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
<p>Executes the given proposal, provided that it has already passed</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="tokenvotingclienttokenvotingclientmethodsgetproposal"></a>

### TokenVotingClient.TokenVotingClientMethods#getProposal(proposalId) ⇒ <code>Promise.&lt;TokenVotingProposal&gt;</code>
<p>Returns the details of the given proposal</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>Promise.&lt;TokenVotingProposal&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="tokenvotingclienttokenvotingclientmethodsgetproposals"></a>

### TokenVotingClient.TokenVotingClientMethods#getProposals(params) ⇒ <code>Promise.&lt;Array.&lt;TokenVotingProposalListItem&gt;&gt;</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>Promise.&lt;Array.&lt;TokenVotingProposalListItem&gt;&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ProposalQueryParams</code> | 

<a name="tokenvotingclienttokenvotingclientmethodsgetvotingsettings"></a>

### TokenVotingClient.TokenVotingClientMethods#getVotingSettings(pluginAddress, blockNumber) ⇒ <code>Promise.&lt;VotingSettings&gt;</code>
<p>Returns the settings of a plugin given the address of the plugin instance</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>Promise.&lt;VotingSettings&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="tokenvotingclienttokenvotingclientmethodsgettoken"></a>

### TokenVotingClient.TokenVotingClientMethods#getToken(pluginAddress) ⇒ <code>Promise.&lt;(Erc20TokenDetails\|null)&gt;</code>
<p>Returns the details of the token used in a specific plugin instance</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#tokenvotingclient)  
**Returns**: <code>Promise.&lt;(Erc20TokenDetails\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 

<a name="tokenvotingclientdecoding"></a>

## TokenVotingClientDecoding
<p>Decoding module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientDecoding](#tokenvotingclientdecoding)
    * [.updatePluginSettingsAction(data)](#tokenvotingclientdecodingupdatepluginsettingsactiondata--votingsettings) ⇒ <code>VotingSettings</code>
    * [.mintTokenAction(data)](#tokenvotingclientdecodingminttokenactiondata--minttokenparams) ⇒ <code>MintTokenParams</code>
    * [.findInterface(data)](#tokenvotingclientdecodingfindinterfacedata--interfaceparams--null) ⇒ <code>InterfaceParams</code> \| <code>null</code>

<a name="tokenvotingclientdecodingupdatepluginsettingsaction"></a>

### tokenVotingClientDecoding.updatePluginSettingsAction(data) ⇒ <code>VotingSettings</code>
<p>Decodes a dao metadata from an encoded update metadata action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#tokenvotingclientdecoding)  
**Returns**: <code>VotingSettings</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="tokenvotingclientdecodingminttokenaction"></a>

### tokenVotingClientDecoding.mintTokenAction(data) ⇒ <code>MintTokenParams</code>
<p>Decodes the mint token params from an encoded mint token action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#tokenvotingclientdecoding)  
**Returns**: <code>MintTokenParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="tokenvotingclientdecodingfindinterface"></a>

### tokenVotingClientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#tokenvotingclientdecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="tokenvotingclientencoding"></a>

## TokenVotingClientEncoding
<p>Encoding module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientEncoding](#tokenvotingclientencoding)
    * _instance_
        * [.updatePluginSettingsAction(pluginAddress, params)](#tokenvotingclientencodingupdatepluginsettingsactionpluginaddress-params--daoaction) ⇒ <code>DaoAction</code>
        * [.mintTokenAction(minterAddress, params)](#tokenvotingclientencodingminttokenactionminteraddress-params--daoaction) ⇒ <code>DaoAction</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#tokenvotingclientencodinggetplugininstallitemparams-network--plugininstallitem) ⇒ <code>PluginInstallItem</code>

<a name="tokenvotingclientencodingupdatepluginsettingsaction"></a>

### tokenVotingClientEncoding.updatePluginSettingsAction(pluginAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>TokenVotingClientEncoding</code>](#tokenvotingclientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| params | <code>VotingSettings</code> | 

<a name="tokenvotingclientencodingminttokenaction"></a>

### tokenVotingClientEncoding.mintTokenAction(minterAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that mints an amount of ERC-20 tokens to an address</p>

**Kind**: instance method of [<code>TokenVotingClientEncoding</code>](#tokenvotingclientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| minterAddress | <code>string</code> | 
| params | <code>MintTokenParams</code> | 

<a name="tokenvotingclientencodinggetplugininstallitem"></a>

### TokenVotingClientEncoding.getPluginInstallItem(params, network) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>TokenVotingClientEncoding</code>](#tokenvotingclientencoding)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginInstall</code> | 
| network | <code>Networkish</code> | 

<a name="tokenvotingclientestimation"></a>

## TokenVotingClientEstimation
<p>Estimation module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientEstimation](#tokenvotingclientestimation)
    * [.createProposal(params)](#tokenvotingclientestimationcreateproposalparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.voteProposal(params)](#tokenvotingclientestimationvoteproposalparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.executeProposal(proposalId)](#tokenvotingclientestimationexecuteproposalproposalid--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.delegateTokens(params)](#tokenvotingclientestimationdelegatetokensparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.undelegateTokens(tokenAddress)](#tokenvotingclientestimationundelegatetokenstokenaddress--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#tokenvotingclientestimationprepareupdateparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="tokenvotingclientestimationcreateproposal"></a>

### tokenVotingClientEstimation.createProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#tokenvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="tokenvotingclientestimationvoteproposal"></a>

### tokenVotingClientEstimation.voteProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of casting a vote on a proposal</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#tokenvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="tokenvotingclientestimationexecuteproposal"></a>

### tokenVotingClientEstimation.executeProposal(proposalId) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of executing a TokenVoting proposal</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#tokenvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="tokenvotingclientestimationdelegatetokens"></a>

### tokenVotingClientEstimation.delegateTokens(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of delegating voting power to a delegatee</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#tokenvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DelegateTokensParams</code> | 

<a name="tokenvotingclientestimationundelegatetokens"></a>

### tokenVotingClientEstimation.undelegateTokens(tokenAddress) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of undelegating voting power</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#tokenvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="tokenvotingclientestimationprepareupdate"></a>

### tokenVotingClientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#tokenvotingclientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareUpdateParams</code> | 

<a name="tokenvotingclientmethods"></a>

## TokenVotingClientMethods
<p>Methods module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientMethods](#tokenvotingclientmethods)
    * [.prepareInstallation(params)](#tokenvotingclientmethodsprepareinstallationparams--asyncgeneratorprepareinstallationstepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
    * [.prepareUpdate(params)](#tokenvotingclientmethodsprepareupdateparams--asyncgeneratorprepareupdatestepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.delegateTokens(params)](#tokenvotingclientmethodsdelegatetokensparams--asyncgeneratordelegatetokensstepvalue) ⇒ <code>AsyncGenerator.&lt;DelegateTokensStepValue&gt;</code>
    * [.undelegateTokens(tokenAddress)](#tokenvotingclientmethodsundelegatetokenstokenaddress--asyncgeneratorundelegatetokensstepvalue) ⇒ <code>AsyncGenerator.&lt;UndelegateTokensStepValue&gt;</code>
    * [.getDelegatee(tokenAddress)](#tokenvotingclientmethodsgetdelegateetokenaddress--promisestringnull) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
    * [.canVote(params)](#tokenvotingclientmethodscanvoteparams--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.canExecute(proposalId)](#tokenvotingclientmethodscanexecuteproposalid--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getMembers(params)](#tokenvotingclientmethodsgetmembersparams--promisearraystring) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.isTokenVotingCompatibleToken(tokenAddress)](#tokenvotingclientmethodsistokenvotingcompatibletokentokenaddress--promisetokenvotingtokencompatibility) ⇒ <code>Promise.&lt;TokenVotingTokenCompatibility&gt;</code>
    * [.isMember(params)](#tokenvotingclientmethodsismemberparams--boolean) ⇒ <code>boolean</code>

<a name="tokenvotingclientmethodsprepareinstallation"></a>

### tokenVotingClientMethods.prepareInstallation(params) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
<p>Prepares the installation of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareInstallationParams</code> | 

<a name="tokenvotingclientmethodsprepareupdate"></a>

### tokenVotingClientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepares the update of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareUpdateParams</code> | 

<a name="tokenvotingclientmethodsdelegatetokens"></a>

### tokenVotingClientMethods.delegateTokens(params) ⇒ <code>AsyncGenerator.&lt;DelegateTokensStepValue&gt;</code>
<p>Delegates all the signer's voting power to a delegatee</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;DelegateTokensStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DelegateTokensParams</code> | 

<a name="tokenvotingclientmethodsundelegatetokens"></a>

### tokenVotingClientMethods.undelegateTokens(tokenAddress) ⇒ <code>AsyncGenerator.&lt;UndelegateTokensStepValue&gt;</code>
<p>Delegates all the signer's tokens back to itself</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>AsyncGenerator.&lt;UndelegateTokensStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="tokenvotingclientmethodsgetdelegatee"></a>

### tokenVotingClientMethods.getDelegatee(tokenAddress) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
<p>Retrieves the current signer's delegatee for the given token</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>Promise.&lt;(string\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="tokenvotingclientmethodscanvote"></a>

### tokenVotingClientMethods.canVote(params) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks if an user can vote in a proposal</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CanVoteParams</code> | 

<a name="tokenvotingclientmethodscanexecute"></a>

### tokenVotingClientMethods.canExecute(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="tokenvotingclientmethodsgetmembers"></a>

### tokenVotingClientMethods.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
<p>Returns the list of wallet addresses holding tokens from the underlying Token contract used by the plugin</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>MembersQueryParams</code> | <ul> <li>pluginAddress <ul> <li>blockNumber</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = MembersSortBy.ADDRESS</li> </ul> </li> </ul> |

<a name="tokenvotingclientmethodsistokenvotingcompatibletoken"></a>

### tokenVotingClientMethods.isTokenVotingCompatibleToken(tokenAddress) ⇒ <code>Promise.&lt;TokenVotingTokenCompatibility&gt;</code>
<p>Checks if the given token is compatible with the TokenVoting plugin</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>Promise.&lt;TokenVotingTokenCompatibility&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="tokenvotingclientmethodsismember"></a>

### tokenVotingClientMethods.isMember(params) ⇒ <code>boolean</code>
<p>Checks if a given address is a member of the tokenVoting contract.</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#tokenvotingclientmethods)  
**Returns**: <code>boolean</code> - A boolean indicating whether the address is a member or not.  

| Param | Description |
| --- | --- |
| params | <p>The parameters for the isMember method.</p> |
| params.pluginAddress | <p>The address of the plugin.</p> |
| params.address | <p>The address to check.</p> |
| params.blockNumber | <p>The block number for specifying a specific block.</p> |


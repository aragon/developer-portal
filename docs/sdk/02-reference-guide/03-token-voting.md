## Classes

<dl>
<dt><a href="#TokenVotingClient">TokenVotingClient</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact a Token Voting plugin installed in a DAO</p></dd>
<dt><a href="#TokenVotingClientDecoding">TokenVotingClientDecoding</a></dt>
<dd><p>Decoding module the SDK TokenVoting Client</p></dd>
<dt><a href="#TokenVotingClientEncoding">TokenVotingClientEncoding</a></dt>
<dd><p>Encoding module the SDK TokenVoting Client</p></dd>
<dt><a href="#TokenVotingClientEstimation">TokenVotingClientEstimation</a></dt>
<dd><p>Estimation module the SDK TokenVoting Client</p></dd>
<dt><a href="#TokenVotingClientMethods">TokenVotingClientMethods</a></dt>
<dd><p>Methods module the SDK TokenVoting Client</p></dd>
</dl>

<a name="TokenVotingClient"></a>

## TokenVotingClient
<p>Provider a generic client with high level methods to manage and interact a Token Voting plugin installed in a DAO</p>

**Kind**: global class  

* [TokenVotingClient](#TokenVotingClient)
    * [.getPluginInstallItem(params, [network])](#TokenVotingClient.getPluginInstallItem) ⇒ <code>PluginInstallItem</code>
    * [.TokenVotingClientMethods#createProposal(params)](#TokenVotingClient.TokenVotingClientMethods+createProposal) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
    * [.TokenVotingClientMethods#voteProposal(params, vote)](#TokenVotingClient.TokenVotingClientMethods+voteProposal) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
    * [.TokenVotingClientMethods#executeProposal(proposalId)](#TokenVotingClient.TokenVotingClientMethods+executeProposal) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
    * [.TokenVotingClientMethods#getProposal(proposalId)](#TokenVotingClient.TokenVotingClientMethods+getProposal) ⇒ <code>Promise.&lt;TokenVotingProposal&gt;</code>
    * [.TokenVotingClientMethods#getProposals(params)](#TokenVotingClient.TokenVotingClientMethods+getProposals) ⇒ <code>Promise.&lt;Array.&lt;TokenVotingProposalListItem&gt;&gt;</code>
    * [.TokenVotingClientMethods#getVotingSettings(pluginAddress, blockNumber)](#TokenVotingClient.TokenVotingClientMethods+getVotingSettings) ⇒ <code>Promise.&lt;VotingSettings&gt;</code>
    * [.TokenVotingClientMethods#getToken(pluginAddress)](#TokenVotingClient.TokenVotingClientMethods+getToken) ⇒ <code>Promise.&lt;(Erc20TokenDetails\|null)&gt;</code>

<a name="TokenVotingClient.getPluginInstallItem"></a>

### TokenVotingClient.getPluginInstallItem(params, [network]) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>TokenVotingPluginInstall</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+createProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#createProposal(params) ⇒ <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>
<p>Creates a new proposal on the given TokenVoting plugin contract</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>AsyncGenerator.&lt;ProposalCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+voteProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#voteProposal(params, vote) ⇒ <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>
<p>Cast a vote on the given proposal using the client's wallet. Depending on the proposal settings, an affirmative vote may execute the proposal's actions on the DAO.</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>AsyncGenerator.&lt;VoteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 
| vote | <code>VoteValues</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+executeProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#executeProposal(proposalId) ⇒ <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>
<p>Executes the given proposal, provided that it has already passed</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>AsyncGenerator.&lt;ExecuteProposalStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#getProposal(proposalId) ⇒ <code>Promise.&lt;TokenVotingProposal&gt;</code>
<p>Returns the details of the given proposal</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>Promise.&lt;TokenVotingProposal&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getProposals"></a>

### TokenVotingClient.TokenVotingClientMethods#getProposals(params) ⇒ <code>Promise.&lt;Array.&lt;TokenVotingProposalListItem&gt;&gt;</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>Promise.&lt;Array.&lt;TokenVotingProposalListItem&gt;&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>ProposalQueryParams</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getVotingSettings"></a>

### TokenVotingClient.TokenVotingClientMethods#getVotingSettings(pluginAddress, blockNumber) ⇒ <code>Promise.&lt;VotingSettings&gt;</code>
<p>Returns the settings of a plugin given the address of the plugin instance</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>Promise.&lt;VotingSettings&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getToken"></a>

### TokenVotingClient.TokenVotingClientMethods#getToken(pluginAddress) ⇒ <code>Promise.&lt;(Erc20TokenDetails\|null)&gt;</code>
<p>Returns the details of the token used in a specific plugin instance</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>Promise.&lt;(Erc20TokenDetails\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 

<a name="TokenVotingClientDecoding"></a>

## TokenVotingClientDecoding
<p>Decoding module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientDecoding](#TokenVotingClientDecoding)
    * [.updatePluginSettingsAction(data)](#TokenVotingClientDecoding+updatePluginSettingsAction) ⇒ <code>VotingSettings</code>
    * [.mintTokenAction(data)](#TokenVotingClientDecoding+mintTokenAction) ⇒ <code>MintTokenParams</code>
    * [.findInterface(data)](#TokenVotingClientDecoding+findInterface) ⇒ <code>InterfaceParams</code> \| <code>null</code>

<a name="TokenVotingClientDecoding+updatePluginSettingsAction"></a>

### tokenVotingClientDecoding.updatePluginSettingsAction(data) ⇒ <code>VotingSettings</code>
<p>Decodes a dao metadata from an encoded update metadata action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#TokenVotingClientDecoding)  
**Returns**: <code>VotingSettings</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="TokenVotingClientDecoding+mintTokenAction"></a>

### tokenVotingClientDecoding.mintTokenAction(data) ⇒ <code>MintTokenParams</code>
<p>Decodes the mint token params from an encoded mint token action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#TokenVotingClientDecoding)  
**Returns**: <code>MintTokenParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="TokenVotingClientDecoding+findInterface"></a>

### tokenVotingClientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#TokenVotingClientDecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="TokenVotingClientEncoding"></a>

## TokenVotingClientEncoding
<p>Encoding module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientEncoding](#TokenVotingClientEncoding)
    * _instance_
        * [.updatePluginSettingsAction(pluginAddress, params)](#TokenVotingClientEncoding+updatePluginSettingsAction) ⇒ <code>DaoAction</code>
        * [.mintTokenAction(minterAddress, params)](#TokenVotingClientEncoding+mintTokenAction) ⇒ <code>DaoAction</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#TokenVotingClientEncoding.getPluginInstallItem) ⇒ <code>PluginInstallItem</code>

<a name="TokenVotingClientEncoding+updatePluginSettingsAction"></a>

### tokenVotingClientEncoding.updatePluginSettingsAction(pluginAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>TokenVotingClientEncoding</code>](#TokenVotingClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| params | <code>VotingSettings</code> | 

<a name="TokenVotingClientEncoding+mintTokenAction"></a>

### tokenVotingClientEncoding.mintTokenAction(minterAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the parameters to be given when creating a proposal that mints an amount of ERC-20 tokens to an address</p>

**Kind**: instance method of [<code>TokenVotingClientEncoding</code>](#TokenVotingClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| minterAddress | <code>string</code> | 
| params | <code>MintTokenParams</code> | 

<a name="TokenVotingClientEncoding.getPluginInstallItem"></a>

### TokenVotingClientEncoding.getPluginInstallItem(params, network) ⇒ <code>PluginInstallItem</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>TokenVotingClientEncoding</code>](#TokenVotingClientEncoding)  
**Returns**: <code>PluginInstallItem</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginInstall</code> | 
| network | <code>Networkish</code> | 

<a name="TokenVotingClientEstimation"></a>

## TokenVotingClientEstimation
<p>Estimation module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientEstimation](#TokenVotingClientEstimation)
    * [.createProposal(params)](#TokenVotingClientEstimation+createProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.voteProposal(params)](#TokenVotingClientEstimation+voteProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.executeProposal(proposalId)](#TokenVotingClientEstimation+executeProposal) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.delegateTokens(params)](#TokenVotingClientEstimation+delegateTokens) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.undelegateTokens(tokenAddress)](#TokenVotingClientEstimation+undelegateTokens) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#TokenVotingClientEstimation+prepareUpdate) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="TokenVotingClientEstimation+createProposal"></a>

### tokenVotingClientEstimation.createProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="TokenVotingClientEstimation+voteProposal"></a>

### tokenVotingClientEstimation.voteProposal(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of casting a vote on a proposal</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="TokenVotingClientEstimation+executeProposal"></a>

### tokenVotingClientEstimation.executeProposal(proposalId) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of executing a TokenVoting proposal</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClientEstimation+delegateTokens"></a>

### tokenVotingClientEstimation.delegateTokens(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of delegating voting power to a delegatee</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DelegateTokensParams</code> | 

<a name="TokenVotingClientEstimation+undelegateTokens"></a>

### tokenVotingClientEstimation.undelegateTokens(tokenAddress) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of undelegating voting power</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientEstimation+prepareUpdate"></a>

### tokenVotingClientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareUpdateParams</code> | 

<a name="TokenVotingClientMethods"></a>

## TokenVotingClientMethods
<p>Methods module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientMethods](#TokenVotingClientMethods)
    * [.prepareInstallation(params)](#TokenVotingClientMethods+prepareInstallation) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
    * [.prepareUpdate(params)](#TokenVotingClientMethods+prepareUpdate) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.delegateTokens(params)](#TokenVotingClientMethods+delegateTokens) ⇒ <code>AsyncGenerator.&lt;DelegateTokensStepValue&gt;</code>
    * [.undelegateTokens(tokenAddress)](#TokenVotingClientMethods+undelegateTokens) ⇒ <code>AsyncGenerator.&lt;UndelegateTokensStepValue&gt;</code>
    * [.getDelegatee(tokenAddress)](#TokenVotingClientMethods+getDelegatee) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
    * [.canVote(params)](#TokenVotingClientMethods+canVote) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.canExecute(proposalId)](#TokenVotingClientMethods+canExecute) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getMembers(params)](#TokenVotingClientMethods+getMembers) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.isTokenVotingCompatibleToken(tokenAddress)](#TokenVotingClientMethods+isTokenVotingCompatibleToken) ⇒ <code>Promise.&lt;TokenVotingTokenCompatibility&gt;</code>
    * [.isMember(params)](#TokenVotingClientMethods+isMember) ⇒

<a name="TokenVotingClientMethods+prepareInstallation"></a>

### tokenVotingClientMethods.prepareInstallation(params) ⇒ <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>
<p>Prepares the installation of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareInstallationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareInstallationParams</code> | 

<a name="TokenVotingClientMethods+prepareUpdate"></a>

### tokenVotingClientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepares the update of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareUpdateParams</code> | 

<a name="TokenVotingClientMethods+delegateTokens"></a>

### tokenVotingClientMethods.delegateTokens(params) ⇒ <code>AsyncGenerator.&lt;DelegateTokensStepValue&gt;</code>
<p>Delegates all the signer's voting power to a delegatee</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;DelegateTokensStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DelegateTokensParams</code> | 

<a name="TokenVotingClientMethods+undelegateTokens"></a>

### tokenVotingClientMethods.undelegateTokens(tokenAddress) ⇒ <code>AsyncGenerator.&lt;UndelegateTokensStepValue&gt;</code>
<p>Delegates all the signer's tokens back to itself</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;UndelegateTokensStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientMethods+getDelegatee"></a>

### tokenVotingClientMethods.getDelegatee(tokenAddress) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
<p>Retrieves the current signer's delegatee for the given token</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>Promise.&lt;(string\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientMethods+canVote"></a>

### tokenVotingClientMethods.canVote(params) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks if an user can vote in a proposal</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CanVoteParams</code> | 

<a name="TokenVotingClientMethods+canExecute"></a>

### tokenVotingClientMethods.canExecute(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClientMethods+getMembers"></a>

### tokenVotingClientMethods.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
<p>Returns the list of wallet addresses holding tokens from the underlying Token contract used by the plugin</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>MembersQueryParams</code> | <ul> <li>pluginAddress <ul> <li>blockNumber</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = MembersSortBy.ADDRESS</li> </ul> </li> </ul> |

<a name="TokenVotingClientMethods+isTokenVotingCompatibleToken"></a>

### tokenVotingClientMethods.isTokenVotingCompatibleToken(tokenAddress) ⇒ <code>Promise.&lt;TokenVotingTokenCompatibility&gt;</code>
<p>Checks if the given token is compatible with the TokenVoting plugin</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>Promise.&lt;TokenVotingTokenCompatibility&gt;</code>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientMethods+isMember"></a>

### tokenVotingClientMethods.isMember(params) ⇒
<p>Checks if a given address is a member of the tokenVoting contract.</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <p>A boolean indicating whether the address is a member or not.</p>  

| Param | Description |
| --- | --- |
| params | <p>The parameters for the isMember method.</p> |
| params.pluginAddress | <p>The address of the plugin.</p> |
| params.address | <p>The address to check.</p> |
| params.blockNumber | <p>The block number for specifying a specific block.</p> |


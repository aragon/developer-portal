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
    * [.getPluginInstallItem(params, [network])](#TokenVotingClient.getPluginInstallItem) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#createProposal(params)](#TokenVotingClient.TokenVotingClientMethods+createProposal) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#voteProposal(params, vote)](#TokenVotingClient.TokenVotingClientMethods+voteProposal) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#executeProposal(proposalId)](#TokenVotingClient.TokenVotingClientMethods+executeProposal) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#getMembers(pluginAddress, blockNumber)](#TokenVotingClient.TokenVotingClientMethods+getMembers) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#getProposal(proposalId)](#TokenVotingClient.TokenVotingClientMethods+getProposal) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#getProposals(params)](#TokenVotingClient.TokenVotingClientMethods+getProposals) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#getVotingSettings(pluginAddress, blockNumber)](#TokenVotingClient.TokenVotingClientMethods+getVotingSettings) ⇒ <code>\*</code>
    * [.TokenVotingClientMethods#getToken(pluginAddress)](#TokenVotingClient.TokenVotingClientMethods+getToken) ⇒ <code>\*</code>

<a name="TokenVotingClient.getPluginInstallItem"></a>

### TokenVotingClient.getPluginInstallItem(params, [network]) ⇒ <code>\*</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>{PluginInstallItem}</p>  

| Param | Type | Default |
| --- | --- | --- |
| params | <code>TokenVotingPluginInstall</code> |  | 
| [network] | <code>Networkish</code> | <code>&quot;mainnet&quot;</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+createProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#createProposal(params) ⇒ <code>\*</code>
<p>Creates a new proposal on the given TokenVoting plugin contract</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<ProposalCreationStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+voteProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#voteProposal(params, vote) ⇒ <code>\*</code>
<p>Cast a vote on the given proposal using the client's wallet. Depending on the proposal settings, an affirmative vote may execute the proposal's actions on the DAO.</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<VoteProposalStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 
| vote | <code>VoteValues</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+executeProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#executeProposal(proposalId) ⇒ <code>\*</code>
<p>Executes the given proposal, provided that it has already passed</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<ExecuteProposalStepValue>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getMembers"></a>

### TokenVotingClient.TokenVotingClientMethods#getMembers(pluginAddress, blockNumber) ⇒ <code>\*</code>
<p>Returns the list of wallet addresses holding tokens from the underlying Token contract used by the plugin</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>{Promise&lt;string[]&gt;}</p>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getProposal"></a>

### TokenVotingClient.TokenVotingClientMethods#getProposal(proposalId) ⇒ <code>\*</code>
<p>Returns the details of the given proposal</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>`{Promise<TokenVotingProposal>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getProposals"></a>

### TokenVotingClient.TokenVotingClientMethods#getProposals(params) ⇒ <code>\*</code>
<p>Returns a list of proposals on the Plugin, filtered by the given criteria</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>{Promise&lt;TokenVotingProposalListItem[]&gt;}</p>  

| Param | Type |
| --- | --- |
| params | <code>ProposalQueryParams</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getVotingSettings"></a>

### TokenVotingClient.TokenVotingClientMethods#getVotingSettings(pluginAddress, blockNumber) ⇒ <code>\*</code>
<p>Returns the settings of a plugin given the address of the plugin instance</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>`{Promise<VotingSettings>}`</p>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| blockNumber | <code>number</code> | 

<a name="TokenVotingClient.TokenVotingClientMethods+getToken"></a>

### TokenVotingClient.TokenVotingClientMethods#getToken(pluginAddress) ⇒ <code>\*</code>
<p>Returns the details of the token used in a specific plugin instance</p>

**Kind**: static method of [<code>TokenVotingClient</code>](#TokenVotingClient)  
**Returns**: <code>\*</code> - <p>{Promise&lt;Erc20TokenDetails | null&gt;}</p>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 

<a name="TokenVotingClientDecoding"></a>

## TokenVotingClientDecoding
<p>Decoding module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientDecoding](#TokenVotingClientDecoding)
    * [.updatePluginSettingsAction(data)](#TokenVotingClientDecoding+updatePluginSettingsAction) ⇒ <code>\*</code>
    * [.mintTokenAction(data)](#TokenVotingClientDecoding+mintTokenAction) ⇒ <code>\*</code>
    * [.findInterface(data)](#TokenVotingClientDecoding+findInterface) ⇒ <code>\*</code>

<a name="TokenVotingClientDecoding+updatePluginSettingsAction"></a>

### tokenVotingClientDecoding.updatePluginSettingsAction(data) ⇒ <code>\*</code>
<p>Decodes a dao metadata from an encoded update metadata action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#TokenVotingClientDecoding)  
**Returns**: <code>\*</code> - <p>{VotingSettings}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="TokenVotingClientDecoding+mintTokenAction"></a>

### tokenVotingClientDecoding.mintTokenAction(data) ⇒ <code>\*</code>
<p>Decodes the mint token params from an encoded mint token action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#TokenVotingClientDecoding)  
**Returns**: <code>\*</code> - <p>{MintTokenParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="TokenVotingClientDecoding+findInterface"></a>

### tokenVotingClientDecoding.findInterface(data) ⇒ <code>\*</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>TokenVotingClientDecoding</code>](#TokenVotingClientDecoding)  
**Returns**: <code>\*</code> - <p>{(InterfaceParams | null)}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="TokenVotingClientEncoding"></a>

## TokenVotingClientEncoding
<p>Encoding module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientEncoding](#TokenVotingClientEncoding)
    * _instance_
        * [.updatePluginSettingsAction(pluginAddress, params)](#TokenVotingClientEncoding+updatePluginSettingsAction) ⇒ <code>\*</code>
        * [.mintTokenAction(minterAddress, params)](#TokenVotingClientEncoding+mintTokenAction) ⇒ <code>\*</code>
    * _static_
        * [.getPluginInstallItem(params, network)](#TokenVotingClientEncoding.getPluginInstallItem) ⇒ <code>\*</code>

<a name="TokenVotingClientEncoding+updatePluginSettingsAction"></a>

### tokenVotingClientEncoding.updatePluginSettingsAction(pluginAddress, params) ⇒ <code>\*</code>
<p>Computes the parameters to be given when creating a proposal that updates the governance configuration</p>

**Kind**: instance method of [<code>TokenVotingClientEncoding</code>](#TokenVotingClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 
| params | <code>VotingSettings</code> | 

<a name="TokenVotingClientEncoding+mintTokenAction"></a>

### tokenVotingClientEncoding.mintTokenAction(minterAddress, params) ⇒ <code>\*</code>
<p>Computes the parameters to be given when creating a proposal that mints an amount of ERC-20 tokens to an address</p>

**Kind**: instance method of [<code>TokenVotingClientEncoding</code>](#TokenVotingClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| minterAddress | <code>string</code> | 
| params | <code>MintTokenParams</code> | 

<a name="TokenVotingClientEncoding.getPluginInstallItem"></a>

### TokenVotingClientEncoding.getPluginInstallItem(params, network) ⇒ <code>\*</code>
<p>Computes the parameters to be given when creating the DAO,
so that the plugin is configured</p>

**Kind**: static method of [<code>TokenVotingClientEncoding</code>](#TokenVotingClientEncoding)  
**Returns**: <code>\*</code> - <p>{PluginInstallItem}</p>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginInstall</code> | 
| network | <code>Networkish</code> | 

<a name="TokenVotingClientEstimation"></a>

## TokenVotingClientEstimation
<p>Estimation module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientEstimation](#TokenVotingClientEstimation)
    * [.createProposal(params)](#TokenVotingClientEstimation+createProposal) ⇒ <code>\*</code>
    * [.voteProposal(params)](#TokenVotingClientEstimation+voteProposal) ⇒ <code>\*</code>
    * [.executeProposal(proposalId)](#TokenVotingClientEstimation+executeProposal) ⇒ <code>\*</code>
    * [.delegateTokens(params)](#TokenVotingClientEstimation+delegateTokens) ⇒ <code>\*</code>
    * [.undelegateTokens(tokenAddress)](#TokenVotingClientEstimation+undelegateTokens) ⇒ <code>\*</code>
    * [.prepareUpdate(params)](#TokenVotingClientEstimation+prepareUpdate) ⇒ <code>\*</code>

<a name="TokenVotingClientEstimation+createProposal"></a>

### tokenVotingClientEstimation.createProposal(params) ⇒ <code>\*</code>
<p>Estimates the gas fee of creating a proposal on the plugin</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>CreateMajorityVotingProposalParams</code> | 

<a name="TokenVotingClientEstimation+voteProposal"></a>

### tokenVotingClientEstimation.voteProposal(params) ⇒ <code>\*</code>
<p>Estimates the gas fee of casting a vote on a proposal</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>VoteProposalParams</code> | 

<a name="TokenVotingClientEstimation+executeProposal"></a>

### tokenVotingClientEstimation.executeProposal(proposalId) ⇒ <code>\*</code>
<p>Estimates the gas fee of executing a TokenVoting proposal</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClientEstimation+delegateTokens"></a>

### tokenVotingClientEstimation.delegateTokens(params) ⇒ <code>\*</code>
<p>Estimates the gas fee of delegating voting power to a delegatee</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>DelegateTokensParams</code> | 

<a name="TokenVotingClientEstimation+undelegateTokens"></a>

### tokenVotingClientEstimation.undelegateTokens(tokenAddress) ⇒ <code>\*</code>
<p>Estimates the gas fee of undelegating voting power</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientEstimation+prepareUpdate"></a>

### tokenVotingClientEstimation.prepareUpdate(params) ⇒ <code>\*</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>TokenVotingClientEstimation</code>](#TokenVotingClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareUpdateParams</code> | 

<a name="TokenVotingClientMethods"></a>

## TokenVotingClientMethods
<p>Methods module the SDK TokenVoting Client</p>

**Kind**: global class  

* [TokenVotingClientMethods](#TokenVotingClientMethods)
    * [.prepareInstallation(params)](#TokenVotingClientMethods+prepareInstallation) ⇒ <code>\*</code>
    * [.prepareUpdate(params)](#TokenVotingClientMethods+prepareUpdate) ⇒ <code>\*</code>
    * [.delegateTokens(params)](#TokenVotingClientMethods+delegateTokens) ⇒ <code>\*</code>
    * [.undelegateTokens(tokenAddress)](#TokenVotingClientMethods+undelegateTokens) ⇒ <code>\*</code>
    * [.getDelegatee(tokenAddress)](#TokenVotingClientMethods+getDelegatee) ⇒ <code>\*</code>
    * [.canVote(params)](#TokenVotingClientMethods+canVote) ⇒ <code>\*</code>
    * [.canExecute(proposalId)](#TokenVotingClientMethods+canExecute) ⇒ <code>\*</code>
    * [.isTokenVotingCompatibleToken(tokenAddress)](#TokenVotingClientMethods+isTokenVotingCompatibleToken) ⇒ <code>\*</code>

<a name="TokenVotingClientMethods+prepareInstallation"></a>

### tokenVotingClientMethods.prepareInstallation(params) ⇒ <code>\*</code>
<p>Prepares the installation of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<PrepareInstallationStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareInstallationParams</code> | 

<a name="TokenVotingClientMethods+prepareUpdate"></a>

### tokenVotingClientMethods.prepareUpdate(params) ⇒ <code>\*</code>
<p>Prepares the update of a token voting plugin in a given dao</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<PrepareUpdateStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>TokenVotingPluginPrepareUpdateParams</code> | 

<a name="TokenVotingClientMethods+delegateTokens"></a>

### tokenVotingClientMethods.delegateTokens(params) ⇒ <code>\*</code>
<p>Delegates all the signer's voting power to a delegatee</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<DelegateTokensStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>DelegateTokensParams</code> | 

<a name="TokenVotingClientMethods+undelegateTokens"></a>

### tokenVotingClientMethods.undelegateTokens(tokenAddress) ⇒ <code>\*</code>
<p>Delegates all the signer's tokens back to itself</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<UndelegateTokensStepValue>}`</p>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientMethods+getDelegatee"></a>

### tokenVotingClientMethods.getDelegatee(tokenAddress) ⇒ <code>\*</code>
<p>Retrieves the current signer's delegatee for the given token</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>{Promise&lt;string | null&gt;}</p>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 

<a name="TokenVotingClientMethods+canVote"></a>

### tokenVotingClientMethods.canVote(params) ⇒ <code>\*</code>
<p>Checks if an user can vote in a proposal</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<boolean>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>CanVoteParams</code> | 

<a name="TokenVotingClientMethods+canExecute"></a>

### tokenVotingClientMethods.canExecute(proposalId) ⇒ <code>\*</code>
<p>Checks whether the current proposal can be executed</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<boolean>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="TokenVotingClientMethods+isTokenVotingCompatibleToken"></a>

### tokenVotingClientMethods.isTokenVotingCompatibleToken(tokenAddress) ⇒ <code>\*</code>
<p>Checks if the given token is compatible with the TokenVoting plugin</p>

**Kind**: instance method of [<code>TokenVotingClientMethods</code>](#TokenVotingClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<TokenVotingTokenCompatibility>}`</p>  

| Param | Type |
| --- | --- |
| tokenAddress | <code>string</code> | 


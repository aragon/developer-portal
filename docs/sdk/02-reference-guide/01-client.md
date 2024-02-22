## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact with DAO's</p></dd>
<dt><a href="#ClientDecoding">ClientDecoding</a></dt>
<dd><p>Decoding module the SDK Generic Client</p></dd>
<dt><a href="#ClientEncoding">ClientEncoding</a></dt>
<dd><p>Encoding module the SDK Generic Client</p></dd>
<dt><a href="#ClientEstimation">ClientEstimation</a></dt>
<dd><p>Estimation module the SDK Generic Client</p></dd>
<dt><a href="#ClientMethods">ClientMethods</a></dt>
<dd><p>Methods module the SDK Generic Client</p></dd>
</dl>

<a name="Client"></a>

## Client
<p>Provider a generic client with high level methods to manage and interact with DAO's</p>

**Kind**: global class  
<a name="ClientDecoding"></a>

## ClientDecoding
<p>Decoding module the SDK Generic Client</p>

**Kind**: global class  

* [ClientDecoding](#ClientDecoding)
    * [.applyInstallationAction(Uint8Array)](#ClientDecoding+applyInstallationAction) ⇒ <code>DecodedApplyInstallationParams</code>
    * [.applyUninstallationAction(Uint8Array)](#ClientDecoding+applyUninstallationAction) ⇒ <code>DecodedApplyInstallationParams</code>
    * [.applyUpdateAction(data)](#ClientDecoding+applyUpdateAction) ⇒ <code>DecodedApplyUpdateParams</code>
    * [.grantAction(data)](#ClientDecoding+grantAction) ⇒ <code>GrantPermissionDecodedParams</code>
    * [.grantWithConditionAction(data)](#ClientDecoding+grantWithConditionAction) ⇒ <code>GrantPermissionWithConditionParams</code>
    * [.revokeAction(data)](#ClientDecoding+revokeAction) ⇒ <code>RevokePermissionDecodedParams</code>
    * [.withdrawAction(data)](#ClientDecoding+withdrawAction) ⇒ <code>WithdrawParams</code>
    * [.updateDaoMetadataRawAction(data)](#ClientDecoding+updateDaoMetadataRawAction) ⇒ <code>string</code>
    * [.updateDaoMetadataAction(data)](#ClientDecoding+updateDaoMetadataAction) ⇒ <code>Promise.&lt;DaoMetadata&gt;</code>
    * [.setDaoUriAction(data)](#ClientDecoding+setDaoUriAction) ⇒ <code>string</code>
    * [.registerStandardCallbackAction(data)](#ClientDecoding+registerStandardCallbackAction) ⇒ <code>RegisterStandardCallbackParams</code>
    * [.setSignatureValidatorAction(data)](#ClientDecoding+setSignatureValidatorAction) ⇒ <code>string</code>
    * [.upgradeToAndCallAction(data)](#ClientDecoding+upgradeToAndCallAction) ⇒ <code>UpgradeToAndCallParams</code>
    * [.initializeFromAction(data)](#ClientDecoding+initializeFromAction) ⇒ <code>InitializeFromParams</code>
    * [.findInterface(data)](#ClientDecoding+findInterface) ⇒ <code>InterfaceParams</code> \| <code>null</code>
    * [.daoUpdateAction(data)](#ClientDecoding+daoUpdateAction) ⇒ <code>DaoUpdateDecodedParams</code>

<a name="ClientDecoding+applyInstallationAction"></a>

### clientDecoding.applyInstallationAction(Uint8Array) ⇒ <code>DecodedApplyInstallationParams</code>
**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>DecodedApplyInstallationParams</code>  

| Param | Type |
| --- | --- |
| Uint8Array | <code>data</code> | 

<a name="ClientDecoding+applyUninstallationAction"></a>

### clientDecoding.applyUninstallationAction(Uint8Array) ⇒ <code>DecodedApplyInstallationParams</code>
**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>DecodedApplyInstallationParams</code>  

| Param | Type |
| --- | --- |
| Uint8Array | <code>data</code> | 

<a name="ClientDecoding+applyUpdateAction"></a>

### clientDecoding.applyUpdateAction(data) ⇒ <code>DecodedApplyUpdateParams</code>
<p>Decodes the apply update parameters from an encoded apply update action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>DecodedApplyUpdateParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+grantAction"></a>

### clientDecoding.grantAction(data) ⇒ <code>GrantPermissionDecodedParams</code>
<p>Decodes the permission parameters from an encoded grant action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>GrantPermissionDecodedParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+grantWithConditionAction"></a>

### clientDecoding.grantWithConditionAction(data) ⇒ <code>GrantPermissionWithConditionParams</code>
<p>Decodes the grant permission with condition parameters from an encoded grant with condition action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>GrantPermissionWithConditionParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+revokeAction"></a>

### clientDecoding.revokeAction(data) ⇒ <code>RevokePermissionDecodedParams</code>
<p>Decodes the permission parameters from an encoded revoke action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>RevokePermissionDecodedParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+withdrawAction"></a>

### clientDecoding.withdrawAction(data) ⇒ <code>WithdrawParams</code>
<p>Decodes the withdraw parameters from an encoded withdraw action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>WithdrawParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+updateDaoMetadataRawAction"></a>

### clientDecoding.updateDaoMetadataRawAction(data) ⇒ <code>string</code>
<p>Decodes a dao metadata ipfs uri from an encoded update metadata action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>string</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+updateDaoMetadataAction"></a>

### clientDecoding.updateDaoMetadataAction(data) ⇒ <code>Promise.&lt;DaoMetadata&gt;</code>
<p>Decodes a dao metadata from an encoded update metadata raw action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>Promise.&lt;DaoMetadata&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+setDaoUriAction"></a>

### clientDecoding.setDaoUriAction(data) ⇒ <code>string</code>
<p>Decodes the daoUri from a setDaoUriAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>string</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+registerStandardCallbackAction"></a>

### clientDecoding.registerStandardCallbackAction(data) ⇒ <code>RegisterStandardCallbackParams</code>
<p>Decodes the RegisterStandardCallbackParams from a registerStandardCallbackAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>RegisterStandardCallbackParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+setSignatureValidatorAction"></a>

### clientDecoding.setSignatureValidatorAction(data) ⇒ <code>string</code>
<p>Decodes the implementation address from an encoded upgradeToAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>string</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+upgradeToAndCallAction"></a>

### clientDecoding.upgradeToAndCallAction(data) ⇒ <code>UpgradeToAndCallParams</code>
<p>Decodes upgradeToAndCallback params from an upgradeToAndCallAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>UpgradeToAndCallParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+initializeFromAction"></a>

### clientDecoding.initializeFromAction(data) ⇒ <code>InitializeFromParams</code>
<p>Decodes the initializeFrom params from an initializeFromAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>InitializeFromParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+findInterface"></a>

### clientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+daoUpdateAction"></a>

### clientDecoding.daoUpdateAction(data) ⇒ <code>DaoUpdateDecodedParams</code>
<p>Decodes the dao update params from a daoUpdateAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>DaoUpdateDecodedParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientEncoding"></a>

## ClientEncoding
<p>Encoding module the SDK Generic Client</p>

**Kind**: global class  

* [ClientEncoding](#ClientEncoding)
    * [.applyInstallationAction(daoAddress, params)](#ClientEncoding+applyInstallationAction) ⇒ <code>DaoAction</code>
    * [.applyUpdateAndPermissionsActionBlock(daoAddress, params)](#ClientEncoding+applyUpdateAndPermissionsActionBlock) ⇒ <code>Array.&lt;DaoAction&gt;</code>
    * [.grantAction(daoAddress, params)](#ClientEncoding+grantAction) ⇒ <code>DaoAction</code>
    * [.grantWithConditionAction(daoAddress, params)](#ClientEncoding+grantWithConditionAction) ⇒ <code>DaoAction</code>
    * [.revokeAction(daoAddress, params)](#ClientEncoding+revokeAction) ⇒ <code>DaoAction</code>
    * [.withdrawAction(recipientAddressOrEns, value)](#ClientEncoding+withdrawAction) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
    * [.updateDaoMetadataAction(daoAddressOrEns, params)](#ClientEncoding+updateDaoMetadataAction) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
    * [.setDaoUriAction(daoAddressOrEns, daoUri)](#ClientEncoding+setDaoUriAction) ⇒ <code>DaoAction</code>
    * [.registerStandardCallbackAction(daoAddressOrEns, daoUri)](#ClientEncoding+registerStandardCallbackAction) ⇒ <code>DaoAction</code>
    * [.setSignatureValidatorAction(daoAddressOrEns, signatureValidator)](#ClientEncoding+setSignatureValidatorAction) ⇒ <code>DaoAction</code>
    * [.upgradeToAction(daoAddressOrEns, implementationAddress)](#ClientEncoding+upgradeToAction) ⇒ <code>DaoAction</code>
    * [.upgradeToAndCallAction(daoAddressOrEns, params)](#ClientEncoding+upgradeToAndCallAction) ⇒ <code>DaoAction</code>
    * [.initializeFromAction(daoAddressOrEns, params)](#ClientEncoding+initializeFromAction) ⇒ <code>DaoAction</code>
    * [.daoUpdateAction(daoAddressOrEns, params)](#ClientEncoding+daoUpdateAction) ⇒ <code>Promise.&lt;DaoAction&gt;</code>

<a name="ClientEncoding+applyInstallationAction"></a>

### clientEncoding.applyInstallationAction(daoAddress, params) ⇒ <code>DaoAction</code>
**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>ApplyInstallationParams</code> | 

<a name="ClientEncoding+applyUpdateAndPermissionsActionBlock"></a>

### clientEncoding.applyUpdateAndPermissionsActionBlock(daoAddress, params) ⇒ <code>Array.&lt;DaoAction&gt;</code>
<p>Computes the payload to be given when creating a proposal that applies an update to a plugin</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>Array.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>ApplyUpdateParams</code> | 

<a name="ClientEncoding+grantAction"></a>

### clientEncoding.grantAction(daoAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that grants a permission within a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>GrantPermissionParams</code> | 

<a name="ClientEncoding+grantWithConditionAction"></a>

### clientEncoding.grantWithConditionAction(daoAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that grants a permission within a DAO given a certain condition</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>GrantPermissionWithConditionParams</code> | 

<a name="ClientEncoding+revokeAction"></a>

### clientEncoding.revokeAction(daoAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that revokes a permission within a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>RevokePermissionParams</code> | 

<a name="ClientEncoding+withdrawAction"></a>

### clientEncoding.withdrawAction(recipientAddressOrEns, value) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
<p>Computes the payload to be given when creating a proposal that withdraws ether from the DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>Promise.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| recipientAddressOrEns | <code>string</code> | 
| value | <code>WithdrawParams</code> | 

<a name="ClientEncoding+updateDaoMetadataAction"></a>

### clientEncoding.updateDaoMetadataAction(daoAddressOrEns, params) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
<p>Computes the payload to be given when creating a proposal that updates the metadata the DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>Promise.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>DaoMetadata</code> | 

<a name="ClientEncoding+setDaoUriAction"></a>

### clientEncoding.setDaoUriAction(daoAddressOrEns, daoUri) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets the dao uri</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| daoUri | <code>string</code> | 

<a name="ClientEncoding+registerStandardCallbackAction"></a>

### clientEncoding.registerStandardCallbackAction(daoAddressOrEns, daoUri) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that registers a new standard callback</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| daoUri | <code>string</code> | 

<a name="ClientEncoding+setSignatureValidatorAction"></a>

### clientEncoding.setSignatureValidatorAction(daoAddressOrEns, signatureValidator) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets the signature validator</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| signatureValidator | <code>string</code> | 

<a name="ClientEncoding+upgradeToAction"></a>

### clientEncoding.upgradeToAction(daoAddressOrEns, implementationAddress) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets a new implementation for the proxy</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| implementationAddress | <code>string</code> | 

<a name="ClientEncoding+upgradeToAndCallAction"></a>

### clientEncoding.upgradeToAndCallAction(daoAddressOrEns, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets a new implementation for the proxy and calls the callback function with the specified data</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>UpgradeToAndCallParams</code> | 

<a name="ClientEncoding+initializeFromAction"></a>

### clientEncoding.initializeFromAction(daoAddressOrEns, params) ⇒ <code>DaoAction</code>
<p>Computes an action to be passed to the upgradeToAndCallAction method when upgrading a DAO to a new version.</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>InitializeFromParams</code> | 

<a name="ClientEncoding+daoUpdateAction"></a>

### clientEncoding.daoUpdateAction(daoAddressOrEns, params) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
<p>Does the necessary steps to encode an action that updates a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>Promise.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>DaoUpdateParams</code> | 

<a name="ClientEstimation"></a>

## ClientEstimation
<p>Estimation module the SDK Generic Client</p>

**Kind**: global class  

* [ClientEstimation](#ClientEstimation)
    * [.createDao(_params)](#ClientEstimation+createDao) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.deposit(params)](#ClientEstimation+deposit) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.setAllowance(_params)](#ClientEstimation+setAllowance) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#ClientEstimation+prepareUpdate) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="ClientEstimation+createDao"></a>

### clientEstimation.createDao(_params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a DAO</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| _params | <code>CreateDaoParams</code> | 

<a name="ClientEstimation+deposit"></a>

### clientEstimation.deposit(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of depositing ether or an ERC20 token into the DAO
This does not estimate the gas cost of updating the allowance of an ERC20 token</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DepositParams</code> | 

<a name="ClientEstimation+setAllowance"></a>

### clientEstimation.setAllowance(_params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of updating the allowance of an ERC20 token</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| _params | <code>SetAllowanceParams</code> | 

<a name="ClientEstimation+prepareUpdate"></a>

### clientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUpdateParams</code> | 

<a name="ClientMethods"></a>

## ClientMethods
<p>Methods module the SDK Generic Client</p>

**Kind**: global class  

* [ClientMethods](#ClientMethods)
    * [.createDao(params)](#ClientMethods+createDao) ⇒ <code>AsyncGenerator.&lt;DaoCreationStepValue&gt;</code>
    * [.pinMetadata(params)](#ClientMethods+pinMetadata) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.deposit(params)](#ClientMethods+deposit) ⇒ <code>AsyncGenerator.&lt;DaoDepositStepValue&gt;</code>
    * [.setAllowance(params)](#ClientMethods+setAllowance) ⇒ <code>AsyncGenerator.&lt;SetAllowanceStepValue&gt;</code>
    * [.prepareUninstallation(params)](#ClientMethods+prepareUninstallation) ⇒ <code>AsyncGenerator.&lt;PrepareUninstallationStepValue&gt;</code>
    * [.prepareUpdate(params)](#ClientMethods+prepareUpdate) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.hasPermission(params)](#ClientMethods+hasPermission) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getDao(daoAddressOrEns)](#ClientMethods+getDao) ⇒ <code>Promise.&lt;(DaoDetails\|null)&gt;</code>
    * [.getDaos(params)](#ClientMethods+getDaos) ⇒ <code>Promise.&lt;Array.&lt;DaoListItem&gt;&gt;</code>
    * [.getDaoBalances(params)](#ClientMethods+getDaoBalances) ⇒ <code>Promise.&lt;(Array.&lt;AssetBalance&gt;\|null)&gt;</code>
    * [.getDaoTransfers(params)](#ClientMethods+getDaoTransfers) ⇒ <code>Promise.&lt;(Array.&lt;Transfer&gt;\|null)&gt;</code>
    * [.getPlugins(params)](#ClientMethods+getPlugins) ⇒ <code>Promise.&lt;(Array.&lt;PluginRepo&gt;\|null)&gt;</code>
    * [.getPlugin(pluginAddress)](#ClientMethods+getPlugin) ⇒ <code>Promise.&lt;PluginRepo&gt;</code>
    * [.getProtocolVersion(contractAddress)](#ClientMethods+getProtocolVersion) ⇒ <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>
    * [.isDaoUpdateProposal(proposalId)](#ClientMethods+isDaoUpdateProposal) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.isPluginUpdateProposal(proposalId)](#ClientMethods+isPluginUpdateProposal) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.isPluginUpdateProposalValid(proposalId)](#ClientMethods+isPluginUpdateProposalValid) ⇒ <code>Promise.&lt;PluginUpdateProposalValidity&gt;</code>
    * [.isDaoUpdateProposalValid(proposalId, [version])](#ClientMethods+isDaoUpdateProposalValid) ⇒ <code>Promise.&lt;DaoUpdateProposalValidity&gt;</code>
    * [.getDaoImplementation(daoFactoryAddress)](#ClientMethods+getDaoImplementation) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="ClientMethods+createDao"></a>

### clientMethods.createDao(params) ⇒ <code>AsyncGenerator.&lt;DaoCreationStepValue&gt;</code>
<p>Creates a DAO with the given settings and plugins</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;DaoCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateDaoParams</code> | 

<a name="ClientMethods+pinMetadata"></a>

### clientMethods.pinMetadata(params) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Pins a metadata object into IPFS and retruns the generated hash</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DaoMetadata</code> | 

<a name="ClientMethods+deposit"></a>

### clientMethods.deposit(params) ⇒ <code>AsyncGenerator.&lt;DaoDepositStepValue&gt;</code>
<p>Deposits ether or an ERC20 token into the DAO</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;DaoDepositStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DepositParams</code> | 

<a name="ClientMethods+setAllowance"></a>

### clientMethods.setAllowance(params) ⇒ <code>AsyncGenerator.&lt;SetAllowanceStepValue&gt;</code>
<p>Checks if the allowance is enough and updates it</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;SetAllowanceStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>SetAllowanceParams</code> | 

<a name="ClientMethods+prepareUninstallation"></a>

### clientMethods.prepareUninstallation(params) ⇒ <code>AsyncGenerator.&lt;PrepareUninstallationStepValue&gt;</code>
<p>Prepare uninstallation of a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUninstallationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUninstallationParams</code> | 

<a name="ClientMethods+prepareUpdate"></a>

### clientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepare update of a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUpdateParams</code> | 

<a name="ClientMethods+hasPermission"></a>

### clientMethods.hasPermission(params) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether a role is granted by the current DAO's ACL settings</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>HasPermissionParams</code> | 

<a name="ClientMethods+getDao"></a>

### clientMethods.getDao(daoAddressOrEns) ⇒ <code>Promise.&lt;(DaoDetails\|null)&gt;</code>
<p>Retrieves metadata for DAO with given identifier (address or ens domain)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;(DaoDetails\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 

<a name="ClientMethods+getDaos"></a>

### clientMethods.getDaos(params) ⇒ <code>Promise.&lt;Array.&lt;DaoListItem&gt;&gt;</code>
<p>Retrieves metadata for DAO with given identifier (address or ens domain)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;DaoListItem&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>DaoQueryParams</code> | <ul> <li>limit = 10 <ul> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = DaoSortBy.CREATED_AT</li> </ul> </li> </ul> |

<a name="ClientMethods+getDaoBalances"></a>

### clientMethods.getDaoBalances(params) ⇒ <code>Promise.&lt;(Array.&lt;AssetBalance&gt;\|null)&gt;</code>
<p>Retrieves the asset balances of the given DAO, by default, ETH, DAI, USDC and USDT on Mainnet</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;(Array.&lt;AssetBalance&gt;\|null)&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>DaoBalancesQueryParams</code> | <ul> <li>daoAddressOrEns <ul> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = AssetBalanceSortBy.LAST_UPDATED</li> </ul> </li> </ul> |

<a name="ClientMethods+getDaoTransfers"></a>

### clientMethods.getDaoTransfers(params) ⇒ <code>Promise.&lt;(Array.&lt;Transfer&gt;\|null)&gt;</code>
<p>Retrieves the list of asset transfers to and from the given DAO (by default, from ETH, DAI, USDC and USDT, on Mainnet)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;(Array.&lt;Transfer&gt;\|null)&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>TransferQueryParams</code> | <ul> <li>daoAddressOrEns <ul> <li>type</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = TransferSortBy.CREATED_AT</li> </ul> </li> </ul> |

<a name="ClientMethods+getPlugins"></a>

### clientMethods.getPlugins(params) ⇒ <code>Promise.&lt;(Array.&lt;PluginRepo&gt;\|null)&gt;</code>
<p>Retrieves the list of plugins available on the PluginRegistry</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;(Array.&lt;PluginRepo&gt;\|null)&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>PluginQueryParams</code> | <ul> <li>limit = 10 <ul> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = PluginSortBy.SUBDOMAIN</li> <li>subdomain</li> </ul> </li> </ul> |

<a name="ClientMethods+getPlugin"></a>

### clientMethods.getPlugin(pluginAddress) ⇒ <code>Promise.&lt;PluginRepo&gt;</code>
<p>Get plugin details given an address, release and build</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;PluginRepo&gt;</code>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 

<a name="ClientMethods+getProtocolVersion"></a>

### clientMethods.getProtocolVersion(contractAddress) ⇒ <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>
<p>Returns the protocol version of a contract
if the transaction fails returns [1,0,0]</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>  

| Param | Type |
| --- | --- |
| contractAddress | <code>string</code> | 

<a name="ClientMethods+isDaoUpdateProposal"></a>

### clientMethods.isDaoUpdateProposal(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Given a proposal id returns if that proposal is a dao update proposal</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="ClientMethods+isPluginUpdateProposal"></a>

### clientMethods.isPluginUpdateProposal(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Given a proposal id returns if that proposal is a plugin update proposal</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="ClientMethods+isPluginUpdateProposalValid"></a>

### clientMethods.isPluginUpdateProposalValid(proposalId) ⇒ <code>Promise.&lt;PluginUpdateProposalValidity&gt;</code>
<p>Check if the specified proposal id is valid for updating a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;PluginUpdateProposalValidity&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="ClientMethods+isDaoUpdateProposalValid"></a>

### clientMethods.isDaoUpdateProposalValid(proposalId, [version]) ⇒ <code>Promise.&lt;DaoUpdateProposalValidity&gt;</code>
<p>Check if the specified proposalId actions are valid for updating a dao</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;DaoUpdateProposalValidity&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 
| [version] | <code>SupportedVersion</code> | 

<a name="ClientMethods+getDaoImplementation"></a>

### clientMethods.getDaoImplementation(daoFactoryAddress) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Return the implementation address for the specified dao factory</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>Promise.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| daoFactoryAddress | <code>string</code> | 


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
    * [.applyInstallationAction(Uint8Array)](#ClientDecoding+applyInstallationAction) ⇒ <code>\*</code>
    * [.applyUninstallationAction(Uint8Array)](#ClientDecoding+applyUninstallationAction) ⇒ <code>\*</code>
    * [.applyUpdateAction(data)](#ClientDecoding+applyUpdateAction) ⇒ <code>\*</code>
    * [.grantAction(data)](#ClientDecoding+grantAction) ⇒ <code>\*</code>
    * [.grantWithConditionAction(data)](#ClientDecoding+grantWithConditionAction) ⇒ <code>\*</code>
    * [.revokeAction(data)](#ClientDecoding+revokeAction) ⇒ <code>\*</code>
    * [.withdrawAction(data)](#ClientDecoding+withdrawAction) ⇒ <code>\*</code>
    * [.updateDaoMetadataRawAction(data)](#ClientDecoding+updateDaoMetadataRawAction) ⇒ <code>\*</code>
    * [.updateDaoMetadataAction(data)](#ClientDecoding+updateDaoMetadataAction) ⇒ <code>\*</code>
    * [.setDaoUriAction(data)](#ClientDecoding+setDaoUriAction) ⇒ <code>\*</code>
    * [.registerStandardCallbackAction(data)](#ClientDecoding+registerStandardCallbackAction) ⇒ <code>\*</code>
    * [.setSignatureValidatorAction(data)](#ClientDecoding+setSignatureValidatorAction) ⇒ <code>\*</code>
    * [.upgradeToAndCallAction(data)](#ClientDecoding+upgradeToAndCallAction) ⇒ <code>\*</code>
    * [.initializeFromAction(data)](#ClientDecoding+initializeFromAction) ⇒ <code>\*</code>
    * [.findInterface(data)](#ClientDecoding+findInterface) ⇒ <code>\*</code>
    * [.daoUpdateAction(data)](#ClientDecoding+daoUpdateAction) ⇒ <code>\*</code>

<a name="ClientDecoding+applyInstallationAction"></a>

### clientDecoding.applyInstallationAction(Uint8Array) ⇒ <code>\*</code>
**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{DecodedApplyInstallationParams}</p>  

| Param | Type |
| --- | --- |
| Uint8Array | <code>data</code> | 

<a name="ClientDecoding+applyUninstallationAction"></a>

### clientDecoding.applyUninstallationAction(Uint8Array) ⇒ <code>\*</code>
**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{DecodedApplyInstallationParams}</p>  

| Param | Type |
| --- | --- |
| Uint8Array | <code>data</code> | 

<a name="ClientDecoding+applyUpdateAction"></a>

### clientDecoding.applyUpdateAction(data) ⇒ <code>\*</code>
<p>Decodes the apply update parameters from an encoded apply update action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{DecodedApplyUpdateParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+grantAction"></a>

### clientDecoding.grantAction(data) ⇒ <code>\*</code>
<p>Decodes the permission parameters from an encoded grant action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{GrantPermissionDecodedParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+grantWithConditionAction"></a>

### clientDecoding.grantWithConditionAction(data) ⇒ <code>\*</code>
<p>Decodes the grant permission with condition parameters from an encoded grant with condition action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{GrantPermissionWithConditionParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+revokeAction"></a>

### clientDecoding.revokeAction(data) ⇒ <code>\*</code>
<p>Decodes the permission parameters from an encoded revoke action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{RevokePermissionDecodedParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+withdrawAction"></a>

### clientDecoding.withdrawAction(data) ⇒ <code>\*</code>
<p>Decodes the withdraw parameters from an encoded withdraw action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{WithdrawParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+updateDaoMetadataRawAction"></a>

### clientDecoding.updateDaoMetadataRawAction(data) ⇒ <code>\*</code>
<p>Decodes a dao metadata ipfs uri from an encoded update metadata action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{string}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+updateDaoMetadataAction"></a>

### clientDecoding.updateDaoMetadataAction(data) ⇒ <code>\*</code>
<p>Decodes a dao metadata from an encoded update metadata raw action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>`{Promise<DaoMetadata>}`</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+setDaoUriAction"></a>

### clientDecoding.setDaoUriAction(data) ⇒ <code>\*</code>
<p>Decodes the daoUri from a setDaoUriAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{string}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+registerStandardCallbackAction"></a>

### clientDecoding.registerStandardCallbackAction(data) ⇒ <code>\*</code>
<p>Decodes the RegisterStandardCallbackParams from a registerStandardCallbackAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{RegisterStandardCallbackParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+setSignatureValidatorAction"></a>

### clientDecoding.setSignatureValidatorAction(data) ⇒ <code>\*</code>
<p>Decodes the implementation address from an encoded upgradeToAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{string}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+upgradeToAndCallAction"></a>

### clientDecoding.upgradeToAndCallAction(data) ⇒ <code>\*</code>
<p>Decodes upgradeToAndCallback params from an upgradeToAndCallAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{UpgradeToAndCallParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+initializeFromAction"></a>

### clientDecoding.initializeFromAction(data) ⇒ <code>\*</code>
<p>Decodes the initializeFrom params from an initializeFromAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{InitializeFromParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+findInterface"></a>

### clientDecoding.findInterface(data) ⇒ <code>\*</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{(InterfaceParams | null)}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientDecoding+daoUpdateAction"></a>

### clientDecoding.daoUpdateAction(data) ⇒ <code>\*</code>
<p>Decodes the dao update params from a daoUpdateAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#ClientDecoding)  
**Returns**: <code>\*</code> - <p>{DaoUpdateDecodedParams}</p>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="ClientEncoding"></a>

## ClientEncoding
<p>Encoding module the SDK Generic Client</p>

**Kind**: global class  

* [ClientEncoding](#ClientEncoding)
    * [.applyInstallationAction(daoAddress, params)](#ClientEncoding+applyInstallationAction) ⇒ <code>\*</code>
    * [.applyUpdateAndPermissionsActionBlock(daoAddress, params)](#ClientEncoding+applyUpdateAndPermissionsActionBlock) ⇒ <code>\*</code>
    * [.grantAction(daoAddress, params)](#ClientEncoding+grantAction) ⇒ <code>\*</code>
    * [.grantWithConditionAction(daoAddress, params)](#ClientEncoding+grantWithConditionAction) ⇒ <code>\*</code>
    * [.revokeAction(daoAddress, params)](#ClientEncoding+revokeAction) ⇒ <code>\*</code>
    * [.withdrawAction(recipientAddressOrEns, value)](#ClientEncoding+withdrawAction) ⇒ <code>\*</code>
    * [.updateDaoMetadataAction(daoAddressOrEns, params)](#ClientEncoding+updateDaoMetadataAction) ⇒ <code>\*</code>
    * [.setDaoUriAction(daoAddressOrEns, daoUri)](#ClientEncoding+setDaoUriAction) ⇒ <code>\*</code>
    * [.registerStandardCallbackAction(daoAddressOrEns, daoUri)](#ClientEncoding+registerStandardCallbackAction) ⇒ <code>\*</code>
    * [.setSignatureValidatorAction(daoAddressOrEns, signatureValidator)](#ClientEncoding+setSignatureValidatorAction) ⇒ <code>\*</code>
    * [.upgradeToAction(daoAddressOrEns, implementationAddress)](#ClientEncoding+upgradeToAction) ⇒ <code>\*</code>
    * [.upgradeToAndCallAction(daoAddressOrEns, params)](#ClientEncoding+upgradeToAndCallAction) ⇒ <code>\*</code>
    * [.initializeFromAction(daoAddressOrEns, params)](#ClientEncoding+initializeFromAction) ⇒ <code>\*</code>
    * [.daoUpdateAction(daoAddressOrEns, params)](#ClientEncoding+daoUpdateAction) ⇒ <code>\*</code>

<a name="ClientEncoding+applyInstallationAction"></a>

### clientEncoding.applyInstallationAction(daoAddress, params) ⇒ <code>\*</code>
**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>ApplyInstallationParams</code> | 

<a name="ClientEncoding+applyUpdateAndPermissionsActionBlock"></a>

### clientEncoding.applyUpdateAndPermissionsActionBlock(daoAddress, params) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that applies an update to a plugin</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction[]}</p>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>ApplyUpdateParams</code> | 

<a name="ClientEncoding+grantAction"></a>

### clientEncoding.grantAction(daoAddress, params) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that grants a permission within a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>GrantPermissionParams</code> | 

<a name="ClientEncoding+grantWithConditionAction"></a>

### clientEncoding.grantWithConditionAction(daoAddress, params) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that grants a permission within a DAO given a certain condition</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>GrantPermissionWithConditionParams</code> | 

<a name="ClientEncoding+revokeAction"></a>

### clientEncoding.revokeAction(daoAddress, params) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that revokes a permission within a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>RevokePermissionParams</code> | 

<a name="ClientEncoding+withdrawAction"></a>

### clientEncoding.withdrawAction(recipientAddressOrEns, value) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that withdraws ether from the DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>`{Promise<DaoAction>}`</p>  

| Param | Type |
| --- | --- |
| recipientAddressOrEns | <code>string</code> | 
| value | <code>WithdrawParams</code> | 

<a name="ClientEncoding+updateDaoMetadataAction"></a>

### clientEncoding.updateDaoMetadataAction(daoAddressOrEns, params) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that updates the metadata the DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>`{Promise<DaoAction>}`</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>DaoMetadata</code> | 

<a name="ClientEncoding+setDaoUriAction"></a>

### clientEncoding.setDaoUriAction(daoAddressOrEns, daoUri) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that sets the dao uri</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| daoUri | <code>string</code> | 

<a name="ClientEncoding+registerStandardCallbackAction"></a>

### clientEncoding.registerStandardCallbackAction(daoAddressOrEns, daoUri) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that registers a new standard callback</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| daoUri | <code>string</code> | 

<a name="ClientEncoding+setSignatureValidatorAction"></a>

### clientEncoding.setSignatureValidatorAction(daoAddressOrEns, signatureValidator) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that sets the signature validator</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| signatureValidator | <code>string</code> | 

<a name="ClientEncoding+upgradeToAction"></a>

### clientEncoding.upgradeToAction(daoAddressOrEns, implementationAddress) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that sets a new implementation for the proxy</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| implementationAddress | <code>string</code> | 

<a name="ClientEncoding+upgradeToAndCallAction"></a>

### clientEncoding.upgradeToAndCallAction(daoAddressOrEns, params) ⇒ <code>\*</code>
<p>Computes the payload to be given when creating a proposal that sets a new implementation for the proxy and calls the callback function with the specified data</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  
**Returns**: <code>\*</code> - <p>{DaoAction}</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>UpgradeToAndCallParams</code> | 

<a name="ClientEncoding+initializeFromAction"></a>

### clientEncoding.initializeFromAction(daoAddressOrEns, params) ⇒ <code>\*</code>
<p>Computes an action to be passed to the upgradeToAndCallAction method when upgrading a DAO to a new version.</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>InitializeFromParams</code> | 

<a name="ClientEncoding+daoUpdateAction"></a>

### clientEncoding.daoUpdateAction(daoAddressOrEns, params) ⇒ <code>\*</code>
<p>Does the necessary steps to encode an action that updates a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#ClientEncoding)  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>DaoUpdateParams</code> | 

<a name="ClientEstimation"></a>

## ClientEstimation
<p>Estimation module the SDK Generic Client</p>

**Kind**: global class  

* [ClientEstimation](#ClientEstimation)
    * [.createDao(_params)](#ClientEstimation+createDao) ⇒ <code>\*</code>
    * [.deposit(params)](#ClientEstimation+deposit) ⇒ <code>\*</code>
    * [.setAllowance(_params)](#ClientEstimation+setAllowance) ⇒ <code>\*</code>
    * [.prepareUpdate(params)](#ClientEstimation+prepareUpdate) ⇒ <code>\*</code>

<a name="ClientEstimation+createDao"></a>

### clientEstimation.createDao(_params) ⇒ <code>\*</code>
<p>Estimates the gas fee of creating a DAO</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| _params | <code>CreateDaoParams</code> | 

<a name="ClientEstimation+deposit"></a>

### clientEstimation.deposit(params) ⇒ <code>\*</code>
<p>Estimates the gas fee of depositing ether or an ERC20 token into the DAO
This does not estimate the gas cost of updating the allowance of an ERC20 token</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>DepositParams</code> | 

<a name="ClientEstimation+setAllowance"></a>

### clientEstimation.setAllowance(_params) ⇒ <code>\*</code>
<p>Estimates the gas fee of updating the allowance of an ERC20 token</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| _params | <code>SetAllowanceParams</code> | 

<a name="ClientEstimation+prepareUpdate"></a>

### clientEstimation.prepareUpdate(params) ⇒ <code>\*</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#ClientEstimation)  
**Returns**: <code>\*</code> - <p>`{Promise<GasFeeEstimation>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUpdateParams</code> | 

<a name="ClientMethods"></a>

## ClientMethods
<p>Methods module the SDK Generic Client</p>

**Kind**: global class  

* [ClientMethods](#ClientMethods)
    * [.createDao(params)](#ClientMethods+createDao) ⇒ <code>\*</code>
    * [.pinMetadata(params)](#ClientMethods+pinMetadata) ⇒ <code>\*</code>
    * [.deposit(params)](#ClientMethods+deposit) ⇒ <code>\*</code>
    * [.setAllowance(params)](#ClientMethods+setAllowance) ⇒ <code>\*</code>
    * [.prepareUninstallation(params)](#ClientMethods+prepareUninstallation) ⇒ <code>\*</code>
    * [.prepareUpdate(params)](#ClientMethods+prepareUpdate) ⇒ <code>\*</code>
    * [.hasPermission(params)](#ClientMethods+hasPermission) ⇒ <code>\*</code>
    * [.getDao(daoAddressOrEns)](#ClientMethods+getDao) ⇒ <code>\*</code>
    * [.getDaos({)](#ClientMethods+getDaos) ⇒ <code>\*</code>
    * [.getDaoBalances({)](#ClientMethods+getDaoBalances) ⇒ <code>\*</code>
    * [.getDaoTransfers({)](#ClientMethods+getDaoTransfers) ⇒ <code>\*</code>
    * [.getPlugins({)](#ClientMethods+getPlugins) ⇒ <code>\*</code>
    * [.getPlugin(pluginAddress)](#ClientMethods+getPlugin) ⇒ <code>\*</code>
    * [.getProtocolVersion(contractAddress)](#ClientMethods+getProtocolVersion) ⇒ <code>\*</code>
    * [.isDaoUpdateProposal(proposalId)](#ClientMethods+isDaoUpdateProposal) ⇒ <code>\*</code>
    * [.isPluginUpdateProposal(proposalId)](#ClientMethods+isPluginUpdateProposal) ⇒ <code>\*</code>
    * [.isPluginUpdateProposalValid(proposalId)](#ClientMethods+isPluginUpdateProposalValid) ⇒ <code>\*</code>
    * [.isDaoUpdateProposalValid(proposalId, [version])](#ClientMethods+isDaoUpdateProposalValid) ⇒ <code>\*</code>
    * [.getDaoImplementation(daoFactoryAddress)](#ClientMethods+getDaoImplementation) ⇒ <code>\*</code>

<a name="ClientMethods+createDao"></a>

### clientMethods.createDao(params) ⇒ <code>\*</code>
<p>Creates a DAO with the given settings and plugins</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<DaoCreationStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>CreateDaoParams</code> | 

<a name="ClientMethods+pinMetadata"></a>

### clientMethods.pinMetadata(params) ⇒ <code>\*</code>
<p>Pins a metadata object into IPFS and retruns the generated hash</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<string>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>DaoMetadata</code> | 

<a name="ClientMethods+deposit"></a>

### clientMethods.deposit(params) ⇒ <code>\*</code>
<p>Deposits ether or an ERC20 token into the DAO</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<DaoDepositStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>DepositParams</code> | 

<a name="ClientMethods+setAllowance"></a>

### clientMethods.setAllowance(params) ⇒ <code>\*</code>
<p>Checks if the allowance is enough and updates it</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<SetAllowanceStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>SetAllowanceParams</code> | 

<a name="ClientMethods+prepareUninstallation"></a>

### clientMethods.prepareUninstallation(params) ⇒ <code>\*</code>
<p>Prepare uninstallation of a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<PrepareUninstallationStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUninstallationParams</code> | 

<a name="ClientMethods+prepareUpdate"></a>

### clientMethods.prepareUpdate(params) ⇒ <code>\*</code>
<p>Prepare update of a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{AsyncGenerator<PrepareUpdateStepValue>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUpdateParams</code> | 

<a name="ClientMethods+hasPermission"></a>

### clientMethods.hasPermission(params) ⇒ <code>\*</code>
<p>Checks whether a role is granted by the current DAO's ACL settings</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<boolean>}`</p>  

| Param | Type |
| --- | --- |
| params | <code>HasPermissionParams</code> | 

<a name="ClientMethods+getDao"></a>

### clientMethods.getDao(daoAddressOrEns) ⇒ <code>\*</code>
<p>Retrieves metadata for DAO with given identifier (address or ens domain)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>{(Promise&lt;DaoDetails | null&gt;)}</p>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 

<a name="ClientMethods+getDaos"></a>

### clientMethods.getDaos({) ⇒ <code>\*</code>
<p>Retrieves metadata for DAO with given identifier (address or ens domain)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>{Promise&lt;DaoListItem[]&gt;}</p>  

| Param | Type | Description |
| --- | --- | --- |
| { | <code>DaoQueryParams</code> | <p>limit = 10, skip = 0, direction = SortDirection.ASC, sortBy = DaoSortBy.CREATED_AT, }</p> |

<a name="ClientMethods+getDaoBalances"></a>

### clientMethods.getDaoBalances({) ⇒ <code>\*</code>
<p>Retrieves the asset balances of the given DAO, by default, ETH, DAI, USDC and USDT on Mainnet</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>{(Promise&lt;AssetBalance[] | null&gt;)}</p>  

| Param | Type | Description |
| --- | --- | --- |
| { | <code>DaoBalancesQueryParams</code> | <p>daoAddressOrEns, limit = 10, skip = 0, direction = SortDirection.ASC, sortBy = AssetBalanceSortBy.LAST_UPDATED, }</p> |

<a name="ClientMethods+getDaoTransfers"></a>

### clientMethods.getDaoTransfers({) ⇒ <code>\*</code>
<p>Retrieves the list of asset transfers to and from the given DAO (by default, from ETH, DAI, USDC and USDT, on Mainnet)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>{(Promise&lt;Transfer[] | null&gt;)}</p>  

| Param | Type | Description |
| --- | --- | --- |
| { | <code>TransferQueryParams</code> | <p>daoAddressOrEns, type, limit = 10, skip = 0, direction = SortDirection.ASC, sortBy = TransferSortBy.CREATED_AT, }</p> |

<a name="ClientMethods+getPlugins"></a>

### clientMethods.getPlugins({) ⇒ <code>\*</code>
<p>Retrieves the list of plugins available on the PluginRegistry</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>{(Promise&lt;PluginRepo[] | null&gt;)}</p>  

| Param | Type | Description |
| --- | --- | --- |
| { | <code>PluginQueryParams</code> | <p>limit = 10, skip = 0, direction = SortDirection.ASC, sortBy = PluginSortBy.SUBDOMAIN, subdomain }</p> |

<a name="ClientMethods+getPlugin"></a>

### clientMethods.getPlugin(pluginAddress) ⇒ <code>\*</code>
<p>Get plugin details given an address, release and build</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<PluginRepo>}`</p>  

| Param | Type |
| --- | --- |
| pluginAddress | <code>string</code> | 

<a name="ClientMethods+getProtocolVersion"></a>

### clientMethods.getProtocolVersion(contractAddress) ⇒ <code>\*</code>
<p>Returns the protocol version of a contract
if the transaction fails returns [1,0,0]</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>{Promise&lt;[number, number, number]&gt;}</p>  

| Param | Type |
| --- | --- |
| contractAddress | <code>string</code> | 

<a name="ClientMethods+isDaoUpdateProposal"></a>

### clientMethods.isDaoUpdateProposal(proposalId) ⇒ <code>\*</code>
<p>Given a proposal id returns if that proposal is a dao update proposal</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<boolean>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="ClientMethods+isPluginUpdateProposal"></a>

### clientMethods.isPluginUpdateProposal(proposalId) ⇒ <code>\*</code>
<p>Given a proposal id returns if that proposal is a plugin update proposal</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<boolean>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="ClientMethods+isPluginUpdateProposalValid"></a>

### clientMethods.isPluginUpdateProposalValid(proposalId) ⇒ <code>\*</code>
<p>Check if the specified proposal id is valid for updating a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<PluginUpdateProposalValidity>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="ClientMethods+isDaoUpdateProposalValid"></a>

### clientMethods.isDaoUpdateProposalValid(proposalId, [version]) ⇒ <code>\*</code>
<p>Check if the specified proposalId actions are valid for updating a dao</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<DaoUpdateProposalValidity>}`</p>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 
| [version] | <code>SupportedVersion</code> | 

<a name="ClientMethods+getDaoImplementation"></a>

### clientMethods.getDaoImplementation(daoFactoryAddress) ⇒ <code>\*</code>
<p>Return the implementation address for the specified dao factory</p>

**Kind**: instance method of [<code>ClientMethods</code>](#ClientMethods)  
**Returns**: <code>\*</code> - <p>`{Promise<string>}`</p>  

| Param | Type |
| --- | --- |
| daoFactoryAddress | <code>string</code> | 


## Classes

<dl>
<dt><a href="#client">Client</a></dt>
<dd><p>Provider a generic client with high level methods to manage and interact with DAO's</p></dd>
<dt><a href="#clientdecoding">ClientDecoding</a></dt>
<dd><p>Decoding module the SDK Generic Client</p></dd>
<dt><a href="#clientencoding">ClientEncoding</a></dt>
<dd><p>Encoding module the SDK Generic Client</p></dd>
<dt><a href="#clientestimation">ClientEstimation</a></dt>
<dd><p>Estimation module the SDK Generic Client</p></dd>
<dt><a href="#clientmethods">ClientMethods</a></dt>
<dd><p>Methods module the SDK Generic Client</p></dd>
</dl>

<a name="client"></a>

## Client
<p>Provider a generic client with high level methods to manage and interact with DAO's</p>

**Kind**: global class  
<a name="clientdecoding"></a>

## ClientDecoding
<p>Decoding module the SDK Generic Client</p>

**Kind**: global class  

* [ClientDecoding](#clientdecoding)
    * [.applyInstallationAction(Uint8Array)](#clientdecodingapplyinstallationactionuint8array--decodedapplyinstallationparams) ⇒ <code>DecodedApplyInstallationParams</code>
    * [.applyUninstallationAction(Uint8Array)](#clientdecodingapplyuninstallationactionuint8array--decodedapplyinstallationparams) ⇒ <code>DecodedApplyInstallationParams</code>
    * [.applyUpdateAction(data)](#clientdecodingapplyupdateactiondata--decodedapplyupdateparams) ⇒ <code>DecodedApplyUpdateParams</code>
    * [.grantAction(data)](#clientdecodinggrantactiondata--grantpermissiondecodedparams) ⇒ <code>GrantPermissionDecodedParams</code>
    * [.grantWithConditionAction(data)](#clientdecodinggrantwithconditionactiondata--grantpermissionwithconditionparams) ⇒ <code>GrantPermissionWithConditionParams</code>
    * [.revokeAction(data)](#clientdecodingrevokeactiondata--revokepermissiondecodedparams) ⇒ <code>RevokePermissionDecodedParams</code>
    * [.withdrawAction(data)](#clientdecodingwithdrawactiondata--withdrawparams) ⇒ <code>WithdrawParams</code>
    * [.updateDaoMetadataRawAction(data)](#clientdecodingupdatedaometadatarawactiondata--string) ⇒ <code>string</code>
    * [.updateDaoMetadataAction(data)](#clientdecodingupdatedaometadataactiondata--promisedaometadata) ⇒ <code>Promise.&lt;DaoMetadata&gt;</code>
    * [.setDaoUriAction(data)](#clientdecodingsetdaouriactiondata--string) ⇒ <code>string</code>
    * [.registerStandardCallbackAction(data)](#clientdecodingregisterstandardcallbackactiondata--registerstandardcallbackparams) ⇒ <code>RegisterStandardCallbackParams</code>
    * [.setSignatureValidatorAction(data)](#clientdecodingsetsignaturevalidatoractiondata--string) ⇒ <code>string</code>
    * [.upgradeToAndCallAction(data)](#clientdecodingupgradetoandcallactiondata--upgradetoandcallparams) ⇒ <code>UpgradeToAndCallParams</code>
    * [.initializeFromAction(data)](#clientdecodinginitializefromactiondata--initializefromparams) ⇒ <code>InitializeFromParams</code>
    * [.findInterface(data)](#clientdecodingfindinterfacedata--interfaceparams--null) ⇒ <code>InterfaceParams</code> \| <code>null</code>
    * [.daoUpdateAction(data)](#clientdecodingdaoupdateactiondata--daoupdatedecodedparams) ⇒ <code>DaoUpdateDecodedParams</code>

<a name="clientdecodingapplyinstallationaction"></a>

### clientDecoding.applyInstallationAction(Uint8Array) ⇒ <code>DecodedApplyInstallationParams</code>
**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>DecodedApplyInstallationParams</code>  

| Param | Type |
| --- | --- |
| Uint8Array | <code>data</code> | 

<a name="clientdecodingapplyuninstallationaction"></a>

### clientDecoding.applyUninstallationAction(Uint8Array) ⇒ <code>DecodedApplyInstallationParams</code>
**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>DecodedApplyInstallationParams</code>  

| Param | Type |
| --- | --- |
| Uint8Array | <code>data</code> | 

<a name="clientdecodingapplyupdateaction"></a>

### clientDecoding.applyUpdateAction(data) ⇒ <code>DecodedApplyUpdateParams</code>
<p>Decodes the apply update parameters from an encoded apply update action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>DecodedApplyUpdateParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodinggrantaction"></a>

### clientDecoding.grantAction(data) ⇒ <code>GrantPermissionDecodedParams</code>
<p>Decodes the permission parameters from an encoded grant action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>GrantPermissionDecodedParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodinggrantwithconditionaction"></a>

### clientDecoding.grantWithConditionAction(data) ⇒ <code>GrantPermissionWithConditionParams</code>
<p>Decodes the grant permission with condition parameters from an encoded grant with condition action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>GrantPermissionWithConditionParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingrevokeaction"></a>

### clientDecoding.revokeAction(data) ⇒ <code>RevokePermissionDecodedParams</code>
<p>Decodes the permission parameters from an encoded revoke action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>RevokePermissionDecodedParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingwithdrawaction"></a>

### clientDecoding.withdrawAction(data) ⇒ <code>WithdrawParams</code>
<p>Decodes the withdraw parameters from an encoded withdraw action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>WithdrawParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingupdatedaometadatarawaction"></a>

### clientDecoding.updateDaoMetadataRawAction(data) ⇒ <code>string</code>
<p>Decodes a dao metadata ipfs uri from an encoded update metadata action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>string</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingupdatedaometadataaction"></a>

### clientDecoding.updateDaoMetadataAction(data) ⇒ <code>Promise.&lt;DaoMetadata&gt;</code>
<p>Decodes a dao metadata from an encoded update metadata raw action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>Promise.&lt;DaoMetadata&gt;</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingsetdaouriaction"></a>

### clientDecoding.setDaoUriAction(data) ⇒ <code>string</code>
<p>Decodes the daoUri from a setDaoUriAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>string</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingregisterstandardcallbackaction"></a>

### clientDecoding.registerStandardCallbackAction(data) ⇒ <code>RegisterStandardCallbackParams</code>
<p>Decodes the RegisterStandardCallbackParams from a registerStandardCallbackAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>RegisterStandardCallbackParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingsetsignaturevalidatoraction"></a>

### clientDecoding.setSignatureValidatorAction(data) ⇒ <code>string</code>
<p>Decodes the implementation address from an encoded upgradeToAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>string</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingupgradetoandcallaction"></a>

### clientDecoding.upgradeToAndCallAction(data) ⇒ <code>UpgradeToAndCallParams</code>
<p>Decodes upgradeToAndCallback params from an upgradeToAndCallAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>UpgradeToAndCallParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodinginitializefromaction"></a>

### clientDecoding.initializeFromAction(data) ⇒ <code>InitializeFromParams</code>
<p>Decodes the initializeFrom params from an initializeFromAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>InitializeFromParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingfindinterface"></a>

### clientDecoding.findInterface(data) ⇒ <code>InterfaceParams</code> \| <code>null</code>
<p>Returns the decoded function info given the encoded data of an action</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>InterfaceParams</code> \| <code>null</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientdecodingdaoupdateaction"></a>

### clientDecoding.daoUpdateAction(data) ⇒ <code>DaoUpdateDecodedParams</code>
<p>Decodes the dao update params from a daoUpdateAction</p>

**Kind**: instance method of [<code>ClientDecoding</code>](#clientdecoding)  
**Returns**: <code>DaoUpdateDecodedParams</code>  

| Param | Type |
| --- | --- |
| data | <code>Uint8Array</code> | 

<a name="clientencoding"></a>

## ClientEncoding
<p>Encoding module the SDK Generic Client</p>

**Kind**: global class  

* [ClientEncoding](#clientencoding)
    * [.applyInstallationAction(daoAddress, params)](#clientencodingapplyinstallationactiondaoaddress-params--daoaction) ⇒ <code>DaoAction</code>
    * [.applyUpdateAndPermissionsActionBlock(daoAddress, params)](#clientencodingapplyupdateandpermissionsactionblockdaoaddress-params--arraydaoaction) ⇒ <code>Array.&lt;DaoAction&gt;</code>
    * [.grantAction(daoAddress, params)](#clientencodinggrantactiondaoaddress-params--daoaction) ⇒ <code>DaoAction</code>
    * [.grantWithConditionAction(daoAddress, params)](#clientencodinggrantwithconditionactiondaoaddress-params--daoaction) ⇒ <code>DaoAction</code>
    * [.revokeAction(daoAddress, params)](#clientencodingrevokeactiondaoaddress-params--daoaction) ⇒ <code>DaoAction</code>
    * [.withdrawAction(recipientAddressOrEns, value)](#clientencodingwithdrawactionrecipientaddressorens-value--promisedaoaction) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
    * [.updateDaoMetadataAction(daoAddressOrEns, params)](#clientencodingupdatedaometadataactiondaoaddressorens-params--promisedaoaction) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
    * [.setDaoUriAction(daoAddressOrEns, daoUri)](#clientencodingsetdaouriactiondaoaddressorens-daouri--daoaction) ⇒ <code>DaoAction</code>
    * [.registerStandardCallbackAction(daoAddressOrEns, daoUri)](#clientencodingregisterstandardcallbackactiondaoaddressorens-daouri--daoaction) ⇒ <code>DaoAction</code>
    * [.setSignatureValidatorAction(daoAddressOrEns, signatureValidator)](#clientencodingsetsignaturevalidatoractiondaoaddressorens-signaturevalidator--daoaction) ⇒ <code>DaoAction</code>
    * [.upgradeToAction(daoAddressOrEns, implementationAddress)](#clientencodingupgradetoactiondaoaddressorens-implementationaddress--daoaction) ⇒ <code>DaoAction</code>
    * [.upgradeToAndCallAction(daoAddressOrEns, params)](#clientencodingupgradetoandcallactiondaoaddressorens-params--daoaction) ⇒ <code>DaoAction</code>
    * [.initializeFromAction(daoAddressOrEns, params)](#clientencodinginitializefromactiondaoaddressorens-params--daoaction) ⇒ <code>DaoAction</code>
    * [.daoUpdateAction(daoAddressOrEns, params)](#clientencodingdaoupdateactiondaoaddressorens-params--promisedaoaction) ⇒ <code>Promise.&lt;DaoAction&gt;</code>

<a name="clientencodingapplyinstallationaction"></a>

### clientEncoding.applyInstallationAction(daoAddress, params) ⇒ <code>DaoAction</code>
**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>ApplyInstallationParams</code> | 

<a name="clientencodingapplyupdateandpermissionsactionblock"></a>

### clientEncoding.applyUpdateAndPermissionsActionBlock(daoAddress, params) ⇒ <code>Array.&lt;DaoAction&gt;</code>
<p>Computes the payload to be given when creating a proposal that applies an update to a plugin</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>Array.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>ApplyUpdateParams</code> | 

<a name="clientencodinggrantaction"></a>

### clientEncoding.grantAction(daoAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that grants a permission within a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>GrantPermissionParams</code> | 

<a name="clientencodinggrantwithconditionaction"></a>

### clientEncoding.grantWithConditionAction(daoAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that grants a permission within a DAO given a certain condition</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>GrantPermissionWithConditionParams</code> | 

<a name="clientencodingrevokeaction"></a>

### clientEncoding.revokeAction(daoAddress, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that revokes a permission within a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddress | <code>string</code> | 
| params | <code>RevokePermissionParams</code> | 

<a name="clientencodingwithdrawaction"></a>

### clientEncoding.withdrawAction(recipientAddressOrEns, value) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
<p>Computes the payload to be given when creating a proposal that withdraws ether from the DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>Promise.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| recipientAddressOrEns | <code>string</code> | 
| value | <code>WithdrawParams</code> | 

<a name="clientencodingupdatedaometadataaction"></a>

### clientEncoding.updateDaoMetadataAction(daoAddressOrEns, params) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
<p>Computes the payload to be given when creating a proposal that updates the metadata the DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>Promise.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>DaoMetadata</code> | 

<a name="clientencodingsetdaouriaction"></a>

### clientEncoding.setDaoUriAction(daoAddressOrEns, daoUri) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets the dao uri</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| daoUri | <code>string</code> | 

<a name="clientencodingregisterstandardcallbackaction"></a>

### clientEncoding.registerStandardCallbackAction(daoAddressOrEns, daoUri) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that registers a new standard callback</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| daoUri | <code>string</code> | 

<a name="clientencodingsetsignaturevalidatoraction"></a>

### clientEncoding.setSignatureValidatorAction(daoAddressOrEns, signatureValidator) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets the signature validator</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| signatureValidator | <code>string</code> | 

<a name="clientencodingupgradetoaction"></a>

### clientEncoding.upgradeToAction(daoAddressOrEns, implementationAddress) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets a new implementation for the proxy</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| implementationAddress | <code>string</code> | 

<a name="clientencodingupgradetoandcallaction"></a>

### clientEncoding.upgradeToAndCallAction(daoAddressOrEns, params) ⇒ <code>DaoAction</code>
<p>Computes the payload to be given when creating a proposal that sets a new implementation for the proxy and calls the callback function with the specified data</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>UpgradeToAndCallParams</code> | 

<a name="clientencodinginitializefromaction"></a>

### clientEncoding.initializeFromAction(daoAddressOrEns, params) ⇒ <code>DaoAction</code>
<p>Computes an action to be passed to the upgradeToAndCallAction method when upgrading a DAO to a new version.</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>DaoAction</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>InitializeFromParams</code> | 

<a name="clientencodingdaoupdateaction"></a>

### clientEncoding.daoUpdateAction(daoAddressOrEns, params) ⇒ <code>Promise.&lt;DaoAction&gt;</code>
<p>Does the necessary steps to encode an action that updates a DAO</p>

**Kind**: instance method of [<code>ClientEncoding</code>](#clientencoding)  
**Returns**: <code>Promise.&lt;DaoAction&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 
| params | <code>DaoUpdateParams</code> | 

<a name="clientestimation"></a>

## ClientEstimation
<p>Estimation module the SDK Generic Client</p>

**Kind**: global class  

* [ClientEstimation](#clientestimation)
    * [.createDao(_params)](#clientestimationcreatedao_params--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.deposit(params)](#clientestimationdepositparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.setAllowance(_params)](#clientestimationsetallowance_params--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
    * [.prepareUpdate(params)](#clientestimationprepareupdateparams--promisegasfeeestimation) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>

<a name="clientestimationcreatedao"></a>

### clientEstimation.createDao(_params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of creating a DAO</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#clientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| _params | <code>CreateDaoParams</code> | 

<a name="clientestimationdeposit"></a>

### clientEstimation.deposit(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of depositing ether or an ERC20 token into the DAO
This does not estimate the gas cost of updating the allowance of an ERC20 token</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#clientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DepositParams</code> | 

<a name="clientestimationsetallowance"></a>

### clientEstimation.setAllowance(_params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of updating the allowance of an ERC20 token</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#clientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| _params | <code>SetAllowanceParams</code> | 

<a name="clientestimationprepareupdate"></a>

### clientEstimation.prepareUpdate(params) ⇒ <code>Promise.&lt;GasFeeEstimation&gt;</code>
<p>Estimates the gas fee of preparing an update</p>

**Kind**: instance method of [<code>ClientEstimation</code>](#clientestimation)  
**Returns**: <code>Promise.&lt;GasFeeEstimation&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUpdateParams</code> | 

<a name="clientmethods"></a>

## ClientMethods
<p>Methods module the SDK Generic Client</p>

**Kind**: global class  

* [ClientMethods](#clientmethods)
    * [.createDao(params)](#clientmethodscreatedaoparams--asyncgeneratordaocreationstepvalue) ⇒ <code>AsyncGenerator.&lt;DaoCreationStepValue&gt;</code>
    * [.pinMetadata(params)](#clientmethodspinmetadataparams--promisestring) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.deposit(params)](#clientmethodsdepositparams--asyncgeneratordaodepositstepvalue) ⇒ <code>AsyncGenerator.&lt;DaoDepositStepValue&gt;</code>
    * [.setAllowance(params)](#clientmethodssetallowanceparams--asyncgeneratorsetallowancestepvalue) ⇒ <code>AsyncGenerator.&lt;SetAllowanceStepValue&gt;</code>
    * [.prepareUninstallation(params)](#clientmethodsprepareuninstallationparams--asyncgeneratorprepareuninstallationstepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareUninstallationStepValue&gt;</code>
    * [.prepareUpdate(params)](#clientmethodsprepareupdateparams--asyncgeneratorprepareupdatestepvalue) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
    * [.hasPermission(params)](#clientmethodshaspermissionparams--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getDao(daoAddressOrEns)](#clientmethodsgetdaodaoaddressorens--promisedaodetailsnull) ⇒ <code>Promise.&lt;(DaoDetails\|null)&gt;</code>
    * [.getDaos(params)](#clientmethodsgetdaosparams--promisearraydaolistitem) ⇒ <code>Promise.&lt;Array.&lt;DaoListItem&gt;&gt;</code>
    * [.getDaoBalances(params)](#clientmethodsgetdaobalancesparams--promisearrayassetbalancenull) ⇒ <code>Promise.&lt;(Array.&lt;AssetBalance&gt;\|null)&gt;</code>
    * [.getDaoTransfers(params)](#clientmethodsgetdaotransfersparams--promisearraytransfernull) ⇒ <code>Promise.&lt;(Array.&lt;Transfer&gt;\|null)&gt;</code>
    * [.getPlugins(params, [includeMetadata])](#clientmethodsgetpluginsparams-includemetadata--promisearraypluginreponull) ⇒ <code>Promise.&lt;(Array.&lt;PluginRepo&gt;\|null)&gt;</code>
    * [.getPlugin(pluginAddress, [includeMetadata])](#clientmethodsgetpluginpluginaddress-includemetadata--promisepluginrepo) ⇒ <code>Promise.&lt;PluginRepo&gt;</code>
    * [.getProtocolVersion(contractAddress)](#clientmethodsgetprotocolversioncontractaddress--promisearraynumber) ⇒ <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>
    * [.isDaoUpdateProposal(proposalId)](#clientmethodsisdaoupdateproposalproposalid--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.isPluginUpdateProposal(proposalId)](#clientmethodsispluginupdateproposalproposalid--promiseboolean) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.isPluginUpdateProposalValid(proposalId)](#clientmethodsispluginupdateproposalvalidproposalid--promisepluginupdateproposalvalidity) ⇒ <code>Promise.&lt;PluginUpdateProposalValidity&gt;</code>
    * [.isDaoUpdateProposalValid(proposalId, [version])](#clientmethodsisdaoupdateproposalvalidproposalid-version--promisedaoupdateproposalvalidity) ⇒ <code>Promise.&lt;DaoUpdateProposalValidity&gt;</code>
    * [.getDaoImplementation(daoFactoryAddress)](#clientmethodsgetdaoimplementationdaofactoryaddress--promisestring) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="clientmethodscreatedao"></a>

### clientMethods.createDao(params) ⇒ <code>AsyncGenerator.&lt;DaoCreationStepValue&gt;</code>
<p>Creates a DAO with the given settings and plugins</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>AsyncGenerator.&lt;DaoCreationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>CreateDaoParams</code> | 

<a name="clientmethodspinmetadata"></a>

### clientMethods.pinMetadata(params) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Pins a metadata object into IPFS and retruns the generated hash</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DaoMetadata</code> | 

<a name="clientmethodsdeposit"></a>

### clientMethods.deposit(params) ⇒ <code>AsyncGenerator.&lt;DaoDepositStepValue&gt;</code>
<p>Deposits ether or an ERC20 token into the DAO</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>AsyncGenerator.&lt;DaoDepositStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>DepositParams</code> | 

<a name="clientmethodssetallowance"></a>

### clientMethods.setAllowance(params) ⇒ <code>AsyncGenerator.&lt;SetAllowanceStepValue&gt;</code>
<p>Checks if the allowance is enough and updates it</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>AsyncGenerator.&lt;SetAllowanceStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>SetAllowanceParams</code> | 

<a name="clientmethodsprepareuninstallation"></a>

### clientMethods.prepareUninstallation(params) ⇒ <code>AsyncGenerator.&lt;PrepareUninstallationStepValue&gt;</code>
<p>Prepare uninstallation of a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUninstallationStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUninstallationParams</code> | 

<a name="clientmethodsprepareupdate"></a>

### clientMethods.prepareUpdate(params) ⇒ <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>
<p>Prepare update of a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>AsyncGenerator.&lt;PrepareUpdateStepValue&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>PrepareUpdateParams</code> | 

<a name="clientmethodshaspermission"></a>

### clientMethods.hasPermission(params) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks whether a role is granted by the current DAO's ACL settings</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| params | <code>HasPermissionParams</code> | 

<a name="clientmethodsgetdao"></a>

### clientMethods.getDao(daoAddressOrEns) ⇒ <code>Promise.&lt;(DaoDetails\|null)&gt;</code>
<p>Retrieves metadata for DAO with given identifier (address or ens domain)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;(DaoDetails\|null)&gt;</code>  

| Param | Type |
| --- | --- |
| daoAddressOrEns | <code>string</code> | 

<a name="clientmethodsgetdaos"></a>

### clientMethods.getDaos(params) ⇒ <code>Promise.&lt;Array.&lt;DaoListItem&gt;&gt;</code>
<p>Retrieves metadata for DAO with given identifier (address or ens domain)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;DaoListItem&gt;&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>DaoQueryParams</code> | <ul> <li>limit = 10 <ul> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = DaoSortBy.CREATED_AT</li> </ul> </li> </ul> |

<a name="clientmethodsgetdaobalances"></a>

### clientMethods.getDaoBalances(params) ⇒ <code>Promise.&lt;(Array.&lt;AssetBalance&gt;\|null)&gt;</code>
<p>Retrieves the asset balances of the given DAO, by default, ETH, DAI, USDC and USDT on Mainnet</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;(Array.&lt;AssetBalance&gt;\|null)&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>DaoBalancesQueryParams</code> | <ul> <li>daoAddressOrEns <ul> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = AssetBalanceSortBy.LAST_UPDATED</li> </ul> </li> </ul> |

<a name="clientmethodsgetdaotransfers"></a>

### clientMethods.getDaoTransfers(params) ⇒ <code>Promise.&lt;(Array.&lt;Transfer&gt;\|null)&gt;</code>
<p>Retrieves the list of asset transfers to and from the given DAO (by default, from ETH, DAI, USDC and USDT, on Mainnet)</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;(Array.&lt;Transfer&gt;\|null)&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>TransferQueryParams</code> | <ul> <li>daoAddressOrEns <ul> <li>type</li> <li>limit = 10</li> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = TransferSortBy.CREATED_AT</li> </ul> </li> </ul> |

<a name="clientmethodsgetplugins"></a>

### clientMethods.getPlugins(params, [includeMetadata]) ⇒ <code>Promise.&lt;(Array.&lt;PluginRepo&gt;\|null)&gt;</code>
<p>Retrieves the list of plugins available on the PluginRegistry</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;(Array.&lt;PluginRepo&gt;\|null)&gt;</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>PluginQueryParams</code> |  | <ul> <li>limit = 10 <ul> <li>skip = 0</li> <li>direction = SortDirection.ASC</li> <li>sortBy = PluginSortBy.SUBDOMAIN</li> <li>subdomain</li> </ul> </li> </ul> |
| [includeMetadata] | <code>boolean</code> | <code>true</code> |  |

<a name="clientmethodsgetplugin"></a>

### clientMethods.getPlugin(pluginAddress, [includeMetadata]) ⇒ <code>Promise.&lt;PluginRepo&gt;</code>
<p>Get plugin details given an address, release and build</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;PluginRepo&gt;</code>  

| Param | Type | Default |
| --- | --- | --- |
| pluginAddress | <code>string</code> |  | 
| [includeMetadata] | <code>boolean</code> | <code>true</code> | 

<a name="clientmethodsgetprotocolversion"></a>

### clientMethods.getProtocolVersion(contractAddress) ⇒ <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>
<p>Returns the protocol version of a contract
if the transaction fails returns [1,0,0]</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>  

| Param | Type |
| --- | --- |
| contractAddress | <code>string</code> | 

<a name="clientmethodsisdaoupdateproposal"></a>

### clientMethods.isDaoUpdateProposal(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Given a proposal id returns if that proposal is a dao update proposal</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="clientmethodsispluginupdateproposal"></a>

### clientMethods.isPluginUpdateProposal(proposalId) ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Given a proposal id returns if that proposal is a plugin update proposal</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;boolean&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="clientmethodsispluginupdateproposalvalid"></a>

### clientMethods.isPluginUpdateProposalValid(proposalId) ⇒ <code>Promise.&lt;PluginUpdateProposalValidity&gt;</code>
<p>Check if the specified proposal id is valid for updating a plugin</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;PluginUpdateProposalValidity&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 

<a name="clientmethodsisdaoupdateproposalvalid"></a>

### clientMethods.isDaoUpdateProposalValid(proposalId, [version]) ⇒ <code>Promise.&lt;DaoUpdateProposalValidity&gt;</code>
<p>Check if the specified proposalId actions are valid for updating a dao</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;DaoUpdateProposalValidity&gt;</code>  

| Param | Type |
| --- | --- |
| proposalId | <code>string</code> | 
| [version] | <code>SupportedVersion</code> | 

<a name="clientmethodsgetdaoimplementation"></a>

### clientMethods.getDaoImplementation(daoFactoryAddress) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Return the implementation address for the specified dao factory</p>

**Kind**: instance method of [<code>ClientMethods</code>](#clientmethods)  
**Returns**: <code>Promise.&lt;string&gt;</code>  

| Param | Type |
| --- | --- |
| daoFactoryAddress | <code>string</code> | 


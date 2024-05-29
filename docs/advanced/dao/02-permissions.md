---
title: Permissions
sidebar_label: Permissions
sidebar_position: 2
---

# Dao Permissions

The following functions in the DAO are permissioned:

| Functions | Permission Identifier | Description |
| --- | --- | --- |
| grant, grantWithCondition, revoke | ROOT_PERMISSION_ID | Required to manage permissions of the DAO and associated plugins. |
| execute | EXECUTE_PERMISSION_ID | Required to execute arbitrary actions. |
| _authorizeUpgrade | UPGRADE_DAO_PERMISSION_ID | Required to upgrade the DAO (via the https://eips.ethereum.org/EIPS/eip-1822). |
| setMetadata | SET_METADATA_PERMISSION_ID | Required to set the DAO’s metadata and https://eips.ethereum.org/EIPS/eip-4824. |
| setTrustedForwarder | SET_TRUSTED_FORWARDER_PERMISSION_ID | Required to set the DAO’s trusted forwarder for meta transactions. |
| registerStandardCallback | REGISTER_STANDARD_CALLBACK_PERMISSION_ID | Required to register a standard callback for an https://eips.ethereum.org/EIPS/eip-165 interface ID. |

Plugins installed on the DAO might introduce other permissions and associated permission identifiers. This additional permissions are specified by the plugin itself.
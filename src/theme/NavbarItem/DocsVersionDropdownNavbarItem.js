import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';

// We don't want to show the Versions Dropdown in the mainpage.
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const {pathname} = useLocation();
  const {activeDoc} = useActiveDocContext(props.docsPluginId);

  // Check if the current path is the front page
  const isFrontPage = pathname === '' || pathname === '/';

  // Always show the default docs dropdown
  const defaultDocsDropdown = (
    <DocsVersionDropdownNavbarItem {...props} docsPluginId="default" />
  );

  // Show the /docs version dropdown on the front page
  if (isFrontPage && props.docsPluginId === 'default') {
    return defaultDocsDropdown;
  }
  // If there's no active document, or the plugin is "default", don't display any dropdown
  if (!activeDoc && props.docsPluginId === 'default') {
    return defaultDocsDropdown;
  }

  // Check if there's an active document for the current plugin
  if (activeDoc) {
    return <DocsVersionDropdownNavbarItem {...props} />;
  }
}

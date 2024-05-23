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

  // Show the /docs version dropdown on the front page
  if (isFrontPage) {
    return <DocsVersionDropdownNavbarItem docsPluginId="default" {...props} />;
  }

  // Check if there's an active document for the current plugin
  if (!activeDoc) {
    return null;
  }

  // Otherwise, render the version dropdown for the active document's plugin
  return <DocsVersionDropdownNavbarItem {...props} />;
}

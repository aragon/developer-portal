import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';

// We don't want to show the Versions Dropdown in the mainpage.
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const {activeDoc} = useActiveDocContext(props.docsPluginId);
  if (!activeDoc) {
    return null;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}

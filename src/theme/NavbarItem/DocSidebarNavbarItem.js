import React from 'react';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';
import {useLayoutDocsSidebar} from '@docusaurus/theme-common/internal';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import {useLocation} from '@docusaurus/router';

export default function DocSidebarNavbarItem({
  sidebarId,
  label,
  docsPluginId,
  ...props
}) {
  const {pathname} = useLocation();
  const {activeDoc} = useActiveDocContext(docsPluginId);
  const sidebarLink = useLayoutDocsSidebar(sidebarId, docsPluginId).link;

  if (!sidebarLink) {
    throw new Error(
      `DocSidebarNavbarItem: Sidebar with ID "${sidebarId}" doesn't have anything to be linked to.`,
    );
  }

  // Specify paths where the items should be hidden
  if (pathname == '/' || pathname.includes('/1.3.0')) {
    return null;
  }

  return (
    <DefaultNavbarItem
      exact
      {...props}
      isActive={() => activeDoc?.sidebar === sidebarId}
      label={label ?? sidebarLink.label}
      to={sidebarLink.path}
    />
  );
}

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

  const isFrontPage = pathname === '' || pathname === '/';
  const isLegacyPath = pathname.startsWith('/legacy');

  // Conditionally render the "Legacy Docs" item if the pathname starts with '/legacy'
  if (isLegacyPath) {
    if (label === 'Legacy Docs') {
      return (
        <DefaultNavbarItem
          exact
          {...props}
          isActive={() => activeDoc?.sidebar === sidebarId}
          label="Legacy Docs"
          to="/legacy"
        />
      );
    }
    // Hide other items on the legacy path
    return null;
  }

  // Hide the "Legacy Docs" item if not on the legacy path or the front page
  if (label === 'Legacy Docs' && !isLegacyPath && !isFrontPage) {
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

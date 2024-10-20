import React from 'react';
import OriginalDocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useLocation} from '@docusaurus/router';

export default function DocsVersionDropdownNavbarItem({...props}) {
  const {pathname} = useLocation();

  // Specify paths where the dropdown should be hidden
  if (pathname == '/') {
    return null;
  }

  return <OriginalDocsVersionDropdownNavbarItem {...props} />;
}

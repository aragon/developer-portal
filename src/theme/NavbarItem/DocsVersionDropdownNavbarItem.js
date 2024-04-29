import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useLocation} from '@docusaurus/router';

// We don't want to show the Versions Dropdown in the mainpage.
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const {pathname} = useLocation();

  const isRootPath = pathname === '' || pathname === '/';

  // Render null if the pathname does not start with /docs
  if (isRootPath) {
    return null;
  }
  return (
    <>
      <DocsVersionDropdownNavbarItem {...props} />
    </>
  );
}


import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

// The layout component is the SHELL for all of the "pages" w/ router
// It contains; UserHeader, Sidebar and MobileNav components
    // then it wraps the children specific to each section of portfolio

// Layout component sets the Sidebar nad MobileNav components so that
    // we have navigation ON EVERY page. it also adds Userheader
    // to every page and we pass user prop to it as well.
    // we use the children for DYNAMIC page content which will be
    // the components passed from the parent page components

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
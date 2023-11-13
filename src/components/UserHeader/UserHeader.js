import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

// User prop we fetch as data is used to populate the conents here
// the user.basics sections contains the details
// also include the link to dynamically update/generate the resume 
const UserHeader = ({ user }) => {
  const location = useLocation();


// note the (user. calls below in the html)
// we grabbed user prop back in App.js

// we use "useLocation" hook from react router to check if we are on home page


return (
  <HeaderContainer isHome={location.pathname === '/'}>
    <Header>
      <Image src={user.basics.picture} />
      <div>
        <h2>{user.basics.name}</h2>
        <h4>
          <a
            href={`https://gitconnected.com/${user.basics.username}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            @{user.basics.username}
          </a>
        </h4>
        <p>{user.basics.label}</p>
        <p>Coding in {user.basics.region}</p>
        <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
        <p>{user.basics.headline}</p>
        <p>
          Blog:{' '}
          <a href={'https://medium.com/@zerofilter'} target="_blank" rel="noreferrer noopener">
            {'Medium'}
          </a>
        </p>
      </div>
    </Header>
    <div>
      <ViewResumeLink
        href={`https://gitconnected.com/${user.basics.username}/resume`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>View Résumé</span>
        <ArrowRight16 />
      </ViewResumeLink>
    </div>
  </HeaderContainer>
);
};

export default UserHeader;
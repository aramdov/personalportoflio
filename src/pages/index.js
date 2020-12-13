import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

// We use React router to access the views for each part of our portoflio
// Each page is supplied the user prop from the API call
    // this is what we need to build each page

// this Index.js file declares routes for each portfolio screen

const Pages = ({ user }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
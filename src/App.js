import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import Pages from './pages';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    // Reminder to use your username below for the GET REQUEST with (fetch)
    // This is all fetching our data
    fetch('https://gitconnected.com/v1/portfolio/aramdov')
      .then(res => res.json())
      .then(user => {
        setUser(user)
      });
  }, []);


  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;

}

// Shared styles: since we will have navigation on the side and flip through pages
// that share similar UI/style/formatting. (Could this be like fragments in android?)
// fragments don't keep style but maybe there is a way to do that for advanced UI?

// shared styles are in the styles.js file

// Header component lies in src/components/UserHeader
  // contains basic info like avatar, name, username, job, location, YoE, headline


export default App;

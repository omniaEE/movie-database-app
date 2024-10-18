import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Switch } from '@mui/material'; 

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check the cookie for the dark mode preference
  useEffect(() => {
    const darkModePref = Cookies.get('theme') === 'dark';
    setDarkMode(darkModePref);
    if (darkModePref) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode and update the cookie
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      Cookies.set('theme', 'dark', { expires: 7 }); 
    } else {
      document.documentElement.classList.remove('dark');
      Cookies.set('theme', 'light', { expires: 7 }); 
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        color="default" 
        inputProps={{ 'aria-label': 'Dark mode toggle' }}
      />
    </div>
  );
}

export default DarkModeToggle;

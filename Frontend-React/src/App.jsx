import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import { useTheme } from './javascript/themeContext.jsx';
import './App.css';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`corpo ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <HeaderComp />
      <div>
        <Outlet />
      </div>
      <FooterComp />
    </div>
  );
}

export default App;

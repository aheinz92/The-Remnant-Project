import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityPanel from './AccessibilityPanel'; // Uncommented import

const Layout = ({ changeFontSize, changeFont, changeColorScheme }) => {
  return (
    <>
      {/* Pass accessibility functions to AccessibilityPanel */}
      <AccessibilityPanel changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />
      <Navbar /> {/* Navbar likely doesn't need these props directly */}
      <main>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
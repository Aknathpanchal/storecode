import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 750);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the styles based on the `bg` state
  const headerStyles = {
    height: bg ? '10vh' : '12vh',
    backgroundColor: bg ? 'gray' : 'transparent',
    color: 'white',
    position: bg ? 'fixed' : 'absolute',
    top: '0',
    width: '100%',
    zIndex: '10',
    transition: 'all 300ms',
  };

  const containerStyles = {
    // margin: '0 auto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

 

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* logo */}
        <div className='Logo'> 
           <a href='#'>
          LOGO
        </a>
        </div>
      
        {/* nav */}
        <div className='nav'>
          <Nav />
        </div>
        {/* nav mobile*/}
        <div className='navMobile'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;


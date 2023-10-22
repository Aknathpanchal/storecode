import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import { navigation } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav style={{ position: 'relative' }}>
      <div
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer', color: 'white' }}
      >
        <MenuAlt3Icon style={{ width: '2rem', height: '2rem' }} />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        style={{
          width: '1rem',
          height: '1rem',
          borderRadius: '50%',
          backgroundColor: '#1ac6c6fc', // Change to your desired accent color
          position: 'fixed',
          top: '0',
          right: '0',
        }}
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        style={{
          right: isOpen ? '0' : '-100%',
          position: 'fixed',
          top: '0',
          bottom: '0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s',
          overflow: 'hidden',
        }}
      >
        <div
          onClick={() => setIsOpen(false)}
          style={{ cursor: 'pointer', position: 'absolute', top: '1rem', right: '1rem' }}
        >
          <XIcon style={{ width: '2rem', height: '2rem' }} />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx} style={{ marginBottom: '1rem' }}>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  backgroundColor: 'transparent',
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        {/* <Socials/> */}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;


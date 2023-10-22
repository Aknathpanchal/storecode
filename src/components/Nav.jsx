import React from 'react';
// import { navigation } from '../data';
import { Link } from 'react-scroll';
import { navigation } from '../data';



const Nav = () => {
  return (
    <nav>
      <ul 
      className='flex uppercase text-[15px]'
      >
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='flex p-4 text-center justify-center hover:text-black hover:bg-white w-[100px] hover:rounded-2xl'
                style={{
                                  cursor: 'pointer',
                                  transitionDuration: 'color 300ms',}}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
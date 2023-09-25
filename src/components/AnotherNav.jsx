import React from 'react';
import { NavLink } from 'react-router-dom';

const navContent = [
    {label:'Home',url:'/'},
    {label:'Videos',url:'/videos'},
    {label:'Leaderboard',url:'/leaderboard'},
    {label:'Challenges',url:'/challenges'},
]

const AnotherNav = () => {
  return (
    <div className='flex justify-center items-center gap-1'>
      {navContent.map((item,index) => (
        <NavLink to={item.url} className='px-[16px] text-center rounded-full py-[12px] text-base font-semibold text-gray-600 hover:text-gray-800' key={item.label}>
            {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default AnotherNav;

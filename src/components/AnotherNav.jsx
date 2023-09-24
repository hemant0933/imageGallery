import React from 'react';

const navContent = [
    {label:'Home',url:'/'},
    {label:'Videos',url:'/'},
    {label:'Leaderboard',url:'/'},
    {label:'Challenges',url:'/'},
]

const AnotherNav = () => {
  return (
    <div className='flex justify-center items-center gap-1'>
      {navContent.map((item,index) => (
        <a href={item.url} className='px-[16px] text-center rounded-full py-[12px] text-base font-semibold text-gray-600 hover:text-gray-800' key={item.label}>
            {item.label}
        </a>
      ))}
    </div>
  );
}

export default AnotherNav;

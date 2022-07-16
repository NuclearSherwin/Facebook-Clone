import React from 'react'

function HeaderIcon({ Icon, active }) {
  return (
    <div className='flex items-center cursor-pointer sm:h-10 md:px-10 
    md:hover:bg-gray-100 rounded-xl active:border-b-2
     active:border-blue-500 group text-gray-500'>
        <Icon className={`h-5 md:px-10 sm:h-7 mx-auto
         group-hover:text-blue-500 ${active && 'text-blue-500'}`}/>
    </div>
  )
}

export default HeaderIcon
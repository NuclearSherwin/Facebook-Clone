import React from 'react'
import Image from 'next/dist/client/image'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from "@heroicons/react/solid"
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon' 

function Header() {
  return (
    <div>

        {/* Left */}
        <div className='flex items-center'>
            <Image src="https://links.papareact.com/5me" 
                width={40}
                height={40}
                layout="fixed"
            />

            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
              <SearchIcon className='h-6 text-gray-600'/>
              <input className='flex ml-2 items-center bg-transparent outline-none
              placeholder-gray-500'
               type="text" placeholder='Search' />
            </div>
        </div>

        {/* Center */}
        <div className='flex justify-center flex-grow'>
          <div>
            <HeaderIcon Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
          </div>
        </div>

        {/* Right */}
    </div>
  )
}

export default Header
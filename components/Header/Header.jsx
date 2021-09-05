import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input className="pl-5 flex-grow bg-transparent outline-none text-gray-400" type="text" placeholder="start your search" />
        <SearchIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 "/>

        <div className="flex space-x-2 items-center p-2 rounded-full border-2">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>

    </header>
  );
};

export default Header;
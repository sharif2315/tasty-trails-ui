'use client'
import SearchInput from "./SearchInput"
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { MdAccountCircle } from "react-icons/md";


interface NavItemProps {
    name: string;
    href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, href='#' }) => {
    return (
        <MenuItem>
            <a
                href={href}
                className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'
            >
                {name}
            </a>
        </MenuItem>
    )
}

const Navbar = () => {
    return (
        <div className="sticky flex gap-4 py-2 justify-between items-center">

            <div className="text-xl">Hello, Sharif</div>

            <SearchInput />

            <Menu as="div" className="relative ml-3">
                <div>
                    <MenuButton className="relative flex rounded-full text-sm">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <MdAccountCircle 
                            className="bg-white text-gray-500 rounded-full" 
                            size={40} 
                        />                        
                    </MenuButton>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <NavItem name="Your Profile" />
                        <NavItem name="Settings" />
                        <NavItem name=" Sign out" />
                    </MenuItems>
                </Transition>
            </Menu>

        </div>
    )
}

export default Navbar
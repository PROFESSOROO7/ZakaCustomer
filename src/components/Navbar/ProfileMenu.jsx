import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaUser,FaShoppingCart } from "react-icons/fa";
import { GoSignOut } from "react-icons/go"; 
import { Link } from "react-router-dom"; 
import { GoHistory } from "react-icons/go";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
         Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <Link to="/profile" >
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                > 
                <div className='flex items-center'>
                  <div className='w-8 '>
                  <FaUser/>
                  </div>
                  <div className=''>Profile</div>
                  </div>
                </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="/orderhistory" >
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                > 
                <div className='flex items-center'>
                  <div className='w-8 '>
                  <GoHistory />
                  </div>
                  <div className=''>Order History</div>
                  </div>
                </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="/cart" >
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                > 
                <div className='flex items-center'>
                  <div className='w-8 '>
                  <FaShoppingCart />
                  </div>
                  <div className=''>Cart</div>
                  </div>
                </a>
                </Link>
              )}
            </Menu.Item>
        
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/login" >
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    <div className='flex items-center'>
                  <div className='w-8 '>
                  <GoSignOut/>
                  </div>
                  <div className=''>Sign Out</div>
                  </div>
                  </button>
                  </Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

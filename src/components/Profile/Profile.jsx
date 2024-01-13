import Navbar from '../Navbar/Navbar'
import {UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
export default function Profile() {
  return (
    <>
    <Navbar/>
    <div className='px-20 dark:text-white dark:bg-black h-screen'> 
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal detail.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-white text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-white text-gray-700 sm:col-span-2 sm:mt-0">Ali</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-white text-gray-900">Profile Pic</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-white text-gray-700 sm:col-span-2 sm:mt-0"> <UserCircleIcon className="h-12 w-12 text-gray-300" /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-white text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-white text-gray-700 sm:col-span-2 sm:mt-0">030123456789</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-white text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-white text-gray-700 sm:col-span-2 sm:mt-0">ali@gmail.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-white text-gray-900">Address</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-white text-gray-700 sm:col-span-2 sm:mt-0">Village Samma City Gujrat Province Gujrat</dd>
          </div>
          </dl>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/" > 
        <button type="button" className="text-sm font-semibold leading-6  dark:text-white text-gray-900">
         Go To Home
        </button>
        </Link>
        <Link to="/editprofile" >
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Edit Profile
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const NavBar = () => {
    const {user,setShowLogin,logout}=useContext(AppContext)
    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={assets.logo} alt='nav-img' className='w-28 sm:w-32 lg:w-40' />
            </Link>
            <div>
                {user ? (
                    <div className="relative group flex items-center gap-4">
                        <p
                        className='text-gray-600 max-xm:hidden pl-4'
                        >Hi,{user.name}</p>
                        {/* Profile Icon */}
                        <img src={assets.profile_icon} className='w-10 drop-shadow cursor-pointer' alt='user-img' />
                        
                        {/* Dropdown */}
                        <div className='absolute hidden group-hover:block top-12 right-0 bg-white z-10 text-black rounded shadow-md p-4'>
                            <ul>
                                <li 
                                //logout functionality
                                onClick={logout}
                                className="cursor-pointer hover:text-gray-500">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <button 
                        onClick={()=>setShowLogin(true)}
                        className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer'
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;

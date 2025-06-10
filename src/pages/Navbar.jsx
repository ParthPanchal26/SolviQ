import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white w-full z-20 sticky top-0 start-0 shadow">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">SolviQ</span>
                    </Link>

                    <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to='/sign-in' className="text-blue-600 transition-all cursor-pointer hover:text-green-600 hover:underline hover:underline-offset-1 w-[100px] font-medium rounded-lg text-lg px-4 py-2 text-center">Sign In</Link>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row">

                            <li>
                                <NavLink to='/' end className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:p-0 transition text-blue-800 underline  underline-offset-5"
                                        : "block py-2 px-3 text-slate-600 rounded-sm md:bg-transparent md:p-0"
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/courses' end className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:p-0 transition text-blue-800 underline  underline-offset-5"
                                        : "block py-2 px-3 text-slate-600 rounded-sm md:bg-transparent md:p-0"
                                }>Courses</NavLink>
                            </li>
                            <li>
                                <NavLink to='/my-learning' end className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:p-0 transition text-blue-800 underline  underline-offset-5"
                                        : "block py-2 px-3 text-slate-600 rounded-sm md:bg-transparent md:p-0"
                                }>My Learning</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about-us' end className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:p-0 transition text-blue-800 underline  underline-offset-5"
                                        : "block py-2 px-3 text-slate-600 rounded-sm md:bg-transparent md:p-0"
                                }>About Us</NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
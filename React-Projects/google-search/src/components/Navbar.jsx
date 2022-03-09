import React from 'react'
import {Link} from 'react-router-dom'
import { Search } from './Search'

const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl py-1 px-2 bg-blue-300 rounded font-medium text-white dark:bg-gray-500 dark:text-gray-900 ">Google🔎</p>
                </Link>
                <button type="button" onClick={()=>{setDarkTheme(!darkTheme)}} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white p-2 rounded-md hover:shadow">
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
            <Search/>
        </div>
    )
}

export  {Navbar}

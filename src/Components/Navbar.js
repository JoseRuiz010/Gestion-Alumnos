import React from 'react'
import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (

        <nav className='flex items-center h-16 bg-blue-700 relative justify-between sm:justify-around'>
            <img className='h-12 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/855/855601.png' alt='Logo' />
            <div className="hidden w-full md:block md:w-auto collapse navbar-collapse flex-grow items-center" id="mobile-menu">
                <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                    <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'><NavLink to={"/"}>Home</NavLink> </li>
                    <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'><NavLink to={"/alumnos"}>Alumnos</NavLink></li>
                    <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'><NavLink to={"/materias"}>Materias</NavLink></li>
                    <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'><NavLink to={"/profesores"}>Profesores</NavLink></li>
                </ul>
            </div>
            <div className='flex'>
                <button className='font-bold text-white cursor-pointer hover:text-blue-300'>Sing In</button>
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </nav>

    )
}

export default Navbar
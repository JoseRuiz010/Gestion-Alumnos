import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { GlobalContext } from '../Context/GlobalContext'
const Navbar = () => {
    const { isOpenNavbar, changeIsOpenNavbar } = useContext(GlobalContext)
    return (
        <>

            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink> </li>
                            <li><NavLink to={"/alumnos"}>Alumnos</NavLink></li>
                            <li><NavLink to={"/materias"}>Materias</NavLink></li>
                            <li><NavLink to={"/profesores"}>Profesores</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <img className='h-12 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/855/855601.png' alt='Logo' />

                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><NavLink to={"/"}>Home</NavLink> </li>
                        <li><NavLink to={"/alumnos"}>Alumnos</NavLink></li>
                        <li><NavLink to={"/materias"}>Materias</NavLink></li>
                        <li><NavLink to={"/profesores"}>Profesores</NavLink></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Navbar
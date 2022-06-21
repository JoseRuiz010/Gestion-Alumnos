import React from 'react'
import { NavLink } from "react-router-dom"
const Navbar = () => {
    // const { isOpenNavbar, changeIsOpenNavbar } = useContext(GlobalContext)
    return (
        <>

            <div className="navbar bg-base-100 lg:px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div className="navbar-center hidden lg:block">
                            <img className='h-12 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/855/855601.png' alt='Logo' />
                        </div>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink> </li>
                            <li><NavLink to={"/alumnos"}>Alumnos</NavLink></li>
                            <li><NavLink to={"/materias"}>Materias</NavLink></li>
                            <li><NavLink to={"/profesores"}>Profesores</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center lg:hidden">
                    <img className='h-12 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/855/855601.png' alt='Logo' />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to={"/"}>Home</NavLink> </li>
                        <li><NavLink to={"/alumnos"}>Alumnos</NavLink></li>
                        <li><NavLink to={"/materias"}>Materias</NavLink></li>
                        <li><NavLink to={"/profesores"}>Profesores</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                        </div>
                    </label>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Navbar
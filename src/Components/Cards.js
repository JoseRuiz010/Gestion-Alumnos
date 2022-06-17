import React from 'react'
import { NavLink } from "react-router-dom"
export const Cards = ({ materia }) => {
    const { id, nombre, icono, profesores, evaluaciones } = materia
    return (
        <div className='m-6 py-8 px-8 max-w-sm  bg-white rounded-md shadow-xl hover:scale-105'>
            <div className='flex space-x-2 '>
                <div className='w-1/4 align-middle'>
                    <img className='bg-slate-500' src={icono} alt='LogoMateria' />
                </div>
                <h1 className='font-bold cursor-pointer hover:underline'><NavLink to={`/materias/${id}`}>{`Nombre: ${nombre}`} </NavLink></h1>
            </div>
        </div>
    )
}

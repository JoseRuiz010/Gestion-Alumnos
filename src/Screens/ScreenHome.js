import React, { useEffect, useState } from 'react'
import { Cards } from '../Components/Cards'
import { getMaterias } from '../services/CargarData'

export const ScreenHome = () => {
    const [materias, setmaterias] = useState()
    useEffect(() => {
        setmaterias(getMaterias())
    }, [])

    if (!materias) return <div> No hay materias</div>

    return (
        <div >
            <Navabar />
            <div className='h-1/6 mx-auto  sm:w-11/12'>
                <br /><br />
                <h1 className='text-center font-bold text-lg'>Curso: Primer Año</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto'>
                    {
                        materias.map(m => <Cards materia={m} />)
                    }
                </div>

            </div>
        </div>
    )
}

const Navabar = () => {
    return (
        <div className='flex justify-around  items-center h-16 bg-blue-700'>
            <img className='h-12 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/855/855601.png' alt='Logo' />
            <ul className='flex'>
                {/* <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'>Home</li>
                <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'>Alumnos</li>
                <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'>Materias</li>
                <li className='mx-5 font-bold text-white cursor-pointer hover:text-blue-300'>Profesores</li> */}
            </ul>
            <button className='font-bold text-white cursor-pointer hover:text-blue-300'>Sing In</button>
        </div>
    )
}
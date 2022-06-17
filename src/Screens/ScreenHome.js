import React, { useEffect, useState } from 'react'
import { Cards } from '../Components/Cards'
import { ArmarDatos, getMaterias, getNotasAlumnosXMateria } from '../services/CargarData'

export const ScreenHome = () => {
    const [materias, setmaterias] = useState()
    useEffect(() => {
        setmaterias(getMaterias())


    }, [])

    if (!materias) return <div> No hay materias</div>

    return (
        <div >

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

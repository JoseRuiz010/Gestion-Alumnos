import React, { useContext, useEffect } from 'react'
import { Cards } from '../Components/Cards'
import { GlobalContext } from '../Context/GlobalContext'
import { ArmarDatos, getMaterias } from '../services/CargarData'

export const ScreenHome = () => {

    const { materias,  cargarMaterias } = useContext(GlobalContext)
    useEffect(() => {
       
        cargarMaterias(getMaterias())
    }, [])

    if (!materias) return <div> No hay materias{JSON.stringify(materias)} </div>

    return (
        <div >

            <div className='h-1/6 mx-auto  sm:w-11/12'>
                <br /><br />
                <h1 className='text-center font-bold text-lg'>Curso: Primer Año</h1>
                <div className='grid mx-auto  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto'>
                    {
                        materias.map(m => <Cards key={m.id+Date.now()+2314} materia={m} />)
                    }
                </div>

            </div>
        </div>
    )
}

import React, { useContext, useEffect } from 'react'
import { Cards } from '../Components/Cards'
import { MensajeError } from '../Components/formularioAlumno/MensajeError'
import { GlobalContext } from '../Context/GlobalContext'
import { ArmarDatos, getMaterias } from '../services/CargarData'

export const ScreenHome = () => {

    const { materias, usuario, cargarMaterias } = useContext(GlobalContext)
    useEffect(() => {

        cargarMaterias(getMaterias())
    }, [])

    // if (!materias) return <div> No hay materias{JSON.stringify(materias)} </div>

    return (
        <div >

            <div className='h-1/6 mx-auto  sm:w-11/12'>
                <br /><br />
                <h1 className='text-center font-bold text-lg mb-7'>Curso: {usuario.curso.descripcion}</h1>
                <div className='grid mx-auto text-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto'>
                    {!materias ? <MensajeError mensaje={" No hay materias asignadas"} /> :
                        materias.map(m => <Cards key={m.id + Date.now() + 2314} materia={m} />)
                    }
                </div>

            </div>
        </div>
    )
}

import React, { useContext } from 'react'
import { Cards } from '../Components/Cards'
import { MensajeError } from '../Components/formularioAlumno/MensajeError'
import { GlobalContext } from '../Context/GlobalContext'


export const ScreenHome = () => {

    const { materias, usuario } = useContext(GlobalContext)

    return (
        <div >

            <div className='h-1/6 mx-auto  sm:w-11/12'>
                <br /><br />
                <h1 className='text-center font-bold text-lg mb-7'>Curso: {usuario.curso.descripcion}</h1>
                <div className='grid mx-auto text-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto'>
                    {
                        materias?.length < 1 ? <MensajeError mensaje={" No hay materias asignadas"} /> :
                            materias.map(m => <Cards key={m._id + Date.now() + 2314} materia={m} />)
                    }
                </div>

            </div>
        </div>
    )
}

import React, { useContext } from 'react'
import FormularioNuevoAlumno from '../Components/formularioAlumno/FormularioNuevoAlumno';
import { TablaAlumnos } from '../Components/TablasAlumnos';
import { GlobalContext } from '../Context/GlobalContext';
import { getAlumnos } from '../services/CargarData'

export const ScreenAlumnos = () => {

    const { stateNewAlumno, changeStateNewAlumno } = useContext(GlobalContext)
    return (
        <div className='mx-auto w-full  p-3 md:w-10/12 gap-2 py-5 '>
            <button className="btn btn-outline btn-info m-5" onClick={() => changeStateNewAlumno()}>Nuevo Alumno</button>
            {stateNewAlumno && <FormularioNuevoAlumno />}
            <h1 className='font-bold text-2xl text-center'>Lista Alumnos</h1>

            <div className='p-3 '>
                <TablaAlumnos obtenerAlumnos={getAlumnos()} />
            </div>
        </div>
    )
}

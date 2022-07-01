import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { useFetch } from '../../Hooks/useFetch';
import { getNotasFilterByMateria } from '../../services/CargarData';
import { HeaderDatosPersonales } from '../HeaderDatosPersonales';
import { HeaderNotaAlumnos } from './HeaderNotaAlumnos';
import { TablaNotaAlumnosCuerpo } from './TablaNotaAlumnosCuerpo';

export const TablaNotaAlumnos = ({ filtro, mostrarNombre }) => {
    const { id } = useParams();
    const [notasAlumnos, setnotasAlumnos] = useState();
    const { materias, alumnos } = useContext(GlobalContext)
    const { data, error, loading } = useFetch(`/evaluacionAlumno?materia=${id}`)



    if (!data) {
        return (<div>Cargando...</div>)
    }
    return (
        <div className='mx-auto w-full md:w-10/12'>

            {

                data.map(evaluaciones => (
                    <div key={evaluaciones} className='shadow-lg p-2' >
                        <HeaderNotaAlumnos materia={evaluaciones.materia.nombre} />
                        {
                            <TablaNotaAlumnosCuerpo evaluaciones={evaluaciones.alumnos} materia={evaluaciones.materia} mostrarNombre={mostrarNombre} />
                        }
                    </div>
                ))
            }


        </div>
    )
}




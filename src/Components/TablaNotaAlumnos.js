import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const TablaNotaAlumnos = ({ filtro, mostrarNombre }) => {
    const { id } = useParams();
    const [notasAlumnos, setnotasAlumnos] = useState();


    useEffect(() => {
        setnotasAlumnos(filtro);
    }, [id])

    if (!notasAlumnos) return (<div>Cargando...</div>)

    return (
        <div className='mx-auto w-full md:w-10/12'>
            {
                notasAlumnos.map(evaluaciones => (
                    <div className='shadow-lg p-2' >
                        <HeaderNotaAlumnos materia={evaluaciones.materia.nombre} />
                        {

                            <TablaNotaAlumnosCuerpo evaluaciones={evaluaciones.alumno} mostrarNombre={mostrarNombre} />

                        }
                    </div>
                ))
            }


        </div>
    )
}


const HeaderNotaAlumnos = ({ materia }) => {
    return (
        <h1 className='font-bold text-center mt-3  p-3'>{materia}</h1>
    );
}
let sum = 0;
const TablaNotaAlumnosCuerpo = ({ evaluaciones, mostrarNombre }) => {
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full overflow-x-auto">
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        {mostrarNombre && <th>Nombre</th>}
                        <th>Primer Parcial</th>
                        <th>Segundo Parcial</th>
                        <th>Tercer Parcial</th>
                        <th>Promedio</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        console.log(evaluaciones)

                    }
                    {
                        evaluaciones?.map((eva, i) => (
                            <tr className='text-center'>
                                <th>#{i + 1}</th>
                                {mostrarNombre && <td>{eva?.alumnoNombre?.nombre}</td>}
                                {
                                    eva?.evaluaciones?.map(({ nota }) => (
                                        <td>{nota}</td>
                                    ))
                                }
                                <td>{
                                    eva.evaluaciones.length > 0 ?
                                        sum = (eva?.evaluaciones?.map(({ nota }) => nota).reduce((previous, current) => (current) += (previous)) / eva.evaluaciones.length).toFixed(1)
                                        : "No tiene notas"
                                }
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
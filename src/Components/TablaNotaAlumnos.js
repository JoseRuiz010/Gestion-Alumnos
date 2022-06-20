import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { alumnos } from '../Data/DatosAlumnos';

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

                            <TablaNotaAlumnosCuerpo evaluaciones={evaluaciones.alumno} materia={evaluaciones.materia} mostrarNombre={mostrarNombre} />

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
let sum = 0; let bandera = 0;
const TablaNotaAlumnosCuerpo = ({ evaluaciones, materia, mostrarNombre }) => {
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full overflow-x-auto">
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        {mostrarNombre && <th>Nombre</th>}
                        {
                            materia.evaluaciones.map(eva => (
                                <th>{eva.descripcion}</th>
                            ))
                        }

                        <th>Promedio</th>

                    </tr>
                </thead>
                <tbody>
                    <NotasTabla evaluaciones={evaluaciones} materia={materia} mostrarNombre={mostrarNombre} />
                </tbody>
            </table>
        </div>
    );
}

const NotasTabla = ({ evaluaciones, materia, mostrarNombre }) => {

const validarNota=(EvaluacionDeMateria, evaluacion)=>{
    let bandera=false;
    let nota=0;
    for (let j = 0; j < evaluacion.length; j++) {
    
    if(EvaluacionDeMateria===evaluacion[j].evaluacion){
        bandera=true
        nota=evaluacion[j].nota;
    }
    }
    console.log(bandera);
   return <td>{nota}</td>
}
    return (
        <>
            {
                evaluaciones.map((eva, i) => (
                    <tr key={i+Date.now()} className='text-center'>
                        <th>#{i + 1}</th>
                        {mostrarNombre && <td>{eva?.alumnoNombre?.nombre}</td>}
                        {
                         materia.evaluaciones.map(materia=>validarNota(materia,eva.evaluaciones))
                        }
                    <td>{
                        eva.evaluaciones.length > 0 ?
                        sum = (eva?.evaluaciones?.filter(({ nota })=>nota!==0).map(({ nota }) => nota).reduce((previous, current) => (current) += (previous)) / eva.evaluaciones.filter(({ nota })=>nota!==0).length).toFixed(1)
                        : "No tiene notas"
                    }
                </td>
                    </tr>

                ))
            }
        </>
    )
}
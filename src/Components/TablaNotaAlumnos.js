import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const TablaNotaAlumnos = ({filtro}) => {
    const { id } = useParams();
    const [notasAlumnos, setnotasAlumnos] = useState();


    useEffect(() => {  
        setnotasAlumnos(filtro);
        }, [id])
        
        if(!notasAlumnos) return(<div>Cargando...</div>)
    
  return (
    <div>
            {
                notasAlumnos.map(evaluaciones=>(
                    <div>
                        <HeaderNotaAlumnos materia={evaluaciones.materia.nombre}/>
                        {
                            
                                <TablaNotaAlumnosCuerpo evaluaciones={evaluaciones.alumno}/>
                           
                        }
                    </div>
                ))
            }

           
        </div>
  )
}


const HeaderNotaAlumnos=({materia})=>{
    return(
        <h1 className='font-bold text-center mt-5 bg-blue-200 p-3'>{materia}</h1>
    );
}
const TablaNotaAlumnosCuerpo=({evaluaciones})=>{
    return(
        <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
            <thead>
                <tr className='text-center'>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Primer Parcial</th>
                    <th>Segundo Parcial</th>
                    <th>Tercer Parcial</th>
                    
                </tr>
            </thead>
            <tbody>
                 {
                     evaluaciones.map((eva,i)=>(
                <tr className='text-center'>
                <th>{i+1}</th>
                <td>{eva.alumnoNombre.nombre}</td>
                {
                    eva.evaluaciones.map(nota=>(  
                        <td>{nota.nota}</td>
                    ))
                }
                </tr>
                     ))
                 }
             </tbody>
        </table>
    </div>
    );
}
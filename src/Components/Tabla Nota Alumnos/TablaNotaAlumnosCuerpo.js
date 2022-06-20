import React from 'react'
import { NotasTabla } from './NotasTabla';

export const TablaNotaAlumnosCuerpo = ({ evaluaciones, materia, mostrarNombre }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full overflow-x-auto">
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        {mostrarNombre && <th>Nombre</th>}
                        {
                            materia.evaluaciones.map(eva => (
                                <th key={eva.descripcion+Date.now}>{eva.descripcion}</th>
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
 

import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useNavigate, useParams } from "react-router-dom";
import { InputGroup } from '../Components/formularioAlumno/InpurGroup';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { HeaderDatosPersonales } from '../Components/HeaderDatosPersonales';
import { TablaNotaAlumnos } from '../Components/Tabla Nota Alumnos/TablaNotaAlumnos';
import { useFetch } from '../Hooks/useFetch';

import { agregarEvaluacion, getMateriasById, getNotasFilterByMateria } from '../services/CargarData'
 

const AlumnosPorMateria = () => {
    const { id } = useParams();
    const navigate = useNavigate()
   
    const [isVisibleFormEV, setisVisibleFormEV] = useState(false)
    const { data, error, loading } = useFetch(`/materia?_id=${id}`)

    if (!data) return (<div>Cargando...</div>)
    const { profesor } = data

    const onSubmit = (value) => {
        agregarEvaluacion(id, value)
        setisVisibleFormEV(!isVisibleFormEV)
    }

    return (
        <div className='w-full p-2'>
            <HeaderDatosPersonales {...profesor} />
            <div className="flex justify-around md:w-10/12  mx-auto">
                <button className="btn btn-outline btn-info m-3" onClick={() => navigate(`/materias/cargarNotas/${id}`)}>Cargar Notas</button>
                <button className="btn btn-outline btn-info m-3 " onClick={() => setisVisibleFormEV(!isVisibleFormEV)}>Agregar Evaluacion</button>
            </div>
            {isVisibleFormEV && (<div class="w-full md:w-10/12 mb-2 bg-base-100 shadow-sm mx-auto">
                <div class="card-body">
                    <h6 className='font-bold text-lg text-center'>Nueva Evaluacion</h6>
                    <Form
                        validate={values => {
                            const errors = {}
                            if (!values.descripcion) {
                                errors.descripcion = 'Required'
                            }
                            return errors
                        }}
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                            <form className=' md:w-10/12 mx-auto' onSubmit={handleSubmit}>
                                <Field name={"descripcion"}>
                                    {(props) => (
                                        <InputGroup input={props.input} meta={props.meta} textLabel={"Descripcion"} />
                                    )}
                                </Field>
                                <div class="form-control mt-6">
                                    <button type='submit' className='btn btn-success'> Crear </button>
                                </div>

                            </form>)}
                    />
                </div>
            </div>)}
            <TablaNotaAlumnos filtro={getNotasFilterByMateria(id)} mostrarNombre={true} />
        </div>
    )
}

export default AlumnosPorMateria

import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useNavigate, useParams } from "react-router-dom";
import { InputGroup } from '../Components/formularioAlumno/InpurGroup';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { HeaderDatosPersonales } from '../Components/HeaderDatosPersonales';
import { TablaNotaAlumnos } from '../Components/Tabla Nota Alumnos/TablaNotaAlumnos';

import { agregarEvaluacion, getMateriasById, getNotasFilterByMateria } from '../services/CargarData'
const InputGroupNota = ({ input, nombre, meta }) => (
    <div className='form-control'>
        <label className="label">
            <span className="label-text">{nombre}</span>
        </label>
        <input type="text" {...input} placeholder={nombre} className="input input-bordered" />

        {meta.error && meta.touched && <MensajeError mensaje={meta.error} />}
    </div>

)

const AlumnosPorMateria = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [materia, setmateria] = useState()
    const [isVisibleFormEV, setisVisibleFormEV] = useState(false)
    useEffect(() => {
        setmateria(getMateriasById(id))
    }, [id])
    if (!materia) return (<div>Cargando...</div>)
    const { profesores } = materia

    const onSubmit = (value) => {
        agregarEvaluacion(id, value)
        setisVisibleFormEV(!isVisibleFormEV)
    }

    return (
        <div className='w-full p-2'>
            <HeaderDatosPersonales {...profesores[0]} />
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

import React, { useContext, useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useNavigate, useParams } from 'react-router-dom';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { GlobalContext } from '../Context/GlobalContext';
import { useFetch } from '../Hooks/useFetch';
import { actualizarNotas, CargarNotaMateria, getAlumnos, getMateriasById, getNotasFilterByMateria, getNotasFilterByMateriaYEvaluacion } from '../services/CargarData';
import { validarNota } from '../Validaciones/ValidacionesNotas';

export const ScreenCargarNotas = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`/materia?_id=${id}`)

    if (!data) return (<div>Cargando...</div>)

    const { nombre, profesor,
        evaluaciones
    } = data

    return (
        <div className=''>
            <div className="flex flex-row flex-wrap justify-start p-3 md:w-10/12 gap-2 py-5 card bg-base-200 rounded-box w-full mx-auto m-5">
                <div className='mx-auto'>
                    <h1> <span className='font-bold'>Materia:</span> {nombre}</h1>
                </div>
                <div className='mx-auto '>
                    <h1><span className='font-bold'>Profesor: </span>{profesor.nombre + " " + profesor.apellido}</h1>
                </div>
            </div>
            <div className=' md:w-10/12 mx-auto'>
                <Select evaluaciones={evaluaciones} idMateria={id} />
            </div>
        </div>
    )
}

const Select = ({ evaluaciones, idMateria }) => {
    const [idEvaluacion, setidEvaluacion] = useState()

    const onSubmit = async ({ idEvaluacion }) => {
        setidEvaluacion(idEvaluacion);
    }
    return (
        <div className="form-control w-full mx-auto">
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className='mx-auto' onSubmit={handleSubmit}>
                        <Field name='idEvaluacion' >
                            {({ input, meta }) => (
                                <>
                                    <label className="label">
                                        <span className="label-text">Seleccione la Evaluacion </span>
                                    </label>
                                    <select onClick={() => setidEvaluacion(undefined)} {...input} className="select w-52 sm:w-80 select-bordered" >
                                        <option value={0} >Seleccionar...</option>
                                        {
                                            evaluaciones.map(e => (
                                                <option onClick={() => setidEvaluacion(0)} key={e + Date.now() + Math.random()} value={e._id}>{e.descripcion}</option>
                                            ))
                                        }
                                    </select>
                                </>
                            )}
                        </Field>
                        <button type='submit' className="btn btn-success mx-3">Buscar</button>
                    </form>

                )}
            />
            {idEvaluacion && idEvaluacion != 0 && <BuscarEvaluacion idMateria={idMateria} idEvaluacion={idEvaluacion} />}


        </div>
    )
}

const BuscarEvaluacion = ({ idMateria, idEvaluacion }) => {
    const [evaluaciones, setevaluaciones] = useState();

    const { alumnos } = useContext(GlobalContext)

    const { data, error, loading } = useFetch(`/evaluacionAlumno?materia=${idMateria}&evaluacion=${idEvaluacion}`)
    const navigate = useNavigate()
    const onSubmit = (values) => {
        CargarNotaMateria(values, idMateria, idEvaluacion);
        navigate(`/materias/${idMateria}`)
    }
    const onActualizacion = (values) => {
        actualizarNotas(values, idMateria, idEvaluacion);
        navigate(`/materias/${idMateria}`)
    }

    if (!data) return (<div>Cargando...</div>)

    if (data.length < 1)
        return (
            <div className='my-6 w-full mx-auto '>
                {
                    <Form
                        onSubmit={onSubmit}

                        render={({ handleSubmit }) => (
                            <form className='mx-auto' onSubmit={handleSubmit}>
                                {
                                    alumnos.map(a => (
                                        <Field name={a._id} validate={validarNota}>
                                            {({ input, meta }) => (
                                                <InputGroupNota input={input} meta={meta} nombre={a.nombre} />
                                            )}
                                        </Field>
                                    ))
                                }
                                <div className='flex justify-center'>
                                    <button type='submit' className="btn btn-success mx-auto">Cargar</button>
                                </div>
                            </form>)}
                    />
                }

            </div>
        )
    return (
        <div className='my-6 w-full mx-auto '>
            {
                <Form
                    onSubmit={onActualizacion}
                    render={({ handleSubmit }) => (
                        <form className='mx-auto' onSubmit={handleSubmit}>
                            {
                                data[0].alumnos.map(a => (
                                    <Field name={a.alumnoNombre.nombre} validate={validarNota} initialValue={a.evaluaciones[0].nota}>
                                        {(props) => (
                                            <InputGroupNota input={props.input} meta={props.meta} nombre={a.alumnoNombre.nombre} />
                                        )}
                                    </Field>
                                ))
                            }
                            <div className='flex justify-center'>
                                <button type='submit' className="btn btn-success mx-auto">Actualizar</button>
                            </div>
                        </form>)}
                />
            }

        </div>
    )
}




export const InputGroupNota = ({ input, nombre, meta }) => (
    <div className='form-control ml-2 mb-3 mx-auto '>
        <label className="input-group justify-center mx-auto">
            <span className='w-32  sm:w-1/4'>{nombre}</span>
            <input type="text" {...input} placeholder="Nota" className="input input-bordered " />
        </label>
        {meta.error && meta.touched && <MensajeError mensaje={meta.error} />}
    </div>

)

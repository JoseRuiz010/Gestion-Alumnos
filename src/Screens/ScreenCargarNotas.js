import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useNavigate, useParams } from 'react-router-dom';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { CargarNotaMateria, getAlumnos, getMateriasById, getNotasFilterByMateria, getNotasFilterByMateriaYEvaluacion } from '../services/CargarData';
import { validarNota } from '../Validaciones/ValidacionesNotas';

export const ScreenCargarNotas = () => {
    const { id } = useParams();
    const [state, setmateria] = useState();

    useEffect(() => {
        setmateria(getMateriasById(id))
    }, [id])
    if (!state) return (<div>Cargando...</div>)
    const { nombre, profesores,
        evaluaciones
    } = state

    return (
        <div className=''>
            {/* <div className="grid mb-3 grid-cols-2 w-full   md:grid-cols-3 p-3 md:w-10/12 gap-2 card bg-base-200 rounded-box"> */}
            <div className="flex flex-row flex-wrap justify-start p-3 md:w-10/12 gap-2 py-5 card bg-base-200 rounded-box w-full mx-auto m-5">
                <div className='mx-auto'>
                    <h1> <span className='font-bold'>Materia:</span> {nombre}</h1>
                </div>
                <div className='mx-auto '>
                    <h1><span className='font-bold'>Profesor: </span>{profesores[0].nombre + " " + profesores[0].apellido}</h1>
                </div>
            </div>
            <div className=' md:w-10/12 mx-auto'>
                <Select evaluaciones={evaluaciones} idMateria={state.id} />
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
        <div class="form-control w-full mx-auto">
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className='mx-auto' onSubmit={handleSubmit}>
                        <Field name='idEvaluacion' >
                            {({ input, meta }) => (
                                <>
                                    <label class="label">
                                        <span class="label-text">Seleccione la Evaluacion </span>
                                    </label>
                                    <select onClick={() => setidEvaluacion(undefined)} {...input} class="select w-52 sm:w-80 select-bordered" >
                                        <option value={0} >Seleccionar...</option>
                                        {
                                            evaluaciones.map(e => (
                                                <option onClick={() => setidEvaluacion(0)} key={e + Date.now() + Math.random()} value={e.id}>{e.descripcion}</option>
                                            ))
                                        }
                                    </select>
                                </>
                            )}
                        </Field>
                        <button type='submit' class="btn btn-success mx-3">Buscar</button>
                    </form>

                )}
            />
            {idEvaluacion && idEvaluacion != 0 && <BuscarEvaluacion idMateria={idMateria} idEvaluacion={idEvaluacion} />}


        </div>
    )
}

const BuscarEvaluacion = ({ idMateria, idEvaluacion }) => {
    const [evaluaciones, setevaluaciones] = useState();
    const [alumnos, setAlumnos] = useState();
    const [data, setdata] = useState();
    const navigate = useNavigate()
    const onSubmit = (values) => {
        CargarNotaMateria(values, idMateria, idEvaluacion);
        // alert(JSON.stringify({ ...values, idMateria }));
        navigate(`/materias/${idMateria}`)
    }

    useEffect(() => {
        setevaluaciones(getNotasFilterByMateriaYEvaluacion(idMateria, idEvaluacion));
        setAlumnos(getAlumnos());
    }, [idMateria, idEvaluacion])

    if (!evaluaciones) return (<div>Cargando...</div>)
    return (
        <div className='my-6 w-full mx-auto '>
            {/* Buscando evaluacion {idMateria} {idEvaluacion} */}
            {
                <Form
                    onSubmit={onSubmit}

                    render={({ handleSubmit }) => (
                        <form className='mx-auto' onSubmit={handleSubmit}>
                            {
                                alumnos.map(a => (
                                    <Field name={a.id} validate={validarNota}>
                                        {({ input, meta }) => (
                                            <InputGroupNota input={input} meta={meta} nombre={a.nombre} />
                                        )}
                                    </Field>
                                ))
                            }
                            <div className='flex justify-center'>
                                <button type='submit' class="btn btn-success mx-auto">Cargar</button>
                            </div>
                        </form>)}
                />
            }

        </div>
    )

}
const InputGroupNota = ({ input, nombre, meta }) => (
    <div className='form-control ml-2 mb-3 mx-auto '>
        <label class="input-group justify-center mx-auto">
            <span className='w-32  sm:w-1/4'>{nombre}</span>
            <input type="text"  {...input} placeholder="Nota" class="input input-bordered " />
        </label>
        {meta.error && meta.touched && <MensajeError mensaje={meta.error} />}
    </div>

)

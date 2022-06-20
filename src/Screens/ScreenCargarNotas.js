import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import { getMateriasById, getNotasFilterByMateria } from '../services/CargarData';

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

const Select = ({ evaluaciones,idMateria }) => {
    const [idEvaluacion, setidEvaluacion] = useState()

    const onSubmit = async ({idEvaluacion}) => {
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
                                <select {...input} class="select w-52 sm:w-80 select-bordered" >
                                    <option selected>Seleccionar...</option>
                                    {
                                        evaluaciones.map(e => (
                                            <option key={e} value={e.id}>{e.descripcion}</option>
                                            ))
                                        }
                                </select>
                                        </>
                            )}
                        </Field>
                        <button type='submit' class="btn btn-success mx-3">Success</button>
                    </form>

                )}
            />
           {idEvaluacion&& <BuscarEvaluacion idMateria={idMateria} idEvaluacion={idEvaluacion}/>}


        </div>
    )
}

const BuscarEvaluacion = ({idMateria,idEvaluacion}) => {
    const [evaluaciones, setevaluaciones] = useState()
    const [data, setdata] = useState();
    useEffect(() => {
        setevaluaciones(getNotasFilterByMateria(idMateria)[0].alumno)    
    }, [idMateria,idEvaluacion])
    
    if(!evaluaciones) return (<div>Cargando...</div>)
    setdata()
   
    return (
        <div className='my-6 w-full mx-auto bg-slate-500'>
            Buscando evaluacion {idMateria} {idEvaluacion}
        </div>
    )
}

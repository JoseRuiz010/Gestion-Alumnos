import React, { useState } from 'react'
import { useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { GlobalContext } from '../Context/GlobalContext';
import { ValidarLogin } from '../services/CargarData';


const ScreenLogin = () => {
    const [loading, setloading] = useState(false)
    const [error, setError] = useState("")
    const { onLogin } = useContext(GlobalContext);
    const onSubmit = (value) => {
        setloading(true)
        //console.log(value);
        setTimeout(() => {
            console.log("SUBMIT");
            const usuarioLogueado = ValidarLogin(value)
            if (!usuarioLogueado) {
                setError("Las credenciales ingresadas son invalidas")
            } else {
                setError("");
                onLogin(usuarioLogueado)
            }
            setloading(false)
        }, 1000);
    }
    return (
        <div className='flex flex-col   sm:p-10 mt-28  w-11/12 mx-auto shadow-2xl max-w-xl     '>
            <div className='  h-44 w-44 flex m-auto justify-center align-middle rounded-full mb-4'>
                <img className='h-40 w-40 cursor-pointer my-auto' src='https://cdn-icons-png.flaticon.com/512/855/855601.png' alt='Logo' />
            </div>

            <h6 className='text-center text-2xl font-bold'>Iniciar Sesion</h6>
            {error && <MensajeError mensaje={error} />}
            <Form
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }

                    return errors
                }}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className='card-body' onSubmit={handleSubmit}>
                        <Field name={"username"}>
                            {(props) => (
                                <InputGroupNota input={props.input} meta={props.meta} nombre={"User"} />

                            )}
                        </Field>
                        <Field name={"password"}>
                            {(props) => (
                                <InputGroupNota input={props.input} meta={props.meta} nombre={"Password"} />
                            )}
                        </Field>
                        <div className="form-control mt-6">
                            <button type='submit' className={`btn btn-primary ${loading ? "loading" : ""}`}>Login</button>
                        </div>
                    </form>)}
            />
        </div>
    )
}

const InputGroupNota = ({ input, nombre, meta }) => (
    <div className='form-control'>
        <label className="label">
            <span className="label-text">{nombre}</span>
        </label>
        <input type="text" {...input} placeholder={nombre} className="input input-bordered" />

        {meta.error && meta.touched && <MensajeError mensaje={meta.error} />}
    </div>

)


export default ScreenLogin
import React from 'react'
import { Form, Field } from 'react-final-form'
const FormularioNuevoAlumno = () => {

    const onSubmit = (values) => {
        console.log('Hola');
        alert(JSON.stringify(values, 0, 2))
    }

    const validacion = (values) => {
        const errors = {}

        if (!values.nombre) {
            errors.nombre = 'El campo Nombre es requerido'
        }
        if (!values.apellido) {
            errors.apellido = 'El campo Apellido es requerido'
        }
        if (!values.legajo) {
            errors.legajo = 'El campo Legajo es requerido'
        } else {

            if (values.legajo.length < 4) {
                errors.legajo = 'El campo debe tener mas de 6 digitos'
            }
        }
        if (!values.telefono) {
            errors.telefono = 'El campo Telefono es requerido'
        } else {
            if (isNaN(values.telefono)) {
                errors.telefono = 'El campo Telefono debe ser numerico'
            }
        }
        if (!values.email) {
            errors.email = 'El campo Email es requerido'
        }
        if (!values.direccion) {
            errors.direccion = 'El campo Email es requerido'
        }


        return errors
    }

    return (
        <div className='shadow-2xl w-11/12 mx-auto p-2 max-w-xl rounded-sm'>
            <h1 className='text-center font-bold text-lg m-5 text-blue-500'>Nuevo Alumno</h1>
            <Form
                onSubmit={onSubmit}
                validate={validacion}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="nombre" >
                            {({ input, meta }) => (
                                <InputGroup input={input} meta={meta} textLabel={"Nombre"} />
                            )}
                        </Field>
                        <Field name="apellido" >
                            {({ input, meta }) => (
                                <InputGroup input={input} meta={meta} textLabel={"Apellido"} />
                            )}
                        </Field>
                        <Field name="legajo">
                            {({ input, meta }) => (
                                <InputGroup input={input} meta={meta} textLabel={"Legajo"} />
                            )}
                        </Field>
                        <Field name="telefono">
                            {({ input, meta }) => (
                                <InputGroup input={input} meta={meta} textLabel={"Telefono"} />
                            )}
                        </Field>
                        <Field name="email" >
                            {({ input, meta }) => (
                                <InputGroup input={input} meta={meta} textLabel={"Email"} />
                            )}
                        </Field>
                        <Field name="direccion" >
                            {({ input, meta }) => (
                                <InputGroup input={input} meta={meta} textLabel={"Direccion"} />
                            )}
                        </Field>

                        <div className="buttons flex justify-around align-middle mx-auto w-10/12">
                            <button className="btn btn-info" type="submit" disabled={submitting} >Crear</button>
                            <button className="btn btn-warning"
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >Limpiar</button>
                        </div>
                    </form>
                )}
            />
        </div>

    )
}
const MensajeError = ({ mensaje }) => <span className='block text-red-600 ml-4'>{mensaje}</span>

const InputGroup = ({ input, textLabel, meta }) => (
    <div className='form-control ml-2 mb-3'>
        <label className="input-group ">
            <span className='w-32 sm:w-1/4' >{textLabel}</span>
            <input type="text" {...input} placeholder={textLabel} className="input input-info input-sm w-full" />
        </label>
        {meta.error && meta.touched && <MensajeError mensaje={meta.error} />}
    </div>

)
export default FormularioNuevoAlumno
import React, { useContext } from 'react'
import { Form, Field } from 'react-final-form'
import { GlobalContext } from '../../Context/GlobalContext'
import { uid } from 'uid';
import { validacion } from '../../Validaciones/ValidacionNuevoAlumno';
import { InputGroup } from './InpurGroup';

const FormularioNuevoAlumno = () => {
    const { changeStateNewAlumno, agregarAlumno } = useContext(GlobalContext)

    const onSubmit = (values) => {
        agregarAlumno({ id: uid(9), ...values });
        changeStateNewAlumno();
    }

    return (
        <div className='shadow-sm w-11/12 mx-auto p-2 max-w-xl rounded-sm mb-4'>
            <h1 className='font-bold text-lg text-center mb-4'>Nuevo Alumno</h1>
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
                            <button className="btn btn-success" type="submit" disabled={submitting} >Crear</button>
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

export default FormularioNuevoAlumno
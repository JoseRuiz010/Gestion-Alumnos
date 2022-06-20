export  const validacion = (values) => {
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

        if (values.legajo.length < 5) {
            errors.legajo = 'El campo debe tener mas de 4 digitos'
        }
        if (isNaN(values.legajo)) {
            errors.legajo = 'El campo debe ser numerico'
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
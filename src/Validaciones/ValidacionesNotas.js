export const validarNota = (values) => {
    if (!values) {
        return "El campo nota no puede ser vacio"
    } else {
        if (isNaN(values)) {
            return "El valor debe ser un numero"
        }
        if ((values) < 1 || values > 10) {
            return "Debe ser un numero entre 0 y 10"
        }
    }
}
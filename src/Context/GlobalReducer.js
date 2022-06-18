export const GlobalReducer = (globalState, action) => {
    switch (action.type) {
        case "changeStateNewAlumnos":
            return {
                ...globalState,
                stateNewAlumno: !globalState.stateNewAlumno
            }
        case "changeIsOpenNavbar":
            return {
                ...globalState,
                isOpenNavbar: !globalState.isOpenNavbar
            }
        case "DatosGenerados":
            return {
                ...globalState,
                generarDatos: false,
            }

        default:
            return globalState;
    }
}
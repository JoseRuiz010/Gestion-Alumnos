import React from 'react'

export const HeaderDatosPersonales = ({ nombre, apellido, legajo, email }) => {
    return (
        <>
            {/* <div className="grid mb-3 grid-cols-2 w-full mx-auto md:grid-cols-3 p-3 md:w-10/12 gap-2 card bg-base-200 rounded-box"> */}
            <div className="flex flex-row flex-wrap justify-center mx-auto  p-3 md:w-10/12 gap-2 py-5 card bg-base-200 rounded-box">

                <div className='mx-auto '>
                    <h1><span className='font-bold'>Nombre: </span>{nombre + " " + apellido}</h1>
                </div>
                <div className='mx-auto'>
                    <h1> <span className='font-bold'>Legajo:</span> {legajo}</h1>
                </div>
                <div className='mx-auto'>
                    <h1><span className='font-bold'>Email:</span> {email}</h1>
                </div>
            </div>
            <hr />
        </>

    )
}

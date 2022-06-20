import React from 'react'
import { MensajeError } from './MensajeError'

export 
const InputGroup = ({ input, textLabel, meta }) => (
    <div className='form-control ml-2 mb-3'>
        <label className="input-group ">
            <span className='w-32 sm:w-1/4' >{textLabel}</span>
            <input type="text" {...input} placeholder={textLabel} className="input input-info input-sm w-full" />
        </label>
        {meta.error && meta.touched && <MensajeError mensaje={meta.error} />}
    </div>

)

import React from 'react'

export  const ValidarNota=(EvaluacionDeMateria, evaluacion)=>{
 
    let nota=0;
    for (let j = 0; j < evaluacion.length; j++) {
    
    if(EvaluacionDeMateria===evaluacion[j].evaluacion){
        
        nota=evaluacion[j].nota;
    }
    }
     
   return <td key={nota+Date.now()+Math.random()}>{nota}</td>
}

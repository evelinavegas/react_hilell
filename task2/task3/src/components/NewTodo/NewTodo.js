import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Newtodo ({arr, set}) {
    const[value, setValue] =useState('')
    function addTodo(){
        if(value.length > 5) {
            set(
                [...arr, {
                    id: uuidv4(),
                    title: value,
                    checked: false
                }]    
            )
            setValue('')
        }
    }
    return(
        <div className="form">
            <input placeholder="New todo" value={value} onChange={(evt) => setValue(evt.target.value)}/>
            <button onClick={() => addTodo()}>Add</button>
        </div>    
    )
}
export default Newtodo
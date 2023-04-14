import { useState } from "react"
import Header from "../Header/Header"
import Todo from "../Todo/Todo"
import Newtodo from "../NewTodo/NewTodo"

function Wrap() {
    const [todo, setTodo] = useState([
        {id:1, title: '1 todo', checked: false},
        {id:2, title: '2 todo', checked: false},
        {id:3, title: '3 todo', checked: false},
    ])
    return (
       <div className="Wrap">
        <Header/>
        <Todo arr ={todo} set={setTodo}/>
        <Newtodo arr={todo} set={setTodo}/>
       </div> 
    )
}
export default Wrap
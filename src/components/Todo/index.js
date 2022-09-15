import Form from "./Form";
import Header from "./Header";
import List from "./List";
import { useState, useEffect } from "react";

export default function Todo(){

    // { title : "", desc :"" }
    const [todos,setTodos] = useState([]);


    useEffect(()=> {

        // console.log(todos)
        
    },[todos]);

    return(

        <div className="container-fluid"> 

<Header /> 
<List todos = {todos}  setTodosState = {setTodos}/>
<Form todos = {todos} setTodosState = {setTodos}/>

    </div>
    )
}
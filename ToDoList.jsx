import React, { createRef, useState } from "react";

const ToDoList = () => {
    const [todoList, setTodo] = useState([]);

    const inputRef = createRef()
    const addTodo = () => {
        setTodo([...todoList, inputRef.current.value])
    }
    const deleteTodo = (index) => {
        setTodo(todoList.filter((tasks, taskIndex) => taskIndex !== index));
    }
    console.log(todoList)
    return (    
        <>  
            <h1>To Do List</h1>
            <input ref={inputRef}></input>
            <button onClick={addTodo}>Añadir Tarea</button>
            
            {todoList && (<li>
                {todoList.map((task, index) => {
                    return (
                    <div key={index}>
                        <lo>
                            {task}
                        </lo>
                        <button onClick={() =>deleteTodo(index)}>Eliminar</button>
                    </div>)
                })}
            </li>)}
            
        </>
    )
}

export default ToDoList
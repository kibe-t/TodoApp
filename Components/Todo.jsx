import React, { useEffect, useRef, useState } from 'react'
import todo from "../assets/bag-plus-fill.svg"
import Todoitems from './Todoitems'

const Todo = () => {

    const [todolist, settodolist]=useState(localStorage.getItem("todos")?
    JSON.parse(localStorage.getItem("todos")):[])
    const inputRef= useRef()

    const add =()=>{
        const inputText=inputRef.current.value.trim();

        if(inputText===""){
            return null;
        }
        const newTodo={
            Id:Date.now(),
            text:inputText,
            isComplete:false,
        }
        settodolist((prev)=>[...prev,newTodo]);
        inputRef.current.value="";
        
    }

    const deleteTodo=(Id)=>{
        settodolist((prvTodos)=>{
           return prvTodos.filter((todo)=> todo.Id !==Id)
        })
    };

    const toggle =(Id)=>{
        settodolist((prevtodos)=>{
            return prevtodos.map((todo)=>{
                if(todo.Id===Id){
                    return{...todo, isComplete:!todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todolist))
    },[todolist])
   
  return (
    <div className='bg-white place-self-center w-11/12
     max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

    <div className="flex items-center mt-7 gap-2">
        <img src={todo} alt="" />
        <h1 className='text-3xl font-semibold'>Todo List</h1>
    </div>
    <div className='flex items-center my-7 bg-gray-200  rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
        placeholder:text-slate-600' type="text" placeholder='Add your Task' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white
        text-lg font-medium cursor-pointer'>ADD +</button>
    </div>

    <div>
    {todolist.map((item,index)=>{
        return <Todoitems key={index} text={item.text} Id={item.Id}
         isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>

    })}
      

    </div>



    </div>
  )
}

export default Todo

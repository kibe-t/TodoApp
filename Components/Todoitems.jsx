import React from 'react'
import tick from "../assets/check2-circle.svg"
import nottick from "../assets/0-circle.svg"
import deleteicon from "../assets/trash.svg"


const Todoitems = ({text,Id,isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>toggle(Id)} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ?tick:nottick} alt="" />
            <p className={`text-slate-700 ml-7 text-[17px]
             decoration-slate-500 ${isComplete?"line-through":"" }`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(Id)}} src={deleteicon} alt="" className='w-3.5 cursor-pointer' />

    </div>
  )
}

export default Todoitems
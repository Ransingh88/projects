import React, { useState } from 'react'
import './Todo.css'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../Redux/actions/actions'

const Todo = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todoReducer.data)
    console.log(data);
    

    const handleAdd = () => {
        dispatch(addTodo(value))
    }

    const handleDel = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleDeleteAll = () => {
        dispatch(removeTodo())
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Add item" value={value} onChange={ (e)=>(setValue(e.target.value))}/>
                <button onClick={handleAdd}>add</button>
            </div>
            <button onClick={handleDeleteAll}>Delete All</button>
            <div>
                {data.map(({data,id}) => {
                    return (
                        <div key={id}>
                        <p >{data}</p>
                        <button onClick={()=>handleDel(id)}>del</button>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export  {Todo}

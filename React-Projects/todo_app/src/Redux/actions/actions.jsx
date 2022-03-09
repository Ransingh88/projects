import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from '../actionTypes/actionTypes'
import {v4 as uuid} from 'uuid'

const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            data
        }
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload:id
    }
}

const removeTodo = () => {
    return {
        type: REMOVE_TODO
    }
}

export { addTodo, deleteTodo, removeTodo }
import {ADD_TODO,DELETE_TODO,REMOVE_TODO} from '../actionTypes/actionTypes'


const initState = {
    data:[]
}

const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO: return {
            ...state,
            data: [...state.data,
                {
                    id: payload.id,
                    data:payload.data
            }
            ]
        }
        case DELETE_TODO: {

            const filterdata = state.data.filter((item) => ( item.id !== payload ))
            return {
                ...state,
                data: filterdata
                
            }
        }
            case REMOVE_TODO: {

            return {
                ...state,
                data: []
                
            }
        }
            
        

        default: return state
    }
    
}

export {todoReducer}
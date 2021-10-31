import { SET_PRODUCTS } from '../actionTypes/actionTypes'

const init = {
    products: [ ]
}

const productReducer = (state = init,{type,payload}) => {
    switch (type) {
        case SET_PRODUCTS:
           return {...state,products:payload}
    
        default:
            return state
    }
}

export {productReducer}
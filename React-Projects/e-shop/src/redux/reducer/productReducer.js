import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from '../actionTypes/actionTypes'

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

const selectedProductReducer = (state = {},{type,payload}) => {
    switch (type) {
        case SELECTED_PRODUCT:
            return { ...state, ...payload };
        
        case REMOVE_SELECTED_PRODUCT:
            return {}
    
        default:
            return state
    }
}

export {productReducer,selectedProductReducer}
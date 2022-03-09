import {combineReducers} from 'redux'
import {productReducer,selectedProductReducer} from './productReducer'

const reducers = combineReducers({
    allProduct: productReducer,
    selectedProduct: selectedProductReducer,
})


export {reducers}
import { combineReducers, createStore } from 'redux'
import { todoReducer } from '../reducer/reducer'

const rootReducer = combineReducers({
    todoReducer

}
)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {store}
import { createStore, combineReducers } from 'redux'
import { reducer } from 'redux-form'

const rootReducer=combineReducers({
    reducer
});
const store= createStore(rootReducer)
 
export default store;
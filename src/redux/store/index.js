import { createStore, combineReducers } from 'redux'
import { reducer } from 'redux-form'
import dataReducer from '../reducer/dataReducer'

const rootReducer = combineReducers({
    reducer,
    dataReducer
});
const store = createStore(rootReducer)

export default store;
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dataReducer from '../reducer/dataReducer'

const rootReducer = combineReducers({
    form: formReducer
});
const store = createStore(rootReducer)

export default store;
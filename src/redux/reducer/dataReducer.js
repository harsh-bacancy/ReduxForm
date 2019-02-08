import { SUBMIT_CLICK } from './../action/actionTypes'


export default dataReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_CLICK:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
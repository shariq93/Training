import { INC_COUNTER } from "../actions/Actions";


let initialState = {
    count: 10,
    username: '',
    password: ''
}



const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                count: action.payload
            }
            break;

        default:
            return {...state}

    }


}

export default reducer
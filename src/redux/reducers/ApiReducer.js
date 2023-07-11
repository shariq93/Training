import { INC_COUNTER } from "../actions/Actions";


let initialState = {
    products:[]
}



const ApiReducer = (state = initialState, action) => {

    switch (action.type) {
        case "PRODUCT_LIST":
            return {
                ...state,
                products: action.payload
            }
            break;

        default:
            return {...state}

    }


}

export default ApiReducer
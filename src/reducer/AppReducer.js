import { CHANGE_COUNTER } from "../actions/AppActions";

const initialState = {
    count: 0,
};




const AppReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                count: Number(action.payload)*5,
               
            };
        default:
            return state;
    }
}
export default AppReducer;
import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/AppReducer';
import ApiReducer from '../reducers/ApiReducer';


const rootReducer = combineReducers(
    {
        app: reducer,
        api: ApiReducer
    }
);
export const configureStore = () => {
    return createStore(rootReducer);
}
